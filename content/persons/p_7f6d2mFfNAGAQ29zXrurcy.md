---
schema: wang-person/v1
id: p_7f6d2mFfNAGAQ29zXrurcy
status: active
merged_into: null
display_name: 王端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5jnH6Kud29JUo3WdQKYhDn
        subject_person_id: p_7f6d2mFfNAGAQ29zXrurcy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6M1XqaMkymGS3CALn33yK3
          claim_id: c_5jnH6Kud29JUo3WdQKYhDn
          source_id: s_cqYikgNiCNvSDEypu9tS8F
          stance: supports
          locator: CBDB:480682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480682）
          source: &a1
            id: s_cqYikgNiCNvSDEypu9tS8F
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 480682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480682&o=json
            external_identifier: CBDB:480682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cdz7TMGTWP4yrh6mX5w9td
        subject_person_id: p_7f6d2mFfNAGAQ29zXrurcy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。曾任縣丞、知事、主簿。（中国历代人物传记资料库 CBDB 480682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_afkZ4w6AXaD7sKOEe6vSGk
          claim_id: c_cdz7TMGTWP4yrh6mX5w9td
          source_id: s_cqYikgNiCNvSDEypu9tS8F
          stance: supports
          locator: CBDB:480682
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

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。曾任縣丞、知事、主簿。（中国历代人物传记资料库 CBDB 480682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 480682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480682&o=json)
