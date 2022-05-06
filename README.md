# docker-start

# Task 1

#### Run MySQL container and connect to the SQL client

Pull the MySQL image locally.

    docker pull mysql

Run the instance of MySQL container binding the container's port to the host's port.

    docker run --name test-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD='pass' mysql

Connect to DBeaver.

