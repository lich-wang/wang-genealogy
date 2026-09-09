---
schema: wang-person/v1
id: p_bVVoVovQcGpoRGYgAzFn4N
status: active
merged_into: null
display_name: 王祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRG33e1fRsRuFH28x4vdqt
        subject_person_id: p_bVVoVovQcGpoRGYgAzFn4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRA8o2VKKaxBj8XTEj8Crb
          claim_id: c_pRG33e1fRsRuFH28x4vdqt
          source_id: s_48szXwoYgw9fzZbF5DPGbe
          stance: supports
          locator: CBDB:71232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71232）
          source: &a1
            id: s_48szXwoYgw9fzZbF5DPGbe
            source_type: api_record
            title: 中国历代人物传记资料库：王祺（CBDB 71232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71232&o=json
            external_identifier: CBDB:71232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KFatdhrj6avVuGx2ZYbSex
        subject_person_id: p_bVVoVovQcGpoRGYgAzFn4N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsHNEqiNT1ytvDHQJ3nmWv
          claim_id: c_KFatdhrj6avVuGx2ZYbSex
          source_id: s_48szXwoYgw9fzZbF5DPGbe
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
        id: c_wyTuazGwzvApn5BYbhCn72
        subject_person_id: p_bVVoVovQcGpoRGYgAzFn4N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1672年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rzGtbxMjxkhPKBAZ7qTF82
          claim_id: c_wyTuazGwzvApn5BYbhCn72
          source_id: s_48szXwoYgw9fzZbF5DPGbe
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
        id: c_qTM4JXMDiBDfZH7k9L2v6K
        subject_person_id: p_bVVoVovQcGpoRGYgAzFn4N
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
        - id: cs_trb4zrwkhe8gdcWJz3yqQW
          claim_id: c_qTM4JXMDiBDfZH7k9L2v6K
          source_id: s_48szXwoYgw9fzZbF5DPGbe
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

# 王祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祺 | accepted |
| birth.date | 1600年 | accepted |
| death.date | 1672年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祺（CBDB 71232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71232&o=json)
