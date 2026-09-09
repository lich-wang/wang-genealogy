---
schema: wang-person/v1
id: p_ynnM1kLJf7kU15M4XR3af9
status: active
merged_into: null
display_name: 王沔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R3AbKrGWsxCAL6sfmjb63f
        subject_person_id: p_ynnM1kLJf7kU15M4XR3af9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8RPuRrx4bzjDc1XN7pFwDG
          claim_id: c_R3AbKrGWsxCAL6sfmjb63f
          source_id: s_Xvq2hkPzhVoULGAcWRi1Sc
          stance: supports
          locator: CBDB:226708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226708）
          source: &a1
            id: s_Xvq2hkPzhVoULGAcWRi1Sc
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 226708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226708&o=json
            external_identifier: CBDB:226708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aDQkfuVQ25oyVLfjK82G53
        subject_person_id: p_ynnM1kLJf7kU15M4XR3af9
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
        - id: cs_WjgbV25yXbWBfdQBMqTRu9
          claim_id: c_aDQkfuVQ25oyVLfjK82G53
          source_id: s_Xvq2hkPzhVoULGAcWRi1Sc
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

# 王沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沔（CBDB 226708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226708&o=json)
