import { useParams } from 'react-router-dom';

const DisplayProductsDetails = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>

        </div>
    );
};

export default DisplayProductsDetails;