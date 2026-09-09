---
schema: wang-person/v1
id: p_Z3N3h8ZY4dzfju6Wwi9grE
status: active
merged_into: null
display_name: 王渠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1f4AVuVa3xqzzHCWyeWFL
        subject_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5qAe1t9u7NwJbHZhKSnspA
          claim_id: c_w1f4AVuVa3xqzzHCWyeWFL
          source_id: s_qdsSwpswYjqCufEASdbZop
          stance: supports
          locator: CBDB:274255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274255）
          source: &a1
            id: s_qdsSwpswYjqCufEASdbZop
            source_type: api_record
            title: 中国历代人物传记资料库：王渠（CBDB 274255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json
            external_identifier: CBDB:274255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nrXsQK45CE6MEhycXepVGo
        subject_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
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
        - id: cs_uS4NEQ5YGjbPa9QPsRMw1d
          claim_id: c_nrXsQK45CE6MEhycXepVGo
          source_id: s_qdsSwpswYjqCufEASdbZop
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

# 王渠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渠（CBDB 274255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json)
