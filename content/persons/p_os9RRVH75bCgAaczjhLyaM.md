---
schema: wang-person/v1
id: p_os9RRVH75bCgAaczjhLyaM
status: active
merged_into: null
display_name: 王琨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n91NaoLFmQMB17yU97sWxs
        subject_person_id: p_os9RRVH75bCgAaczjhLyaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcikQ7vurE2thnRJu8PYRh
          claim_id: c_n91NaoLFmQMB17yU97sWxs
          source_id: s_XmZq7F9pnqoP4VWnaMyamN
          stance: supports
          locator: CBDB:71204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71204）
          source: &a1
            id: s_XmZq7F9pnqoP4VWnaMyamN
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 71204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71204&o=json
            external_identifier: CBDB:71204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fpBQ27ko1xXcrE6tWLoCMi
        subject_person_id: p_os9RRVH75bCgAaczjhLyaM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPmaWiL1EwBAe6u9o2D8Lg
          claim_id: c_fpBQ27ko1xXcrE6tWLoCMi
          source_id: s_XmZq7F9pnqoP4VWnaMyamN
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
        id: c_B7snFyLXLix1wmK4M5ED45
        subject_person_id: p_os9RRVH75bCgAaczjhLyaM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLerbem2DFXc2Km18jkPeh
          claim_id: c_B7snFyLXLix1wmK4M5ED45
          source_id: s_XmZq7F9pnqoP4VWnaMyamN
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
        id: c_AnvCe2i2JSVkEdNKq9S2VP
        subject_person_id: p_os9RRVH75bCgAaczjhLyaM
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
        - id: cs_5mWTscm36Wkr5Yv55nXUJW
          claim_id: c_AnvCe2i2JSVkEdNKq9S2VP
          source_id: s_XmZq7F9pnqoP4VWnaMyamN
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

# 王琨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琨 | accepted |
| birth.date | 1736年 | accepted |
| death.date | 1806年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琨（CBDB 71204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71204&o=json)
