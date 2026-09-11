---
schema: wang-person/v1
id: p_45Jfn9X9Nt6pHRViEJNWwE
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E72fskppW987Mf7Mjxg7tc
        subject_person_id: p_45Jfn9X9Nt6pHRViEJNWwE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vq2cU1ggJZHtZGWCTAz5AN
          claim_id: c_E72fskppW987Mf7Mjxg7tc
          source_id: s_cNGiQTWAAbLjrsDtYayAjK
          stance: supports
          locator: CBDB:19275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19275）
          source: &a1
            id: s_cNGiQTWAAbLjrsDtYayAjK
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 19275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19275&o=json
            external_identifier: CBDB:19275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kTpN3gNQsfNHSFAUx2KCSE
        subject_person_id: p_45Jfn9X9Nt6pHRViEJNWwE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟，宋人物。籍贯同州，入仕進士。（中国历代人物传记资料库 CBDB 19275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wK-lkC9IosFW3eHJ5yoCCr
          claim_id: c_kTpN3gNQsfNHSFAUx2KCSE
          source_id: s_cNGiQTWAAbLjrsDtYayAjK
          stance: supports
          locator: CBDB:19275
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| bio.summary | 王舟，宋人物。籍贯同州，入仕進士。（中国历代人物传记资料库 CBDB 19275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 19275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19275&o=json)
