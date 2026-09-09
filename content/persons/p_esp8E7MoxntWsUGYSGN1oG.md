---
schema: wang-person/v1
id: p_esp8E7MoxntWsUGYSGN1oG
status: active
merged_into: null
display_name: 王寶華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6K1nmN9PfVCntTjqUyELjz
        subject_person_id: p_esp8E7MoxntWsUGYSGN1oG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95Z5qzigwtr796NGiXpv3t
          claim_id: c_6K1nmN9PfVCntTjqUyELjz
          source_id: s_yUeuXKQkvS1iYQpNRZ64VF
          stance: supports
          locator: CBDB:71801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71801）
          source: &a1
            id: s_yUeuXKQkvS1iYQpNRZ64VF
            source_type: api_record
            title: 中国历代人物传记资料库：王寶華（CBDB 71801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71801&o=json
            external_identifier: CBDB:71801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vrd2cAEgLqqPd9fYGzUwAd
        subject_person_id: p_esp8E7MoxntWsUGYSGN1oG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1785年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXKKve5s5xid2eZAVMRS8o
          claim_id: c_Vrd2cAEgLqqPd9fYGzUwAd
          source_id: s_yUeuXKQkvS1iYQpNRZ64VF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ScKJ4ArfNeRixg1e5AHqx7
        subject_person_id: p_esp8E7MoxntWsUGYSGN1oG
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
        - id: cs_W6eJsWawb29Xw7KC8ymV84
          claim_id: c_ScKJ4ArfNeRixg1e5AHqx7
          source_id: s_yUeuXKQkvS1iYQpNRZ64VF
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

# 王寶華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶華 | accepted |
| birth.date | 1785年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶華（CBDB 71801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71801&o=json)
