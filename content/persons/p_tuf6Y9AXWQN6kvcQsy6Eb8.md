---
schema: wang-person/v1
id: p_tuf6Y9AXWQN6kvcQsy6Eb8
status: active
merged_into: null
display_name: 王宗源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J41b7ecv3PteBej3jUHS99
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RQJn4V7MjfVADQ7SNQT95w
          claim_id: c_J41b7ecv3PteBej3jUHS99
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
          stance: supports
          locator: CBDB:126561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126561）
          source: &a1
            id: s_pQKX4VAq7vJn1vwFebqWCr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 126561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json
            external_identifier: CBDB:126561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C3cAE7EEZpoSw1ip142ABy
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
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
        - id: cs_7TRF7eVB4EfUaKR2Vx4jZA
          claim_id: c_C3cAE7EEZpoSw1ip142ABy
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
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

# 王宗源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗源 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗源（CBDB 126561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json)
