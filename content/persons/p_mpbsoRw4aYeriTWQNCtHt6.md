---
schema: wang-person/v1
id: p_mpbsoRw4aYeriTWQNCtHt6
status: active
merged_into: null
display_name: 王佐卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmPof3wY2khFGYyaQx8TFS
        subject_person_id: p_mpbsoRw4aYeriTWQNCtHt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8wv9T6X9JRFr2Ja1hduYnP
          claim_id: c_XmPof3wY2khFGYyaQx8TFS
          source_id: s_Hghmf2sx3Nw5obD6S7gpX9
          stance: supports
          locator: CBDB:635986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635986）
          source: &a1
            id: s_Hghmf2sx3Nw5obD6S7gpX9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐卿（CBDB 635986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635986&o=json
            external_identifier: CBDB:635986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4NznEsFPj1tqJvgLcG22X
        subject_person_id: p_mpbsoRw4aYeriTWQNCtHt6
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
        - id: cs_yMURFkkBe7XHykfNHZAEkL
          claim_id: c_z4NznEsFPj1tqJvgLcG22X
          source_id: s_Hghmf2sx3Nw5obD6S7gpX9
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

# 王佐卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐卿 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐卿（CBDB 635986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635986&o=json)
