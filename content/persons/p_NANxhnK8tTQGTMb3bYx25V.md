---
schema: wang-person/v1
id: p_NANxhnK8tTQGTMb3bYx25V
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tuxLQCHeJDDjLzKY8PNAxD
        subject_person_id: p_NANxhnK8tTQGTMb3bYx25V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JbkQHmundbYdXH5QEmRSf9
          claim_id: c_tuxLQCHeJDDjLzKY8PNAxD
          source_id: s_bufAu35MbztUWFoxEHFLpU
          stance: supports
          locator: CBDB:318569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318569）
          source: &a1
            id: s_bufAu35MbztUWFoxEHFLpU
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 318569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318569&o=json
            external_identifier: CBDB:318569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rWtvgwbb2qZPmEz9jnfFda
        subject_person_id: p_NANxhnK8tTQGTMb3bYx25V
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
        - id: cs_sDBHLc3EssYeCWXkoKyQtv
          claim_id: c_rWtvgwbb2qZPmEz9jnfFda
          source_id: s_bufAu35MbztUWFoxEHFLpU
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 318569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318569&o=json)
