---
schema: wang-person/v1
id: p_F2cDHqynBASAySnPpU6LqU
status: active
merged_into: null
display_name: 王清芹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sgo32c8zoV8decVqCuNN1i
        subject_person_id: p_F2cDHqynBASAySnPpU6LqU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清芹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62yxaw5Xi4MEXWdWMscdJH
          claim_id: c_Sgo32c8zoV8decVqCuNN1i
          source_id: s_dvMPowDes44NyqRMeo3nJX
          stance: supports
          locator: CBDB:639156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639156）
          source: &a1
            id: s_dvMPowDes44NyqRMeo3nJX
            source_type: api_record
            title: 中国历代人物传记资料库：王清芹（CBDB 639156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639156&o=json
            external_identifier: CBDB:639156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P6Av3NH3cE4e4GAD9XuT2N
        subject_person_id: p_F2cDHqynBASAySnPpU6LqU
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
        - id: cs_Gvh3N9ncyhrNCuefqbuyhz
          claim_id: c_P6Av3NH3cE4e4GAD9XuT2N
          source_id: s_dvMPowDes44NyqRMeo3nJX
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

# 王清芹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清芹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清芹（CBDB 639156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639156&o=json)
