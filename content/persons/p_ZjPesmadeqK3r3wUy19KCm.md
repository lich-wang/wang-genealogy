---
schema: wang-person/v1
id: p_ZjPesmadeqK3r3wUy19KCm
status: active
merged_into: null
display_name: 王一言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGkMHdeJM1PdjGA8uS9JCc
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJX86nwMQK4o7Lv9Ux92e4
          claim_id: c_pGkMHdeJM1PdjGA8uS9JCc
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
          stance: supports
          locator: CBDB:200332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200332）
          source: &a1
            id: s_1xkHV2Sz75Jw9Yw4X4DzT9
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 200332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200332&o=json
            external_identifier: CBDB:200332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DGbrgGZQVbb18f8VbH3ijM
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wc1u7L1dTHCo46qQLpZSF3
          claim_id: c_DGbrgGZQVbb18f8VbH3ijM
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_123GHLtJ5GeCoJC5V6aJz6
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
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
        - id: cs_fA8zBP728CdD4E5QaKxMsn
          claim_id: c_123GHLtJ5GeCoJC5V6aJz6
          source_id: s_1xkHV2Sz75Jw9Yw4X4DzT9
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
  ancestors: []
  descendants: []
  other: []
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1449年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一言（CBDB 200332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200332&o=json)
