---
schema: wang-person/v1
id: p_722C8yooBJQZAw9cP1ZnKd
status: active
merged_into: null
display_name: 王之春
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8UDm2UuQLWmJ5Fd2KPkjc7
        subject_person_id: p_722C8yooBJQZAw9cP1ZnKd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yjPKkefRxeW4fKdhEtZV6M
          claim_id: c_8UDm2UuQLWmJ5Fd2KPkjc7
          source_id: s_a9hEXQ2vi6RpiEMLeLUFyK
          stance: supports
          locator: CBDB:703802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703802）
          source: &a1
            id: s_a9hEXQ2vi6RpiEMLeLUFyK
            source_type: api_record
            title: 中国历代人物传记资料库：王之春（CBDB 703802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703802&o=json
            external_identifier: CBDB:703802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8NdGr7R2rfWVrPAN6jaYNN
        subject_person_id: p_722C8yooBJQZAw9cP1ZnKd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4VMigWqrEFpQ3imTDfvKkJ
          claim_id: c_8NdGr7R2rfWVrPAN6jaYNN
          source_id: s_a9hEXQ2vi6RpiEMLeLUFyK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wwhn6iq0j3xLIWyNn8O46H
        subject_person_id: p_iC9eyW5EGTjEu2z7hi9uMs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_722C8yooBJQZAw9cP1ZnKd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9imiwMXEFLSxuH0xFp3352
          claim_id: c_Wwhn6iq0j3xLIWyNn8O46H
          source_id: s_a9hEXQ2vi6RpiEMLeLUFyK
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iC9eyW5EGTjEu2z7hi9uMs
        status: active
        display_name: 王士階
        merged_into_person_id: null
  children:
    - claim:
        id: c_MN5ZPNg3Kku4nhZZcb8OFO
        subject_person_id: p_722C8yooBJQZAw9cP1ZnKd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYQb99EiX4ELJ1Y5NrCF89
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZitajB9kFsvTgsecMY15-
          claim_id: c_MN5ZPNg3Kku4nhZZcb8OFO
          source_id: s_a9hEXQ2vi6RpiEMLeLUFyK
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FYQb99EiX4ELJ1Y5NrCF89
        status: active
        display_name: 王德新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iC9eyW5EGTjEu2z7hi9uMs | 王士階 | accepted |
| children | p_FYQb99EiX4ELJ1Y5NrCF89 | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之春（CBDB 703802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703802&o=json)
