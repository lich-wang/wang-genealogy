---
schema: wang-person/v1
id: p_u8HFAQEBDCeFWcEi2uB4Yq
status: active
merged_into: null
display_name: 王仁表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qENgUP3Y7VksLAL5zHf147
        subject_person_id: p_u8HFAQEBDCeFWcEi2uB4Yq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xWHK5FQ56dxMbYwF6tD2L8
          claim_id: c_qENgUP3Y7VksLAL5zHf147
          source_id: s_DeLALZd1aZacW966EHyJ84
          stance: supports
          locator: CBDB:139472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139472）
          source: &a1
            id: s_DeLALZd1aZacW966EHyJ84
            source_type: api_record
            title: 中国历代人物传记资料库：王仁表（CBDB 139472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139472&o=json
            external_identifier: CBDB:139472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iaxy2uZoH4a9c4notsFPjE
        subject_person_id: p_u8HFAQEBDCeFWcEi2uB4Yq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EN1RZQHmfxbcHuYA9QezFh
          claim_id: c_iaxy2uZoH4a9c4notsFPjE
          source_id: s_DeLALZd1aZacW966EHyJ84
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
        id: c_4csvuPvdEGfKtH9uPNvRnH
        subject_person_id: p_u8HFAQEBDCeFWcEi2uB4Yq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9GvrJP5zTLUJJd3xGYD33p
          claim_id: c_4csvuPvdEGfKtH9uPNvRnH
          source_id: s_DeLALZd1aZacW966EHyJ84
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王仁表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁表 | accepted |
| death.date | 665年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁表（CBDB 139472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139472&o=json)
