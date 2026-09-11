---
schema: wang-person/v1
id: p_vLHvb3BCMGxfLW94457af3
status: active
merged_into: null
display_name: 王亮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1epbnU1gGdymUwdELCAxvW
        subject_person_id: p_vLHvb3BCMGxfLW94457af3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M9RZkFyXmQF7TW7VLwCQuk
          claim_id: c_1epbnU1gGdymUwdELCAxvW
          source_id: s_oCYEHgJPZWXEAYnZFErUwk
          stance: supports
          locator: CBDB:126595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126595）
          source: &a1
            id: s_oCYEHgJPZWXEAYnZFErUwk
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 126595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126595&o=json
            external_identifier: CBDB:126595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mWTmR861pGQ1NhoFBtTTge
        subject_person_id: p_vLHvb3BCMGxfLW94457af3
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
        - id: cs_ZD4hJUSjCoQCC4FeMS2R9v
          claim_id: c_mWTmR861pGQ1NhoFBtTTge
          source_id: s_oCYEHgJPZWXEAYnZFErUwk
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
        id: c_HfP4ZUEDUulV-FaFj-QMq0
        subject_person_id: p_dcx78QKGBJjP5G1Km2dYKA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vLHvb3BCMGxfLW94457af3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7zxYzb0eaAweIJjx7RK6B
          claim_id: c_HfP4ZUEDUulV-FaFj-QMq0
          source_id: s_9e7UpbMGbCcky2KhFY1jGD
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9e7UpbMGbCcky2KhFY1jGD
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 217339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217339&o=json
            external_identifier: CBDB:217339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dcx78QKGBJjP5G1Km2dYKA
        status: active
        display_name: 王度
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_dcx78QKGBJjP5G1Km2dYKA | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 217339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217339&o=json)
- [中国历代人物传记资料库：王亮（CBDB 126595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126595&o=json)
