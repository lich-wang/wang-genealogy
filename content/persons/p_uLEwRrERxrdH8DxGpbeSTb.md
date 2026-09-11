---
schema: wang-person/v1
id: p_uLEwRrERxrdH8DxGpbeSTb
status: active
merged_into: null
display_name: 王澤膏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L3CbpPqvhdTfqcECTVs1cG
        subject_person_id: p_uLEwRrERxrdH8DxGpbeSTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤膏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R6U58pNB5qpjpMoDSDNvM6
          claim_id: c_L3CbpPqvhdTfqcECTVs1cG
          source_id: s_yK64s1AAGzq6wRHfApYpoL
          stance: supports
          locator: CBDB:639237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639237）
          source: &a1
            id: s_yK64s1AAGzq6wRHfApYpoL
            source_type: api_record
            title: 中国历代人物传记资料库：王澤膏（CBDB 639237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639237&o=json
            external_identifier: CBDB:639237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8iwQaijHUqMfzQhB3ZLw7
        subject_person_id: p_uLEwRrERxrdH8DxGpbeSTb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤膏，清人物。籍贯貴州省，入仕行伍，曾任右軍守備。（中国历代人物传记资料库 CBDB 639237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ys2f3NlbAr3gx2ffqZeeO-
          claim_id: c_h8iwQaijHUqMfzQhB3ZLw7
          source_id: s_yK64s1AAGzq6wRHfApYpoL
          stance: supports
          locator: CBDB:639237
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

# 王澤膏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤膏 | accepted |
| bio.summary | 王澤膏，清人物。籍贯貴州省，入仕行伍，曾任右軍守備。（中国历代人物传记资料库 CBDB 639237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤膏（CBDB 639237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639237&o=json)
