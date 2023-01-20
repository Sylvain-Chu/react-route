import {Form, useLoaderData} from "react-router-dom";
import {getAnime} from "../anime.js";

export async function loader({ params }) {
    const anime = await getAnime(params.id);
    if (!anime) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    console.log(anime);
    return anime;
}

export default function Anime() {

    const anime  = useLoaderData();

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