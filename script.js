const lessons = [
    { title: "Aula 01 - Cadastro de Contratos - Disponível", videoId: "https://www.canva.com/design/DAGFNbeY93Q/C9CQ5gLIhFdv-3HvZVqPWw/watch?embed", type: "canva" },
    { title: "Aula 02 - Proposta Negociada - Pendente", videoId: "", type: "canva" },
    { title: "Aula 02 - Solicitar Proposta - Pendente", videoId: "", type: "canva" },
   // { title: "Introdução ao HTML", videoId: "dD2EISBDjWM", type: "youtube" },
   // { title: "Tags e Atributos", videoId: "fDdgPuKUoAY", type: "youtube" },
   // { title: "Introdução ao CSS", videoId: "yfoY53QXEnI", type: "youtube" },
   // { title: "Seletores e Propriedades", videoId: "1Rs2ND1ryYc", type: "youtube" }
];

document.addEventListener("DOMContentLoaded", () => {
    const courseTitleElement = document.getElementById("course-title");
    const videoElement = document.getElementById("video");

    lessons.forEach((lesson) => {
        const lessonElement = document.createElement("li");
        lessonElement.textContent = lesson.title;
        lessonElement.addEventListener("click", () => {
            courseTitleElement.textContent = lesson.title;
            if (lesson.type === "youtube") {
                videoElement.src = `https://www.youtube.com/embed/${lesson.videoId}`;
            } else if (lesson.type === "canva") {
                videoElement.src = lesson.videoId;
            }
        });
        document.getElementById("lessons").appendChild(lessonElement);
    });
});
