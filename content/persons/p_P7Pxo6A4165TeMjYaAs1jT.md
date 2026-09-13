---
schema: wang-person/v1
id: p_P7Pxo6A4165TeMjYaAs1jT
status: active
merged_into: null
display_name: 王似之
cbdb_id: 19420
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TV6SxbusX2FJF47vY6CCZa
        subject_person_id: p_P7Pxo6A4165TeMjYaAs1jT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王似之（卒于1199年），史料所见人物。本项目依据《中国历代人物传记资料库：王似之（CBDB 19420）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qfGTGwU7JKgFtaJ9nUCeOy
          claim_id: c_TV6SxbusX2FJF47vY6CCZa
          source_id: s_D6VHcY7f16wCSutcAz83K4
          stance: supports
          locator: CBDB:19420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_D6VHcY7f16wCSutcAz83K4
            source_type: api_record
            title: 中国历代人物传记资料库：王似之（CBDB 19420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19420&o=json
            external_identifier: CBDB:19420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3QnnW8iPGC3z3iL7Ah9dmc
        subject_person_id: p_P7Pxo6A4165TeMjYaAs1jT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1199年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1199-01-01
            latest: 1199-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cuzv5X2NMkvJqv19Fnr1fz
          claim_id: c_3QnnW8iPGC3z3iL7Ah9dmc
          source_id: s_D6VHcY7f16wCSutcAz83K4
          stance: supports
          locator: CBDB:19420
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1199
          source:
            id: s_D6VHcY7f16wCSutcAz83K4
            source_type: api_record
            title: 中国历代人物传记资料库：王似之（CBDB 19420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19420&o=json
            external_identifier: CBDB:19420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QyiBuVToR3hQu7YbrH4Z79
        subject_person_id: p_P7Pxo6A4165TeMjYaAs1jT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王似之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tBzFvupJhA9vTHC2vpFaLH
          claim_id: c_QyiBuVToR3hQu7YbrH4Z79
          source_id: s_D6VHcY7f16wCSutcAz83K4
          stance: supports
          locator: CBDB:19420
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1199
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oYnGH6N8ZUi7031Gy7A6NR
        subject_person_id: p_P7Pxo6A4165TeMjYaAs1jT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXJ7miwAuO8GyOUhLau8eX
          claim_id: c_oYnGH6N8ZUi7031Gy7A6NR
          source_id: s_QxsvqMGN1tK1yhTCAMTnWZ
          stance: supports
          locator: CBDB 双向互证（父 王似之 ⇄ 子 王夢龍）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_QxsvqMGN1tK1yhTCAMTnWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王夢龍（CBDB 19425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19425&o=json
            external_identifier: CBDB:19425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PfgA5W1G2Fv9NYWMemcshd
        status: active
        display_name: 王夢龍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王似之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王似之（卒于1199年），史料所见人物。本项目依据《中国历代人物传记资料库：王似之（CBDB 19420）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1199年 | accepted |
| name.primary | 王似之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PfgA5W1G2Fv9NYWMemcshd | 王夢龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢龍（CBDB 19425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19425&o=json)
- [中国历代人物传记资料库：王似之（CBDB 19420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19420&o=json)
