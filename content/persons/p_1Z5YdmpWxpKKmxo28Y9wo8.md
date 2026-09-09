---
schema: wang-person/v1
id: p_1Z5YdmpWxpKKmxo28Y9wo8
status: active
merged_into: null
display_name: 王承裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCAREnZ98HqE9nNpoRKsMT
        subject_person_id: p_1Z5YdmpWxpKKmxo28Y9wo8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LX7KVcFx6PyCRVYNnfrdtk
          claim_id: c_qCAREnZ98HqE9nNpoRKsMT
          source_id: s_j4qLHjTosGhAcMiN77x2ES
          stance: supports
          locator: CBDB:140983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140983）
          source: &a1
            id: s_j4qLHjTosGhAcMiN77x2ES
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 140983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140983&o=json
            external_identifier: CBDB:140983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KfUh2UiiAmDYhLmgq3CCc7
        subject_person_id: p_1Z5YdmpWxpKKmxo28Y9wo8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2t9mAJqE9YQDMJoH6uRsX
          claim_id: c_KfUh2UiiAmDYhLmgq3CCc7
          source_id: s_j4qLHjTosGhAcMiN77x2ES
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AbmLBWA2czkDnuTey696gk
        subject_person_id: p_1Z5YdmpWxpKKmxo28Y9wo8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 738年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8LSYAf2MKTQ9GseEdhndr2
          claim_id: c_AbmLBWA2czkDnuTey696gk
          source_id: s_j4qLHjTosGhAcMiN77x2ES
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
        id: c_5ttAgQgESfhtP98FKpxtE3
        subject_person_id: p_1Z5YdmpWxpKKmxo28Y9wo8
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
        - id: cs_Drt3PHpDn9A8Mhr5AuBPvZ
          claim_id: c_5ttAgQgESfhtP98FKpxtE3
          source_id: s_j4qLHjTosGhAcMiN77x2ES
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

# 王承裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承裕 | accepted |
| birth.date | 677年 | accepted |
| death.date | 738年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承裕（CBDB 140983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140983&o=json)
