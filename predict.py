from ultralytics import YOLO

# Load trained model
model = YOLO("runs/detect/train4/weights/best.pt")

# Run predictions on test dataset and save results
results = model.predict(source="dataset/test", save=True)

# Optional: print results for each image
for r in results:
    print(r)