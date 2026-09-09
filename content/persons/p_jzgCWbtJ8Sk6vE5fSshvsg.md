---
schema: wang-person/v1
id: p_jzgCWbtJ8Sk6vE5fSshvsg
status: active
merged_into: null
display_name: 王樂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Hxq1m9cd8V8iS5k2TMU3i
        subject_person_id: p_jzgCWbtJ8Sk6vE5fSshvsg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_udtTgaojZkXNPNV4zWx6LB
          claim_id: c_1Hxq1m9cd8V8iS5k2TMU3i
          source_id: s_wCMMxqnnq47vcHyVntgFxK
          stance: supports
          locator: CBDB:638824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638824）
          source: &a1
            id: s_wCMMxqnnq47vcHyVntgFxK
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 638824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638824&o=json
            external_identifier: CBDB:638824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XyVH7PdynF5DkW6n5xr7gr
        subject_person_id: p_jzgCWbtJ8Sk6vE5fSshvsg
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
        - id: cs_7Zpk7JhKLVDj1Gtj519XNS
          claim_id: c_XyVH7PdynF5DkW6n5xr7gr
          source_id: s_wCMMxqnnq47vcHyVntgFxK
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

# 王樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂（CBDB 638824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638824&o=json)
