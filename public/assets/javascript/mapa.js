function carregarMapa(enderecos) {
  // Ponto inicial do mapa
  const map = L.map("map").setView([-23.55, -46.64], 15);

  // Camada de mapa
  // Para um mapa escuro (CartoDB Dark Matter)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "© OpenStreetMap contributors © CARTO",
    },
  ).addTo(map);

  // Ícone de display
  const meuIcone = L.icon({
    iconUrl: "../../assets/icons/marcador.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // Lista de endereços para mostrar
  const enderecosParaMarcar = [
    "Avenida Paulista, 10, São Paulo",
    "Avenida Paulista, 150, São Paulo",
    "Avenida Paulista, 352, São Paulo",
    "Avenida Paulista, 500, São Paulo",
  ];

  // Adicionar um delay para nãao ser bloqueado na API
  const aguardar = (ms) => new Promise((res) => setTimeout(res, ms));

  // Adicionar marcadores
  async function plotarPontos(lista) {
    for (const endereco of lista) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

      try {
        const response = await fetch(url, {
          headers: { "User-Agent": "VOOH_Dashboard_App/1.0" },
        });

        const data = await response.json();

        if (data.length > 0) {
          const { lat, lon, display_name } = data[0];

          // Adicionar um marcador no mapa
          L.marker([lat, lon], { icon: meuIcone })
            .addTo(map)
            .bindPopup(
              `<b style="color: var(--color-purple)">Display</b><br>${endereco}`,
            );

          console.log("Endereço localizado");
        }
      } catch (error) {
        console.error(`Erro ao buscar ${endereco}:`, error);
      }

      await aguardar(1200);
    }
  }

  // Inicia os marcadores no mapa
  plotarPontos(enderecosParaMarcar);
}
