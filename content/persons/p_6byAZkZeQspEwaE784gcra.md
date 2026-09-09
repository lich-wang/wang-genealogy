---
schema: wang-person/v1
id: p_6byAZkZeQspEwaE784gcra
status: active
merged_into: null
display_name: 王季球
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mHgnprLQTSjUdcvNJZPivW
        subject_person_id: p_6byAZkZeQspEwaE784gcra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季球
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jPHs3SiHSCvZxKx5TTBuhi
          claim_id: c_mHgnprLQTSjUdcvNJZPivW
          source_id: s_LKvAqahYW9LNMr6aso7cDX
          stance: supports
          locator: CBDB:71773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71773）
          source: &a1
            id: s_LKvAqahYW9LNMr6aso7cDX
            source_type: api_record
            title: 中国历代人物传记资料库：王季球（CBDB 71773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71773&o=json
            external_identifier: CBDB:71773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BsrFHbkbWo4wVJZNH2DNgg
        subject_person_id: p_6byAZkZeQspEwaE784gcra
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7B36MDwPogdKUEHCbvby5
          claim_id: c_BsrFHbkbWo4wVJZNH2DNgg
          source_id: s_LKvAqahYW9LNMr6aso7cDX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZqEnyYGzmnjgvbvP6iwNop
        subject_person_id: p_6byAZkZeQspEwaE784gcra
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
        - id: cs_NEy2N93zT4KVKvt4vJ4ypg
          claim_id: c_ZqEnyYGzmnjgvbvP6iwNop
          source_id: s_LKvAqahYW9LNMr6aso7cDX
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

# 王季球

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季球 | accepted |
| birth.date | 1831年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季球（CBDB 71773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71773&o=json)
