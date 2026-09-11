---
schema: wang-person/v1
id: p_vMjWF8xGZKK4PofMqJPXBs
status: active
merged_into: null
display_name: 王郡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K6HErETD5c8ak5MtPuig3U
        subject_person_id: p_vMjWF8xGZKK4PofMqJPXBs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pPU6y2kKtNQBzvbMi81bLU
          claim_id: c_K6HErETD5c8ak5MtPuig3U
          source_id: s_hWssKK7fFadgE4g1hATm6W
          stance: supports
          locator: CBDB:57165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57165）
          source: &a1
            id: s_hWssKK7fFadgE4g1hATm6W
            source_type: api_record
            title: 中国历代人物传记资料库：王郡（CBDB 57165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57165&o=json
            external_identifier: CBDB:57165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eYap44Tn5g7157mNvhwU8i
        subject_person_id: p_vMjWF8xGZKK4PofMqJPXBs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5h23RVyMRerjbBcsfHQMF
          claim_id: c_eYap44Tn5g7157mNvhwU8i
          source_id: s_hWssKK7fFadgE4g1hATm6W
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
        id: c_ffaQxoqLfFkC643m9cDRAA
        subject_person_id: p_vMjWF8xGZKK4PofMqJPXBs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郡（卒于1756年），清人物。籍贯西安府，曾任標把總、副將、營千總。（中国历代人物传记资料库 CBDB 57165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dzBQfEXihzOm346sevAnOz
          claim_id: c_ffaQxoqLfFkC643m9cDRAA
          source_id: s_hWssKK7fFadgE4g1hATm6W
          stance: supports
          locator: CBDB:57165
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4P9u8_1QxTVwmyETGzbCbh
        subject_person_id: p_vMjWF8xGZKK4PofMqJPXBs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aHJwnpHRpxrcjyR2reA6Ac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QG7vy9dSS2yLWbli-eOuhI
          claim_id: c_4P9u8_1QxTVwmyETGzbCbh
          source_id: s_hWssKK7fFadgE4g1hATm6W
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），384：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aHJwnpHRpxrcjyR2reA6Ac
        status: active
        display_name: 王守震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郡 | accepted |
| death.date | 1756年 | accepted |
| bio.summary | 王郡（卒于1756年），清人物。籍贯西安府，曾任標把總、副將、營千總。（中国历代人物传记资料库 CBDB 57165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aHJwnpHRpxrcjyR2reA6Ac | 王守震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郡（CBDB 57165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57165&o=json)
