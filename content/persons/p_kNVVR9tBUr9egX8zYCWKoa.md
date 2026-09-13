---
schema: wang-person/v1
id: p_kNVVR9tBUr9egX8zYCWKoa
status: active
merged_into: null
display_name: 王孟震
cbdb_id: 342017
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qSuW1qa5nBSMbKFeETmRNX
        subject_person_id: p_kNVVR9tBUr9egX8zYCWKoa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟震，明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 342017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KpXIguUJ6V8pAq34vGxhf6
          claim_id: c_qSuW1qa5nBSMbKFeETmRNX
          source_id: s_ksH5h1f9UFL26yvwTiGbDc
          stance: supports
          locator: CBDB:342017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ksH5h1f9UFL26yvwTiGbDc
            source_type: api_record
            title: 中国历代人物传记资料库：王孟震（CBDB 342017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342017&o=json
            external_identifier: CBDB:342017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8fu31o7QqyerpDHrzTPsaA
        subject_person_id: p_kNVVR9tBUr9egX8zYCWKoa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_akfPNFfGo7HRC1BzNc96XU
          claim_id: c_8fu31o7QqyerpDHrzTPsaA
          source_id: s_ksH5h1f9UFL26yvwTiGbDc
          stance: supports
          locator: CBDB:342017
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 明
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

# 王孟震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟震，明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 342017） | accepted |
| name.primary | 王孟震 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟震（CBDB 342017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342017&o=json)
