//The one exception is corn. 
//The createCorn function should return an array with two identical objects in it. Each with the proper keys and values.
export const createCorn = () => {
    let seedCorn = [
        {
            type: "Corn",
            height: "180",
            output: "6"
        },
        {
            type: "Corn",
            height: "180",
            output: "6"
        }
    ]
    return seedCorn
}