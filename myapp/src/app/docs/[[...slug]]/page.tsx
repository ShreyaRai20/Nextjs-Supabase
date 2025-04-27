// Dynamic - apt for documentation sites
// [slug]
// [[slug]] - becomes optional also added last return statement
export default async function Docs({
    params,}:
    {params:Promise<{slug: string[]}>;
}){
    const { slug } = await params;
    if (slug?.length === 2){
        return(
            <h1 className="text-white">Docs! feature: {slug[0]}, concept: {slug[1]}</h1>
        )
    } else if (slug?.length === 1){
        return(
            <h1 className="text-white">Docs! feature: {slug[0]}</h1>
        )
    }
    return (<h1 className="text-white"> Docs!</h1>)
}

