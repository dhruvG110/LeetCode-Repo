/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let newImage = [];
    let result = [];
    for(let i = 0;i<image.length;i++){
        let newArr = [];
        for(let j = image[i].length-1;j>= 0;j--){
            newArr.push(image[i][j])
        }
        newImage.push(newArr);
    }
    for(let i = 0;i<newImage.length;i++){
        let newArr = [];
        for(let j = 0;j< newImage[i].length;j++){
            if(newImage[i][j] == 0){
                newArr.push(1);
            }else{
                newArr.push(0);
            }
        }
        result.push(newArr);  
    }
    
    return result;
};