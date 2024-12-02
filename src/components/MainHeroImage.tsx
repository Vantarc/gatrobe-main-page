import config from '../config/index.json';
import { useEffect, useState } from 'react'

interface IDataModel {
  imageURL: string
}


interface Props {
  page: string;
}
const MainHeroImage = ({page}:Props) => {

  const {pageData} = config;
  const { mainHero } = pageData[page as keyof typeof pageData];
  const [data, setData] = useState<IDataModel>({imageURL: ""})

  useEffect(() => {
    const GetPost = async () => {
      const response = await fetch('https://door.gatrobe.de/door', {
        method: 'GET',
        
      })
      const text = await response.text()
      if (response.ok) setData({imageURL: (text==="OPEN" ? mainHero.imgClosed:mainHero.imgOpened)})
    };
    GetPost()
  }, [])
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="bg-black h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full open-img"
        src={data.imageURL}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
