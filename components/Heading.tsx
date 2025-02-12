export default function Heading({title, addedClassName}:{title:string, addedClassName?: string}) {
    return (
        <div className={`flex flex-col items-center justify-center bg-background mt-10`}>
            <h1 className={`text-3xl md:text-5xl ${addedClassName}`}>{title}</h1>
        </div>
    );
}
