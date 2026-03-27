import { Typography ,Button,Stack,IconButton,ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const Home = () => {
  return (
    <>
      <div>
        
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>
      </div>
     <Stack spacing={4} direction='column'>
        <div>
            <Button variant='text' href='https://google.com'>Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='contained' size='small'>Small</Button>
          <Button variant='contained' size='medium'>Medium</Button>
          <Button variant='contained' size='large'>Small</Button>
        </div>
        <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='primary'>Info</Button>
      </Stack>
            <Stack spacing={2} direction='row'>
                  <Button variant='contained' startIcon={<SendIcon />}> Send  </Button>
                  <Button variant='contained' endIcon={<SendIcon />}> Send  </Button>
                  <IconButton aria-label='send'><SendIcon /></IconButton>
      </Stack>
            <Stack direction='row'>
          <ButtonGroup variant='contained'>
                  <Button > Left  </Button>
                  <Button > Center  </Button>
                  <Button > Right  </Button>
          </ButtonGroup> 
      </Stack>
            <Stack direction='row'>
          <ButtonGroup 
              variant='contained'
              orientation='vertical'
              size='small'
              color='secondary'
              arial-label='alignment button group'
          >
                  <Button onClick={() => alert('Left Clicked')}> Left  </Button>
                  <Button > Center  </Button>
                  <Button > Right  </Button>
          </ButtonGroup> 
      </Stack>
    </Stack>

    </>
    
  
  )
}
export default Home