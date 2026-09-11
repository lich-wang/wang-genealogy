---
schema: wang-person/v1
id: p_5R8kVnPB7mLWqqiBfr3ebr
status: active
merged_into: null
display_name: 王灃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUkAnBx3YYRq3GF9YoUoV1
        subject_person_id: p_5R8kVnPB7mLWqqiBfr3ebr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8x1DNiE2rry7ZtVBh6Pa4G
          claim_id: c_QUkAnBx3YYRq3GF9YoUoV1
          source_id: s_AFeZJqfS4HAhLAFPb4bm1d
          stance: supports
          locator: CBDB:639269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639269）
          source: &a1
            id: s_AFeZJqfS4HAhLAFPb4bm1d
            source_type: api_record
            title: 中国历代人物传记资料库：王灃（CBDB 639269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639269&o=json
            external_identifier: CBDB:639269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCDZwM9vfsYjHdXPR3eDPN
        subject_person_id: p_5R8kVnPB7mLWqqiBfr3ebr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灃，清人物。籍贯萬全，入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 639269）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFi3dNbT8lrUzqXJfOLWs1
          claim_id: c_nCDZwM9vfsYjHdXPR3eDPN
          source_id: s_AFeZJqfS4HAhLAFPb4bm1d
          stance: supports
          locator: CBDB:639269
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

# 王灃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灃 | accepted |
| bio.summary | 王灃，清人物。籍贯萬全，入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 639269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灃（CBDB 639269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639269&o=json)
