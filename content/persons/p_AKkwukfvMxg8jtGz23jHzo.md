---
schema: wang-person/v1
id: p_AKkwukfvMxg8jtGz23jHzo
status: active
merged_into: null
display_name: 王仁寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RhKkHaQiobNG4RsLk7WBFz
        subject_person_id: p_AKkwukfvMxg8jtGz23jHzo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YutE5yqFHcHwV634aWtUaU
          claim_id: c_RhKkHaQiobNG4RsLk7WBFz
          source_id: s_N15vrt7h2uWBbBQrWUNYm1
          stance: supports
          locator: CBDB:71403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71403）
          source: &a1
            id: s_N15vrt7h2uWBbBQrWUNYm1
            source_type: api_record
            title: 中国历代人物传记资料库：王仁寶（CBDB 71403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71403&o=json
            external_identifier: CBDB:71403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WQbZCji6RSHBr6z9m9VPmJ
        subject_person_id: p_AKkwukfvMxg8jtGz23jHzo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UXK23iX7Ak9DAqUEWaUZo
          claim_id: c_WQbZCji6RSHBr6z9m9VPmJ
          source_id: s_N15vrt7h2uWBbBQrWUNYm1
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
        id: c_TFkLSHqyHzKs4AvCBMbhoH
        subject_person_id: p_AKkwukfvMxg8jtGz23jHzo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFYJS7P7edvfrmcs5kKygs
          claim_id: c_TFkLSHqyHzKs4AvCBMbhoH
          source_id: s_N15vrt7h2uWBbBQrWUNYm1
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
        id: c_eEXgaLg8MXLz9Am17Ef7Ka
        subject_person_id: p_AKkwukfvMxg8jtGz23jHzo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxzLCakgg8RWkc4uWPs295
          claim_id: c_eEXgaLg8MXLz9Am17Ef7Ka
          source_id: s_N15vrt7h2uWBbBQrWUNYm1
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

# 王仁寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁寶 | accepted |
| birth.date | 1840年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁寶（CBDB 71403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71403&o=json)
