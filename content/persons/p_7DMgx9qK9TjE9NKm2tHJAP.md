---
schema: wang-person/v1
id: p_7DMgx9qK9TjE9NKm2tHJAP
status: active
merged_into: null
display_name: 王驤衢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3bLf8kqECsZHH25YowPix
        subject_person_id: p_7DMgx9qK9TjE9NKm2tHJAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驤衢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ioyHv8TxdF4wehAc6CtBP5
          claim_id: c_G3bLf8kqECsZHH25YowPix
          source_id: s_WPUFqcU31M1KLDjDV9Vy5t
          stance: supports
          locator: CBDB:576147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576147）
          source: &a1
            id: s_WPUFqcU31M1KLDjDV9Vy5t
            source_type: api_record
            title: 中国历代人物传记资料库：王驤衢（CBDB 576147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576147&o=json
            external_identifier: CBDB:576147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_khq5XLD6ig7nYfVjeY5y6U
        subject_person_id: p_7DMgx9qK9TjE9NKm2tHJAP
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
        - id: cs_jhxS2gqv8KNqnNgR9KuDhQ
          claim_id: c_khq5XLD6ig7nYfVjeY5y6U
          source_id: s_WPUFqcU31M1KLDjDV9Vy5t
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

# 王驤衢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驤衢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驤衢（CBDB 576147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576147&o=json)
