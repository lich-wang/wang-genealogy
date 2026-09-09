---
schema: wang-person/v1
id: p_j6cJe8mqseT5oAY5khKJPn
status: active
merged_into: null
display_name: 王潾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3hBsqMzCXp2NW84pDBDmWW
        subject_person_id: p_j6cJe8mqseT5oAY5khKJPn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HRTZX9hNz8mqbe9jLpUSc5
          claim_id: c_3hBsqMzCXp2NW84pDBDmWW
          source_id: s_EYE5V5hL6gA1G7X2E4Meob
          stance: supports
          locator: CBDB:170278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170278）
          source: &a1
            id: s_EYE5V5hL6gA1G7X2E4Meob
            source_type: api_record
            title: 中国历代人物传记资料库：王潾（CBDB 170278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170278&o=json
            external_identifier: CBDB:170278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UvLgcQMcsUNGPJuay231FB
        subject_person_id: p_j6cJe8mqseT5oAY5khKJPn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 754年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TcVdHLFM5GYZbw2TjqLHd6
          claim_id: c_UvLgcQMcsUNGPJuay231FB
          source_id: s_EYE5V5hL6gA1G7X2E4Meob
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
        id: c_m82k7BgewqifsZ55YzwyN2
        subject_person_id: p_j6cJe8mqseT5oAY5khKJPn
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
        - id: cs_WEk9A42vnJLUiCqKspEZYN
          claim_id: c_m82k7BgewqifsZ55YzwyN2
          source_id: s_EYE5V5hL6gA1G7X2E4Meob
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

# 王潾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潾 | accepted |
| death.date | 754年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潾（CBDB 170278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170278&o=json)
