

const Links = () => {
    const items=[
        "HomePage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]
  return (
    <div className="Links">{items.map(item=>
        <a href={'#${items}'} key={item}>{item}</a>
        )}</div>
  )
}

export default Links