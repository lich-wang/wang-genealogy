---
schema: wang-person/v1
id: p_Fa5bwh1NfWf6iznUTZjp4j
status: active
merged_into: null
display_name: 王銳新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKiy4aS1pz7WGeiKqxotXH
        subject_person_id: p_Fa5bwh1NfWf6iznUTZjp4j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4L8JSG9qsPiGK58X95MFh6
          claim_id: c_AKiy4aS1pz7WGeiKqxotXH
          source_id: s_jLjnzgB5B369xrdCQsBa1v
          stance: supports
          locator: CBDB:72078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72078）
          source: &a1
            id: s_jLjnzgB5B369xrdCQsBa1v
            source_type: api_record
            title: 中国历代人物传记资料库：王銳新（CBDB 72078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72078&o=json
            external_identifier: CBDB:72078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uNB2U15VNxaH8SFdhQwNHU
        subject_person_id: p_Fa5bwh1NfWf6iznUTZjp4j
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Axkobni284ztk92mqe3zLx
          claim_id: c_uNB2U15VNxaH8SFdhQwNHU
          source_id: s_jLjnzgB5B369xrdCQsBa1v
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
        id: c_rPpKJ7gCEd7LkNtGtVidgq
        subject_person_id: p_Fa5bwh1NfWf6iznUTZjp4j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3LNNBe7Bt5wMwyTgXNScE
          claim_id: c_rPpKJ7gCEd7LkNtGtVidgq
          source_id: s_jLjnzgB5B369xrdCQsBa1v
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

# 王銳新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳新 | accepted |
| birth.date | 1850年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳新（CBDB 72078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72078&o=json)
