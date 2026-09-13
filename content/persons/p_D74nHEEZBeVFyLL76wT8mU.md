---
schema: wang-person/v1
id: p_D74nHEEZBeVFyLL76wT8mU
status: active
merged_into: null
display_name: 王家光
cbdb_id: 69284
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Enve7845X25osUr6aBeg7W
        subject_person_id: p_D74nHEEZBeVFyLL76wT8mU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家光（卒于1775年），史料所见人物。本项目依据《中国历代人物传记资料库：王家光（CBDB 69284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_sJtOvDBNEz9ItXOaN7J1tH
          claim_id: c_Enve7845X25osUr6aBeg7W
          source_id: s_TmAAK3vdQzaHbZvjP539A2
          stance: supports
          locator: CBDB:69284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TmAAK3vdQzaHbZvjP539A2
            source_type: api_record
            title: 中国历代人物传记资料库：王家光（CBDB 69284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69284&o=json
            external_identifier: CBDB:69284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_se13AdybGeHsiR4pEUKhN3
        subject_person_id: p_D74nHEEZBeVFyLL76wT8mU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1775-01-01
            latest: 1775-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9785vp5MQMWLFZZwxi3TrF
          claim_id: c_se13AdybGeHsiR4pEUKhN3
          source_id: s_TmAAK3vdQzaHbZvjP539A2
          stance: supports
          locator: CBDB:69284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1775
          source:
            id: s_TmAAK3vdQzaHbZvjP539A2
            source_type: api_record
            title: 中国历代人物传记资料库：王家光（CBDB 69284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69284&o=json
            external_identifier: CBDB:69284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_87BqGsBEUEXacuB2i1QHC6
        subject_person_id: p_D74nHEEZBeVFyLL76wT8mU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QBc3VVnKus2jKDsHThH8NE
          claim_id: c_87BqGsBEUEXacuB2i1QHC6
          source_id: s_TmAAK3vdQzaHbZvjP539A2
          stance: supports
          locator: CBDB:69284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1775
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

# 王家光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家光（卒于1775年），史料所见人物。本项目依据《中国历代人物传记资料库：王家光（CBDB 69284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1775年 | accepted |
| name.primary | 王家光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家光（CBDB 69284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69284&o=json)
