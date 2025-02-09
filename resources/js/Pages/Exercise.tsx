import { Link } from "@inertiajs/react";

const Exercise = () => {
    const sets = [
        {
            reps: "10",
        },
        {
            reps: "10",
        },
        {
            reps: "",
        },
    ];

    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-10">
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-4 justify-between">
                        <span className="text-white">Weight</span>
                        <input
                            type="text"
                            value="50kg"
                            className="border-none rounded-lg px-5 py-3"
                        />
                    </label>
                    {sets.map(({ reps }, index) => (
                        <label className="flex items-center gap-4 justify-between">
                            <span className="text-white">Set {index + 1}</span>
                            <input
                                type="text"
                                value={reps}
                                className="border-none rounded-lg px-5 py-3"
                            />
                        </label>
                    ))}
                    <Link
                        href="/ass"
                        className="bg-blue-600 text-white rounded-lg p-2 text-center border-2 shadow border-white"
                    >
                        Add another set
                    </Link>
                </div>
                <div className="w-0.5 bg-white opacity-50"></div>
                <div className="flex flex-col bg-indigo-800 px-20 py-4 text-white rounded-lg">
                    <h2>Last time</h2>
                </div>
            </div>
            <Link
                href="/ass"
                className="bg-red-600 text-white rounded-xl p-4 text-center border-2 shadow border-white text-xl"
            >
                COMPLETE EXERCISE
            </Link>
        </div>
    );
};

Exercise.title = "Bench press";

export default Exercise;
