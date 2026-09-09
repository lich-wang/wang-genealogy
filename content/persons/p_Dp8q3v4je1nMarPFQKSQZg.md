---
schema: wang-person/v1
id: p_Dp8q3v4je1nMarPFQKSQZg
status: active
merged_into: null
display_name: 王克善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aebhXu6eSCaNMCxTM2wjvb
        subject_person_id: p_Dp8q3v4je1nMarPFQKSQZg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8njaseaj6pavKBGg2qyU53
          claim_id: c_aebhXu6eSCaNMCxTM2wjvb
          source_id: s_BV4ujB6ejLyiPLPJRZxCNY
          stance: supports
          locator: CBDB:296923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296923）
          source: &a1
            id: s_BV4ujB6ejLyiPLPJRZxCNY
            source_type: api_record
            title: 中国历代人物传记资料库：王克善（CBDB 296923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296923&o=json
            external_identifier: CBDB:296923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s5fqZKuvUXm2iTaN55YGQQ
        subject_person_id: p_Dp8q3v4je1nMarPFQKSQZg
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
        - id: cs_qCA9RUsrfrw4MC2vP6RjQt
          claim_id: c_s5fqZKuvUXm2iTaN55YGQQ
          source_id: s_BV4ujB6ejLyiPLPJRZxCNY
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

# 王克善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克善（CBDB 296923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296923&o=json)
