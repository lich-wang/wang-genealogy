---
schema: wang-person/v1
id: p_B9CyVfjAfLv7AFjRE6GJKj
status: active
merged_into: null
display_name: 王莊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GuRsQvjM9ZyCcc7L5RgUco
        subject_person_id: p_B9CyVfjAfLv7AFjRE6GJKj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4zi3q4uoykxSKPLJXCPA7
          claim_id: c_GuRsQvjM9ZyCcc7L5RgUco
          source_id: s_NJnPAx2aNgZfFLTydgEbRi
          stance: supports
          locator: CBDB:276000
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276000）
          source: &a1
            id: s_NJnPAx2aNgZfFLTydgEbRi
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 276000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276000&o=json
            external_identifier: CBDB:276000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wugk851DFRUNX1pDf7Qprd
        subject_person_id: p_B9CyVfjAfLv7AFjRE6GJKj
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
        - id: cs_n11DoRGkTQK2c2Nci9f28u
          claim_id: c_wugk851DFRUNX1pDf7Qprd
          source_id: s_NJnPAx2aNgZfFLTydgEbRi
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
        id: c_7uET5UvCWDffI2oLyLZ8QP
        subject_person_id: p_B9CyVfjAfLv7AFjRE6GJKj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdNLcR2TFia2JEWcgAIlxa
          claim_id: c_7uET5UvCWDffI2oLyLZ8QP
          source_id: s_NJnPAx2aNgZfFLTydgEbRi
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPi9LMn5Kw5811QG1EqGfq
        status: active
        display_name: 王世文
        merged_into_person_id: null
  other: []
---

# 王莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HPi9LMn5Kw5811QG1EqGfq | 王世文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莊（CBDB 276000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276000&o=json)
