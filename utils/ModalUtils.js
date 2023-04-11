/**
 * use this to queue a display model from inside anything, make sure it executes ONCE and is not part of the render function of a component
 * @name queueDisplayModal
 * @example queueDisplayModal({yolo:1})
 */

import React from 'react'

const modalStack = []
const listeners = new Set()

export function queueDisplayModal(config) {
    modalStack.push(config)
    listeners.forEach((listener) => listener())
}

export function destroyAllModals(config) {
    while (modalStack.length) {
        modalStack.pop()
    }
    console.log('stack is', modalStack)
    listeners.forEach((listener) => listener())
}

export function useModal() {
    const [stack, setStack] = React.useState(...modalStack)
    const [isOpen, setOpen] = React.useState(false)

    React.useEffect(() => {
        const listener = () => {
            if (modalStack && modalStack.length) setOpen(true)
            setStack(modalStack.slice(0))
        }
        listeners.add(listener)
        return () => listeners.delete(listener)
    }, [])

    function stackPop() {
        modalStack.pop()
        listeners.forEach((listener) => listener())
    }
    return [stack, stackPop, isOpen, setOpen]
}
