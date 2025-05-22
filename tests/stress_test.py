from locust import HttpUser, task, between
import random

class APIUser(HttpUser):
    wait_time = between(1, 2)

    # Lista de nombres a probar
    names = [
        "Carlos",
        "Juan",
        "Pedro",
        "Luis",
        "Fernando",
        "Marcos",
        "Daniel",
    ]

    @task
    def name_endpoint(self):
        random_names = random.choice(self.names)

        self.client.post(
            "/name",
            json={"name": random_names},
            headers={"Content-Type": "application/json"},
        )
