---
schema: wang-person/v1
id: p_gzFLPLfvhnHAFt8Um1Yt8E
status: active
merged_into: null
display_name: 王德基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z73pGchjN9aMj5NwTNSaFv
        subject_person_id: p_gzFLPLfvhnHAFt8Um1Yt8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_437JCBKNd46ZU2ctBExHUb
          claim_id: c_Z73pGchjN9aMj5NwTNSaFv
          source_id: s_1JfqBRQ6oRXiC5h3fXoDCK
          stance: supports
          locator: CBDB:72192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72192）
          source: &a1
            id: s_1JfqBRQ6oRXiC5h3fXoDCK
            source_type: api_record
            title: 中国历代人物传记资料库：王德基（CBDB 72192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72192&o=json
            external_identifier: CBDB:72192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iMk9HUZwv1cWRSMQEb9YhP
        subject_person_id: p_gzFLPLfvhnHAFt8Um1Yt8E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GVr3RKwZvTi8jKPrQMTJd8
          claim_id: c_iMk9HUZwv1cWRSMQEb9YhP
          source_id: s_1JfqBRQ6oRXiC5h3fXoDCK
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
        id: c_KqEsTmpGCpXGbQRm3haXPd
        subject_person_id: p_gzFLPLfvhnHAFt8Um1Yt8E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iM6NPPNP2DeAWwanYNsWad
          claim_id: c_KqEsTmpGCpXGbQRm3haXPd
          source_id: s_1JfqBRQ6oRXiC5h3fXoDCK
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
        id: c_jGjp4ADzyUyjBBVe8LrHL3
        subject_person_id: p_gzFLPLfvhnHAFt8Um1Yt8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德基（1842年—1884年），清人物。籍贯益陽，曾任巡檢。（中国历代人物传记资料库 CBDB 72192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_du6BFtyuG7cB67GWs72IPd
          claim_id: c_jGjp4ADzyUyjBBVe8LrHL3
          source_id: s_1JfqBRQ6oRXiC5h3fXoDCK
          stance: supports
          locator: CBDB:72192
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

# 王德基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德基 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1884年 | accepted |
| bio.summary | 王德基（1842年—1884年），清人物。籍贯益陽，曾任巡檢。（中国历代人物传记资料库 CBDB 72192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德基（CBDB 72192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72192&o=json)
