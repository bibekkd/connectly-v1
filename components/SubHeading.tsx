export default function SubHeading({title, addedClassName}:{title:string, addedClassName?: string}) {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-2xl font-semibold text-left px-10 md:px-20 md:mt-10">
                {title}
            </h2>
          </div>
    );
}