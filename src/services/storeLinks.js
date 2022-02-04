export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves  = JSON.parse(myLinks) || [];

    return linksSaves;
}


export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key);

    const hasLink = linkStored.some( link => link.id === newLink.id)
    
    if(hasLink){
        console.log("Esse link já existe")
        return;
    }

    linkStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linkStored));
    console.log("Link Salvo com sucesso")
}


export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtarlink', JSON.stringify(myLinks));
    console.log("Deletado!")
    return myLinks;
}
