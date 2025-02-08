import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "@/constants";

type Props = {
    title?: string;
    children: React.ReactNode;
};

const Main: React.FC<Props> = ({ title, children }) => {
    const { url } = usePage();

    const getPreviousRoute = (): string | null => {
        const index = ROUTES.findIndex(
            (route) => route.path === url.split("?")[0]
        );
        return index > 0 ? ROUTES[index - 1].path : null;
    };

    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-pink-400 to-indigo-500 font-[Rubik]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={url}
                        initial={{ opacity: 0, marginLeft: 1500 }}
                        animate={{ opacity: 1, marginLeft: 0 }}
                        exit={{ opacity: 0, marginLeft: -1500 }}
                        transition={{
                            duration: 0.3,
                            marginLeft: {
                                type: "spring",
                                visualDuration: 0.3,
                                bounce: 0.5,
                            },
                        }}
                    >
                        <div className="flex flex-col gap-16 bg-indigo-700 p-14 rounded-2xl shadow-2xl">
                            {title && (
                                <h1 className="text-white text-5xl font-bold text-center">
                                    {title}
                                </h1>
                            )}
                            {children}
                            {url !== "/" && (
                                <span>
                                    <Link
                                        href={getPreviousRoute() || "/"}
                                        className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg opacity-70 hover:opacity-90 transition-opacity"
                                    >
                                        &lt; Back
                                    </Link>
                                </span>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Main;
1;
