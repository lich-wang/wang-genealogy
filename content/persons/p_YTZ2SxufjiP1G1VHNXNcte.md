---
schema: wang-person/v1
id: p_YTZ2SxufjiP1G1VHNXNcte
status: active
merged_into: null
display_name: 王殷任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9ULx7sthUSc5jEA2xuV6E
        subject_person_id: p_YTZ2SxufjiP1G1VHNXNcte
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zMGZWnwRDB754XVCXNXqaW
          claim_id: c_F9ULx7sthUSc5jEA2xuV6E
          source_id: s_gNKjT9qGzFsEoNLQNkYn2J
          stance: supports
          locator: CBDB:175904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175904）
          source: &a1
            id: s_gNKjT9qGzFsEoNLQNkYn2J
            source_type: api_record
            title: 中国历代人物传记资料库：王殷任（CBDB 175904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175904&o=json
            external_identifier: CBDB:175904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qiq212NUuc3TNETNqU393g
        subject_person_id: p_YTZ2SxufjiP1G1VHNXNcte
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kxvnc7NEKGEPysb96FhoA7
          claim_id: c_qiq212NUuc3TNETNqU393g
          source_id: s_gNKjT9qGzFsEoNLQNkYn2J
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
        id: c_ih8H3KQ4tpm65esyNW6bTZ
        subject_person_id: p_YTZ2SxufjiP1G1VHNXNcte
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
        - id: cs_GMBg7cTcsnybTYnAQ3J4tg
          claim_id: c_ih8H3KQ4tpm65esyNW6bTZ
          source_id: s_gNKjT9qGzFsEoNLQNkYn2J
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

# 王殷任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殷任 | accepted |
| death.date | 843年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殷任（CBDB 175904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175904&o=json)
