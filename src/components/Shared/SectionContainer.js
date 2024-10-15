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
    marginT, // Accept marginT as a prop
    marginB,
    style = { overflowY: "auto", minHeight: "60vh", marginTop: "3rem" },
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
            style={{
                ...style,
                marginTop: marginT || style.marginTop, // Set marginTop only if marginT is provided
                marginBottom: marginB || style.marginBottom,
            }}
        >
            {children}
        </motion.div>
    );
};
export default SectionContainer;
