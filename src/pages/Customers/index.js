import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiAnchor } from 'react-icons/fi';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Homecam from '../../components/WebcamCapture';


export default function Customers(){
    
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [loadingMore, setLoadingMore] = useState(false)
    // const [imageUrl, setImage] = useState();

   
    let rowArr = [];
    useEffect(() =>{
        async function handleList(){
            await api.get('/customers/list/')
            .then((response) => {
                console.log(response.data)
                // rowArr.push({
                //     id: response.data.id,
                //     title: response.data.title,
                //     type_service: response.data.type_service
                // });
                
                // setData(data => [...data, ...rowArr]);
                setData(data => [...data, ...response.data]);
            })
            .catch((error)=>{
                console.log("Deu algum erro: ", error);
                // setLoadingMore(false);
            })

            // setLoading(false);
        }
        
        handleList();

        // return () => {
            
        // }

    },[])

    //console.log(data);

    
    return(
        <div>
            <Header />
            <div className="content">
                <Title name="Embarcação">
                    <FiAnchor size={25} color="#000"/>
                </Title>
                <div className="page">
                    <ul>
                        {data.map((item, index)=>{
                            return(
                                <li key={index}>{item.title}
                                <Link to={`/customers/${item.id}`}>Editar</Link>
                                </li>
                            )
                        })}
                    </ul>

                    {/* <img src={imageUrl} alt="Visor"/> */}
                    <Homecam />
                </div>
            </div>
        </div>
    );
}