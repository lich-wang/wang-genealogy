---
schema: wang-person/v1
id: p_xtaUB5KBLd2G7QtFg9eDxi
status: active
merged_into: null
display_name: 王鉅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8sjiQ4AGVw9BQtmF1vxTK
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxL7Hkz4XV2yaqqZjrUPrF
          claim_id: c_E8sjiQ4AGVw9BQtmF1vxTK
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
          stance: supports
          locator: CBDB:175714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175714）
          source: &a1
            id: s_ANJ1vH2CHvgNsxiBZ6UZeF
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 175714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175714&o=json
            external_identifier: CBDB:175714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DJoFz2Je8P8T3KpDF6ULyc
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLrwQ9LQrybNZxgaY1sGfn
          claim_id: c_DJoFz2Je8P8T3KpDF6ULyc
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
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
        id: c_41R3XuqurKpvzLDN5HsiT3
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅（卒于917年），唐人物。籍贯宣州。（中国历代人物传记资料库 CBDB 175714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U5DiEuEQTFI7dUcbmIgaH_
          claim_id: c_41R3XuqurKpvzLDN5HsiT3
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
          stance: supports
          locator: CBDB:175714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VXfBlKFZ203kFmSzxSz1CE
        subject_person_id: p_82X3C77Tnmz5EH9rMPC7QU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uG8Rftcd9qSlOCik-gzHFD
          claim_id: c_VXfBlKFZ203kFmSzxSz1CE
          source_id: s_681Av3E8NoHxucgmpQNawx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_681Av3E8NoHxucgmpQNawx
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 175713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175713&o=json
            external_identifier: CBDB:175713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_82X3C77Tnmz5EH9rMPC7QU
        status: active
        display_name: 王洧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| death.date | 917年 | accepted |
| bio.summary | 王鉅（卒于917年），唐人物。籍贯宣州。（中国历代人物传记资料库 CBDB 175714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_82X3C77Tnmz5EH9rMPC7QU | 王洧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 175714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175714&o=json)
- [中国历代人物传记资料库：王洧（CBDB 175713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175713&o=json)
