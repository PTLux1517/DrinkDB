import * as React from "react";

interface Props {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function CocktailCardFront(
    {
        onClick
    }: Props
) {
    return <div className={"cocktail-card-back"} onClick={onClick}>
        Base
    </div>
}