import React from "react";

type Props = {
    title?: string;
    children: React.ReactNode;
};

const ExerciseCard: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <div className="flex group">
                <div className="flex flex-col items-center w-64 p-2 bg-indigo-800 border-2 border-white shadow-lg group-hover:-mt-1 group-hover:mb-1 group-hover:shadow-xl rounded-lg cursor-pointer group-hover:brightness-110 transition-all">
                    <h2 className="font-bold text-white text-2xl text-center">
                        {title}
                    </h2>
                    <div className="flex grow items-center">{children}</div>
                </div>
            </div>
        </>
    );
};

export default ExerciseCard;
