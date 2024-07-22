const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/lotanna-onyekwelu-1abb9a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  
        target="_blank" // this opens it up in a new tab
        rel="noreferrer" // this allows us to have no bugs with older brousers when using '_blank'
        >
          <img alt="linkedin-link" src="../assets/linkedin.png"/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/_godflo?s=11" 
        target="_blank" 
        rel="noreferrer" 
        >
          <img alt="twitter-link" src="../assets/twitter.png"/>
        </a>
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://web.facebook.com/profile.php?id=100010225415275" // link to my facebook
        target="_blank" 
        rel="noreferrer"  
        >
          <img alt="facebook-link" src="../assets/facebook.png"/>
        </a> 
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/flocosy?igsh=MWR5bzI1eTc4YzF0cg==" 
        target="_blank" 
        rel="noreferrer" 
        >
          <img alt="instagram-link" src="../assets/instagram.png"/>
        </a>
    </div>
 );
};

export default SocialMediaIcons;