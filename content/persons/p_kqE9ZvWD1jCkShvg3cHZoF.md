---
schema: wang-person/v1
id: p_kqE9ZvWD1jCkShvg3cHZoF
status: active
merged_into: null
display_name: 王志堅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDQ5Sm5AzX52YmQvnHFKoY
        subject_person_id: p_kqE9ZvWD1jCkShvg3cHZoF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1gFMW6meFpAtiWRi3CR5X
          claim_id: c_DDQ5Sm5AzX52YmQvnHFKoY
          source_id: s_LVvBY1ftoawL29XGbLrKVo
          stance: supports
          locator: CBDB:192940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192940）
          source: &a1
            id: s_LVvBY1ftoawL29XGbLrKVo
            source_type: api_record
            title: 中国历代人物传记资料库：王志堅（CBDB 192940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192940&o=json
            external_identifier: CBDB:192940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_977wLoLD8nxuh6o5CNs6eV
        subject_person_id: p_kqE9ZvWD1jCkShvg3cHZoF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qJZ4Gja6rGAuP2HdBTLsF
          claim_id: c_977wLoLD8nxuh6o5CNs6eV
          source_id: s_LVvBY1ftoawL29XGbLrKVo
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
        id: c_ZijaUHPGhsaHAF9UEUg1vS
        subject_person_id: p_kqE9ZvWD1jCkShvg3cHZoF
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
        - id: cs_i3RFSSzAGq8tNRUQdrqA2A
          claim_id: c_ZijaUHPGhsaHAF9UEUg1vS
          source_id: s_LVvBY1ftoawL29XGbLrKVo
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

# 王志堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志堅 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志堅（CBDB 192940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192940&o=json)
