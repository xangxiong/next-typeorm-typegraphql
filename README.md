# next-typeorm-typegraphql
Use for test and demonstrate issues

# Dev Setup
1. Install Python (Require to install sqlite3 NPM)

    apt-get install -y python

2. Install Dev Dependencies

    cd next-typeorm-typegraphql
    yarn install

3. Run TypeORM Migrations

    yarn typeorm migration:run -t=each
