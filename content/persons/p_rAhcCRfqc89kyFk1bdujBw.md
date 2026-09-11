---
schema: wang-person/v1
id: p_rAhcCRfqc89kyFk1bdujBw
status: active
merged_into: null
display_name: 王國楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6s3oHYPaB1M9TBdKn9Tc7C
        subject_person_id: p_rAhcCRfqc89kyFk1bdujBw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tzp2C2fUPbboQ5tC36QDyq
          claim_id: c_6s3oHYPaB1M9TBdKn9Tc7C
          source_id: s_bGvQnCC4mJeBTUrfYWYVjr
          stance: supports
          locator: CBDB:343437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343437）
          source: &a1
            id: s_bGvQnCC4mJeBTUrfYWYVjr
            source_type: api_record
            title: 中国历代人物传记资料库：王國楨（CBDB 343437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343437&o=json
            external_identifier: CBDB:343437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3zQPCWC4rkRNJzsYjQi4CN
        subject_person_id: p_rAhcCRfqc89kyFk1bdujBw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEwpnPPwNZK9TCQEnBBmzR
          claim_id: c_3zQPCWC4rkRNJzsYjQi4CN
          source_id: s_bGvQnCC4mJeBTUrfYWYVjr
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
        id: c_nqbQKycduCu5okdcBDo5hM
        subject_person_id: p_rAhcCRfqc89kyFk1bdujBw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨（卒于1624年），明人物。明清進士進士，籍贯錢塘，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 343437）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XJ3y7rZp15IYZ0Jthc1Phw
          claim_id: c_nqbQKycduCu5okdcBDo5hM
          source_id: s_bGvQnCC4mJeBTUrfYWYVjr
          stance: supports
          locator: CBDB:343437
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

# 王國楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國楨 | accepted |
| death.date | 1624年 | accepted |
| bio.summary | 王國楨（卒于1624年），明人物。明清進士進士，籍贯錢塘，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 343437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國楨（CBDB 343437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343437&o=json)
