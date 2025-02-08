import { Head } from "@inertiajs/react";

const pageTitle = "Bench press";

const Exercise = () => {
    return (
        <>
            <Head title={pageTitle} />
        </>
    );
};

Exercise.title = pageTitle;

export default Exercise;
