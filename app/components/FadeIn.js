'use client';

import {createContext, useContext} from 'react'
import {motion, useReducedMotion} from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const defaultViewport = {once: true, margin: '0px 0px -200px'}

export function FadeIn({viewportMargin, ...props}) {
    let shouldReduceMotion = useReducedMotion()
    let isInStaggerGroup = useContext(FadeInStaggerContext)
    const viewport = viewportMargin ? {...defaultViewport, margin: viewportMargin} : defaultViewport

    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: shouldReduceMotion ? 0 : 24},
                visible: {opacity: 1, y: 0},
            }}
            transition={{duration: 0.5}}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport,
                })}
            {...props}
        />
    )
}

export function FadeInStagger({faster = false, ...props}) {
    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                transition={{staggerChildren: faster ? 0.12 : 0.2}}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    )
}

