import { decodeASTC } from "./astc.js";

self.onmessage = (event) => {
    try {
        const {
            data,
            width,
            height,
            blockWidth,
            blockHeight
        } = event.data;

        self.postMessage({
            type: "status",
            message: "Worker iniciado..."
        });

        const compressed = new Uint8Array(data);

        self.postMessage({
            type: "status",
            message: "Dados recebidos: " + compressed.length + " bytes"
        });

        const rgba = decodeASTC(
            compressed,
            width,
            height,
            blockWidth,
            blockHeight,
            (progress) => {
                self.postMessage({
                    type: "progress",
                    value: progress
                });
            }
        );

        self.postMessage(
            {
                type: "done",
                rgba: rgba.buffer
            },
            [rgba.buffer]
        );

    } catch (error) {

        self.postMessage({
            type: "error",
            message:
                "Erro dentro do decoder:\n" +
                (error?.stack || error?.message || String(error))
        });
    }
};

self.addEventListener("error", (event) => {
    self.postMessage({
        type: "error",
        message:
            "Erro ao carregar/executar o Worker:\n" +
            (event.message || "erro desconhecido")
    });
});

self.addEventListener("unhandledrejection", (event) => {
    self.postMessage({
        type: "error",
        message:
            "Promise rejeitada no Worker:\n" +
            (event.reason?.stack ||
             event.reason?.message ||
             String(event.reason))
    });
});