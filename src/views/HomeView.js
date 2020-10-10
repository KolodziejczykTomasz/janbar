import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './HomeView.css';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className='tabpanel'
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 400,
    marginTop: '150px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        id="tabmenu"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="O firmie" {...a11yProps(0)} />
        <Tab label="Usługi" {...a11yProps(1)} />
        <Tab label="Maszyny" {...a11yProps(2)} />
        <Tab label="Realizacje" {...a11yProps(3)} />
        <Tab label="Praca" {...a11yProps(4)} />
        <Tab label="Galeria" {...a11yProps(5)} />
        <Tab label="Kontakt" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Aby zyskać wiarygodność oraz zainteresować Państwa firmą "JANBAR"
        pragniemy przedstawić jej ogólną charakterystykę. Liczymy, że dzięki
        temu zyskamy Państwa zaufanie i nie będą się już Państwo wahać w wyborze
        pomiędzy wieloma przedsiębiorstwami oferującymi usługi z naszej branży.
        Mamy nadzieję, że zaowocuje to także kierowaniem do nas zaproszeń o
        wzięcie udziału w przetargach bądź konkursach ofert na realizację robót
        ziemnych. Firma "JANBAR" jest firmą młodą, ponieważ działa na rynku
        dopiero od 1997 roku, jednak zyskała już zaufanie i szacunek wielu
        klientów - o czym mogą się państwo przekonać przeglądając nasze
        referencje. Założyli ją dwaj panowie Waldemar Baran i Mirosław Jankowski
        (w formie spółki cywilnej), współpracujący już ze sobą od kilku lat.
        Początkowo zajmowali się oni mniejszymi przedsięwzięciami (m.in.
        remontem obiektów mieszkalnych), jednak firma "JAN&BAR" jest
        wyspecjalizowana w realizacji kompleksowych robót ziemnych (dokładna
        ofertę znajda Państwo w rozdziale "Usługi"). Początkowo nasza firma nie
        posiadała oddzielnego biura, wszystkie sprawy administracyjne były
        prowadzone w mieszkaniach wspólników. Jednak firma szybko udowodniła
        swoją rzetelność i zyskała zaufanie swoich zleceniodawców dzięki
        umiejętności elastycznej pracy i dostosowywaniu się do potrzeb
        inwestora. Dzięki temu była w stanie zakupić teren o powierzchni 1600m2
        wraz z budynkami, które zostały adoptowane jako biuro oraz magazyny, a
        teren został wykorzystany jako baza sprzętu. Przez cztery lata
        działalność na rynku budowlanym firma "JANBAR" zdołała już skompletować
        doskonały zespół pracowników, który sprawdził się przy wielu rodzajach
        prac. Na życzenie Państwa możemy dostarczyć dodatkowe dokumenty
        dotyczące naszej firmy.
      </TabPanel>
      <TabPanel value={value} index={1}>
        JanBar - Usługi - Wykonawstwo Firma nasza oferuje usługi w zakresie
        wykonawstwa : wszelkiego rodzaju robót ziemnych z użyciem sprzętu
        ciężkiego ( wykopy , formowanie nasypów ) robót melioracyjnych i
        odwodnieniowych sieci wodociągowych obiektów budowlanych sieci
        wodociągowych (lub ich modernizację) stacje uzdatniania wody (SUW)
        stacje hydroforowe kanalizacji sanitarnych, deszczowych i
        ogólnospławnych obiektów budowlanych sieci kanalizacyjnych przepompownie
        ścieków montaż przydomowych oczyszczalni ścieków
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

