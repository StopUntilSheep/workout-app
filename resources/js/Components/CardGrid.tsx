import React from "react";

type Props = {
    children: React.ReactNode;
};

const CardGrid: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-6">{children}</div>
        </>
    );
};

export default CardGrid;
