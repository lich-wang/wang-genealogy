---
schema: wang-person/v1
id: p_vq4T7ckAWaTW61626HUaZp
status: active
merged_into: null
display_name: 王勗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AWWUNHAXtq87vFDE6Brvd1
        subject_person_id: p_vq4T7ckAWaTW61626HUaZp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7VRx6b2WiiHr46GD18kLyr
          claim_id: c_AWWUNHAXtq87vFDE6Brvd1
          source_id: s_cDdDwCmtsykt13Nwj2zdjR
          stance: supports
          locator: CBDB:119749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119749）
          source: &a1
            id: s_cDdDwCmtsykt13Nwj2zdjR
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 119749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119749&o=json
            external_identifier: CBDB:119749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VUirgTwMKCF4gbAEjpyYNj
        subject_person_id: p_vq4T7ckAWaTW61626HUaZp
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
        - id: cs_4JZ3hmFj9KD9AVyy61xC9m
          claim_id: c_VUirgTwMKCF4gbAEjpyYNj
          source_id: s_cDdDwCmtsykt13Nwj2zdjR
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
        id: c_5D_VnqXpWgWDo2zk6qsEld
        subject_person_id: p_vq4T7ckAWaTW61626HUaZp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KvaDyJMUHzeGStoEsTh4se
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_0eiTepQBqaxYY--DGXdw
          claim_id: c_5D_VnqXpWgWDo2zk6qsEld
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: 宋史：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yykPmVJb5Wn59M9QG2gpGt
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 8178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json
            external_identifier: CBDB:8178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KvaDyJMUHzeGStoEsTh4se
        status: active
        display_name: 王倫
        merged_into_person_id: null
  other: []
---

# 王勗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勗 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KvaDyJMUHzeGStoEsTh4se | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 8178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json)
- [中国历代人物传记资料库：王勗（CBDB 119749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119749&o=json)
