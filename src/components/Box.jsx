import Response from "./Response.jsx";
export default function Box({ component,response }) {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 w-auto h-auto mt-2 dark:text-gray-100">
            {response?<Response conversation={component}></Response>:component}
        </div>
    )
}