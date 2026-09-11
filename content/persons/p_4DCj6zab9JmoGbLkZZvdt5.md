---
schema: wang-person/v1
id: p_4DCj6zab9JmoGbLkZZvdt5
status: active
merged_into: null
display_name: 王洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XR2wftGHfXmtK4f4RbaiLC
        subject_person_id: p_4DCj6zab9JmoGbLkZZvdt5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_85FjxmxhCJHxTiHZLbe9N3
          claim_id: c_XR2wftGHfXmtK4f4RbaiLC
          source_id: s_smPGhMRjHiWLstg53y6kuV
          stance: supports
          locator: CBDB:71147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71147）
          source: &a1
            id: s_smPGhMRjHiWLstg53y6kuV
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 71147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71147&o=json
            external_identifier: CBDB:71147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JwQPQ4x6VTh83GCUsofUq2
        subject_person_id: p_4DCj6zab9JmoGbLkZZvdt5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKNUnZ519XRkjQQP5CwBaE
          claim_id: c_JwQPQ4x6VTh83GCUsofUq2
          source_id: s_smPGhMRjHiWLstg53y6kuV
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
        id: c_shFqrELdSyDdX99kTvBn3L
        subject_person_id: p_4DCj6zab9JmoGbLkZZvdt5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gfZGgMptLdqbrVmL6SxQoi
          claim_id: c_shFqrELdSyDdX99kTvBn3L
          source_id: s_smPGhMRjHiWLstg53y6kuV
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
        id: c_BAuschQ3Teu69p4mLTsVeh
        subject_person_id: p_4DCj6zab9JmoGbLkZZvdt5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪（1645年—1695年），清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 71147）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T74fu6WmWl5fQJJXuoSXcK
          claim_id: c_BAuschQ3Teu69p4mLTsVeh
          source_id: s_smPGhMRjHiWLstg53y6kuV
          stance: supports
          locator: CBDB:71147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1695年 | accepted |
| bio.summary | 王洪（1645年—1695年），清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 71147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 71147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71147&o=json)
