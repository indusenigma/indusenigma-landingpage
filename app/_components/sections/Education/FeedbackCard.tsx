import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Img from "../../atom/img";

interface FeedbackCardProps {
    index: number;
    branch: string;
    marks: string;
    name: string;
    degree: string;
    year: string;
    image: any;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
    index,
    branch,
    marks,
    name,
    degree,
    year,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="Box2 p-5 rounded-3xl xs:w-[320px] w-full"
    >
        <div className="mt-7 flex flex-col justify-between items-center gap-1">
            <Img src={image} alt={`feedback_by-${name}`} width={80} height={80} />
            <div className="mt-3 flex-1 flex flex-col">
                <p className="text-center text-white font-medium text-[16px]">
                    <span className="text-center blue-text-gradient">{name}</span>
                </p>
                <p className="text-center mt-1 text-secondary text-[12px]">{year}</p>
            </div>
        </div>
        <p className="text-white font-black text-[48px]">{'"'}</p>
        <div className="mt-1">
            <p className="text-center text-white tracking-wider text-[18px]">
                {degree}
            </p>
            <p className="mt-3 text-center text-pink-500">{branch}</p>
            <p className="mt-3 text-center text-green-500">{marks}</p>
        </div>
    </motion.div>
);