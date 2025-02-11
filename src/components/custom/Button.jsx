import { cn } from "@/lib/utils";
import { Button as ScnButton } from "../ui/button";


const Button = ({ className, ...other }) => {
    return (
        <ScnButton className={cn('w-full text-base sm:text-lg rounded-[10px] bg-main text-white hover:bg-main  h-12 md:h-14', className)}  {...other} />
    )
}

export default Button;
