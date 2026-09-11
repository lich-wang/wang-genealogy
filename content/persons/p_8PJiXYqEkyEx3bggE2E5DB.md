---
schema: wang-person/v1
id: p_8PJiXYqEkyEx3bggE2E5DB
status: active
merged_into: null
display_name: 王鏜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKWv3rgNAy92jHQpCRTvJN
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LEGz16Wy5txkxgc4UmJo8r
          claim_id: c_oKWv3rgNAy92jHQpCRTvJN
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
          stance: supports
          locator: CBDB:71279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71279）
          source: &a1
            id: s_ShVQCuLJ6g6tnt4cEfddKP
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 71279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71279&o=json
            external_identifier: CBDB:71279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_84c3M1WGGbgzKfN2w36Wyd
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1708年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UKRAC6M3xTSxZk3rzbbyw9
          claim_id: c_84c3M1WGGbgzKfN2w36Wyd
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
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
        id: c_KrYvzcXsBspNDnt7Hf2k9v
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hwXJKKnjWtJdX3sJoVwEJQ
          claim_id: c_KrYvzcXsBspNDnt7Hf2k9v
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
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
        id: c_utWFDf8RA7A5Hf5J6iJ2XE
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜（1708年—1761年），清人物。籍贯鳳台，曾任司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 71279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_523elRVZHtkvcj6IA710sY
          claim_id: c_utWFDf8RA7A5Hf5J6iJ2XE
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
          stance: supports
          locator: CBDB:71279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jAIV_SRnlYiQPhmdr4c-KU
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kRrHWkVehKECkYBgxMokae
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hT1dGwHwX9yf61nfPXrTKF
          claim_id: c_jAIV_SRnlYiQPhmdr4c-KU
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13237：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kRrHWkVehKECkYBgxMokae
        status: active
        display_name: 王德浤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| birth.date | 1708年 | accepted |
| death.date | 1761年 | accepted |
| bio.summary | 王鏜（1708年—1761年），清人物。籍贯鳳台，曾任司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 71279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kRrHWkVehKECkYBgxMokae | 王德浤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏜（CBDB 71279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71279&o=json)
