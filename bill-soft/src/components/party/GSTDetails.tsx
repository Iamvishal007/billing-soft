import { TextField, Stack } from "@mui/material";
import type { AddPartyData } from "../../types/PartyTypes";

interface Props {
  partyData: AddPartyData;
  setPartyData: (data: AddPartyData) => void;
}

export default function GSTDetails({ partyData, setPartyData }: Props) {
  return (
    <Stack spacing={2}>
      <TextField
        label="GSTIN"
        fullWidth
        value={partyData.gstin}
        onChange={(e) => setPartyData({ ...partyData, gstin: e.target.value })}
      />
    </Stack>
  );
}
