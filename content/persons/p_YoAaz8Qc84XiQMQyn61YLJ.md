---
schema: wang-person/v1
id: p_YoAaz8Qc84XiQMQyn61YLJ
status: active
merged_into: null
display_name: 王廷燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mZEZpjARguCFH4hEuFVttH
        subject_person_id: p_YoAaz8Qc84XiQMQyn61YLJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Exg5cRFP876FfvPP9FFzPN
          claim_id: c_mZEZpjARguCFH4hEuFVttH
          source_id: s_mHCxCeYPZM31pSR28mHXWA
          stance: supports
          locator: CBDB:439202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439202）
          source: &a1
            id: s_mHCxCeYPZM31pSR28mHXWA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷燮（CBDB 439202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439202&o=json
            external_identifier: CBDB:439202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bsD5bEDZ4LXQQX87ZB72Nz
        subject_person_id: p_YoAaz8Qc84XiQMQyn61YLJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1731年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6opW5BbEBAcx6iQGXxnuAC
          claim_id: c_bsD5bEDZ4LXQQX87ZB72Nz
          source_id: s_mHCxCeYPZM31pSR28mHXWA
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
        id: c_LUWngUCAKFkBW4D5tgczkn
        subject_person_id: p_YoAaz8Qc84XiQMQyn61YLJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燮（生于1731年），清人物。籍贯武威，入仕披甲，曾任縣知縣、知府、知州。（中国历代人物传记资料库 CBDB 439202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cOr93m_lo2ntGd5NKgjQPA
          claim_id: c_LUWngUCAKFkBW4D5tgczkn
          source_id: s_mHCxCeYPZM31pSR28mHXWA
          stance: supports
          locator: CBDB:439202
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

# 王廷燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷燮 | accepted |
| birth.date | 1731年 | accepted |
| bio.summary | 王廷燮（生于1731年），清人物。籍贯武威，入仕披甲，曾任縣知縣、知府、知州。（中国历代人物传记资料库 CBDB 439202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷燮（CBDB 439202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439202&o=json)
