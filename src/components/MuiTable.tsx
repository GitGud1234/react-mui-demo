import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Jeanelle',
    last_name: 'Covell',
    email: 'jcovell0@tripadvisor.com',
    gender: 'Female',
    ip_address: '190.202.131.194',
  },
  {
    id: 2,
    first_name: 'Bambi',
    last_name: 'Huffy',
    email: 'bhuffy1@imgur.com',
    gender: 'Female',
    ip_address: '3.23.200.177',
  },
  {
    id: 3,
    first_name: 'Maggy',
    last_name: 'Spackman',
    email: 'mspackman2@wikispaces.com',
    gender: 'Female',
    ip_address: '113.196.129.65',
  },
  {
    id: 4,
    first_name: 'Wood',
    last_name: 'Staddart',
    email: 'wstaddart3@fda.gov',
    gender: 'Male',
    ip_address: '137.113.230.196',
  },
  {
    id: 5,
    first_name: 'Salem',
    last_name: 'Menicomb',
    email: 'smenicomb4@nature.com',
    gender: 'Male',
    ip_address: '87.49.73.41',
  },
  {
    id: 6,
    first_name: 'Gretta',
    last_name: 'Mancer',
    email: 'gmancer5@hugedomains.com',
    gender: 'Female',
    ip_address: '224.79.237.105',
  },
  {
    id: 7,
    first_name: 'Winnie',
    last_name: 'Bramsen',
    email: 'wbramsen6@yale.edu',
    gender: 'Female',
    ip_address: '196.128.128.178',
  },
  {
    id: 8,
    first_name: 'Daron',
    last_name: 'Taunton',
    email: 'dtaunton7@phoca.cz',
    gender: 'Agender',
    ip_address: '158.36.155.252',
  },
  {
    id: 9,
    first_name: 'Eba',
    last_name: 'Kelloway',
    email: 'ekelloway8@webmd.com',
    gender: 'Female',
    ip_address: '183.71.240.150',
  },
  {
    id: 10,
    first_name: 'Iormina',
    last_name: 'Fassmann',
    email: 'ifassmann9@tmall.com',
    gender: 'Female',
    ip_address: '64.141.75.167',
  },
];
