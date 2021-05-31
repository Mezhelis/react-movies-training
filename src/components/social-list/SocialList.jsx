import SocialItem from "./social-item/SocialItem"

const SocialList = (props) => {
  return (
    <ul className="social-list">
      <SocialItem link="https://vk.com/mezhelis" nameSocial="vk-social" />
      <SocialItem link="https://www.instagram.com/sergey_mezhelis/" nameSocial="inst-social" />
      <SocialItem link="https://www.facebook.com/people/Сергей-Межелис/100002004218921/" nameSocial="fb-social" />
    </ul>
  )
}

export default SocialList;