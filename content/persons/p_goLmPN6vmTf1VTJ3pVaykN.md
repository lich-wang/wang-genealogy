---
schema: wang-person/v1
id: p_goLmPN6vmTf1VTJ3pVaykN
status: active
merged_into: null
display_name: 王熠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TAb6AX4UCJSXVuc1pa9uWF
        subject_person_id: p_goLmPN6vmTf1VTJ3pVaykN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cFVP7CvK72rnRBHym1FEy
          claim_id: c_TAb6AX4UCJSXVuc1pa9uWF
          source_id: s_8f23Uo7XbvPmVf9hBg4vqN
          stance: supports
          locator: CBDB:639337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639337）
          source: &a1
            id: s_8f23Uo7XbvPmVf9hBg4vqN
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 639337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639337&o=json
            external_identifier: CBDB:639337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cCmULNc8nfF9wzszCvHArA
        subject_person_id: p_goLmPN6vmTf1VTJ3pVaykN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠，清人物。籍贯嘉善，入仕監生，曾任典史、司獄。（中国历代人物传记资料库 CBDB 639337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vhwn3Nz3n148TIpI75izkg
          claim_id: c_cCmULNc8nfF9wzszCvHArA
          source_id: s_8f23Uo7XbvPmVf9hBg4vqN
          stance: supports
          locator: CBDB:639337
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

# 王熠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熠 | accepted |
| bio.summary | 王熠，清人物。籍贯嘉善，入仕監生，曾任典史、司獄。（中国历代人物传记资料库 CBDB 639337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熠（CBDB 639337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639337&o=json)
