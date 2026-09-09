---
schema: wang-person/v1
id: p_uTe4NgAoEYW3vLNH7E1h15
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_beGrNxRtB66pc6woFci3EJ
        subject_person_id: p_uTe4NgAoEYW3vLNH7E1h15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_saLS8fhDHnxYjU4RQFyLY1
          claim_id: c_beGrNxRtB66pc6woFci3EJ
          source_id: s_9G7Ei77L91y1x25FVh1qfN
          stance: supports
          locator: CBDB:285103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285103）
          source: &a1
            id: s_9G7Ei77L91y1x25FVh1qfN
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 285103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285103&o=json
            external_identifier: CBDB:285103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w65Pw96JU9jeamWy9BCNrn
        subject_person_id: p_uTe4NgAoEYW3vLNH7E1h15
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
        - id: cs_HZ4CiUY281Y8kx2f9VqmFW
          claim_id: c_w65Pw96JU9jeamWy9BCNrn
          source_id: s_9G7Ei77L91y1x25FVh1qfN
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 285103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285103&o=json)
