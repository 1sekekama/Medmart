import { FaRegCopyright } from "react-icons/fa6";
import { footerAbout, footerContact, footerShop, footerSupport } from '../Constants';
import { mpesa, payments } from '../assets/images/brands';
const Footer = () => {
  return (
    <>
    <div className='grid lg:grid-cols-4 grid-cols-2 max-sm:gap-1 gap-12 lg:px-12 mb-[3rem]'>
    <div className='m-auto'>
        {footerContact.map((contacts)=>(
            <div className='gap-4 flex flex-col '>
               <h1 className='font-semibold  text-2xl py-3' > {contacts.title}</h1>
               {contacts.cont.map((contList)=>(
                <ul>
                    <li className='text-sm px-2'>
                        {contList.name}
                    </li>
                </ul>
               ))}
               <div className='flex gap-3 mt-2'>
               {contacts.social.map((media)=>(
                <img src={media.src} alt={media.alt} width={24} height={24} />
               ))}
               </div>
            </div>
          
        ))}
        </div>
        <div className='m-auto'>
        {footerShop.map((shop)=>(
            <div className='gap-4 flex flex-col '>
               <h1 className='font-semibold text-2xl py-3 '> {shop.title}</h1>
               {shop.shopList.map((shops)=>(
                <ul >
                    <li>
                    <a className='hover:text-slate-500' href='./'>
                        {shops.name}
                        </a>
                    </li>
                </ul>
               ))}
            </div>
          
        ))}
        </div>
        <div className='m-auto'>
        {footerAbout.map((about)=>(
            <div className='gap-4 flex flex-col'>
               <h1 className='font-semibold text-2xl py-3'> {about.title}</h1>
               {about.AboutLinks.map((links)=>(
                <ul >
                    <li >
                    <a className='hover:text-slate-500' href='./'>
                        {links.name}
                        </a>
                    </li>
                </ul>
               ))}
            </div>
          
        ))}
        </div>
        <div className='m-auto'>
        {footerSupport.map((support)=>(
            <div className='gap-4 flex flex-col'>
               <h1 className='font-semibold text-2xl py-3'> {support.title}</h1>
               {support.supportTeam.map((team)=>(
                <ul>
                    <li>
                    <a className='hover:text-slate-500' href='./'>
                        {team.name}
                        </a>
                    </li>
                </ul>
               ))}
            </div>
          
        ))}
        
        </div>
     
   
    </div>
    <div className='grid mb-12'>
    <div className='flex justify-between lg:px-[7rem] md:px-9 items-center max-sm:flex-col'>
        <div className='max-sm:px-1 max-sm:text-lg  font-roboto text-2xl py-3 flex justify-center items-center gap-3'>
           <p> <FaRegCopyright/> </p> 
           <p>{new Date().getFullYear()} </p>
          <p>MelMart.All rights reserved</p> 
        </div>
        <div className=' flex justify-center items-center  '>
        <h1>
            <img src={mpesa} height={54} width={54} alt="mpesa logo" />
            </h1>
            <h1>
            <img src={payments} height={114} width={114} alt="payment partners" />
            </h1>
        </div>
       </div>
       </div>
    </>

  )
}

export default Footer