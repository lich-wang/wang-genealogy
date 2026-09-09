---
schema: wang-person/v1
id: p_zYsrzkBqoAqZwBoNd5Mh4D
status: active
merged_into: null
display_name: 王文仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5RKy1fXZJYpHsHPPE9RuxX
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JATdmUQiA1cmjNEcBZdDUd
          claim_id: c_5RKy1fXZJYpHsHPPE9RuxX
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
          stance: supports
          locator: CBDB:175707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175707）
          source: &a1
            id: s_qAzjYVsMC8LvniyDC4jSwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文仲（CBDB 175707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175707&o=json
            external_identifier: CBDB:175707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k17qgRZnKLWKJJCQ4NpUDE
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekv3UTseE9sd9oSPTTYeEU
          claim_id: c_k17qgRZnKLWKJJCQ4NpUDE
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
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
        id: c_9MDpaKK25EMioTjVtQkh1n
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
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
        - id: cs_oYCAB5DEXhVT8E9v1bNiFf
          claim_id: c_9MDpaKK25EMioTjVtQkh1n
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
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

# 王文仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文仲（CBDB 175707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175707&o=json)
