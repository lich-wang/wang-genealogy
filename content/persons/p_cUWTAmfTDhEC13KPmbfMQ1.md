---
schema: wang-person/v1
id: p_cUWTAmfTDhEC13KPmbfMQ1
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 557675
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1X4YgVHvrWhXAxBoGKeT_0
        subject_person_id: p_cUWTAmfTDhEC13KPmbfMQ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHpoObcCGJWkx9LB-BURJr
          claim_id: c_1X4YgVHvrWhXAxBoGKeT_0
          source_id: s_iN4PIfAOyTlzVLsv4jAJYA
          stance: supports
          locator: CBDB:557675
          quotation: null
          interpretation_note: CBDB 明确记录的王松林配偶
          source: &a1
            id: s_iN4PIfAOyTlzVLsv4jAJYA
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王松林妻)（CBDB 557675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557675&o=json
            external_identifier: CBDB:557675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RvGBn-Fqk64pDI6bGDAcAG
        subject_person_id: p_BPUJNt3R8VPfYcuJtr6QpD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cUWTAmfTDhEC13KPmbfMQ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xNIYftp2KQ4YpUvZttqt-
          claim_id: c_RvGBn-Fqk64pDI6bGDAcAG
          source_id: s_iN4PIfAOyTlzVLsv4jAJYA
          stance: supports
          locator: 南陽府志，lgid=878789：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BPUJNt3R8VPfYcuJtr6QpD
        status: active
        display_name: 王松林
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BPUJNt3R8VPfYcuJtr6QpD | 王松林 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王松林妻)（CBDB 557675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557675&o=json)
