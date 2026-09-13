---
schema: wang-person/v1
id: p_LKsex1sTxdCHuRXEDg12Dy
status: active
merged_into: null
display_name: 王齊休
cbdb_id: 175865
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56tMFARTUh4w14pPPnGgHg
        subject_person_id: p_LKsex1sTxdCHuRXEDg12Dy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊休（卒于704年），史料所见人物。本项目依据《中国历代人物传记资料库：王齊休（CBDB 175865）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nESOPMu2VHdK526BvIeXym
          claim_id: c_56tMFARTUh4w14pPPnGgHg
          source_id: s_sTKt79GXptwD1Djgf8iweg
          stance: supports
          locator: CBDB:175865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sTKt79GXptwD1Djgf8iweg
            source_type: api_record
            title: 中国历代人物传记资料库：王齊休（CBDB 175865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175865&o=json
            external_identifier: CBDB:175865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MwFL2sDEUvkZ7PYVqwMg7A
        subject_person_id: p_LKsex1sTxdCHuRXEDg12Dy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0704-01-01
            latest: 0704-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DckRsKzFYwNFvTC5bAsfTK
          claim_id: c_MwFL2sDEUvkZ7PYVqwMg7A
          source_id: s_sTKt79GXptwD1Djgf8iweg
          stance: supports
          locator: CBDB:175865
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 704
          source:
            id: s_sTKt79GXptwD1Djgf8iweg
            source_type: api_record
            title: 中国历代人物传记资料库：王齊休（CBDB 175865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175865&o=json
            external_identifier: CBDB:175865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v1CDKeNoXTREw9Uq6hx7DJ
        subject_person_id: p_LKsex1sTxdCHuRXEDg12Dy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PsreuiVoEDUmjRH8vtyHbN
          claim_id: c_v1CDKeNoXTREw9Uq6hx7DJ
          source_id: s_sTKt79GXptwD1Djgf8iweg
          stance: supports
          locator: CBDB:175865
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 704
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

# 王齊休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王齊休（卒于704年），史料所见人物。本项目依据《中国历代人物传记资料库：王齊休（CBDB 175865）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 704年 | accepted |
| name.primary | 王齊休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊休（CBDB 175865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175865&o=json)
