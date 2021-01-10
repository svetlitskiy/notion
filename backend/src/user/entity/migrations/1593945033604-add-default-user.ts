import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDefaultUser1593945033604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users(id, email, "name", surname, password) VALUES(1, 'a.svetlitskiy@gmail.com', 'Alex', 'Svetlitskiy', 'bf400c2a1cbc2c5536aec42018864edb5738ed69bf5488a017a1aead21f888ae05a13c2f30de004a4a6fa4eedeb8c8d62f79712a4f8489e7eca408e57b36c250');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE from users WHERE email='a.svetlitskiy@gmail.com';`,
    );
  }
}
