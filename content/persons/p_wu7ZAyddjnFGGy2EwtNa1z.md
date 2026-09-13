---
schema: wang-person/v1
id: p_wu7ZAyddjnFGGy2EwtNa1z
status: active
merged_into: null
display_name: 王來覲
cbdb_id: 69242
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LHi84L5HTpeGnct7PTQB5E
        subject_person_id: p_wu7ZAyddjnFGGy2EwtNa1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來覲（卒于1648年），史料所见人物。本项目依据《中国历代人物传记资料库：王來覲（CBDB 69242）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_e1hMevtmN1KWL2P3Vp3hTi
          claim_id: c_LHi84L5HTpeGnct7PTQB5E
          source_id: s_Ed1LeyJ98gYHqyg7fnVN2K
          stance: supports
          locator: CBDB:69242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Ed1LeyJ98gYHqyg7fnVN2K
            source_type: api_record
            title: 中国历代人物传记资料库：王來覲（CBDB 69242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69242&o=json
            external_identifier: CBDB:69242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SbL8qAScQovLZrj3Ens46e
        subject_person_id: p_wu7ZAyddjnFGGy2EwtNa1z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1648-01-01
            latest: 1648-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YNpzsvad4PHULG3D9JjLFu
          claim_id: c_SbL8qAScQovLZrj3Ens46e
          source_id: s_Ed1LeyJ98gYHqyg7fnVN2K
          stance: supports
          locator: CBDB:69242
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1648
          source:
            id: s_Ed1LeyJ98gYHqyg7fnVN2K
            source_type: api_record
            title: 中国历代人物传记资料库：王來覲（CBDB 69242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69242&o=json
            external_identifier: CBDB:69242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_59nELfpurxgb8QL1Q4NGFM
        subject_person_id: p_wu7ZAyddjnFGGy2EwtNa1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來覲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L63536FeGbvgM1BVdyhbE4
          claim_id: c_59nELfpurxgb8QL1Q4NGFM
          source_id: s_Ed1LeyJ98gYHqyg7fnVN2K
          stance: supports
          locator: CBDB:69242
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1648
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

# 王來覲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來覲（卒于1648年），史料所见人物。本项目依据《中国历代人物传记资料库：王來覲（CBDB 69242）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1648年 | accepted |
| name.primary | 王來覲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來覲（CBDB 69242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69242&o=json)
