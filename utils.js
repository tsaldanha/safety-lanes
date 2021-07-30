function getColor(rating){
    let color = "#166be0";
    switch (rating){
        case "Very Safe" :
            color = "#8CC051";
            break;
        case "Safe" : 
            color = "#36BC9B";
            break;
        case "Average" : 
            color = "#3BAEDA";
            break;
        case "Use Caution" :
            color = "#F6BB43";
            break;
        case "Avoid" :
            color = "#EB553F";
            break;
        default:
            color = "#166be0";     
    }   
    return color;
}
