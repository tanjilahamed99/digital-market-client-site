import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const useBannerImage = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: bannerImage = [] } = useQuery({
        queryKey: ['bannerImages'],
        queryFn: async () => {
            const res = await axiosPublic.get('bannerImage')
            return res.data
        }
    })

    return [bannerImage]
};

export default useBannerImage;