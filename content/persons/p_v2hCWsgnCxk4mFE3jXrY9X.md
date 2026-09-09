---
schema: wang-person/v1
id: p_v2hCWsgnCxk4mFE3jXrY9X
status: active
merged_into: null
display_name: 王翰屏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMPQ9LfkMzexkHD89yD2TJ
        subject_person_id: p_v2hCWsgnCxk4mFE3jXrY9X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bfp2rTRTKUy2mwBmgGm2yc
          claim_id: c_NMPQ9LfkMzexkHD89yD2TJ
          source_id: s_LKZLLNDWJ5gGsKGuZbvnK2
          stance: supports
          locator: CBDB:639901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639901）
          source: &a1
            id: s_LKZLLNDWJ5gGsKGuZbvnK2
            source_type: api_record
            title: 中国历代人物传记资料库：王翰屏（CBDB 639901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639901&o=json
            external_identifier: CBDB:639901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4GBoak9MXtb9QNh2WQRHAk
        subject_person_id: p_v2hCWsgnCxk4mFE3jXrY9X
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
        - id: cs_UF4a4NhS8HuUTnytrqCiPx
          claim_id: c_4GBoak9MXtb9QNh2WQRHAk
          source_id: s_LKZLLNDWJ5gGsKGuZbvnK2
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

# 王翰屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰屏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰屏（CBDB 639901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639901&o=json)
