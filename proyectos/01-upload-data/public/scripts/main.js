const uploadForm = document.getElementById("uploadForm");
const fileList = document.getElementById("fileList");

//funcion para subir archivos

const fetchFiles = async () =>{
    try {
        const response = await fetch("/uploads")

        if(!response.ok){
            throw new Error("Error en la respuesta");
        }
        
        const files = await response.json();

        files.forEach( file => {
            const li = document.createElement("li");
            li.className = "flex items-center justify-between p-2 bg-gray-200 border-gray-400 rounded-lg shadow-md"
            li.innerHTML = `
            <span>${file}</span>
            <button class="bg-red-500 text-white px-4 py-3 rounded-lg hover: bg-red-700" data-file=${file}>Eliminar</button>
            `;
            
            fileList.appendChild(li);
        })
        
    } catch (error) {
        console.log("Error: " + error);
    }

    fileList.innerHTML=""; //Limpiamos la lista antes de renderizar

}

const deleteFiles = () =>{
    document.querySelectorAll("button[data-file]").forEach((button)=>{
            button.addEventListener("click", async(event)=>{
                const file = event.target.dataset.filename;
                await deleteFile(file); //hay que crear la función delete

                fetchFiles();
            })
    })
}


uploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(uploadForm); //abre una ventana de selección de archivo

    const response = await fetch("/uploads", {
        method: "POST",
        body: formData
    });

    if(!response.ok){
        throw new Error("Error en la respuesta");
        return;
    }

    uploadForm.reset();

    fetchFiles();
})


async function deleteFile(file){ //hay que hacerlo

    const response = await fetch("/uploads", {
        method: "DELETE",
        body: file
    });

}

document.addEventListener("DOMContentLoaded", () =>{
    fetchFiles();
})