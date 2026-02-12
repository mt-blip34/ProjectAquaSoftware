import matplotlib.pyplot as plt

# Define your metrics from training
classes = ['bottle', 'polythene', 'styrofoam']
mAP50 = [0.578, 0.745, 0.794]
mAP50_95 = [0.512, 0.612, 0.365]

# You can also add overall metrics if you like
overall = {'mAP50': 0.706, 'mAP50_95': 0.496}