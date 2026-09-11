---
schema: wang-person/v1
id: p_yBtPvdFHB94uiBW1TdCCXp
status: active
merged_into: null
display_name: 王敬仲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77THN2miPSpLDy3vh6yWcJ
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dMPtDTh3tfHY9DfHANsdvL
          claim_id: c_77THN2miPSpLDy3vh6yWcJ
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
          stance: supports
          locator: CBDB:175717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175717）
          source: &a1
            id: s_4o6giVFF6N5GX9PM8T3gbY
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 175717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175717&o=json
            external_identifier: CBDB:175717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WbaR9itQKzWYmD9GwRAj7W
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DV3roxoiwmT8sxwbZaEJgv
          claim_id: c_WbaR9itQKzWYmD9GwRAj7W
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
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
        id: c_tBdjCDFBC4A1mswhoRxfAA
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲（卒于841年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iCVr6WID94dK6M6NDg9oMY
          claim_id: c_tBdjCDFBC4A1mswhoRxfAA
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
          stance: supports
          locator: CBDB:175717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_trZPV886ITEXDmCijSvWja
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OkEr4nWFt-WixWYBrfsEpX
          claim_id: c_trZPV886ITEXDmCijSvWja
          source_id: s_myh5kEKgZXyRw9RsbCULRP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_myh5kEKgZXyRw9RsbCULRP
            source_type: api_record
            title: 中国历代人物传记资料库：王倉（CBDB 175715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175715&o=json
            external_identifier: CBDB:175715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        status: active
        display_name: 王倉
        merged_into_person_id: null
  children:
    - claim:
        id: c_kdWcBdG9NevqtZnoQ25YPq
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hV7Ys9SUThQQEao-ZE8W7G
          claim_id: c_kdWcBdG9NevqtZnoQ25YPq
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5koLLBULa2Yqd2GY1h9GaC
            source_type: api_record
            title: 中国历代人物传记资料库：王寡言（CBDB 175718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json
            external_identifier: CBDB:175718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VjyGNMX3LpLiN9N9Cogi3K
        status: active
        display_name: 王寡言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | 王敬仲（卒于841年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4YYoAHWMp3Bi3iGGbeFDZQ | 王倉 | accepted |
| children | p_VjyGNMX3LpLiN9N9Cogi3K | 王寡言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倉（CBDB 175715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175715&o=json)
- [中国历代人物传记资料库：王寡言（CBDB 175718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json)
- [中国历代人物传记资料库：王敬仲（CBDB 175717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175717&o=json)
