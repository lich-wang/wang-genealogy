---
schema: wang-person/v1
id: p_pL9ipvbun2L1xu9YQg4MjT
status: active
merged_into: null
display_name: 王舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQDFpur556q5uyPeJKd19t
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MbJBsEsmthLCt19ud44A6
          claim_id: c_iQDFpur556q5uyPeJKd19t
          source_id: s_Ngz5ao8sU423GD9dmVN8ci
          stance: supports
          locator: CBDB:138165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138165）
          source: &a1
            id: s_Ngz5ao8sU423GD9dmVN8ci
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 138165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138165&o=json
            external_identifier: CBDB:138165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h9JANsuH9UtGkWzpRZgwLL
        subject_person_id: p_pL9ipvbun2L1xu9YQg4MjT
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
        - id: cs_ecsE66CgC4Luur4RqtxpUP
          claim_id: c_h9JANsuH9UtGkWzpRZgwLL
          source_id: s_Ngz5ao8sU423GD9dmVN8ci
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

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 138165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138165&o=json)
