import { TextField, Stack } from "@mui/material";
import type { AddPartyData } from "../../types/PartyTypes";

interface Props {
  partyData: AddPartyData;
  setPartyData: (data: AddPartyData) => void;
}

export default function AddressDetails({ partyData, setPartyData }: Props) {
  return (
    <Stack spacing={2}>
      <TextField
        label="Address"
        fullWidth
        multiline
        minRows={2}
        value={partyData.address}
        onChange={(e) =>
          setPartyData({ ...partyData, address: e.target.value })
        }
      />
    </Stack>
  );
}
