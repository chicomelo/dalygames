import { ReactNode } from "react";

export function Container({ 
    children,
    className,
}: { 
    children: ReactNode, 
    className?: any
}){
    return(
        <div className={`max-w-6xl mx-auto px-2 ${className}`}>
            {children}
        </div>
    )
}