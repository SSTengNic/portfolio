// SectionContainer.js
import { motion } from "framer-motion";

const SectionContainer = ({
    id,
    refProp,
    backgroundColor,
    boxShadow = "xl",
    p = 4,
    borderRadius = "md",
    width = "100%",

    initial = "hidden",
    animate,
    variants,
    style = { overflowY: "auto" },
    children,
}) => {
    return (
        <motion.div
            id={id}
            ref={refProp}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            p={p}
            borderRadius={borderRadius}
            width={width}
            initial={initial}
            animate={animate}
            variants={variants}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default SectionContainer;
