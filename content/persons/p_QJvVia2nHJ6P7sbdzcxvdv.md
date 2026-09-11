---
schema: wang-person/v1
id: p_QJvVia2nHJ6P7sbdzcxvdv
status: active
merged_into: null
display_name: 王漢臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HiHksEzYEL5EqVCyUvnDTt
        subject_person_id: p_QJvVia2nHJ6P7sbdzcxvdv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWZvGxxVM2hrwm29oRKs1z
          claim_id: c_HiHksEzYEL5EqVCyUvnDTt
          source_id: s_4TRe8eCqVQGKQmjcMmDEHv
          stance: supports
          locator: CBDB:639197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639197）
          source: &a1
            id: s_4TRe8eCqVQGKQmjcMmDEHv
            source_type: api_record
            title: 中国历代人物传记资料库：王漢臣（CBDB 639197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639197&o=json
            external_identifier: CBDB:639197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iVUsVDoGfo4yZRKj1bzr1y
        subject_person_id: p_QJvVia2nHJ6P7sbdzcxvdv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢臣，清人物。籍贯順天府，入仕監生，曾任中軍守備。（中国历代人物传记资料库 CBDB 639197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iEePDxZ5carVcXDmsTlE7s
          claim_id: c_iVUsVDoGfo4yZRKj1bzr1y
          source_id: s_4TRe8eCqVQGKQmjcMmDEHv
          stance: supports
          locator: CBDB:639197
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

# 王漢臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢臣 | accepted |
| bio.summary | 王漢臣，清人物。籍贯順天府，入仕監生，曾任中軍守備。（中国历代人物传记资料库 CBDB 639197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢臣（CBDB 639197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639197&o=json)
