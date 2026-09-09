---
schema: wang-person/v1
id: p_ZvTzzM4HrsqXamj6JCBFVc
status: active
merged_into: null
display_name: 王檀魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FUNrsCqVHLtnFAKY1X1F1
        subject_person_id: p_ZvTzzM4HrsqXamj6JCBFVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檀魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dbdhkuvq4Eu2ciS43g419r
          claim_id: c_2FUNrsCqVHLtnFAKY1X1F1
          source_id: s_QnZDCDoavJRXKRARkQ1fFF
          stance: supports
          locator: CBDB:638875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638875）
          source: &a1
            id: s_QnZDCDoavJRXKRARkQ1fFF
            source_type: api_record
            title: 中国历代人物传记资料库：王檀魁（CBDB 638875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638875&o=json
            external_identifier: CBDB:638875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6LiPQh8Fe3aAevQ25MADU
        subject_person_id: p_ZvTzzM4HrsqXamj6JCBFVc
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
        - id: cs_pbK6isFwaf8LyeDr4LmbZ1
          claim_id: c_x6LiPQh8Fe3aAevQ25MADU
          source_id: s_QnZDCDoavJRXKRARkQ1fFF
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

# 王檀魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檀魁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檀魁（CBDB 638875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638875&o=json)
