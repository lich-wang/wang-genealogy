---
schema: wang-person/v1
id: p_8yPC6BV13cy44Py58kA7Ea
status: active
merged_into: null
display_name: 王濟扶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hh6HQnYP2WfEXbGMaWMBx8
        subject_person_id: p_8yPC6BV13cy44Py58kA7Ea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟扶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8bJG1zPhWeWExzuJprdQFJ
          claim_id: c_Hh6HQnYP2WfEXbGMaWMBx8
          source_id: s_9mXJuF3g4fptf66W3UBPDv
          stance: supports
          locator: CBDB:639246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639246）
          source: &a1
            id: s_9mXJuF3g4fptf66W3UBPDv
            source_type: api_record
            title: 中国历代人物传记资料库：王濟扶（CBDB 639246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639246&o=json
            external_identifier: CBDB:639246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Xs5bsMPn929NRddGLEH7F
        subject_person_id: p_8yPC6BV13cy44Py58kA7Ea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟扶，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 639246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CmgvKNlXnqdjKqoIECkSDj
          claim_id: c_7Xs5bsMPn929NRddGLEH7F
          source_id: s_9mXJuF3g4fptf66W3UBPDv
          stance: supports
          locator: CBDB:639246
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

# 王濟扶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟扶 | accepted |
| bio.summary | 王濟扶，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 639246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟扶（CBDB 639246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639246&o=json)
