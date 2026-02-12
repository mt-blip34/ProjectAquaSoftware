# bar.py
import matplotlib.pyplot as plt
import numpy as np

# 1️⃣ Define your class names and metrics
classes = ['bottle', 'polythene', 'styrofoam']
mAP50 = [0.578, 0.745, 0.794]
mAP50_95 = [0.512, 0.612, 0.365]

# 2️⃣ Prepare x-axis positions
x = np.arange(len(classes))  # positions for each class
width = 0.35  # width of bars

# 3️⃣ Create the bar chart
fig, ax = plt.subplots(figsize=(8,5))
rects1 = ax.bar(x - width/2, mAP50, width, label='mAP50')
rects2 = ax.bar(x + width/2, mAP50_95, width, label='mAP50-95')

# 4️⃣ Add labels and title
ax.set_ylabel('Score')
ax.set_title('Class-wise YOLOv8 Performance')
ax.set_xticks(x)
ax.set_xticklabels(classes)
ax.set_ylim(0,1)
ax.legend()

# 5️⃣ Add numbers on top of bars
for rect in rects1 + rects2:
    height = rect.get_height()
    ax.annotate(f'{height:.2f}',
                xy=(rect.get_x() + rect.get_width() / 2, height),
                xytext=(0, 3),
                textcoords="offset points",
                ha='center', va='bottom')

# 6️⃣ Show the chart
plt.show()