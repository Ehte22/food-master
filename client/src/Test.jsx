import { motion } from 'framer-motion'
import img from "../src/img/hero.png"

const Test = () => {
    return (
        <div style={{ overflow: "hidden" }}>

            <motion.div
                initial={{ scale: 1, rotate: 0, position: "absolute", display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center" }}
                animate={{
                    scale: [1, 2, 2, 1], // Scale up and then back down
                    rotate: [0, 0, 360, 0] // Rotate and then back to 0
                }}
                transition={{
                    duration: 3, // Total duration of the animation
                    times: [0, 0.33, 0.66, 1], // Timing for each stage
                    ease: "easeInOut" // Easing function
                }}
                style={{
                    position: "static", height: "auto", width: "auto",

                    display: 'inline-block',
                    overflow: 'hidden',

                }}
            >
                <img src={img} alt="Animated Image" style={{ width: '150px', height: 'auto' }} />
            </motion.div>

        </div>
    )
}

export default Test