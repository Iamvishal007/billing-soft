import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  FormControl,
  InputAdornment,
  RadioGroup,
  Radio,
} from "@mui/material";
import type { AddItemData } from "../../types/ItemTypes";

interface BasicDetailsProps {
  addItemData: AddItemData;
  setAddItemData: React.Dispatch<React.SetStateAction<AddItemData>>;
}

export default function BasicDetails({
  addItemData,
  setAddItemData,
}: BasicDetailsProps) {
  const labelStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "text.secondary",
    mb: 0.5,
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2,
      }}
    >
      {/* ITEM TYPE */}
      <Box>
        <Typography sx={labelStyle}>Item Type *</Typography>

        <RadioGroup
          row
          value={addItemData.productType ?? "Product"}
          onChange={(e) =>
            setAddItemData((prev) => ({
              ...prev,
              productType: e.target.value as AddItemData["productType"],
            }))
          }
        >
          <FormControlLabel
            value="Product"
            control={<Radio />}
            label="Product"
          />
          <FormControlLabel
            value="Service"
            control={<Radio />}
            label="Service"
          />
        </RadioGroup>
      </Box>

      {/* CATEGORY */}
      <Box>
        <Typography sx={labelStyle}>Category</Typography>
        <FormControl fullWidth>
          <Select
            value={addItemData.category || ""}
            onChange={(e) =>
              setAddItemData((prev) => ({ ...prev, category: e.target.value }))
            }
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>
            <MenuItem value="cat1">Category 1</MenuItem>
            <MenuItem value="cat2">Category 2</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* ITEM NAME */}
      <Box>
        <Typography sx={labelStyle}>Item Name *</Typography>
        <TextField
          fullWidth
          required
          placeholder="ex: Maggie 20gm"
          value={addItemData.itemName || ""}
          onChange={(e) =>
            setAddItemData((prev) => ({ ...prev, itemName: e.target.value }))
          }
        />
      </Box>

      {/* SHOW IN ONLINE STORE */}
      <Box>
        <Typography sx={labelStyle}>Show in Online Store</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={addItemData.showOnline || false}
              onChange={(e) =>
                setAddItemData((prev) => ({
                  ...prev,
                  onlineStore: e.target.checked,
                }))
              }
            />
          }
          label=""
        />
      </Box>

      {/* SALES PRICE */}
      <Box>
        <Typography sx={labelStyle}>Sales Price</Typography>
        <TextField
          type="number"
          fullWidth
          placeholder="₹ 200"
          value={addItemData.salesPrice ?? ""}
          onChange={(e) =>
            setAddItemData((prev) => ({
              ...prev,
              salesPrice: Number(e.target.value),
            }))
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Select
                  variant="standard"
                  value={addItemData.taxApplicable ?? "With Tax"}
                  onChange={(e) =>
                    setAddItemData((prev) => ({
                      ...prev,
                      taxApplicable: e.target.value,
                    }))
                  }
                >
                  <MenuItem value="With Tax">With Tax</MenuItem>
                  <MenuItem value="Without Tax">Without Tax</MenuItem>
                </Select>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* GST RATE */}
      <Box>
        <Typography sx={labelStyle}>GST Tax Rate (%)</Typography>
        <FormControl fullWidth>
          <Select
            value={addItemData.gstRate || 0}
            onChange={(e) =>
              setAddItemData((prev) => ({ ...prev, gstRate: e.target.value }))
            }
          >
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="5">5%</MenuItem>
            <MenuItem value="12">12%</MenuItem>
            <MenuItem value="18">18%</MenuItem>
            <MenuItem value="28">28%</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* MEASURING UNIT */}
      <Box>
        <Typography sx={labelStyle}>Measuring Unit</Typography>
        <FormControl fullWidth>
          <Select
            value={addItemData.measuringUnit || "PCS"}
            onChange={(e) =>
              setAddItemData((prev) => ({ ...prev, unit: e.target.value }))
            }
          >
            <MenuItem value="PCS">Pieces (PCS)</MenuItem>
            <MenuItem value="KG">Kilogram (KG)</MenuItem>
            <MenuItem value="LTR">Liters (LTR)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* OPENING STOCK */}
      <Box>
        <Typography sx={labelStyle}>Opening Stock</Typography>
        <TextField
          type="number"
          placeholder="ex: 150"
          fullWidth
          value={addItemData.openingStock ?? ""}
          onChange={(e) =>
            setAddItemData((prev) => ({
              ...prev,
              openingStock: Number(e.target.value),
            }))
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {addItemData.openingStock || "PCS"}
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
