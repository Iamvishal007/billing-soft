import { TextField, Stack } from "@mui/material";
import type { AddPartyData } from "../../types/PartyTypes";

interface Props {
  partyData: AddPartyData;
  setPartyData: (data: AddPartyData) => void;
}

export default function PartyBasicDetails({ partyData, setPartyData }: Props) {
  return (
    <Stack spacing={2}>
      <TextField
        label="Party Name"
        fullWidth
        required
        value={partyData.name}
        onChange={(e) => setPartyData({ ...partyData, name: e.target.value })}
      />

      <TextField
        label="Mobile Number"
        fullWidth
        value={partyData.mobile}
        onChange={(e) => setPartyData({ ...partyData, mobile: e.target.value })}
      />
    </Stack>
  );
}
