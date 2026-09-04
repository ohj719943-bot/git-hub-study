#uv pip install diffusers transformers accelerate torch
from diffusers import StableDiffusionPipeline
import torch

model_id = "sd-legacy/stable-diffusion-v1-5"

pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")# mps

prompt = "a photo of an astronaut riding a horse on mars"
image = pipe(prompt).images[0]

image.save("image.png")