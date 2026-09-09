---
schema: wang-person/v1
id: p_yK6DJnxbcmNKEn1jSaMubE
status: active
merged_into: null
display_name: 王心亭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dk9YANU98p1yL2Xt8pmGJh
        subject_person_id: p_yK6DJnxbcmNKEn1jSaMubE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心亭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_29kyscx1TYjHLfgM7137Hu
          claim_id: c_Dk9YANU98p1yL2Xt8pmGJh
          source_id: s_UK1xRLJzo4NSGMoN7n4Enj
          stance: supports
          locator: CBDB:543504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543504）
          source: &a1
            id: s_UK1xRLJzo4NSGMoN7n4Enj
            source_type: api_record
            title: 中国历代人物传记资料库：王心亭（CBDB 543504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543504&o=json
            external_identifier: CBDB:543504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bx5aVEQDiHvLbM7Bm58pFY
        subject_person_id: p_yK6DJnxbcmNKEn1jSaMubE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqHL4iLcbr54zzjkseSKG5
          claim_id: c_Bx5aVEQDiHvLbM7Bm58pFY
          source_id: s_UK1xRLJzo4NSGMoN7n4Enj
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

# 王心亭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心亭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心亭（CBDB 543504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543504&o=json)
