---
schema: wang-person/v1
id: p_hjAaqQjPABb5tBc5TYS8iR
status: active
merged_into: null
display_name: 王致中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KwZhU7gjti8uG5h99XCiri
        subject_person_id: p_hjAaqQjPABb5tBc5TYS8iR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g2NWf7dDJ9xQK5Lu1WtJhp
          claim_id: c_KwZhU7gjti8uG5h99XCiri
          source_id: s_1YEABhCJUX6nBSH1qcMNwJ
          stance: supports
          locator: CBDB:69305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69305）
          source: &a1
            id: s_1YEABhCJUX6nBSH1qcMNwJ
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 69305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69305&o=json
            external_identifier: CBDB:69305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_q8JPLiGzWb49cpkid52mKp
        subject_person_id: p_hjAaqQjPABb5tBc5TYS8iR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1747年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pFKtPBhZVpDN21BRBtqB86
          claim_id: c_q8JPLiGzWb49cpkid52mKp
          source_id: s_1YEABhCJUX6nBSH1qcMNwJ
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
        id: c_8Lwz6KMUV2sHZWesrwMfgi
        subject_person_id: p_hjAaqQjPABb5tBc5TYS8iR
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
        - id: cs_YWUp944AbteMdqSPLohMLj
          claim_id: c_8Lwz6KMUV2sHZWesrwMfgi
          source_id: s_1YEABhCJUX6nBSH1qcMNwJ
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

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| death.date | 1747年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致中（CBDB 69305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69305&o=json)
