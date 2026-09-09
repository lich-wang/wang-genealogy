---
schema: wang-person/v1
id: p_2kdeZA6pG4oP2DRP6B6hS3
status: active
merged_into: null
display_name: 王友元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NB5F7fDZEwobSWr9UL7oEY
        subject_person_id: p_2kdeZA6pG4oP2DRP6B6hS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTSCi4Ur2kZ5Mdc8DyHA19
          claim_id: c_NB5F7fDZEwobSWr9UL7oEY
          source_id: s_xBjTq12zT6fqxFVECPV6ku
          stance: supports
          locator: CBDB:69075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69075）
          source: &a1
            id: s_xBjTq12zT6fqxFVECPV6ku
            source_type: api_record
            title: 中国历代人物传记资料库：王友元（CBDB 69075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69075&o=json
            external_identifier: CBDB:69075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HLQNHr2xvDSCg5nCSc3EJi
        subject_person_id: p_2kdeZA6pG4oP2DRP6B6hS3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENQBjwPLL2Ff347CJ18AXJ
          claim_id: c_HLQNHr2xvDSCg5nCSc3EJi
          source_id: s_xBjTq12zT6fqxFVECPV6ku
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
        id: c_Y2qkuasWo78XxmiQ5phv8X
        subject_person_id: p_2kdeZA6pG4oP2DRP6B6hS3
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
        - id: cs_8KnvHTobFricEvigLjHj1p
          claim_id: c_Y2qkuasWo78XxmiQ5phv8X
          source_id: s_xBjTq12zT6fqxFVECPV6ku
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

# 王友元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友元 | accepted |
| death.date | 1858年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友元（CBDB 69075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69075&o=json)
