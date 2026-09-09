---
schema: wang-person/v1
id: p_Xfp89HQvG2CPNKh2JvPtx3
status: active
merged_into: null
display_name: 王相如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pLhqyn2Qyc5jWTrbcjafE5
        subject_person_id: p_Xfp89HQvG2CPNKh2JvPtx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nXPJ3UQ3Z2wZvyzL9pLpoR
          claim_id: c_pLhqyn2Qyc5jWTrbcjafE5
          source_id: s_QnT18hEY4NH8kQmbMUbYkK
          stance: supports
          locator: CBDB:37695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37695）
          source: &a1
            id: s_QnT18hEY4NH8kQmbMUbYkK
            source_type: api_record
            title: 中国历代人物传记资料库：王相如（CBDB 37695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37695&o=json
            external_identifier: CBDB:37695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mg6wRuPABHzphp2JRLaH3i
        subject_person_id: p_Xfp89HQvG2CPNKh2JvPtx3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NubbWR52k31mVK5SDM9vvM
          claim_id: c_mg6wRuPABHzphp2JRLaH3i
          source_id: s_QnT18hEY4NH8kQmbMUbYkK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zPnD5fGkhkc92QdFMDHs9x
        subject_person_id: p_Xfp89HQvG2CPNKh2JvPtx3
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
        - id: cs_2BRUMiXM9Hw3xnonKs3Qn5
          claim_id: c_zPnD5fGkhkc92QdFMDHs9x
          source_id: s_QnT18hEY4NH8kQmbMUbYkK
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

# 王相如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相如 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相如（CBDB 37695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37695&o=json)
