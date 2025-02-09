import CardGrid from "@/Components/CardGrid";
import ExerciseCard from "@/Components/ExerciseCard";
import BenchPress from "@/Components/Vectors/BenchPress";
import BicepCurl from "@/Components/Vectors/BicepCurl";
import Squat from "@/Components/Vectors/Squat";
import { Link } from "@inertiajs/react";

type WorkoutType = {
    id: number;
    name: string;
};

type Props = {
    workouts: WorkoutType[];
};

const ChooseWorkout: React.FC<Props> = ({ workouts }) => {
    const workoutVectors = [
        {
            id: 1,
            vector: <BenchPress className="w-32 h-auto fill-white" />,
        },
        {
            id: 2,
            vector: <BicepCurl className="w-20 h-auto fill-white" />,
        },
        {
            id: 3,
            vector: <Squat className="w-20 h-auto fill-white" />,
        },
    ];

    return (
        <CardGrid>
            {workouts.map(({ id, name }) => {
                return (
                    <Link
                        href={`/choose-exercise?id=${id}`}
                        key={id}
                        className="flex"
                    >
                        <ExerciseCard title={name}>
                            {
                                workoutVectors.find(
                                    (workoutVector) => workoutVector.id === id
                                )?.vector
                            }
                        </ExerciseCard>
                    </Link>
                );
            })}
        </CardGrid>
    );
};

ChooseWorkout.title = "Which workout?";

export default ChooseWorkout;
