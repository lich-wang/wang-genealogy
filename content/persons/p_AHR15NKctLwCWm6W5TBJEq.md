---
schema: wang-person/v1
id: p_AHR15NKctLwCWm6W5TBJEq
status: active
merged_into: null
display_name: 王一言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_puGL3DNStzveu4dd72KPoa
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
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
        - id: cs_TtK6zvqcQ4bXJpNm74e5aj
          claim_id: c_puGL3DNStzveu4dd72KPoa
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: CBDB:297183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297183）
          source: &a1
            id: s_V4r3VEJE6ghU8AhQU1Wdx5
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 297183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297183&o=json
            external_identifier: CBDB:297183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MDSabAUn4uMFzFZgUs71u
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
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
        - id: cs_J98xgoLmEdJfGfexF9mqSk
          claim_id: c_8MDSabAUn4uMFzFZgUs71u
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YoUG8ZRIydYcbQq1sbTpwq
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpWoKDYHlSQmx1rttif1gS
          claim_id: c_YoUG8ZRIydYcbQq1sbTpwq
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DZwm7RH4zQwJTHWtWTtHUQ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
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
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DZwm7RH4zQwJTHWtWTtHUQ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一言（CBDB 297183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297183&o=json)
