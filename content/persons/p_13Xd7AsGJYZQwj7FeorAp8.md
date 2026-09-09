---
schema: wang-person/v1
id: p_13Xd7AsGJYZQwj7FeorAp8
status: active
merged_into: null
display_name: 王徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qheewhhx6y29Q3rKNL4Rsx
        subject_person_id: p_13Xd7AsGJYZQwj7FeorAp8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VWWsBD2E7gXwHDip731FsP
          claim_id: c_Qheewhhx6y29Q3rKNL4Rsx
          source_id: s_jX12Ex23kP9R16HKdhbtu9
          stance: supports
          locator: CBDB:65826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65826）
          source: &a1
            id: s_jX12Ex23kP9R16HKdhbtu9
            source_type: api_record
            title: 中国历代人物传记资料库：王徵（CBDB 65826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65826&o=json
            external_identifier: CBDB:65826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nNq433A6N9eF4fdKZ6r75A
        subject_person_id: p_13Xd7AsGJYZQwj7FeorAp8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1571年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1QemKXvMo7FMkAk5Q1kT5b
          claim_id: c_nNq433A6N9eF4fdKZ6r75A
          source_id: s_jX12Ex23kP9R16HKdhbtu9
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
        id: c_kBQmsKCTR8rj4B1Sy8EnLj
        subject_person_id: p_13Xd7AsGJYZQwj7FeorAp8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pGaEKNZm2FBWhQgMHQD62b
          claim_id: c_kBQmsKCTR8rj4B1Sy8EnLj
          source_id: s_jX12Ex23kP9R16HKdhbtu9
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
        id: c_NHgcagyBpPeq9oP7gh4SLc
        subject_person_id: p_13Xd7AsGJYZQwj7FeorAp8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S88byXtwcAaiDvi7UpHdEm
          claim_id: c_NHgcagyBpPeq9oP7gh4SLc
          source_id: s_jX12Ex23kP9R16HKdhbtu9
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

# 王徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徵 | accepted |
| birth.date | 1571年 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徵（CBDB 65826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65826&o=json)
