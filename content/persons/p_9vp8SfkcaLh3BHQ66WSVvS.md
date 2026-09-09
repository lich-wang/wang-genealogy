---
schema: wang-person/v1
id: p_9vp8SfkcaLh3BHQ66WSVvS
status: active
merged_into: null
display_name: 王文林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKNYi3w3FWUrp3ZQByKTLt
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hfSrb48T3W4g9TcB7qL2u
          claim_id: c_DKNYi3w3FWUrp3ZQByKTLt
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: CBDB:190754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190754）
          source: &a1
            id: s_NUKaMQLG4Qa6pFRsxP79dG
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 190754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json
            external_identifier: CBDB:190754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LgFWfmyKQb8sDwv5hD5Z5D
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KYGw1RtnSc9JEa7M7bYV6
          claim_id: c_LgFWfmyKQb8sDwv5hD5Z5D
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
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
        id: c_uidFMJYUafZf7rAa47b8Er
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JDFLfL3QMsE5rWKQC54JKk
          claim_id: c_uidFMJYUafZf7rAa47b8Er
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
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

# 王文林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文林 | accepted |
| death.date | 709年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文林（CBDB 190754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json)
