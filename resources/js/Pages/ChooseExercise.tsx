import CardGrid from "@/Components/CardGrid";
import ExerciseCard from "@/Components/ExerciseCard";
import BenchPress from "@/Components/Vectors/BenchPress";
import BicepCurl from "@/Components/Vectors/BicepCurl";
import Squat from "@/Components/Vectors/Squat";
import { Head, Link } from "@inertiajs/react";

const pageTitle = "Which exercise?";

const ChooseExercise = () => {
    const exercises = [
        {
            id: 1,
            name: "Bench Press",
            vector: <BenchPress className="w-32 h-auto fill-white" />,
        },
        {
            id: 2,
            name: "Face Twister",
            vector: <BicepCurl className="w-20 h-auto fill-white" />,
        },
        {
            id: 3,
            name: "Ass Wrangler",
            vector: <Squat className="w-20 h-auto fill-white" />,
        },
        {
            id: 4,
            name: "Ksymena Special",
            vector: <Squat className="w-20 h-auto fill-white" />,
        },
    ];

    return (
        <>
            <Head title={pageTitle} />
            <CardGrid>
                {exercises.map(({ id, name, vector }) => {
                    return (
                        <Link
                            href={`/exercise?id=${id}`}
                            key={id}
                            className="flex"
                        >
                            <ExerciseCard title={name}>{vector}</ExerciseCard>
                        </Link>
                    );
                })}
            </CardGrid>
        </>
    );
};

ChooseExercise.title = pageTitle;

export default ChooseExercise;
