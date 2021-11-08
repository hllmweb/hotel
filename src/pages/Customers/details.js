import { useParams } from "react-router-dom";


export default function Details(){
    const { id } = useParams();
    // const history = useHistory();

    return(
        <div>
            id: {id}
        </div>
    )
}