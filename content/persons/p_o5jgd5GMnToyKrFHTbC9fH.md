---
schema: wang-person/v1
id: p_o5jgd5GMnToyKrFHTbC9fH
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLF9pe4NFVGqMu4DBMUiuN
        subject_person_id: p_o5jgd5GMnToyKrFHTbC9fH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FkCErzG6E8E5VbEDiV7Tbd
          claim_id: c_vLF9pe4NFVGqMu4DBMUiuN
          source_id: s_6vtkzTVZQW7XvJP2s2phpa
          stance: supports
          locator: CBDB:227288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227288）
          source: &a1
            id: s_6vtkzTVZQW7XvJP2s2phpa
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 227288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227288&o=json
            external_identifier: CBDB:227288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HyZgGTXL1kA9xjkmrzXPC1
        subject_person_id: p_o5jgd5GMnToyKrFHTbC9fH
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
        - id: cs_Z5Yd66LEWkbxUC8V4SmRMg
          claim_id: c_HyZgGTXL1kA9xjkmrzXPC1
          source_id: s_6vtkzTVZQW7XvJP2s2phpa
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 227288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227288&o=json)
