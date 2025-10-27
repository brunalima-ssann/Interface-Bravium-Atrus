// Componente em fase de teste
import { useState, useRef, useEffect } from 'react'
import Styles from '../css/cameraModal.module.css'

function CameraModal({ onClose, onCapture }) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [stream, setStream] = useState(null)
  const [fotoPreview, setFotoPreview] = useState(null)

  useEffect(() => {
    const iniciarCamera = async () => {
      try {
        const novoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        setStream(novoStream)
        if (videoRef.current) {
          videoRef.current.srcObject = novoStream
        }
      } catch (err) {
        alert('Erro ao acessar a câmera: ' + err.message)
      }
    }
    iniciarCamera()

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  const tirarFoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    const imagemUrl = canvas.toDataURL('image/png')
    setFotoPreview(imagemUrl)
  }

  const confirmarFoto = () => {
    if (!fotoPreview) return
    fetch(fotoPreview)
      .then(res => res.blob())
      .then(blob => {
        const arquivo = new File([blob], `foto-${Date.now()}.png`, { type: 'image/png' })
        onCapture(arquivo)
        onClose()
      })
  }

  return (
    <div className={Styles.overlay}>
      <div className={Styles.modal}>
        {!fotoPreview ? (
          <>
            <video ref={videoRef} autoPlay playsInline className={Styles.video} />
            <button onClick={tirarFoto} className={Styles.botaoCapturar}>Tirar Foto</button>
          </>
        ) : (
          <>
            <img src={fotoPreview} alt="Prévia da foto" className={Styles.preview} />
            <div className={Styles.botoes}>
              <button onClick={confirmarFoto} className={Styles.botaoConfirmar}>Confirmar</button>
              <button onClick={() => setFotoPreview(null)} className={Styles.botaoRefazer}>Refazer</button>
            </div>
          </>
        )}
        <button onClick={onClose} className={Styles.botaoFechar}>Fechar</button>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  )
}

export default CameraModal
