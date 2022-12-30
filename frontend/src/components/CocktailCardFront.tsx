import * as React from "react";

interface Props {
    cocktailName: string,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function CocktailCardFront(
    {
        cocktailName,
        onClick
    }: Props
) {
    return <div className={"cocktail-card-front"} onClick={onClick}>
        <div className={"cocktail-name"}>{cocktailName}</div>
        <img src={"https://photo.foodgawker.com/wp-content/uploads/2019/11/3519600.jpg"} />
    </div>
}