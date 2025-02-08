import CardGrid from "@/Components/CardGrid";
import ExerciseCard from "@/Components/ExerciseCard";
import BenchPress from "@/Components/Vectors/BenchPress";
import BicepCurl from "@/Components/Vectors/BicepCurl";
import Squat from "@/Components/Vectors/Squat";
import { Head, Link } from "@inertiajs/react";

const pageTitle = "Which workout?";

const ChooseWorkout = () => {
    const workouts = [
        {
            id: 1,
            name: "Push",
            vector: <BenchPress className="w-32 h-auto fill-white" />,
        },
        {
            id: 2,
            name: "Pull",
            vector: <BicepCurl className="w-20 h-auto fill-white" />,
        },
        {
            id: 3,
            name: "Legs",
            vector: <Squat className="w-20 h-auto fill-white" />,
        },
    ];

    return (
        <>
            <Head title={pageTitle} />
            <CardGrid>
                {workouts.map(({ id, name, vector }) => {
                    return (
                        <Link
                            href={`/choose-exercise?id=${id}`}
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

ChooseWorkout.title = pageTitle;

export default ChooseWorkout;
