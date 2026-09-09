---
schema: wang-person/v1
id: p_D5ZEvm3apgiYSTxpijZukx
status: active
merged_into: null
display_name: 王樸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDFcdWX4jQkAt8DQNa8pG7
        subject_person_id: p_D5ZEvm3apgiYSTxpijZukx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sbuNGojZib2nmCKTAKqzaD
          claim_id: c_BDFcdWX4jQkAt8DQNa8pG7
          source_id: s_zuZuc8DhEc8foRf5gpn6NQ
          stance: supports
          locator: CBDB:565057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565057）
          source: &a1
            id: s_zuZuc8DhEc8foRf5gpn6NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 565057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565057&o=json
            external_identifier: CBDB:565057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aEHyLCE4P7wFHe56E4LNiU
        subject_person_id: p_D5ZEvm3apgiYSTxpijZukx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LpmtNAJJZEHGbYCcfgGsTJ
          claim_id: c_aEHyLCE4P7wFHe56E4LNiU
          source_id: s_zuZuc8DhEc8foRf5gpn6NQ
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

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 565057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565057&o=json)
