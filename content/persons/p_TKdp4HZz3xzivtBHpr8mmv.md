---
schema: wang-person/v1
id: p_TKdp4HZz3xzivtBHpr8mmv
status: active
merged_into: null
display_name: 王默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZzHzfV3xKCqVmHovp61nCX
        subject_person_id: p_TKdp4HZz3xzivtBHpr8mmv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JB2sLRYN57JS9ZmVnvS8Ni
          claim_id: c_ZzHzfV3xKCqVmHovp61nCX
          source_id: s_uF5UGaAGPXhJAFmn1icBqC
          stance: supports
          locator: CBDB:100969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100969）
          source: &a1
            id: s_uF5UGaAGPXhJAFmn1icBqC
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 100969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100969&o=json
            external_identifier: CBDB:100969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Go9ZWznEWhYtFiARuE5sE
        subject_person_id: p_TKdp4HZz3xzivtBHpr8mmv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，元人物。籍贯松江府，身份为書法家、徵至京師。（中国历代人物传记资料库 CBDB 100969）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3BGOgI-IIaVwVdpT6zwMhS
          claim_id: c_6Go9ZWznEWhYtFiARuE5sE
          source_id: s_uF5UGaAGPXhJAFmn1icBqC
          stance: supports
          locator: CBDB:100969
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

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | 王默，元人物。籍贯松江府，身份为書法家、徵至京師。（中国历代人物传记资料库 CBDB 100969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 100969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100969&o=json)
