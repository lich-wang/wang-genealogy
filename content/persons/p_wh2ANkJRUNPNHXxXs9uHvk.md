---
schema: wang-person/v1
id: p_wh2ANkJRUNPNHXxXs9uHvk
status: active
merged_into: null
display_name: 王嘉訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6WCp5f4TgewrZ4rvjPQBG
        subject_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V4RGn8vChAC9Hb3A5gHEqW
          claim_id: c_U6WCp5f4TgewrZ4rvjPQBG
          source_id: s_eeSNcsGy8vSX6KRkPTFZvA
          stance: supports
          locator: CBDB:192976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192976）
          source: &a1
            id: s_eeSNcsGy8vSX6KRkPTFZvA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉訓（CBDB 192976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192976&o=json
            external_identifier: CBDB:192976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kCWuWfZY4vKBagN2ZowDW6
        subject_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 764年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NaUrho8kCCEkyBmmVcbA5V
          claim_id: c_kCWuWfZY4vKBagN2ZowDW6
          source_id: s_eeSNcsGy8vSX6KRkPTFZvA
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
        id: c_qtx8nEW9Ki8dgKGqubPcBF
        subject_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉訓（卒于764年），唐人物。籍贯汧陽。（中国历代人物传记资料库 CBDB 192976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lUM6Ym3DaXKB67Y63MTqov
          claim_id: c_qtx8nEW9Ki8dgKGqubPcBF
          source_id: s_eeSNcsGy8vSX6KRkPTFZvA
          stance: supports
          locator: CBDB:192976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eenycU7S48k0z6-BQxpPoJ
        subject_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJljjNjKiWdPWE_nRaQDGz
          claim_id: c_eenycU7S48k0z6-BQxpPoJ
          source_id: s_eeSNcsGy8vSX6KRkPTFZvA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VFHd1HePcZxzPPEmJtTsvn
        status: active
        display_name: 王洪簡
        merged_into_person_id: null
  children:
    - claim:
        id: c_3PxHYLSKJUKlhMV011sLUR
        subject_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aaiHJwLEK4x15AzbShdWFc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQRtGoszns6ELsWbUJIMr_
          claim_id: c_3PxHYLSKJUKlhMV011sLUR
          source_id: s_2puGC82E4CtAEoaDwfg4iN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2puGC82E4CtAEoaDwfg4iN
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 145625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json
            external_identifier: CBDB:145625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aaiHJwLEK4x15AzbShdWFc
        status: active
        display_name: 王昇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉訓 | accepted |
| death.date | 764年 | accepted |
| bio.summary | 王嘉訓（卒于764年），唐人物。籍贯汧陽。（中国历代人物传记资料库 CBDB 192976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VFHd1HePcZxzPPEmJtTsvn | 王洪簡 | accepted |
| children | p_aaiHJwLEK4x15AzbShdWFc | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉訓（CBDB 192976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192976&o=json)
- [中国历代人物传记资料库：王昇（CBDB 145625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json)
