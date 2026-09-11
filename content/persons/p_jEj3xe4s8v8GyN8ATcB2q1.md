---
schema: wang-person/v1
id: p_jEj3xe4s8v8GyN8ATcB2q1
status: active
merged_into: null
display_name: 王宗舜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q753rGJHtKH3RyMZwzAZ67
        subject_person_id: p_jEj3xe4s8v8GyN8ATcB2q1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w2qfAdLV9CryKDSUBDryKG
          claim_id: c_q753rGJHtKH3RyMZwzAZ67
          source_id: s_F5yyiH9EAK3DEA3GHPEG7P
          stance: supports
          locator: CBDB:223625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223625）
          source: &a1
            id: s_F5yyiH9EAK3DEA3GHPEG7P
            source_type: api_record
            title: 中国历代人物传记资料库：王宗舜（CBDB 223625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223625&o=json
            external_identifier: CBDB:223625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8GXc3f4d453o2N2Eg5c5qH
        subject_person_id: p_jEj3xe4s8v8GyN8ATcB2q1
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
        - id: cs_o3pi6s8SEZeeCq4ee77FrL
          claim_id: c_8GXc3f4d453o2N2Eg5c5qH
          source_id: s_F5yyiH9EAK3DEA3GHPEG7P
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
  descendants:
    - claim:
        id: c_Ovzx-w7IFnpA0tBkninQkf
        subject_person_id: p_jEj3xe4s8v8GyN8ATcB2q1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3hY5he8M9mkvGyZik66bM3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5yXhZ_ev5p3M0viCOJpKLc
          claim_id: c_Ovzx-w7IFnpA0tBkninQkf
          source_id: s_F5yyiH9EAK3DEA3GHPEG7P
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3hY5he8M9mkvGyZik66bM3
        status: active
        display_name: 王室垣
        merged_into_person_id: null
  other: []
---

# 王宗舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗舜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3hY5he8M9mkvGyZik66bM3 | 王室垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗舜（CBDB 223625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223625&o=json)
