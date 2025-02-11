import { BLANK_STAR_ICON, FILL_STAR_ICON } from "@/lib/image";

const ReviewStar = ({ review }) => {
    return (
        <div className="flex gap-0.5 items-center">

            {
                Array.from({ length: Math.floor(review) }).map((_, index) => (
                    <img key={index} className="w-5 h-5" src={FILL_STAR_ICON} alt="" />
                ))
            }
            {
                Array.from({ length: 5 - Math.floor(review) }).map((_, index) => (
                    <img key={index} className="w-5 h-5" src={BLANK_STAR_ICON} alt="" />
                ))
            }
        </div>
    )
}


export default ReviewStar;