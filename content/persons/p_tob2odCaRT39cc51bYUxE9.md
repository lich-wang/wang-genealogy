---
schema: wang-person/v1
id: p_tob2odCaRT39cc51bYUxE9
status: active
merged_into: null
display_name: 王質
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3FpURtgs8sYorrWzDNEq5y
        subject_person_id: p_tob2odCaRT39cc51bYUxE9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ShKgswUWFAGxeVtVh2Dcro
          claim_id: c_3FpURtgs8sYorrWzDNEq5y
          source_id: s_1iVYAVnRWMdXdkuu3Lm5QK
          stance: supports
          locator: CBDB:501852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501852）
          source: &a1
            id: s_1iVYAVnRWMdXdkuu3Lm5QK
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 501852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501852&o=json
            external_identifier: CBDB:501852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fstiL7vCZLoeqpD1QSJM8k
        subject_person_id: p_tob2odCaRT39cc51bYUxE9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 501852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yh3DI4EwGq42D4Mg2gcZBz
          claim_id: c_fstiL7vCZLoeqpD1QSJM8k
          source_id: s_1iVYAVnRWMdXdkuu3Lm5QK
          stance: supports
          locator: CBDB:501852
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

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| bio.summary | 王質，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 501852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王質（CBDB 501852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501852&o=json)
