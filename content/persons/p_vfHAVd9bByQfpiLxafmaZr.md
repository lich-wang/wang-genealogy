---
schema: wang-person/v1
id: p_vfHAVd9bByQfpiLxafmaZr
status: active
merged_into: null
display_name: 王映旭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSQoiFgygv6Pv481mq4M8U
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Na1p2dMEYDhXC9AG4UKfzU
          claim_id: c_BSQoiFgygv6Pv481mq4M8U
          source_id: s_asA4b92f3GY2EyjNE9z12h
          stance: supports
          locator: CBDB:698943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698943）
          source: &a1
            id: s_asA4b92f3GY2EyjNE9z12h
            source_type: api_record
            title: 中国历代人物传记资料库：王映旭（CBDB 698943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698943&o=json
            external_identifier: CBDB:698943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZjjvE4ug8q1tJ38QjyoCh
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
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
        - id: cs_vHEsX85vwKK7vd8BSWZAf6
          claim_id: c_qZjjvE4ug8q1tJ38QjyoCh
          source_id: s_asA4b92f3GY2EyjNE9z12h
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

# 王映旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王映旭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王映旭（CBDB 698943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698943&o=json)
