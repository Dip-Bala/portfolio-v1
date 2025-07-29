import { motion } from "framer-motion";
import Icon from "../ui/icons/Icon";

export function Skills() {
    return (
        <motion.div
            id="about"
            className="p-10 text-lg leading-8 max-w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-20 border border-offwhite/20 p-6">
                <h1 className="text-[100px] py-10 text-offwhite text-roboto font-bold font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-lime  border-b border-offwhite/20">
                    Skills
                </h1>
                <div className="flex gap-4">
                    <div className="flex ">
                        <h2>Languages</h2>
                        <div className="flex gap-2">
                            <Icon name="java" label="java" size={14} />
                            <Icon name="js" label="javascript" size={14} />
                            <Icon name="typescript" label="typescript" size={14} />
                        </div>
                    </div>
                    <div>
                        <h2>Web</h2>
                        <div>
                            <Icon name="react" label="React.js" size={14} />
                            <Icon name="html5" label="html5" size={14} />
                            <Icon name="css3" label="css3" size={14} />
                            <Icon name="tailwindcss" label="tailwindcss" size={14} />
                            {/* <Icon name="react" label="React.js" size={14} />
                            <Icon name="react" label="React.js" size={14} /> */}
                        </div>
                    </div>
                    <div>
                        <h2>Deployment</h2>
                        <div>
                            <Icon name="vercel" label="Vercel" size={14} />
                            <Icon name="render" label="Render" size={14} />
                            <Icon name="ec2" label="EC2" size={14} />
                        </div>
                    </div>
                    <div>
                        <h2>Tools</h2>
                        <div>
                            <Icon name="github" label="github" size={14} />
                            <Icon name="git" label="git" size={14} />
                            <Icon name="postman" label="postman" size={14} />
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </motion.div>
    )
}