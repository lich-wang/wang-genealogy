---
schema: wang-person/v1
id: p_LA1RQwjs4doz4J2Zv82Yqs
status: active
merged_into: null
display_name: 王長文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FMev9Aq2CrRYQpHPY7DgT6
        subject_person_id: p_LA1RQwjs4doz4J2Zv82Yqs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UivnyEWZibGNPnFuYPbPXZ
          claim_id: c_FMev9Aq2CrRYQpHPY7DgT6
          source_id: s_SJrUThDn1ZCHiX6BEFbBdF
          stance: supports
          locator: CBDB:192929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192929）
          source: &a1
            id: s_SJrUThDn1ZCHiX6BEFbBdF
            source_type: api_record
            title: 中国历代人物传记资料库：王長文（CBDB 192929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192929&o=json
            external_identifier: CBDB:192929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QvojRTAGmE7sjcSHLK5wAD
        subject_person_id: p_LA1RQwjs4doz4J2Zv82Yqs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 823年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cjDsZvfMr4UuE1K1yHLcjq
          claim_id: c_QvojRTAGmE7sjcSHLK5wAD
          source_id: s_SJrUThDn1ZCHiX6BEFbBdF
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
        id: c_cgVuEGxVA53QAkYkzqsMh7
        subject_person_id: p_LA1RQwjs4doz4J2Zv82Yqs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長文（卒于823年），唐人物。曾任太子賓客。（中国历代人物传记资料库 CBDB 192929）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dUteAOXbzM0w9_i0_gqI3y
          claim_id: c_cgVuEGxVA53QAkYkzqsMh7
          source_id: s_SJrUThDn1ZCHiX6BEFbBdF
          stance: supports
          locator: CBDB:192929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王長文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長文 | accepted |
| death.date | 823年 | accepted |
| bio.summary | 王長文（卒于823年），唐人物。曾任太子賓客。（中国历代人物传记资料库 CBDB 192929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長文（CBDB 192929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192929&o=json)
