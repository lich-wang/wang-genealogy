---
schema: wang-person/v1
id: p_SGBcgitFC6GXFuEsTzJiKU
status: active
merged_into: null
display_name: 王瑾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2tvKVDvYBq5hXdG1P56dU8
        subject_person_id: p_SGBcgitFC6GXFuEsTzJiKU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZBx7RfNhdKVoad1LFaCkH8
          claim_id: c_2tvKVDvYBq5hXdG1P56dU8
          source_id: s_F8kF5c5Mw6ksQD2PRsf2gv
          stance: supports
          locator: CBDB:146031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146031）
          source: &a1
            id: s_F8kF5c5Mw6ksQD2PRsf2gv
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 146031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146031&o=json
            external_identifier: CBDB:146031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RNMrPe94ARfKqt27xYCxGF
        subject_person_id: p_SGBcgitFC6GXFuEsTzJiKU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWLHWZ4fgv7CxwyV2MTAt3
          claim_id: c_RNMrPe94ARfKqt27xYCxGF
          source_id: s_F8kF5c5Mw6ksQD2PRsf2gv
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
        id: c_UuGRddxXM1GkUWLsLCfMa1
        subject_person_id: p_SGBcgitFC6GXFuEsTzJiKU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZF1XibLam5UHuvhC5K3HkT
          claim_id: c_UuGRddxXM1GkUWLsLCfMa1
          source_id: s_F8kF5c5Mw6ksQD2PRsf2gv
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
        id: c_M63UK2RkT8x27rAym5TmL7
        subject_person_id: p_SGBcgitFC6GXFuEsTzJiKU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾（826年—847年），唐人物。籍贯萬年，曾任縣尉。（中国历代人物传记资料库 CBDB 146031）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pqxJMRVqSbWAsnGJERG_FW
          claim_id: c_M63UK2RkT8x27rAym5TmL7
          source_id: s_F8kF5c5Mw6ksQD2PRsf2gv
          stance: supports
          locator: CBDB:146031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Zpm3OQ5DlDQRqweDpdYF9w
        subject_person_id: p_iB2352EN49sfm6pSXkTPUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGBcgitFC6GXFuEsTzJiKU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bURFL847ODcEPimTgf-tWT
          claim_id: c_Zpm3OQ5DlDQRqweDpdYF9w
          source_id: s_f7Ld4QKHJzWMqxYyMh2MrQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f7Ld4QKHJzWMqxYyMh2MrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王申伯（CBDB 175690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175690&o=json
            external_identifier: CBDB:175690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iB2352EN49sfm6pSXkTPUs
        status: active
        display_name: 王申伯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑾 | accepted |
| birth.date | 826年 | accepted |
| death.date | 847年 | accepted |
| bio.summary | 王瑾（826年—847年），唐人物。籍贯萬年，曾任縣尉。（中国历代人物传记资料库 CBDB 146031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iB2352EN49sfm6pSXkTPUs | 王申伯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑾（CBDB 146031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146031&o=json)
- [中国历代人物传记资料库：王申伯（CBDB 175690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175690&o=json)
