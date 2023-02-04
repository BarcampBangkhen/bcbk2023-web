import { useEffect, useState } from "react";
import SponsorPanel from "./sponsorPanel";
import axios from "axios";
import { ApiBaseUrl } from "../../Constant";

export interface SponsorSectionProp{
    imageSize: string;
}

const SponsorContainer = () => {
    const [largeImageList, setLargeImageList] = useState([])
    const [mediumImageList, setMediumImageList] = useState([])
    const [smallImageList, setSmallImageList] = useState([])

    useEffect(() => {
        axios.get(ApiBaseUrl + "/sponsor").then((res) => {
            setLargeImageList(res.data.large)
            setMediumImageList(res.data.medium)
            setSmallImageList(res.data.small)
        })
    }, [])

    return (
        <div className="mx-[10%] md:mt-0 mt-36">
            <p className="text-[#880D1E] text-center text-3xl">Barcamp Bangkhen would like to specially thank our 2023 sponsors.</p>
            <p className="text-black text-center text-lg my-8 mx-[20%]">We kindly request your support for our sponsors  during the event and throughout the year. Their generous contributions make this event possible and we are truly grateful for their support.</p>
            <SponsorPanel imageSize={"large"} imageList={largeImageList}/>
            <SponsorPanel imageSize={"medium"} imageList={mediumImageList}/>
            <SponsorPanel imageSize={"small"} imageList={smallImageList}/>
        </div>
        
    )
}

export default  SponsorContainer