---
schema: wang-person/v1
id: p_HDxhjy48rkqkY5J2szXith
status: active
merged_into: null
display_name: 王起琇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_867XhbXtdg83iDRsacb9Tn
        subject_person_id: p_HDxhjy48rkqkY5J2szXith
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MX4ddbWRu6kuN2mrfdJseg
          claim_id: c_867XhbXtdg83iDRsacb9Tn
          source_id: s_z9kNBxA5Cuw2HP7h4388KN
          stance: supports
          locator: CBDB:640354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640354）
          source: &a1
            id: s_z9kNBxA5Cuw2HP7h4388KN
            source_type: api_record
            title: 中国历代人物传记资料库：王起琇（CBDB 640354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640354&o=json
            external_identifier: CBDB:640354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xH5u83GHpYTF7Qm1GU7qtL
        subject_person_id: p_HDxhjy48rkqkY5J2szXith
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
        - id: cs_Xstn7WDfo21iq7TqSMvK8y
          claim_id: c_xH5u83GHpYTF7Qm1GU7qtL
          source_id: s_z9kNBxA5Cuw2HP7h4388KN
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

# 王起琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起琇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起琇（CBDB 640354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640354&o=json)
