# Use existing docker image as base
FROM ubuntu
# alpine is a simple linux image thats just 5MB

# Install dependency
RUN apt update -y 
RUN apt install redis -y
# this is an alpine specific command

# Tell the image what to do when the container is started
CMD ["redis-server"]
# the command that runs after start