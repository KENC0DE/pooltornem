import React from "react";
import {
  SingleEliminationBracket,
  DoubleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "@g-loot/react-tournament-brackets";
import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";

export default function Tournament() {
  return (
    <div>
      <LandingHeader />
      <SingleElimination />
    </div>
  );
}

export const SingleElimination = () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <SingleEliminationBracket
      theme={GlootTheme}
      matches={simpleSmallBracket}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer
          width={window.innerWidth}
          height={window.innerHeight}
          background="rgb(11, 13, 19)"
          SVGBackground="rgb(11, 13, 19)"
          {...props}
        >
          {children}
        </SVGViewer>
      )}
      onMatchClick={(match) => console.log(match)}
      onPartyClick={(match) => console.log(match)}
    />
  </div>
);

const GlootTheme = createTheme({
  textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
  matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
  score: {
    background: {
      wonColor: `#10131C`,
      lostColor: "#10131C",
    },
    text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
  },
  border: {
    color: "#292B43",
    highlightedColor: "RGBA(152,82,242,0.4)",
  },
  roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
  connectorColor: "#3B3F73",
  connectorColorHighlight: "RGBA(152,82,242,0.4)",
  svgBackground: "#0F121C",
});

export const simpleSmallBracket = [
  // Round 1
  {
    id: 1,
    nextMatchId: 9,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "1", name: "Abel" },
      { id: "2", name: "Abebe" },
    ],
  },
  {
    id: 2,
    nextMatchId: 9,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "3", name: "Nahom" },
      { id: "4", name: "Eyuel" },
    ],
  },
  {
    id: 3,
    nextMatchId: 10,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "5", name: "Siem" },
      { id: "6", name: "Ahmed" },
    ],
  },
  {
    id: 4,
    nextMatchId: 10,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "7", name: "Bayie" },
      { id: "8", name: "Basleal" },
    ],
  },
  {
    id: 5,
    nextMatchId: 11,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "9", name: "Nebiyou" },
      { id: "10", name: "Biruk" },
    ],
  },
  {
    id: 6,
    nextMatchId: 11,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "11", name: "Barrok" },
      { id: "12", name: "Kaleb" },
    ],
  },
  {
    id: 7,
    nextMatchId: 12,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "13", name: "Behailu" },
      { id: "14", name: "Beamlak" },
    ],
  },
  {
    id: 8,
    nextMatchId: 12,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      { id: "15", name: "Samuel" },
      { id: "16", name: "Yoseph" },
    ],
  },

  // Round 2
  {
    id: 9,
    nextMatchId: 13,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 10,
    nextMatchId: 13,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 11,
    nextMatchId: 14,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 12,
    nextMatchId: 14,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },

  // Round 3
  {
    id: 13,
    nextMatchId: 15,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 14,
    nextMatchId: 15,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },

  // Final
  {
    id: 15,
    nextMatchId: null,
    tournamentRoundText: "4",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
];
