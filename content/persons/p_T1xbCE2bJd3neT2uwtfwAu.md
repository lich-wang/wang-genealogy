---
schema: wang-person/v1
id: p_T1xbCE2bJd3neT2uwtfwAu
status: active
merged_into: null
display_name: 王一貫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BzXAkZWLvQczKRKRqoeGNg
        subject_person_id: p_T1xbCE2bJd3neT2uwtfwAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Btrmj7oogUS5DCpJ1s11fh
          claim_id: c_BzXAkZWLvQczKRKRqoeGNg
          source_id: s_QN8mMoDJfMCJUKDkBKesFR
          stance: supports
          locator: CBDB:487913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487913）
          source: &a1
            id: s_QN8mMoDJfMCJUKDkBKesFR
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 487913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487913&o=json
            external_identifier: CBDB:487913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d2rsgKyMpaPerkuJ1YDTDZ
        subject_person_id: p_T1xbCE2bJd3neT2uwtfwAu
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
        - id: cs_QL8qCSQMtPw2K7yHy2aaWL
          claim_id: c_d2rsgKyMpaPerkuJ1YDTDZ
          source_id: s_QN8mMoDJfMCJUKDkBKesFR
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

# 王一貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一貫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一貫（CBDB 487913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487913&o=json)
