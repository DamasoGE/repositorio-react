// Obtener referencias
const uploadForm = document.getElementById("uploadForm");
const fileList = document.getElementById("fileList");

let chartInstance = undefined //evita que la aplicación estalle por no estar definida la variable

// Función para listar los archivos subidos
async function fetchFiles() {
  const response = await fetch("/uploads");
  if (!response.ok) {
    console.error("Error al obtener los archivos");
    return;
  }
  const data = await response.json();
  const { files, totalSize } = data;

  fileList.innerHTML="";

  if(files.length!=0){
    console.log(files);
    fileList.innerHTML = ""; // Limpiar la lista antes de renderizar

    files.forEach((file) => {
      const div = document.createElement("div");
      div.className =
        "text-xs grid grid grid-cols-[3fr_1fr_1fr_1fr] grid-cols-4 gap-4 bg-gray-100 p-3 rounded-lg shadow-sm items-center";
    
      div.innerHTML = `
        <span class="font-semibold">${file.name}</span>
        <span>${(file.size / 1024).toFixed(2)} KB</span>
        <span>${new Date(file.created).toLocaleDateString()}</span>
        <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600" data-filename="${file.name}">Eliminar</button>
      `;
    
      fileList.appendChild(div);
    });
  }else{
    const noFiles = document.createElement('li');
    noFiles.textContent = "Aún no hay archivos subidos"
    fileList.appendChild(noFiles);
  }

 // Utilizamos la función para crear gráficos
 if(chartInstance){
  chartInstance.destroy();
 }
 chartInstance = chartConstructor(data);

  // Agregar eventos de eliminación
  document.querySelectorAll("button[data-filename]").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const fileName = e.target.dataset.filename;
      await deleteFile(fileName);
      fetchFiles(); // Actualizar la lista
    });
  });

}

const chartConstructor = (data) =>{ //Función para crear el gráfico a partir de la data

  const { files, totalSize } = data;

  const labels = files.map(file => file.name);
  const sizes = files.map(file => (file.size/1024).toFixed(2));
 
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  }
 
  const backgroundColors = labels.map(() => getRandomColor());
 
  const divChart = document.getElementById('canvas-container');
  const fileChart = document.getElementById('fileChart');
  fileChart.className="max-w-full max-h-60"
  const ctx = document.getElementById('fileChart').getContext('2d');
 
  divChart.className="m-auto flex flex-col-reverse items-center justify-center ";
 
  let paragraphCanvas = document.getElementById('total-size-paragraph'); 
  if (!paragraphCanvas) { 
    paragraphCanvas = document.createElement('p');
    paragraphCanvas.id = 'total-size-paragraph'; 
    paragraphCanvas.classList = "m-2 text-center";
    divChart.appendChild(paragraphCanvas);
  }
  paragraphCanvas.textContent = `Espacio total: ${(totalSize / 1024).toFixed(2)} KB`;

  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tamaño del archivo en %',
        data: sizes,
        fill: false,
        borderColor: backgroundColors,
        backgroundColor: backgroundColors,
        tension: 0.1,
      }]
    },
 
    options: {
    responsive: true,
    layout: {
      padding: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        titleFont: {
          family: 'Arial',
          size: 10,
          weight: 'bold'
        },
        bodyFont: {
          family: 'Arial',
          size: 10,
        },
        callbacks: {
          label: function(tooltipItem) {
            return `${sizes[tooltipItem.dataIndex]} KB`;
          }
        }
      }
    }
    }
  });
}

// Función para eliminar archivo
async function deleteFile(fileName) {
  const response = await fetch(`/uploads/${fileName}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.error(`Error al eliminar el archivo: ${fileName}`);
  }
}

// Manejador de envío del formulario de subida
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(uploadForm);
  const response = await fetch("/uploads", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    uploadForm.reset(); // Limpiar el formulario
    fetchFiles(); // Actualizar la lista
  } else {
    console.error("Error al subir el archivo");
  }
});

// Cargar la lista de archivos al cargar la página
document.addEventListener("DOMContentLoaded", fetchFiles);
