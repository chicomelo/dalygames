interface LabelProps{
    children: React.ReactNode;
}

export function Label({ children }: LabelProps) {
    return(
        <div className="flex-grow sm:flex-grow-0 text-center bg-slate-100 px-6 py-1 rounded-full text-sm font-medium text-black">
            {children}
        </div>
    )
}