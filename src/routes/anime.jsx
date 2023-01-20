import {Form, useLoaderData} from "react-router-dom";

export default function Anime() {

    export async function loader({ params }) {
        const contact = await getContact(params.contactId);
        if (!contact) {
            throw new Response("", {
                status: 404,
                statusText: "Not Found",
            });
        }
        return contact;
    }

    const anime  = useLoaderData();
    console.log(anime)

    return (
        <div id="anime">

            <div>
                <h1>

                    {anime}
                </h1>
            </div>
        </div>
    );
}