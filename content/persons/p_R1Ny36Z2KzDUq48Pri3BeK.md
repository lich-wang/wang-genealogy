---
schema: wang-person/v1
id: p_R1Ny36Z2KzDUq48Pri3BeK
status: active
merged_into: null
display_name: 王慎行
cbdb_id: 22055
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2wiuAfM6CnWEzWETDiQTu8
        subject_person_id: p_R1Ny36Z2KzDUq48Pri3BeK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎行，宋人物。CBDB 记录其籍贯记录为洛陽，曾任朝奉郎、國子監博士。中国历代人物传记资料库（CBDB）以人物编号 22055 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PRrhqGwa2j4BJyev1s3Trp
          claim_id: c_2wiuAfM6CnWEzWETDiQTu8
          source_id: s_tU3SxMAj6AieQNCJ7p2LG2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_tU3SxMAj6AieQNCJ7p2LG2
            source_type: api_record
            title: 维基数据：王慎行（Q45401757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401757
            external_identifier: Q45401757
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_R8-vA1qdsos6ql59a5Jom1
          claim_id: c_2wiuAfM6CnWEzWETDiQTu8
          source_id: s_AyT9Wy9TU39oHBTwnA8y7H
          stance: supports
          locator: CBDB:22055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AyT9Wy9TU39oHBTwnA8y7H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎行（22055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22055&o=json
            external_identifier: CBDB:22055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.375Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ta3VWBNVPtCJRLvgUrZHce
        subject_person_id: p_R1Ny36Z2KzDUq48Pri3BeK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎行
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TFm2UDYBddtuUh3XiJffGv
          claim_id: c_Ta3VWBNVPtCJRLvgUrZHce
          source_id: s_tU3SxMAj6AieQNCJ7p2LG2
          stance: supports
          locator: Q45401757
          quotation: null
          interpretation_note: null
          source:
            id: s_tU3SxMAj6AieQNCJ7p2LG2
            source_type: api_record
            title: 维基数据：王慎行（Q45401757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401757
            external_identifier: Q45401757
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_djU7fgnxvR6V595RQFrpbL
          claim_id: c_Ta3VWBNVPtCJRLvgUrZHce
          source_id: s_AyT9Wy9TU39oHBTwnA8y7H
          stance: supports
          locator: Q45401757
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ojr4reJfHpK3aDdVu3RvyJ
        subject_person_id: p_8yGvQV64DEaN7zXdMCaL2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R1Ny36Z2KzDUq48Pri3BeK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6bMss1hWGiXWF92h9PZDRt
          claim_id: c_ojr4reJfHpK3aDdVu3RvyJ
          source_id: s_9d6NmxQWLcW1dsP819MSKa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9d6NmxQWLcW1dsP819MSKa
            source_type: api_record
            title: 维基数据：王益恭（Q45401756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401756
            external_identifier: Q45401756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.863Z
            metadata_json: null
        - id: cs_9ikX3yHdEQpBd2vQTG7VyJ
          claim_id: c_ojr4reJfHpK3aDdVu3RvyJ
          source_id: s_tU3SxMAj6AieQNCJ7p2LG2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_DVosK8AF7JhQWix9rFAYgK
          claim_id: c_ojr4reJfHpK3aDdVu3RvyJ
          source_id: s_ESiRG3f9yMVCAnGCJMXcMN
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ESiRG3f9yMVCAnGCJMXcMN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益恭（22054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json
            external_identifier: CBDB:22054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:20.031Z
            metadata_json: null
      object_person:
        id: p_8yGvQV64DEaN7zXdMCaL2M
        status: active
        display_name: 王益恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tkiCJSJwuej2R2gIgFO9Q9
        subject_person_id: p_oXazvgZDCU1eQZ2UVAEZ4j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R1Ny36Z2KzDUq48Pri3BeK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBs7Rmq0NEXDkVZPNQsrp4
          claim_id: c_tkiCJSJwuej2R2gIgFO9Q9
          source_id: s_e5drH5xPh5jbJyVbSxpyNA
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e5drH5xPh5jbJyVbSxpyNA
            source_type: api_record
            title: 中国历代人物传记资料库：王曙（CBDB 1877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json
            external_identifier: CBDB:1877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oXazvgZDCU1eQZ2UVAEZ4j
        status: active
        display_name: 王曙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慎行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎行，宋人物。CBDB 记录其籍贯记录为洛陽，曾任朝奉郎、國子監博士。中国历代人物传记资料库（CBDB）以人物编号 22055 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王慎行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8yGvQV64DEaN7zXdMCaL2M | 王益恭 | accepted |
| ancestors | p_oXazvgZDCU1eQZ2UVAEZ4j | 王曙 | accepted |

## 外部来源

- [维基数据：王慎行（Q45401757）](https://www.wikidata.org/wiki/Q45401757)
- [维基数据：王益恭（Q45401756）](https://www.wikidata.org/wiki/Q45401756)
- [中国历代人物传记资料库：王曙（CBDB 1877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json)
- [CBDB 中国历代人物传记资料库：王慎行（22055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22055&o=json)
- [CBDB 中国历代人物传记资料库：王益恭（22054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json)
