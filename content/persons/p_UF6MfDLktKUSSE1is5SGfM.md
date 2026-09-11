---
schema: wang-person/v1
id: p_UF6MfDLktKUSSE1is5SGfM
status: active
merged_into: null
display_name: 王維城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b57zpkM2uKA6h5r6HzQh8i
        subject_person_id: p_UF6MfDLktKUSSE1is5SGfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VNgWjMjEaz6pam1FH6m71m
          claim_id: c_b57zpkM2uKA6h5r6HzQh8i
          source_id: s_KbD5jTSzvGkE4bTHAS2sUt
          stance: supports
          locator: CBDB:639811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639811）
          source: &a1
            id: s_KbD5jTSzvGkE4bTHAS2sUt
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 639811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639811&o=json
            external_identifier: CBDB:639811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z9Y8oUqrxSyapeTVCydSox
        subject_person_id: p_UF6MfDLktKUSSE1is5SGfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城，清人物。籍贯歸安，曾任經歷。（中国历代人物传记资料库 CBDB 639811）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qpIxIxRSEv8tI92Hq_fAXB
          claim_id: c_z9Y8oUqrxSyapeTVCydSox
          source_id: s_KbD5jTSzvGkE4bTHAS2sUt
          stance: supports
          locator: CBDB:639811
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

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | 王維城，清人物。籍贯歸安，曾任經歷。（中国历代人物传记资料库 CBDB 639811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維城（CBDB 639811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639811&o=json)
