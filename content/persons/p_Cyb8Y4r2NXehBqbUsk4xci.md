---
schema: wang-person/v1
id: p_Cyb8Y4r2NXehBqbUsk4xci
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XQbyCWCDeSPkbQ6u2chcNU
        subject_person_id: p_Cyb8Y4r2NXehBqbUsk4xci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fYj256qjh4S86PoUfetYcy
          claim_id: c_XQbyCWCDeSPkbQ6u2chcNU
          source_id: s_Fu1pivLGeCJWD1DdxNp78z
          stance: supports
          locator: CBDB:175676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175676）
          source: &a1
            id: s_Fu1pivLGeCJWD1DdxNp78z
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 175676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175676&o=json
            external_identifier: CBDB:175676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_C9xuJWvDFdhQ61KKrz9R1G
        subject_person_id: p_Cyb8Y4r2NXehBqbUsk4xci
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2vKPSniiehQdALxpyDV9D6
          claim_id: c_C9xuJWvDFdhQ61KKrz9R1G
          source_id: s_Fu1pivLGeCJWD1DdxNp78z
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
        id: c_DKZiwyqcnbBmfrsGQqSLTQ
        subject_person_id: p_Cyb8Y4r2NXehBqbUsk4xci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（卒于663年），唐人物。籍贯琅琊，曾任工部員外郎。（中国历代人物传记资料库 CBDB 175676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0CqyxNj099hXQlqwxT8RK
          claim_id: c_DKZiwyqcnbBmfrsGQqSLTQ
          source_id: s_Fu1pivLGeCJWD1DdxNp78z
          stance: supports
          locator: CBDB:175676
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NbOqcdz2hxy7mzl44X1gn-
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cyb8Y4r2NXehBqbUsk4xci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rqTbEODX6480dVpA9MpvG
          claim_id: c_NbOqcdz2hxy7mzl44X1gn-
          source_id: s_Fu1pivLGeCJWD1DdxNp78z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oLa6u987MQb63j3ya1tAqU
        status: active
        display_name: 王德素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| death.date | 663年 | accepted |
| bio.summary | 王鼎（卒于663年），唐人物。籍贯琅琊，曾任工部員外郎。（中国历代人物传记资料库 CBDB 175676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLa6u987MQb63j3ya1tAqU | 王德素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 175676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175676&o=json)
