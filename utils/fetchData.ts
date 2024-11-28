

export default async function fetchData(url : string) {
    try{
        const res = await fetch(url)
        if (!res.ok) throw new Error("Falid to fetch data")
            return await res.json()

    } catch(error){
        console.error(error);
    }
  return []
}
