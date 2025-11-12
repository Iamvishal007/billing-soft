import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';

interface LoginFormInputs {
  mobile: string;
  organization: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log('Login Data:', data);
    navigate('/');
    // TODO: handle login (e.g., call backend API)
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          width: '100%',
          maxWidth: 400, // fixed width for the card
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Billing Software Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
        >
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit mobile number',
              },
            })}
            error={!!errors.mobile}
            helperText={errors.mobile?.message}
          />

          <TextField
            label="Organization Name"
            variant="outlined"
            fullWidth
            {...register('organization', {
              required: 'Organization name is required',
              minLength: { value: 3, message: 'Minimum 3 characters required' },
            })}
            error={!!errors.organization}
            helperText={errors.organization?.message}
          />

          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
