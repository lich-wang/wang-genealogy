---
schema: wang-person/v1
id: p_J6PHyEd38NLnBiaPbV9pAS
status: active
merged_into: null
display_name: 王恩鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S4yXWJ9CKPNieZ28rzG2bQ
        subject_person_id: p_J6PHyEd38NLnBiaPbV9pAS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1rNmak4tEBQPmjwE4jAv9H
          claim_id: c_S4yXWJ9CKPNieZ28rzG2bQ
          source_id: s_FGLgb8oN11iWyRWKtRPyKe
          stance: supports
          locator: CBDB:637866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637866）
          source: &a1
            id: s_FGLgb8oN11iWyRWKtRPyKe
            source_type: api_record
            title: 中国历代人物传记资料库：王恩鴻（CBDB 637866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637866&o=json
            external_identifier: CBDB:637866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ppUCvTFvoPkeazANwEBfD4
        subject_person_id: p_J6PHyEd38NLnBiaPbV9pAS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩鴻，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XN0f2alcKRatlYgMQoVuYJ
          claim_id: c_ppUCvTFvoPkeazANwEBfD4
          source_id: s_FGLgb8oN11iWyRWKtRPyKe
          stance: supports
          locator: CBDB:637866
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

# 王恩鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩鴻 | accepted |
| bio.summary | 王恩鴻，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩鴻（CBDB 637866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637866&o=json)
