import React from 'react'

const Navigation = () => {
  const [click, setClick] = useState(true);

  const 

  return (
    <section>
        <NavBar>
            <h2>Logo</h2>
            <h2>Menu</h2>
            <h2>Button</h2>
            <Menu click={click}>
            {/* <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
              <MenuItem onClick={() => scrollTo('about')}></MenuItem> */}
            </Menu>
        </NavBar>
    </section>
  )
}

export default Navigation
