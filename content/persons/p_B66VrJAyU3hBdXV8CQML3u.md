---
schema: wang-person/v1
id: p_B66VrJAyU3hBdXV8CQML3u
status: active
merged_into: null
display_name: 王渭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEV7Vk4wetCy5jBNHgKiAM
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q3JwDaYFFMtbDVozE3ML1G
          claim_id: c_VEV7Vk4wetCy5jBNHgKiAM
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: CBDB:144925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144925）
          source: &a1
            id: s_qWP13BHjavAoPZxayrpxCb
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 144925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json
            external_identifier: CBDB:144925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LvNKUJGG1tY2B8eC9cgNrx
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 782年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAhj9X8H1NRCrXdJ2tzNz5
          claim_id: c_LvNKUJGG1tY2B8eC9cgNrx
          source_id: s_qWP13BHjavAoPZxayrpxCb
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
        id: c_uddAFfNp2bT6mdZ2RmBLEu
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q95wkao9eSUQNgzQSrSMJg
          claim_id: c_uddAFfNp2bT6mdZ2RmBLEu
          source_id: s_qWP13BHjavAoPZxayrpxCb
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
        id: c_65Z1NZwjQDiJGm5RwffvPW
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
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
        - id: cs_hQdGgkkEiLvqbVP66kiczW
          claim_id: c_65Z1NZwjQDiJGm5RwffvPW
          source_id: s_qWP13BHjavAoPZxayrpxCb
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

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| birth.date | 782年 | accepted |
| death.date | 837年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 144925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json)
