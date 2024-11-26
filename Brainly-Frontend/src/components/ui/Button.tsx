import { ReactElement } from "react";

interface ButtonInterface {
    title: string;
    size: "lg" | "sm" | "md";
     startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
    "tertiary": "bg-purple-200 text-purple-600",
    "danger": "bg-red-600 text-white",
    "success": "bg-green-600 text-white",
    "warning": "bg-yellow-600 text-white",
    "info": "bg-blue-600 text-white",
    "light": "bg-gray-200 text-gray-800",   
}
 
export function Button(props: ButtonInterface) {

    return <button className={sizeStyles[props.size] + " " + variantStyles[props.variant]}>
        <div className="flex">
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.title}
            </div>
            {props.endIcon}
        </div>
    </button>
}