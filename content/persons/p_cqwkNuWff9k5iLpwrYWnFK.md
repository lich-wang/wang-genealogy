---
schema: wang-person/v1
id: p_cqwkNuWff9k5iLpwrYWnFK
status: active
merged_into: null
display_name: 王榕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B7vEUYLX5786AMA8V2DdJt
        subject_person_id: p_cqwkNuWff9k5iLpwrYWnFK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vGhQHtKV6CGRFS8VevZNRJ
          claim_id: c_B7vEUYLX5786AMA8V2DdJt
          source_id: s_U26t8nsXRZ57e7JYkB2Fuh
          stance: supports
          locator: CBDB:19418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19418）
          source: &a1
            id: s_U26t8nsXRZ57e7JYkB2Fuh
            source_type: api_record
            title: 中国历代人物传记资料库：王榕（CBDB 19418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19418&o=json
            external_identifier: CBDB:19418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARiuzEvshvdnikxBUeJWBd
        subject_person_id: p_cqwkNuWff9k5iLpwrYWnFK
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
        - id: cs_Sjv1LyWgsPTuDHuDjKB2XR
          claim_id: c_ARiuzEvshvdnikxBUeJWBd
          source_id: s_U26t8nsXRZ57e7JYkB2Fuh
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
        id: c_F5cf2mZclgYA1LVyF9sopu
        subject_person_id: p_cqwkNuWff9k5iLpwrYWnFK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMktqqtIQB-dx0Yv5z45zd
          claim_id: c_F5cf2mZclgYA1LVyF9sopu
          source_id: s_U26t8nsXRZ57e7JYkB2Fuh
          stance: supports
          locator: CBDB 双向互证（孫 王厚之 ⇄ 祖父 王榕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Tgvd3TYyTPXstVT3BwJ3wh
        status: active
        display_name: 王厚之
        merged_into_person_id: null
  other: []
---

# 王榕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榕 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Tgvd3TYyTPXstVT3BwJ3wh | 王厚之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榕（CBDB 19418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19418&o=json)
