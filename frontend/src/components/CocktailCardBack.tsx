import * as React from "react";

interface Props {
    onClick: React.MouseEventHandler<HTMLDivElement>,
    idx: number
}

export default function CocktailCardBack(
    {
        onClick,
        idx
    }: Props
) {
    return <div id={"ccb"+idx} className={"cocktail-card-back"} onClick={onClick}>
        <div className={"info-bar-grid-container"}>
            <div className={"r1 cursive"}>Rating</div><div className={"r2"}>9</div><div className={"r3"}><hr/></div>
            <div className={"r4 cursive"}>Cost</div><div className={"r5"}>$4.04</div><div className={"r6"}><hr/></div>
            <div className={"r7 cursive"}>Calories</div><div className={"r8"}>220</div><div className={"r9"}><hr/></div>
            <div className={"r10 cursive"}>Link</div><div className={"r11"}>---</div><div className={"r12"}><hr/></div>
            <div className={"r13 cursive"}>Notes</div><div className={"r14"}>-</div>
        </div>
        <div className={"recipe-grid-container"}>
            {/*Base*/}
            <div className={"r1 cspan cursive blue"}>Base</div>
            <div className={"r2 c1"}>1</div><div className={"r2 c2"}>oz</div><div className={"r2 c3 right brown"}>Woodford Reserve</div><div className={"r2 c4 left"}>rye</div>
            <div className={"r3 c1"}>&nbsp;</div>
            <div className={"r4 c1"}>&nbsp;</div>
            <div className={"r5 c1"}>&nbsp;</div>
            {/*Mixers*/}
            <div className={"r6 cspan cursive blue"}>Mixers</div>
            <div className={"r7 c1"}>1/2</div><div className={"r7 c2"}>oz</div><div className={"r7 c3 right brown"}>Fernet</div><div className={"r7 c4 left"}>branca</div>
            <div className={"r8 c1"}>1/2</div><div className={"r8 c2"}>oz</div><div className={"r8 c3 right brown"}>Generic</div><div className={"r8 c4 left"}>simple syrup</div>
            <div className={"r9 c1"}>2</div><div className={"r9 c2"}>dash</div><div className={"r9 c3 right brown"}>Angostura</div><div className={"r9 c4 left"}>bitters</div>
            <div className={"r10 c1"}>&nbsp;</div>
            <div className={"r11 c1"}>&nbsp;</div>
            <div className={"r12 c1"}>&nbsp;</div>
            <div className={"r13 c1"}>&nbsp;</div>
            <div className={"r14 c1"}>&nbsp;</div>
            {/*Preparation*/}
            <div className={"r15 cspan cursive blue"}>Preparation</div>
            <div className={"r16 c1-2 cursive right"}>Method</div><div className={"r16 c3-4"}>stirred</div>
            <div className={"r17 c1-2 cursive right"}>Ice</div><div className={"r17 c3-4"}>&nbsp;</div>
            <div className={"r18 c1-2 cursive right"}>Glass</div><div className={"r18 c3 right brown"}>chilled</div><div className={"r18 c4 left"}>rocks</div>
            {/*Garnish*/}
            <div className={"r19 cspan cursive blue"}>Garnish</div>
            <div className={"r20 cspan"}>lemon twist</div>
            <div className={"r21 cspan"}>&nbsp;</div>
            <div className={"r22 cspan"}>&nbsp;</div>
            <div className={"r23 cspan"}>&nbsp;</div>
        </div>
    </div>
}