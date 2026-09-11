---
schema: wang-person/v1
id: p_imPNCq7a5pgbJmmUqYH79v
status: active
merged_into: null
display_name: 王時昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dGUD3ffGbFgG8zUa8pbEeF
        subject_person_id: p_imPNCq7a5pgbJmmUqYH79v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pV5D1jwSFNKFJEcQxFyNbp
          claim_id: c_dGUD3ffGbFgG8zUa8pbEeF
          source_id: s_3Ywkczvw1QriTCQNbgk758
          stance: supports
          locator: CBDB:471330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471330）
          source: &a1
            id: s_3Ywkczvw1QriTCQNbgk758
            source_type: api_record
            title: 中国历代人物传记资料库：王時昌（CBDB 471330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471330&o=json
            external_identifier: CBDB:471330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRqfae611Mdx6CJnxaeMvw
        subject_person_id: p_imPNCq7a5pgbJmmUqYH79v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時昌，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 471330）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rUn2tNGmUjHCIDwp_OYY2Q
          claim_id: c_PRqfae611Mdx6CJnxaeMvw
          source_id: s_3Ywkczvw1QriTCQNbgk758
          stance: supports
          locator: CBDB:471330
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

# 王時昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時昌 | accepted |
| bio.summary | 王時昌，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 471330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時昌（CBDB 471330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471330&o=json)
