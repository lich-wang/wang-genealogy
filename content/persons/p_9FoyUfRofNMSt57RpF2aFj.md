---
schema: wang-person/v1
id: p_9FoyUfRofNMSt57RpF2aFj
status: active
merged_into: null
display_name: 王奮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fE7jDDEDDEoSGfQfjqvCQD
        subject_person_id: p_9FoyUfRofNMSt57RpF2aFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iZMLUb6RqqKRUHAKw5M8DF
          claim_id: c_fE7jDDEDDEoSGfQfjqvCQD
          source_id: s_QeraXCQTTdi7s6fBKiBSCR
          stance: supports
          locator: CBDB:636960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636960）
          source: &a1
            id: s_QeraXCQTTdi7s6fBKiBSCR
            source_type: api_record
            title: 中国历代人物传记资料库：王奮（CBDB 636960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636960&o=json
            external_identifier: CBDB:636960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NibXKrif2NC38TV3CDN2Qa
        subject_person_id: p_9FoyUfRofNMSt57RpF2aFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奮，清人物。籍贯伏羌，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636960）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z9YdvtE_hDI_sfWz_hza7T
          claim_id: c_NibXKrif2NC38TV3CDN2Qa
          source_id: s_QeraXCQTTdi7s6fBKiBSCR
          stance: supports
          locator: CBDB:636960
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

# 王奮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奮 | accepted |
| bio.summary | 王奮，清人物。籍贯伏羌，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奮（CBDB 636960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636960&o=json)
