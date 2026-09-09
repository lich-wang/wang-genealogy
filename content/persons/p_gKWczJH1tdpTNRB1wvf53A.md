---
schema: wang-person/v1
id: p_gKWczJH1tdpTNRB1wvf53A
status: active
merged_into: null
display_name: 王恆沔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DaTMXrQq7y8ynekafeCJtF
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S8eedCGn38jfoN4BCLcnwn
          claim_id: c_DaTMXrQq7y8ynekafeCJtF
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
          stance: supports
          locator: CBDB:192521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192521）
          source: &a1
            id: s_U6qoQ7ekYLGep1imiGBq9J
            source_type: api_record
            title: 中国历代人物传记资料库：王恆沔（CBDB 192521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192521&o=json
            external_identifier: CBDB:192521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PGRoiC9Ja5DD674CzxWGzX
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiw8vMFa83rxf6BN7AVW4N
          claim_id: c_PGRoiC9Ja5DD674CzxWGzX
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
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
        id: c_Tp7JwCT6LSFzJfumdveW3G
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
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
        - id: cs_w7amn4E3DGcHap9uoMjgHH
          claim_id: c_Tp7JwCT6LSFzJfumdveW3G
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
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

# 王恆沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆沔 | accepted |
| death.date | 829年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆沔（CBDB 192521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192521&o=json)
