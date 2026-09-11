---
schema: wang-person/v1
id: p_K8o4eg66vsCrarTLqs1agA
status: active
merged_into: null
display_name: 王克提
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28S74eUCo7wMxGoSvqEP93
        subject_person_id: p_K8o4eg66vsCrarTLqs1agA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克提
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2H16yfwQbHZdLnXEyZ1e7L
          claim_id: c_28S74eUCo7wMxGoSvqEP93
          source_id: s_eQ53C2D45D4u8iguT5U5pM
          stance: supports
          locator: CBDB:636297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636297）
          source: &a1
            id: s_eQ53C2D45D4u8iguT5U5pM
            source_type: api_record
            title: 中国历代人物传记资料库：王克提（CBDB 636297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636297&o=json
            external_identifier: CBDB:636297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EiQmxccWwNu3yH98nq1VLu
        subject_person_id: p_K8o4eg66vsCrarTLqs1agA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克提，清人物。籍贯晉江，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 636297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0kPIQbnuIbwjb5CfX8X4F
          claim_id: c_EiQmxccWwNu3yH98nq1VLu
          source_id: s_eQ53C2D45D4u8iguT5U5pM
          stance: supports
          locator: CBDB:636297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克提

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克提 | accepted |
| bio.summary | 王克提，清人物。籍贯晉江，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 636297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克提（CBDB 636297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636297&o=json)
