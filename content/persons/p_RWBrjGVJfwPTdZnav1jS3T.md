---
schema: wang-person/v1
id: p_RWBrjGVJfwPTdZnav1jS3T
status: active
merged_into: null
display_name: 王德華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ExbbSKGScPUn7UC59tVTa
        subject_person_id: p_RWBrjGVJfwPTdZnav1jS3T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RT572XZKBvcLXAAKGBiPXX
          claim_id: c_3ExbbSKGScPUn7UC59tVTa
          source_id: s_5mARpbooXRCbQEnNGgWG1A
          stance: supports
          locator: CBDB:264627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264627）
          source: &a1
            id: s_5mARpbooXRCbQEnNGgWG1A
            source_type: api_record
            title: 中国历代人物传记资料库：王德華（CBDB 264627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264627&o=json
            external_identifier: CBDB:264627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7f5WFGyn54o8CAQQ33HCHr
        subject_person_id: p_RWBrjGVJfwPTdZnav1jS3T
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
        - id: cs_h9FRZph11DzA69cYBoieBg
          claim_id: c_7f5WFGyn54o8CAQQ33HCHr
          source_id: s_5mARpbooXRCbQEnNGgWG1A
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
        id: c_weQwHWxLKflFlQlJK6sGpV
        subject_person_id: p_RWBrjGVJfwPTdZnav1jS3T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7cz0MEoYACT5ja9P0LmU0M
          claim_id: c_weQwHWxLKflFlQlJK6sGpV
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVwkG4e4H3d4chjvn3BAU2
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 200921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json
            external_identifier: CBDB:200921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
  other: []
---

# 王德華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德華 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德華（CBDB 264627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264627&o=json)
- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
