---
schema: wang-person/v1
id: p_GbFhoA8v7vVvmKQN13YDAr
status: active
merged_into: null
display_name: 王惟汶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pE3E5Nf9uqXR5Y33B19kAp
        subject_person_id: p_GbFhoA8v7vVvmKQN13YDAr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zroQr1cS2GM5txiJvaAgcA
          claim_id: c_pE3E5Nf9uqXR5Y33B19kAp
          source_id: s_9eYF13d24wCMAxXnY2oL5q
          stance: supports
          locator: CBDB:193082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193082）
          source: &a1
            id: s_9eYF13d24wCMAxXnY2oL5q
            source_type: api_record
            title: 中国历代人物传记资料库：王惟汶（CBDB 193082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json
            external_identifier: CBDB:193082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fA2zBNyrP2FPPZ5G3ok9yV
        subject_person_id: p_GbFhoA8v7vVvmKQN13YDAr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 768年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsN9rQJWyTifDJctjB9A3B
          claim_id: c_fA2zBNyrP2FPPZ5G3ok9yV
          source_id: s_9eYF13d24wCMAxXnY2oL5q
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
        id: c_bVFYPVsGUSCa7A8H25prxS
        subject_person_id: p_GbFhoA8v7vVvmKQN13YDAr
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
        - id: cs_GGHXqx819BtZ98XbbuSRJb
          claim_id: c_bVFYPVsGUSCa7A8H25prxS
          source_id: s_9eYF13d24wCMAxXnY2oL5q
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

# 王惟汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟汶 | accepted |
| death.date | 768年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟汶（CBDB 193082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json)
