---
schema: wang-person/v1
id: p_P7By8grSdbwvtxrQLPcnpS
status: active
merged_into: null
display_name: 王玄道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNp3biRC1FW3qi429tCk1e
        subject_person_id: p_P7By8grSdbwvtxrQLPcnpS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9c1vpmQxSWAdik6GJ78xWV
          claim_id: c_rNp3biRC1FW3qi429tCk1e
          source_id: s_gK4SKFK3jn12CaANh2eKJz
          stance: supports
          locator: CBDB:175779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175779）
          source: &a1
            id: s_gK4SKFK3jn12CaANh2eKJz
            source_type: api_record
            title: 中国历代人物传记资料库：王玄道（CBDB 175779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175779&o=json
            external_identifier: CBDB:175779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HpEPJYJTetkTYLsQF8eHWL
        subject_person_id: p_P7By8grSdbwvtxrQLPcnpS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vuEj9sNSFUF8QM5EqaBxjp
          claim_id: c_HpEPJYJTetkTYLsQF8eHWL
          source_id: s_gK4SKFK3jn12CaANh2eKJz
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
        id: c_4i2E8CM9oJ5ia18bMCMRkW
        subject_person_id: p_P7By8grSdbwvtxrQLPcnpS
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
        - id: cs_fBx3RC6ZAKRnfCty7k6gJs
          claim_id: c_4i2E8CM9oJ5ia18bMCMRkW
          source_id: s_gK4SKFK3jn12CaANh2eKJz
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

# 王玄道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄道 | accepted |
| death.date | 678年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄道（CBDB 175779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175779&o=json)
