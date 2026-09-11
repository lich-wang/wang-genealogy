---
schema: wang-person/v1
id: p_bMtyyJC14L2RXKkF2m2FYy
status: active
merged_into: null
display_name: 王六鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJrZ1gbs8XB2KBpwfAq7uS
        subject_person_id: p_bMtyyJC14L2RXKkF2m2FYy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b4tcKbV3SBFYtkNP32XNot
          claim_id: c_PJrZ1gbs8XB2KBpwfAq7uS
          source_id: s_toxy15w85jX6JFQfj64EtJ
          stance: supports
          locator: CBDB:636329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636329）
          source: &a1
            id: s_toxy15w85jX6JFQfj64EtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王六鼇（CBDB 636329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636329&o=json
            external_identifier: CBDB:636329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUHcEMfjoHkKDcJ5jryCkz
        subject_person_id: p_bMtyyJC14L2RXKkF2m2FYy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六鼇，清人物。籍贯金堂，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PeZwLHia46w1edK4_fucSq
          claim_id: c_UUHcEMfjoHkKDcJ5jryCkz
          source_id: s_toxy15w85jX6JFQfj64EtJ
          stance: supports
          locator: CBDB:636329
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

# 王六鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六鼇 | accepted |
| bio.summary | 王六鼇，清人物。籍贯金堂，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王六鼇（CBDB 636329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636329&o=json)
