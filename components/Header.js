import { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <Navbar style={{ backgroundColor: '#270c0c' }} expand="lg" fixed="top">
        <Link href="/" passHref>
          <NavbarBrand style={{ fontWeight: 'bold' }}>
            <img src="/static/images/logo-small.png" alt="AzerothCore logo" style={{ maxWidth: '24px' }} /> AzerothCore
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar style={{ justifyContent: 'space-between' }}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/AzerothCore/">
                <FontAwesomeIcon width="0" icon={['fab', 'github']} /> Repositories
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon width="0" icon="users" /> Community
              </DropdownToggle>
              <DropdownMenu tag="ul">
                <DropdownItem tag="li">
                  <NavLink href="https://github.com/azerothcore/forum/issues/">
                    <FontAwesomeIcon width="0" icon="newspaper" /> Forum
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="http://azerothcore.altervista.org/wp/">
                    <FontAwesomeIcon width="0" icon="rss" /> Blog
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://stackoverflow.com/questions/tagged/azerothcore?sort=newest">
                    <FontAwesomeIcon width="0" icon={['fab', 'stack-overflow']} /> StackOverflow
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://discord.gg/gkt4y2x">
                    <FontAwesomeIcon width="0" icon="comments" /> Chat
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://www.bountysource.com/teams/azerothcore">
                    <FontAwesomeIcon width="0" icon="dollar-sign" /> Bountysource
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/modules/" passHref>
                <NavLink>
                  <FontAwesomeIcon width="0" icon="cloud-download-alt" /> Modules
                </NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon width="0" icon="info-circle" /> Info
              </DropdownToggle>
              <DropdownMenu tag="ul">
                <DropdownItem tag="li">
                  <NavLink href="https://github.com/azerothcore/forum/issues/">
                    <FontAwesomeIcon width="0" icon={['fab', 'wikipedia-w']} /> Wiki
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavItem>
                    <Link href="/testimonials/" passHref>
                      <NavLink>
                        <FontAwesomeIcon width="0" icon="thumbs-up" /> Testimonials
                      </NavLink>
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/donations/" passHref>
                <NavLink>
                  <FontAwesomeIcon width="0" icon="heart" /> Donations
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink className="nav-link_social" href="https://www.facebook.com/AzerothCore/">
                <FontAwesomeIcon width="0" icon={['fab', 'facebook-f']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link_social" href="https://twitter.com/azeroth_core">
                <FontAwesomeIcon width="0" icon={['fab', 'twitter']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link_social" href="https://www.linkedin.com/company/azerothcore">
                <FontAwesomeIcon width="0" icon={['fab', 'linkedin-in']} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <style jsx global>{`
        header a {
          color: #fff;
        }
        header a:hover {
          color: #ffc2b3;
        }
        header .navbar-brand:hover {
          color: #fff;
        }
        .nav-link_social {
          padding: 4px;
          border-radius: 50%;
          color: #fff;
          background-color: #ca0000;
          height: 30px;
          width: 30px;
          text-align: center;
          margin: 0 2px;
        }
        .nav-link_social:hover {
          color: #fff;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          min-width: 160px;
          padding: 5px 0;
          margin: 2px 0 0;
          text-align: left;
          list-style: none;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          background-color: #333;
          border: 1px solid #ccc;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        }
        .dropdown-item:active {
          background-color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Header;
