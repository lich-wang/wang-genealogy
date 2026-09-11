---
schema: wang-person/v1
id: p_wC1UcJY7ssfefjEwH3h8KT
status: active
merged_into: null
display_name: 王覺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YxMa42X5HKEUVnevZVBaAA
        subject_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPM1ZK1gmqgL2pfPK2mWBe
          claim_id: c_YxMa42X5HKEUVnevZVBaAA
          source_id: s_V6tFeo1V3k4u9EGY98rsem
          stance: supports
          locator: CBDB:22218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22218）
          source: &a1
            id: s_V6tFeo1V3k4u9EGY98rsem
            source_type: api_record
            title: 中国历代人物传记资料库：王覺（CBDB 22218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22218&o=json
            external_identifier: CBDB:22218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2bhGTKvymNQ9qDfzam8SNB
        subject_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1109年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DuRH4LLzsLMjgh7hbXHnPB
          claim_id: c_2bhGTKvymNQ9qDfzam8SNB
          source_id: s_V6tFeo1V3k4u9EGY98rsem
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
        id: c_4DF5iFD9Pe7dEzGW73nNZx
        subject_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1175年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zThsuBqeXh3ej5V9Xb1GgT
          claim_id: c_4DF5iFD9Pe7dEzGW73nNZx
          source_id: s_V6tFeo1V3k4u9EGY98rsem
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
        id: c_vJGnTZoUdx4BATxBuC9mAv
        subject_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fQWAY6DDV98p3ph4yNk76
          claim_id: c_vJGnTZoUdx4BATxBuC9mAv
          source_id: s_V6tFeo1V3k4u9EGY98rsem
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yhquz61EQd309HQEOSz8jO
        subject_person_id: p_TVDwz4xnbG7NDbNfhChTB2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umB76733hCNSgB0O5n1PeH
          claim_id: c_yhquz61EQd309HQEOSz8jO
          source_id: s_V6tFeo1V3k4u9EGY98rsem
          stance: supports
          locator: CBDB 双向互证（父 王後 ⇄ 子 王覺）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TVDwz4xnbG7NDbNfhChTB2
        status: active
        display_name: 王後
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覺 | accepted |
| birth.date | 1109年 | accepted |
| death.date | 1175年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TVDwz4xnbG7NDbNfhChTB2 | 王後 | accepted |

## 外部来源

- [中国历代人物传记资料库：王覺（CBDB 22218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22218&o=json)
