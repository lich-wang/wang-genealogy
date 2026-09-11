---
schema: wang-person/v1
id: p_Q6CgNr9B375zCyJ9surhMa
status: active
merged_into: null
display_name: 王孚伯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f1HabpDv3vXNBEksWRPkk6
        subject_person_id: p_Q6CgNr9B375zCyJ9surhMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V3M93TEUVZYF7dJ3muxCLK
          claim_id: c_f1HabpDv3vXNBEksWRPkk6
          source_id: s_N3fHJ9i8JHezBJuUvFipN7
          stance: supports
          locator: CBDB:637005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637005）
          source: &a1
            id: s_N3fHJ9i8JHezBJuUvFipN7
            source_type: api_record
            title: 中国历代人物传记资料库：王孚伯（CBDB 637005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637005&o=json
            external_identifier: CBDB:637005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5J4WWmdBDxAuz72CFenLvX
        subject_person_id: p_Q6CgNr9B375zCyJ9surhMa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚伯，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wM1E_CjKqudreQSSLn127n
          claim_id: c_5J4WWmdBDxAuz72CFenLvX
          source_id: s_N3fHJ9i8JHezBJuUvFipN7
          stance: supports
          locator: CBDB:637005
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

# 王孚伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孚伯 | accepted |
| bio.summary | 王孚伯，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孚伯（CBDB 637005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637005&o=json)
