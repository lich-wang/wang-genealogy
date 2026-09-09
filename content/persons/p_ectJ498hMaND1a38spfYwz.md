---
schema: wang-person/v1
id: p_ectJ498hMaND1a38spfYwz
status: active
merged_into: null
display_name: 王永清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kg2LPe2NMyg9Ks2PhopTk
        subject_person_id: p_ectJ498hMaND1a38spfYwz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FeyBw54qjzy16zquZ6eRe
          claim_id: c_6kg2LPe2NMyg9Ks2PhopTk
          source_id: s_3ByNjD5egnNqU2PDFywb73
          stance: supports
          locator: CBDB:69104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69104）
          source: &a1
            id: s_3ByNjD5egnNqU2PDFywb73
            source_type: api_record
            title: 中国历代人物传记资料库：王永清（CBDB 69104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69104&o=json
            external_identifier: CBDB:69104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SZK2omte7YL8NwD9Fcj7kD
        subject_person_id: p_ectJ498hMaND1a38spfYwz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6GGDQdpe7cbPTSmhjcQgw
          claim_id: c_SZK2omte7YL8NwD9Fcj7kD
          source_id: s_3ByNjD5egnNqU2PDFywb73
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
        id: c_hE2JQKSrJsyKZz3rgEG7eH
        subject_person_id: p_ectJ498hMaND1a38spfYwz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoqND9ceNy5oNowU532DLy
          claim_id: c_hE2JQKSrJsyKZz3rgEG7eH
          source_id: s_3ByNjD5egnNqU2PDFywb73
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

# 王永清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永清 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永清（CBDB 69104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69104&o=json)
