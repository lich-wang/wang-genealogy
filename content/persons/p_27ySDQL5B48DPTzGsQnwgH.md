---
schema: wang-person/v1
id: p_27ySDQL5B48DPTzGsQnwgH
status: active
merged_into: null
display_name: 王文清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ztTZ5CMtHZxy6dRWhKzvMB
        subject_person_id: p_27ySDQL5B48DPTzGsQnwgH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4hufu73oEfEJXz2neuKWj
          claim_id: c_ztTZ5CMtHZxy6dRWhKzvMB
          source_id: s_2Mrca2NnHn8SHxX3VC3TLR
          stance: supports
          locator: CBDB:341616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341616）
          source: &a1
            id: s_2Mrca2NnHn8SHxX3VC3TLR
            source_type: api_record
            title: 中国历代人物传记资料库：王文清（CBDB 341616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341616&o=json
            external_identifier: CBDB:341616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XgFTAFewFEiEGEU9Cd3rem
        subject_person_id: p_27ySDQL5B48DPTzGsQnwgH
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
        - id: cs_Q3LKbDr63C9PV7Ga9xyqiD
          claim_id: c_XgFTAFewFEiEGEU9Cd3rem
          source_id: s_2Mrca2NnHn8SHxX3VC3TLR
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

# 王文清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文清（CBDB 341616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341616&o=json)
