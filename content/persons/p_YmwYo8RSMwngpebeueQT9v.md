---
schema: wang-person/v1
id: p_YmwYo8RSMwngpebeueQT9v
status: active
merged_into: null
display_name: 王式廬
cbdb_id: 414501
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yWBr65A2FA6RCHJS6JzXVd
        subject_person_id: p_YmwYo8RSMwngpebeueQT9v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式廬，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Cy5gbvJxnGmt6CT_FqvIAo
          claim_id: c_yWBr65A2FA6RCHJS6JzXVd
          source_id: s_s4CBHqkMvcxAnFsuR8Jbx4
          stance: supports
          locator: CBDB:414501
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s4CBHqkMvcxAnFsuR8Jbx4
            source_type: api_record
            title: 中国历代人物传记资料库：王式廬（CBDB 414501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414501&o=json
            external_identifier: CBDB:414501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:34.838Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rTX22hBUgSHzUPXHEs4Bv1
        subject_person_id: p_YmwYo8RSMwngpebeueQT9v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式廬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V3Aeowfnxmj4YyERaxYs8m
          claim_id: c_rTX22hBUgSHzUPXHEs4Bv1
          source_id: s_s4CBHqkMvcxAnFsuR8Jbx4
          stance: supports
          locator: CBDB:414501
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5501-5600）｜历史性依据：CBDB 朝代 = 明
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

# 王式廬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王式廬，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414501） | accepted |
| name.primary | 王式廬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式廬（CBDB 414501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414501&o=json)
