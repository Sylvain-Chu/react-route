import {
    useLoaderData,
    redirect,
} from "react-router-dom";
import {getAnimes} from "../anime.js";
import "../css/Anime.css";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({request}) {
    let animes = await getAnimes();
    animes = animes.data.Page.media;
    return {animes};
}

export default function Root() {

    const {animes} = useLoaderData();

    return (
        <>
            <div>
                <ul>
                    {animes.map(anime => {
                        return (
                            <li key={anime.id}>
                            <a href={`/anime/${anime.id}`}>
                                {anime.title.romaji}
                            </a>
                                <img src={anime.coverImage.large} alt={anime.title.romaji}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );

}