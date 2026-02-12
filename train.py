from ultralytics import YOLO

if __name__ == "__main__":
    # Load YOLOv8n pretrained model
    model = YOLO("yolov8n.pt")

    # Train the model
    model.train(
        data="dataset/data.yaml",
        epochs=10,
        imgsz=640,
        batch=8,
        device=0  # GPU if available
    )
    