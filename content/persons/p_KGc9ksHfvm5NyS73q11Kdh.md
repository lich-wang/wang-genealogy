---
schema: wang-person/v1
id: p_KGc9ksHfvm5NyS73q11Kdh
status: active
merged_into: null
display_name: 王倞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZSvWSGadZKEjmVQEMCH8ph
        subject_person_id: p_KGc9ksHfvm5NyS73q11Kdh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c4eBCV5EGaV312Hi9HgTmc
          claim_id: c_ZSvWSGadZKEjmVQEMCH8ph
          source_id: s_XS8Yt6zKXRjg2rqg1eXqY9
          stance: supports
          locator: CBDB:342109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342109）
          source: &a1
            id: s_XS8Yt6zKXRjg2rqg1eXqY9
            source_type: api_record
            title: 中国历代人物传记资料库：王倞（CBDB 342109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342109&o=json
            external_identifier: CBDB:342109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vbKdLGCtiR6qEyJWqd9iAT
        subject_person_id: p_KGc9ksHfvm5NyS73q11Kdh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倞，明人物。明清進士進士，籍贯沔陽州，入仕進士。（中国历代人物传记资料库 CBDB 342109）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_je_8vyVgjmIze8Q1FgcxmY
          claim_id: c_vbKdLGCtiR6qEyJWqd9iAT
          source_id: s_XS8Yt6zKXRjg2rqg1eXqY9
          stance: supports
          locator: CBDB:342109
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

# 王倞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倞 | accepted |
| bio.summary | 王倞，明人物。明清進士進士，籍贯沔陽州，入仕進士。（中国历代人物传记资料库 CBDB 342109） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倞（CBDB 342109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342109&o=json)
