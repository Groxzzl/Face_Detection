import cv2
import time

# setup camera/webcam
camera = cv2.VideoCapture(0, cv2.CAP_V4L2)  # backend V4L2 biar lebih ringan di Linux
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
# model deteksi
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# paramater
FRAME_SKIP = 3  # deteksi tiap 3 frame sekali
SCALE_FACTOR = 0.5  # skala grayscale kecil biar lebih cepat

# main loop
def main():
    last_faces = []
    frame_count = 0
    fps_time = time.time()
    fps = 0

    while True:
        ret, frame = camera.read()
        if not ret:
            print(" Kamera tidak terdeteksi, silahkan cek index camera!.")
            break

        frame_count += 1
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # deteksi cuma tiap beberapa frame sekali
        if frame_count % FRAME_SKIP == 0:
            small_gray = cv2.resize(gray, (0, 0), fx=SCALE_FACTOR, fy=SCALE_FACTOR)
            faces = face_cascade.detectMultiScale(
                small_gray,
                scaleFactor=1.1,
                minNeighbors=5,
                minSize=(30, 30)
            )
            # scale balik posisi ke ukuran asli
            last_faces = [(int(x / SCALE_FACTOR), int(y / SCALE_FACTOR),
                           int(w / SCALE_FACTOR), int(h / SCALE_FACTOR)) for (x, y, w, h) in faces]

        # gambar kotak di wajah terakhir yang terdeteksi
        for (x, y, w, h) in last_faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # hitung dan tampilkan FPS
        now = time.time()
        if now - fps_time >= 1.0:
            fps = frame_count / (now - fps_time)
            fps_time = now
            frame_count = 0

        cv2.putText(frame, f"FPS: {fps:.1f}", (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 0), 2)

        cv2.imshow("Fast Face Detection (OpenCV)", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    camera.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
