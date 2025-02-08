import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Main from "./Layouts/Main";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    resolve: async (name: string) => {
        // Dynamically import the page component
        const module = await import(`./Pages/${name}.tsx`);
        const page = module.default;

        // For example, if your admin pages are in a folder called 'Admin'
        // if (name.startsWith('Admin/')) {
        //     page.layout = page.layout || (page => <AdminLayout>{page}</AdminLayout>);
        // } else {
        page.layout =
            page.layout ||
            ((
                pageContent:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined
            ) => (
                <Main title={page.title || "TITLE MISSING!"}>
                    {pageContent}
                </Main>
            ));
        // }

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        console.log(props);

        root.render(<App {...props} />);
    },
});
