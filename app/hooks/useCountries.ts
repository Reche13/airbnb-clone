import countries from "world-countries";

const formatedCoutries = countries.map(country=>({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}))

const useCountries = ()=> {
    const getAll = ()=> formatedCoutries;

    const getByValue = (value:string) => {
        return formatedCoutries.find(item=> item.value === value)
    }

    return {
        getAll,
        getByValue
    }
}


export default useCountries;