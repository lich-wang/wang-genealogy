---
schema: wang-person/v1
id: p_PYScCSBT9W5sFMGc1Pn1Hk
status: active
merged_into: null
display_name: 王鄑
cbdb_id: 186847
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vy5MbfVGjEUmWGfXDpAyLL
        subject_person_id: p_PYScCSBT9W5sFMGc1Pn1Hk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄑（卒于959年），史料所见人物。本项目依据《中国历代人物传记资料库：王鄑（CBDB 186847）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_l_3A2mA2gWRLqBKQRezJ3q
          claim_id: c_Vy5MbfVGjEUmWGfXDpAyLL
          source_id: s_psTudDuCuCURkuSBifZP5b
          stance: supports
          locator: CBDB:186847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_psTudDuCuCURkuSBifZP5b
            source_type: api_record
            title: 中国历代人物传记资料库：王鄑（CBDB 186847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186847&o=json
            external_identifier: CBDB:186847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_a8sQewS7Xxe27amsUGiQAa
        subject_person_id: p_PYScCSBT9W5sFMGc1Pn1Hk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0959-01-01
            latest: 0959-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sw7Z9pzAXaskbaa1gjUzUK
          claim_id: c_a8sQewS7Xxe27amsUGiQAa
          source_id: s_psTudDuCuCURkuSBifZP5b
          stance: supports
          locator: CBDB:186847
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 959
          source:
            id: s_psTudDuCuCURkuSBifZP5b
            source_type: api_record
            title: 中国历代人物传记资料库：王鄑（CBDB 186847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186847&o=json
            external_identifier: CBDB:186847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WEjuL1KqtPGuNCY1LBQMTf
        subject_person_id: p_PYScCSBT9W5sFMGc1Pn1Hk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MMKnSyLP5UrCGy1n333U1T
          claim_id: c_WEjuL1KqtPGuNCY1LBQMTf
          source_id: s_psTudDuCuCURkuSBifZP5b
          stance: supports
          locator: CBDB:186847
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 959
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9Kr7clo84wdMK1tqpyHN20
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYScCSBT9W5sFMGc1Pn1Hk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKrA59A4Hy2fyLFv3t27OI
          claim_id: c_9Kr7clo84wdMK1tqpyHN20
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gNLMaQqWEd6Tcr2zT2brF
        status: active
        display_name: 王處直
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鄑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鄑（卒于959年），史料所见人物。本项目依据《中国历代人物传记资料库：王鄑（CBDB 186847）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 959年 | accepted |
| name.primary | 王鄑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4gNLMaQqWEd6Tcr2zT2brF | 王處直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)
- [中国历代人物传记资料库：王鄑（CBDB 186847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186847&o=json)
