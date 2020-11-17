FROM mysql:5.5
# setting db and pw to -, to erase out originally hardcoded db name and password
ENV MYSQL_DATABASE -
ENV MYSQL_ROOT_PASSWORD -
COPY dump.sql /docker-entrypoint-initdb.d/