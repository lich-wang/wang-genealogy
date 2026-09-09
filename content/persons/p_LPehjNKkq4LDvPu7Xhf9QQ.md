---
schema: wang-person/v1
id: p_LPehjNKkq4LDvPu7Xhf9QQ
status: active
merged_into: null
display_name: 王神壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aybubtbJDp5Bu8aPFGAnXz
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王神壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLvMqV3jFRxirAGxKoA6VM
          claim_id: c_aybubtbJDp5Bu8aPFGAnXz
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
          stance: supports
          locator: CBDB:175772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175772）
          source: &a1
            id: s_RLQtt3isK7zKK3zQy6NEd3
            source_type: api_record
            title: 中国历代人物传记资料库：王神壽（CBDB 175772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175772&o=json
            external_identifier: CBDB:175772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7MCSRaYm2U45hrZJCTPQ5v
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZ5wuK2Sbj3bHJEV4C8Byp
          claim_id: c_7MCSRaYm2U45hrZJCTPQ5v
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
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
        id: c_uSbG4KFd48mcNVT9SQcxc3
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
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
        - id: cs_sAm8BA6PBQ62xyZTCdyGNJ
          claim_id: c_uSbG4KFd48mcNVT9SQcxc3
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
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

# 王神壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王神壽 | accepted |
| death.date | 680年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王神壽（CBDB 175772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175772&o=json)
