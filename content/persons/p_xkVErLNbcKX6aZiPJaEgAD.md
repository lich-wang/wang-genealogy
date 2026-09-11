---
schema: wang-person/v1
id: p_xkVErLNbcKX6aZiPJaEgAD
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fkPoVnVbVi8SwGAkQk5QV6
        subject_person_id: p_xkVErLNbcKX6aZiPJaEgAD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tEzsLMp21UzR32N2h6253
          claim_id: c_fkPoVnVbVi8SwGAkQk5QV6
          source_id: s_xe41aXAJWF6x4wdfJrdS5F
          stance: supports
          locator: CBDB:71203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71203）
          source: &a1
            id: s_xe41aXAJWF6x4wdfJrdS5F
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 71203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71203&o=json
            external_identifier: CBDB:71203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Efg5bNYMVZn6SssfGXyt4A
        subject_person_id: p_xkVErLNbcKX6aZiPJaEgAD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2vh2yvqw6KxUe3iwdpbtnV
          claim_id: c_Efg5bNYMVZn6SssfGXyt4A
          source_id: s_xe41aXAJWF6x4wdfJrdS5F
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
        id: c_VQqVcwHytQexCU3ahxdtF6
        subject_person_id: p_xkVErLNbcKX6aZiPJaEgAD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aw1gQnUgAgXUpH4c4NPeYb
          claim_id: c_VQqVcwHytQexCU3ahxdtF6
          source_id: s_xe41aXAJWF6x4wdfJrdS5F
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
        id: c_wStpLq1MVWuswZ63b4BLqZ
        subject_person_id: p_xkVErLNbcKX6aZiPJaEgAD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清（1632年—1674年），清人物。籍贯海豐。（中国历代人物传记资料库 CBDB 71203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jYUzNuCh16EQhE9TLmvu34
          claim_id: c_wStpLq1MVWuswZ63b4BLqZ
          source_id: s_xe41aXAJWF6x4wdfJrdS5F
          stance: supports
          locator: CBDB:71203
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| birth.date | 1632年 | accepted |
| death.date | 1674年 | accepted |
| bio.summary | 王清（1632年—1674年），清人物。籍贯海豐。（中国历代人物传记资料库 CBDB 71203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 71203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71203&o=json)
