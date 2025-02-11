import { USER_FALLBACK_ICON } from "@/lib/image";

const onImageError = (e) => {
    e.target.src = USER_FALLBACK_ICON;
}

export { onImageError }