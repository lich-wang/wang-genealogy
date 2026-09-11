---
schema: wang-person/v1
id: p_UJB2bqrFBBLKYBfBdJeCTa
status: active
merged_into: null
display_name: 王源植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8mg6ba6BywGbLNkr83oMz
        subject_person_id: p_UJB2bqrFBBLKYBfBdJeCTa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8uPPauWD3KLRFeJ22QgaU
          claim_id: c_S8mg6ba6BywGbLNkr83oMz
          source_id: s_wv9vfMX5WHG6Qy3P1W9QQF
          stance: supports
          locator: CBDB:381634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381634）
          source: &a1
            id: s_wv9vfMX5WHG6Qy3P1W9QQF
            source_type: api_record
            title: 中国历代人物传记资料库：王源植（CBDB 381634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381634&o=json
            external_identifier: CBDB:381634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5F8hAUDDJXQvK5EjXirph
        subject_person_id: p_UJB2bqrFBBLKYBfBdJeCTa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源植，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381634）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yQfwpB7sqhOcIL5asFGlc5
          claim_id: c_N5F8hAUDDJXQvK5EjXirph
          source_id: s_wv9vfMX5WHG6Qy3P1W9QQF
          stance: supports
          locator: CBDB:381634
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

# 王源植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源植 | accepted |
| bio.summary | 王源植，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381634） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源植（CBDB 381634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381634&o=json)
