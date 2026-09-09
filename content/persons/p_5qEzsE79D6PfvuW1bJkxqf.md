---
schema: wang-person/v1
id: p_5qEzsE79D6PfvuW1bJkxqf
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDnpzrpVJHeNmgnpFNJAF8
        subject_person_id: p_5qEzsE79D6PfvuW1bJkxqf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cgt1TTwYFZABP3vFoV8Qpm
          claim_id: c_mDnpzrpVJHeNmgnpFNJAF8
          source_id: s_isK9fzZK118auRjgiuAJHS
          stance: supports
          locator: CBDB:328020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328020）
          source: &a1
            id: s_isK9fzZK118auRjgiuAJHS
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 328020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328020&o=json
            external_identifier: CBDB:328020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rgDE4CaTGFP3KWizKEEjJt
        subject_person_id: p_5qEzsE79D6PfvuW1bJkxqf
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
        - id: cs_7g9G6h5dvZ3ziCF9jvgspG
          claim_id: c_rgDE4CaTGFP3KWizKEEjJt
          source_id: s_isK9fzZK118auRjgiuAJHS
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 328020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328020&o=json)
