---
schema: wang-person/v1
id: p_e2PzTegFYxZD5PTeHWmvco
status: active
merged_into: null
display_name: 王均政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WP3yMMuhfUxUe3QvrpP6Sw
        subject_person_id: p_e2PzTegFYxZD5PTeHWmvco
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ShfMb1NZ8qDEK3CtKyxkH1
          claim_id: c_WP3yMMuhfUxUe3QvrpP6Sw
          source_id: s_dLL1orM4Ls7EV1f6GCkyFv
          stance: supports
          locator: CBDB:636690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636690）
          source: &a1
            id: s_dLL1orM4Ls7EV1f6GCkyFv
            source_type: api_record
            title: 中国历代人物传记资料库：王均政（CBDB 636690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636690&o=json
            external_identifier: CBDB:636690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_693K14Bn4yUcEcETcXLBas
        subject_person_id: p_e2PzTegFYxZD5PTeHWmvco
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均政，清人物。籍贯瓊山，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YKE3AGenxaUQFYQNQH4Yxu
          claim_id: c_693K14Bn4yUcEcETcXLBas
          source_id: s_dLL1orM4Ls7EV1f6GCkyFv
          stance: supports
          locator: CBDB:636690
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

# 王均政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均政 | accepted |
| bio.summary | 王均政，清人物。籍贯瓊山，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王均政（CBDB 636690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636690&o=json)
