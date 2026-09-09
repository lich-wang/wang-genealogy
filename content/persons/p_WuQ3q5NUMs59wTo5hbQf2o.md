---
schema: wang-person/v1
id: p_WuQ3q5NUMs59wTo5hbQf2o
status: active
merged_into: null
display_name: 王勵精
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1TXqPjvX7Z4Q7x9hYfvibe
        subject_person_id: p_WuQ3q5NUMs59wTo5hbQf2o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勵精
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sWhN78T8Nr93Z5XZER6F4K
          claim_id: c_1TXqPjvX7Z4Q7x9hYfvibe
          source_id: s_iSVGQ1NzMMijzASUjEG1Po
          stance: supports
          locator: CBDB:125590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（125590）
          source: &a1
            id: s_iSVGQ1NzMMijzASUjEG1Po
            source_type: api_record
            title: 中国历代人物传记资料库：王勵精（CBDB 125590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125590&o=json
            external_identifier: CBDB:125590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PZ95zDMH83vQxnuP4PzNME
        subject_person_id: p_WuQ3q5NUMs59wTo5hbQf2o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aDq9bQnmchPbmABPwLFNMK
          claim_id: c_PZ95zDMH83vQxnuP4PzNME
          source_id: s_iSVGQ1NzMMijzASUjEG1Po
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
        id: c_JojqpxxjFFFFMdmxTZa79n
        subject_person_id: p_WuQ3q5NUMs59wTo5hbQf2o
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
        - id: cs_w3WqhzcocqUBG9djGAAYXc
          claim_id: c_JojqpxxjFFFFMdmxTZa79n
          source_id: s_iSVGQ1NzMMijzASUjEG1Po
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

# 王勵精

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勵精 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勵精（CBDB 125590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125590&o=json)
