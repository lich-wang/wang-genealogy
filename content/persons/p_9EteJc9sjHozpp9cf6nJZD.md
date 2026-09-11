---
schema: wang-person/v1
id: p_9EteJc9sjHozpp9cf6nJZD
status: active
merged_into: null
display_name: 王玖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v28jbGpAALDAGJR591GbFY
        subject_person_id: p_9EteJc9sjHozpp9cf6nJZD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rhLds2sazcKyH99J9adqBv
          claim_id: c_v28jbGpAALDAGJR591GbFY
          source_id: s_GVq5q9SEGa86VL8ZiZYYXu
          stance: supports
          locator: CBDB:522574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（522574）
          source: &a1
            id: s_GVq5q9SEGa86VL8ZiZYYXu
            source_type: api_record
            title: 中国历代人物传记资料库：王玖（CBDB 522574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522574&o=json
            external_identifier: CBDB:522574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kyLNxetrDUARcg6nyXmDEv
        subject_person_id: p_9EteJc9sjHozpp9cf6nJZD
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
        - id: cs_TGbWM2m2tshCS19JJ4w8qY
          claim_id: c_kyLNxetrDUARcg6nyXmDEv
          source_id: s_GVq5q9SEGa86VL8ZiZYYXu
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
        id: c_z8x47C28FN7YiaoOIHxReB
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EteJc9sjHozpp9cf6nJZD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7ucW_isvFaXmJP5MoGQOM
          claim_id: c_z8x47C28FN7YiaoOIHxReB
          source_id: s_GVq5q9SEGa86VL8ZiZYYXu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HT1byH8rxSEHoPMAFQo6uz
        status: active
        display_name: 王翬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_HT1byH8rxSEHoPMAFQo6uz | 王翬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玖（CBDB 522574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522574&o=json)
