const getDog = async () => {
    const url ="https://api.thedogapi.com/v1/images/search";
    const res = await fetch(url);
    const [data] = await res.json();


    const {url:image} = data;

    console.log(data);

    const dog = {
      image: image,
      breed: data.breeds[0]
    }

    console.log(dog);
    

    return dog;
}

export default getDog;