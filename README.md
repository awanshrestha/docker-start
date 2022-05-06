# docker-start

# Task 1

#### Run MySQL container and connect to the SQL client

Pull the MySQL image locally.

    docker pull mysql

Run the instance of MySQL container binding the container's port to the host's port.

    docker run --name test-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD='pass' mysql

Connect to DBeaver.

# Task 2

#### Bind container application port to external network with Dockerfile

Switch to 'task-2' branch

In the directory that has the Dockerfile, build docker image.

    docker build . -t awanshrestha/docker-start-2

Run the image.

    docker run -p 5000:3000 awanshrestha/docker-start-2

Port 3000 inside of container mapped to port 5000 on host machine.

Open http://localhost:5000 on browser OR

    curl -i localhost:5000

# Task 3

#### Create a Basic API with Database Communication using Docker compose

Start the application with docker compose. 

    docker-compose up
    
### API Endpoints

- Endpoint: http://localhost:3000

| Request | Description |  |
| :--- | :--- | :--- |
| `GET /` | Server test |
| `GET /connect` | Check Connection with DB |
| `GET /init` | Create user table |
| `POST /insert` | Insert name into table | {"name": "Name"} |
| `GET /fetch` | Show data from table |

