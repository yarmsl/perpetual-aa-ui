import { FC, memo } from 'react';

import QrCodeIcon from '@mui/icons-material/QrCode';
import { Box, Button, IconButton } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import QRCode from 'react-qr-code';

import { useAppDispatch } from '~/store';
import { openModal } from '~/store/ModalStack';
import ControlledTextField from '~/ui-kit/atoms/ControlledTextField';

const Exchange: FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm();
  const { handleSubmit, watch } = methods;

  const testVal = watch('test1');

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '400px',
        }}
      >
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test1'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test2'
          size='small'
          sx={{ height: '72px' }}
          variant='filled'
          fullWidth
          required
        />
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test3'
          size='small'
          sx={{ height: '63px' }}
          variant='standard'
          fullWidth
          required
        />
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test4'
          sx={{ height: '79px' }}
          fullWidth
          required
        />
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test5'
          sx={{ height: '79px' }}
          variant='filled'
          fullWidth
          required
        />
        <ControlledTextField
          autoComplete='off'
          label='test'
          name='test6'
          sx={{ height: '71px' }}
          variant='standard'
          fullWidth
          required
        />
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
          <Button size='small' type='submit' onClick={handleSubmit(() => console.log('test'))}>
            Small
          </Button>
          <Button size='small' variant='contained'>
            Small
          </Button>
          <Button size='small' variant='outlined'>
            Small
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
          <Button type='submit' onClick={handleSubmit(() => console.log('test'))}>
            Mid
          </Button>
          <Button variant='contained'>Mid</Button>
          <Button variant='outlined'>Mid</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
          <Button size='large' type='submit' onClick={handleSubmit(() => console.log('test'))}>
            Large
          </Button>
          <Button size='large' variant='contained'>
            Large
          </Button>
          <Button size='large' variant='outlined'>
            Large
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton size='small'>
            <QrCodeIcon fontSize='inherit' />
          </IconButton>
          <IconButton>
            <QrCodeIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            size='large'
            onClick={() =>
              dispatch(
                openModal(
                  <Box sx={{ bgcolor: 'background.default', p: '20px' }}>
                    <QRCode
                      size={256}
                      style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                      value={testVal}
                      viewBox={`0 0 256 256`}
                    />
                  </Box>,
                ),
              )
            }
          >
            <QrCodeIcon fontSize='inherit' />
          </IconButton>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default memo(Exchange);
