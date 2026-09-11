---
schema: wang-person/v1
id: p_h2WDvbp8jQ6hAcqofkyAsc
status: active
merged_into: null
display_name: 王寅賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n9qPn1sh7Ar6qbH71fR3bs
        subject_person_id: p_h2WDvbp8jQ6hAcqofkyAsc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_11WGJcgBhVLjg83HbR11Rp
          claim_id: c_n9qPn1sh7Ar6qbH71fR3bs
          source_id: s_RUFwFrM8ZxPr9EZuUnRn2C
          stance: supports
          locator: CBDB:414360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414360）
          source: &a1
            id: s_RUFwFrM8ZxPr9EZuUnRn2C
            source_type: api_record
            title: 中国历代人物传记资料库：王寅賓（CBDB 414360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414360&o=json
            external_identifier: CBDB:414360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FwtUzxSMaa3nNKXVrkpwvF
        subject_person_id: p_h2WDvbp8jQ6hAcqofkyAsc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅賓，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nzwpEOlgajxx6J7MzlnJ7c
          claim_id: c_FwtUzxSMaa3nNKXVrkpwvF
          source_id: s_RUFwFrM8ZxPr9EZuUnRn2C
          stance: supports
          locator: CBDB:414360
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

# 王寅賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅賓 | accepted |
| bio.summary | 王寅賓，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅賓（CBDB 414360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414360&o=json)
