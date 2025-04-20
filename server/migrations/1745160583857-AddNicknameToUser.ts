import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNicknameToUser1745160583857 implements MigrationInterface {
    name = 'AddNicknameToUser1745160583857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "nickname" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nickname"`);
    }

}
