---
schema: wang-person/v1
id: p_cKTnA4U1a2j9Q12wXoaYGH
status: active
merged_into: null
display_name: 王學遜
cbdb_id: 414268
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dfp9rjZhQY223uNXdRNUMN
        subject_person_id: p_cKTnA4U1a2j9Q12wXoaYGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學遜，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414268）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5Oe7ZFQYRdVSOuj4SGu66U
          claim_id: c_Dfp9rjZhQY223uNXdRNUMN
          source_id: s_c1t2WGhDEP5Ss5nJP3Li6L
          stance: supports
          locator: CBDB:414268
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c1t2WGhDEP5Ss5nJP3Li6L
            source_type: api_record
            title: 中国历代人物传记资料库：王學遜（CBDB 414268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414268&o=json
            external_identifier: CBDB:414268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5fiA58MBqSmevV7s4U3miX
        subject_person_id: p_cKTnA4U1a2j9Q12wXoaYGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JLovgeMhgp5sCSekZTNwUf
          claim_id: c_5fiA58MBqSmevV7s4U3miX
          source_id: s_c1t2WGhDEP5Ss5nJP3Li6L
          stance: supports
          locator: CBDB:414268
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5301-5400）｜历史性依据：CBDB 朝代 = 清
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

# 王學遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學遜，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414268） | accepted |
| name.primary | 王學遜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學遜（CBDB 414268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414268&o=json)
