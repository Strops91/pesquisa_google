import { useState } from 'react';
import './App.css';
import { Box, Button, Stack, TextField } from '@mui/material';

function ContainedButtons() {
  // Estado para armazenar o valor do TextField
  const [searchText, setSearchText] = useState('');

  // Função que será chamada quando o texto mudar
  const handleInputChange = (event: { target: { value: any; }; }) => {
    const textoDigitado = event.target.value; // Pega o valor atual do input
    setSearchText(textoDigitado); // Atualiza o estado
    logarNoConsole(textoDigitado); // Chama a função que exibe no console
  };

  // Const que exibe no console o valor digitado
  const logarNoConsole = (texto: any) => {
    console.log('', texto);
  };

  // Função chamada ao clicar no botão "PESQUISA"
  const handleSearch = () => {
    console.log('Botão pressionado! Texto atual:', searchText);
    alert(`Você pesquisou por: "${searchText}"`);
  };


  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <TextField
        id="outlined-basic"
        label="Caixa de Pesquisa"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleInputChange} // Chama handleInputChange ao digitar
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '24px',
          },
        }}
      />
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            borderRadius: '24px',
            width: '150px',
            height: '40px',
          }}
        >
          PESQUISA
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: '24px',
            width: '150px',
            height: '40px',
          }}
        >
          SORTUDO
        </Button>
      </Stack>
    </Stack>
  );
}

function App() {
  


  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          gap: 3,
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          color:"#887"
        }}
      >
        <div>
      <img 
        src="https://lh3.googleusercontent.com/DUefEo6jQ2MMaYYjVLG10F33_doby3VdbdStiAABuUGMr4skgkCgwoRZ-pihqYMkTV2Xd4x47E5CKQbO_d1r_STOEtWFL497RTk3tuYq8w=s660" 
        alt="Imagem da web"
        width="550" // opcional
        height="200" // opcional
      />
    </div>
        <ContainedButtons />
      </Box>
    </>
  );
}

export default App;