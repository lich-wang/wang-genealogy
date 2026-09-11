---
schema: wang-person/v1
id: p_UiYG61JS63WuTTcS6Sh5b3
status: active
merged_into: null
display_name: 王寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DGefmXEGXyKt9pDQSaaQnr
        subject_person_id: p_UiYG61JS63WuTTcS6Sh5b3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xat4TdzeZYdLPFBwd2GpWA
          claim_id: c_DGefmXEGXyKt9pDQSaaQnr
          source_id: s_AAQsNUF3pT7QCLbW6H68bU
          stance: supports
          locator: CBDB:35524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35524）
          source: &a1
            id: s_AAQsNUF3pT7QCLbW6H68bU
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 35524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35524&o=json
            external_identifier: CBDB:35524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aLxYG8pFUYTVALA6q9nPvg
        subject_person_id: p_UiYG61JS63WuTTcS6Sh5b3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H1y77wRLNy3Af1iC5VcVbW
          claim_id: c_aLxYG8pFUYTVALA6q9nPvg
          source_id: s_AAQsNUF3pT7QCLbW6H68bU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iJpNnaXgjFgWQ0ynvusFSa
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UiYG61JS63WuTTcS6Sh5b3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsNUbLjf9WNwSFpWAKjTL0
          claim_id: c_iJpNnaXgjFgWQ0ynvusFSa
          source_id: s_AAQsNUF3pT7QCLbW6H68bU
          stance: supports
          locator: CBDB 双向互证（祖父 王斯覺 ⇄ 孫 王寶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 35524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35524&o=json)
