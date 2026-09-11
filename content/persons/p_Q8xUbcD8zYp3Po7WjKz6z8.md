---
schema: wang-person/v1
id: p_Q8xUbcD8zYp3Po7WjKz6z8
status: active
merged_into: null
display_name: 王侁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f9oDhDUoUK9y9sjYBYP9M
        subject_person_id: p_Q8xUbcD8zYp3Po7WjKz6z8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qe9M6DSbm3Zpba21rbupbX
          claim_id: c_3f9oDhDUoUK9y9sjYBYP9M
          source_id: s_GkVtZJ7hXU3mGfGn1LXorG
          stance: supports
          locator: CBDB:309963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309963）
          source: &a1
            id: s_GkVtZJ7hXU3mGfGn1LXorG
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 309963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309963&o=json
            external_identifier: CBDB:309963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e51oVZnd4a6Zyxj817MFsc
        subject_person_id: p_Q8xUbcD8zYp3Po7WjKz6z8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 309963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TXRZ0I-MNuz1lkH9lPnKxi
          claim_id: c_e51oVZnd4a6Zyxj817MFsc
          source_id: s_GkVtZJ7hXU3mGfGn1LXorG
          stance: supports
          locator: CBDB:309963
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

# 王侁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侁 | accepted |
| bio.summary | 王侁，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 309963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侁（CBDB 309963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309963&o=json)
