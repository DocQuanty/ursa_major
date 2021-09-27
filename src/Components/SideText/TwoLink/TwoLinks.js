import s from "./twoLink.module.scss";

const TwoLinks = (props) => {
  const link = props.links.map((links, index) => (
    <a key={index} href={links.href}>
      {links.text}
    </a>
  ));

  return (
    <div className={s.twoLink}>
      <div className={s.twoLink_link}>{link}</div>
    </div>
  );
};

export default TwoLinks;
