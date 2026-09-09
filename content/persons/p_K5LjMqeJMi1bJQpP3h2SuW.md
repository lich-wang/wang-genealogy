---
schema: wang-person/v1
id: p_K5LjMqeJMi1bJQpP3h2SuW
status: active
merged_into: null
display_name: 王向
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xL1EkWi8EKAMSNpGDCR5B
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aAaCegGkq7ik6QFgSR4dFM
          claim_id: c_6xL1EkWi8EKAMSNpGDCR5B
          source_id: s_zM4pAm39VAA78r5cpman3J
          stance: supports
          locator: CBDB:22043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22043）
          source: &a1
            id: s_zM4pAm39VAA78r5cpman3J
            source_type: api_record
            title: 中国历代人物传记资料库：王向（CBDB 22043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json
            external_identifier: CBDB:22043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsLyWWwRDRizBP4FD1MNPD
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
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
        - id: cs_JUkDnJ7P4ni11rAFmCMLWE
          claim_id: c_GsLyWWwRDRizBP4FD1MNPD
          source_id: s_zM4pAm39VAA78r5cpman3J
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

# 王向

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王向 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王向（CBDB 22043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json)
