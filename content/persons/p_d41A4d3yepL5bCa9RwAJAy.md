---
schema: wang-person/v1
id: p_d41A4d3yepL5bCa9RwAJAy
status: active
merged_into: null
display_name: 王泰曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_owqSw2GHVZGDKi2pvFgpQz
        subject_person_id: p_d41A4d3yepL5bCa9RwAJAy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LARRLTZ3WTHYnaNhMzS8HY
          claim_id: c_owqSw2GHVZGDKi2pvFgpQz
          source_id: s_zZHWDoBG1xdY44AVyBtBty
          stance: supports
          locator: CBDB:639076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639076）
          source: &a1
            id: s_zZHWDoBG1xdY44AVyBtBty
            source_type: api_record
            title: 中国历代人物传记资料库：王泰曾（CBDB 639076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639076&o=json
            external_identifier: CBDB:639076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WjPvUD3HNcdCvL2q8nL5xR
        subject_person_id: p_d41A4d3yepL5bCa9RwAJAy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰曾，清人物。籍贯東安，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 639076）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i0qkAsGvJUkyVN1k8-e-Of
          claim_id: c_WjPvUD3HNcdCvL2q8nL5xR
          source_id: s_zZHWDoBG1xdY44AVyBtBty
          stance: supports
          locator: CBDB:639076
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

# 王泰曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰曾 | accepted |
| bio.summary | 王泰曾，清人物。籍贯東安，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 639076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰曾（CBDB 639076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639076&o=json)
