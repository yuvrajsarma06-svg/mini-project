import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

import { Link, useLocation } from 'react-router-dom';

export default function Menu() {
  const location = useLocation();
  const [openModule, setOpenModule] = React.useState(null);

  const handleToggle = (module) => {
    setOpenModule(prev => (prev === module ? null : module));
  };

  React.useEffect(() => {
    if (
      location.pathname.startsWith("/add-students") ||
      location.pathname.startsWith("/display-students")
    ) {
      setOpenModule("students");
    }

    if (
      location.pathname.startsWith("/add-mentors") ||
      location.pathname.startsWith("/display-mentors")
    ) {
      setOpenModule("mentors");
    }
  }, [location.pathname]);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      subheader={
        <ListSubheader component="div">
          Modules
        </ListSubheader>
      }
    >
      {/* GENERAL PAGES */}
      <ListItemButton
        component={Link}
        to="/"
        selected={location.pathname === "/"}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/about"
        selected={location.pathname === "/about"}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/create"
        selected={location.pathname === "/create"}
      >
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItemButton>
      {/* STUDENTS */}
      <ListItemButton onClick={() => handleToggle("students")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
        {openModule === "students" ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openModule === "students"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton
            component={Link}
            to="/add-students"
            selected={location.pathname === "/add-students"}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Add Students" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/display-students"
            selected={location.pathname === "/display-students"}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Display Students" />
          </ListItemButton>

        </List>
      </Collapse>

      {/* MENTORS */}
      <ListItemButton onClick={() => handleToggle("mentors")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Mentors" />
        {openModule === "mentors" ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openModule === "mentors"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton
            component={Link}
            to="/add-mentors"
            selected={location.pathname === "/add-mentors"}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Add Mentors" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/display-mentors"
            selected={location.pathname === "/display-mentors"}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Display Mentors" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>
  );
}