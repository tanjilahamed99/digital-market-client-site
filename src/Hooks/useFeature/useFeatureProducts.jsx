import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const useFeatureProducts = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: feature } = useQuery({
        queryKey: ['feature'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feature')
            return res.data
        }
    })

    return [feature]
};

export default useFeatureProducts;