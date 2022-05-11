# docker-with-nginx

# Basic

Start a bare nginx server with docker.

Create a docker-compose file and setup nginx image on it.

    version: '3.9'

    services:
      #nginx
      docker_nginx:
        container_name: docker-nginx-start
        image: nginx
        ports:
          - 80:80

Visit http://localhost

