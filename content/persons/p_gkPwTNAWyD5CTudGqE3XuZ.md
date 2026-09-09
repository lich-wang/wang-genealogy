---
schema: wang-person/v1
id: p_gkPwTNAWyD5CTudGqE3XuZ
status: active
merged_into: null
display_name: 王彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fxSM5J8JaPSD2BB4yowQ2U
        subject_person_id: p_gkPwTNAWyD5CTudGqE3XuZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3F4t2ezWzg3T6NsrC4Gw2p
          claim_id: c_fxSM5J8JaPSD2BB4yowQ2U
          source_id: s_QGL2jg794p6jrtUEefS23t
          stance: supports
          locator: CBDB:22155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22155）
          source: &a1
            id: s_QGL2jg794p6jrtUEefS23t
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 22155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22155&o=json
            external_identifier: CBDB:22155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_45eDcfGWJY64UFMNBLXk1T
        subject_person_id: p_gkPwTNAWyD5CTudGqE3XuZ
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
        - id: cs_Vw2xaDZAK3zDWCYbBji57s
          claim_id: c_45eDcfGWJY64UFMNBLXk1T
          source_id: s_QGL2jg794p6jrtUEefS23t
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

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 22155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22155&o=json)
