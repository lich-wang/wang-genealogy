---
schema: wang-person/v1
id: p_bKgNU85ip8o8E6u9LXP9LB
status: active
merged_into: null
display_name: 王觀宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WyzgFhWDqiV4RyKeFVnRJA
        subject_person_id: p_bKgNU85ip8o8E6u9LXP9LB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oTqdvXoXK2Ys5B5ttC5JUq
          claim_id: c_WyzgFhWDqiV4RyKeFVnRJA
          source_id: s_NCce8JweptbttC35JdJbbj
          stance: supports
          locator: CBDB:640245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640245）
          source: &a1
            id: s_NCce8JweptbttC35JdJbbj
            source_type: api_record
            title: 中国历代人物传记资料库：王觀宸（CBDB 640245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640245&o=json
            external_identifier: CBDB:640245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2XJMPSVj6MGcnQ6NY1FWnT
        subject_person_id: p_bKgNU85ip8o8E6u9LXP9LB
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
        - id: cs_KXfsBmQxq8he9qt2B1aF7C
          claim_id: c_2XJMPSVj6MGcnQ6NY1FWnT
          source_id: s_NCce8JweptbttC35JdJbbj
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

# 王觀宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀宸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀宸（CBDB 640245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640245&o=json)
