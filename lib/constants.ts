import {GridSettingsConfigMap} from "./types";

export const GridCosts: GridSettingsConfigMap = {
    "aenett": {
        id: "aenett",
        description: "Agder Energi Nett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 245,
            gridCapacity2_5: 315,
            gridCapacity5_10: 440,
            gridCapacity10_15: 815,
            gridCapacity15_20: 1500,
            gridCapacity20_25: 2188,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5251,
            gridEnergyNight: 0.4251,
            gridEnergyLowWeekends: true
        }
    },
    "bkk": {
        id: "bkk",
        description: "BKK Nett AS",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 125,
            gridCapacity2_5: 206,
            gridCapacity5_10: 350,
            gridCapacity10_15: 494,
            gridCapacity15_20: 638,
            gridCapacity20_25: 781,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4990,
            gridEnergyNight: 0.3990,
            gridEnergyLowWeekends: true
        }
    },
    "elvia": {
        id: "elvia",
        description: "Elvia",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 125,
            gridCapacity2_5: 200,
            gridCapacity5_10: 325,
            gridCapacity10_15: 450,
            gridCapacity15_20: 575,
            gridCapacity20_25: 700,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4310,
            gridEnergyNight: 0.3685,
            gridEnergyLowWeekends: true,
            gridEnergyLowHoliday: true
        }
    },
    "glitre": {
        id: "glitre",
        description: "Glitre Energi",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 150,
            gridCapacity2_5: 250,
            gridCapacity5_10: 410,
            gridCapacity10_15: 735,
            gridCapacity15_20: 975,
            gridCapacity20_25: 1210,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4725,
            gridEnergyNight: 0.3525,
            gridEnergyLowWeekends: false,
        }
    },
    "lnett": {
        id: "lnett",
        description: "Lnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 250,
            gridCapacity2_5: 250,
            gridCapacity5_10: 350,
            gridCapacity10_15: 475,
            gridCapacity15_20: 625,
            gridCapacity20_25: 750,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.4860,
            gridEnergyNight: 0.4060,
            gridEnergyLowWeekends: true
        }
    },
    "norgesnett": {
        id: "norgesnett",
        description: "Norgesnett",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 168.75,
            gridCapacity2_5: 281.25,
            gridCapacity5_10: 462.5,
            gridCapacity10_15: 822.5,
            gridCapacity15_20: 1092.5,
            gridCapacity20_25: 1355,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.5676,
            gridEnergyNight: 0.4426,
            gridEnergyLowWeekends: false
        }
    },
    "tensio": {
        id: "tensio",
        description: "Tensio",
        gridNewRegimeStart: "2022-07-01",
        gridSettings: {
            gridCapacity0_2: 73,
            gridCapacity2_5: 128,
            gridCapacity5_10: 219,
            gridCapacity10_15: 323,
            gridCapacity15_20: 426,
            gridCapacity20_25: 530,
            gridCapacityAverage: "3",
            gridEnergyDay: 0.3626,
            gridEnergyNight: 0.2839,
            gridEnergyLowWeekends: false,
        }
    },
};