---
schema: wang-person/v1
id: p_6bD39oJgCZFf2mgAdWZgwd
status: active
merged_into: null
display_name: 王兆和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZqPf7KjuEABUMFpsQvUxQd
        subject_person_id: p_6bD39oJgCZFf2mgAdWZgwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpkD75u3SJcFh8NhprD79r
          claim_id: c_ZqPf7KjuEABUMFpsQvUxQd
          source_id: s_XMQ8M2X99MEs7Tp8481A2F
          stance: supports
          locator: CBDB:636193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636193）
          source: &a1
            id: s_XMQ8M2X99MEs7Tp8481A2F
            source_type: api_record
            title: 中国历代人物传记资料库：王兆和（CBDB 636193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636193&o=json
            external_identifier: CBDB:636193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9EkFQcJVP2G7z8A8uDSXN3
        subject_person_id: p_6bD39oJgCZFf2mgAdWZgwd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆和，清人物。籍贯三原，曾任知縣。（中国历代人物传记资料库 CBDB 636193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vYL3SgFgq07_aOpiqX66_M
          claim_id: c_9EkFQcJVP2G7z8A8uDSXN3
          source_id: s_XMQ8M2X99MEs7Tp8481A2F
          stance: supports
          locator: CBDB:636193
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

# 王兆和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆和 | accepted |
| bio.summary | 王兆和，清人物。籍贯三原，曾任知縣。（中国历代人物传记资料库 CBDB 636193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆和（CBDB 636193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636193&o=json)
