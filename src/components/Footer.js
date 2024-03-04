import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
  return (
    <div className="mt-3">
    <div className='homegrown'>
      <p>homegrown indian brand</p>
    </div>
    <div className="happy-customer">
      <p>over <span>6 million</span> happy customers</p>
    </div>
    <div className="footer-container">
    <div className="container-cart footer">
      <div className="col-12 d-flex">
        <div className=" footer-menu col-4 ">
          <span>need help</span>
          <ul className='footer-menu-li'>
            <li>Contact us</li>
            <li>Track Order</li>
            <li>Return & Refund</li>
            <li>FAQs</li>
            <li>MY Account</li>
          </ul> 
        </div>
        <div className=" footer-menu col-4 ">
          <span>company</span>
          <ul className='footer-menu-li'>
            <li>About us</li>
            <li>Careers</li>
            <li>Community initiatives</li>
          </ul> 
        </div>

        <div className="footer-menu col-4">
          <span>more info</span>
          <ul className='footer-menu-li'>
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul> 
      </div></div>
       
        <div className="follow-icon">
          <div className=" social text-center ">Follow us:</div>
          <div className="social-icon ">
              <SocialIcon url="www.telegram.com" />
              <SocialIcon url="www.whatsapp.com" />
              <SocialIcon url="www.instagram.com" />
              <SocialIcon url="www.facebook.com" />
        </div>
        </div>
       {/*  <div className="payment-det col-6 mt-3 d-flex gap-3" >
          <span>100% Secure Payment</span>
          <div className="">
            <img src="https://www.shutterstock.com/image-vector/kerala-india-may-08-2023-260nw-2304421791.jpg" alt="payment" width="200px" height="30px" />
          </div>
        </div> */}
        <div className="popular-search mt-3 d-block">
          <span>POPULAR SEARCHES....</span>
          <p>TSS | OriginalsSolidsAll | SuperheroesCaptain | America™ | X-Men™ | Marvel™ | Spider-Man™ | Black Panther™ | Iron Man™ | Captain Marvel™ | Punisher™ | Doctor StrangeDC Comics™ | Batman™ | Superman™ | Wonder Woman™ | The Flash™ | Hulk™ | Thor™ | Joker™ | Deadpool™ | All Movies & TV ShowsWednesday | Harry Potter™ | The GodFather | Avatar: The Last Airbender | Money Heist | Stranger Things | F.R.I.E.N.D.S™ | FighterKung Fu Panda | House of the DragonDisney™ | The BoysBreaking | BadFantastic | Beasts | Star Wars | The OfficeBrooklyn  | Nine-NineArchie | ComicsTMNTAll | CartoonsPaw | PatrolPink | PantherPopeyeLooney | Tunes™ | MinionsPeanuts™ | The Powerpuff | Girls™ | GarfieldTom and JerryCourage | The Cowardly Dog™ | Scooby Doo™ | Rick and Morty™ | Dexter's Laboratory™ | SpongeBob</p>
        </div>
        <div className="copy-rights">&copy;2K Tribes 2024</div>




        </div>
    </div> 
    </div>
  )
}

export default Footer
