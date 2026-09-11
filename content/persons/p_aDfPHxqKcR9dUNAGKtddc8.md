---
schema: wang-person/v1
id: p_aDfPHxqKcR9dUNAGKtddc8
status: active
merged_into: null
display_name: 王道烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVrSibfwGJBCoJvQAzmnM2
        subject_person_id: p_aDfPHxqKcR9dUNAGKtddc8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHMGNgGtPjEucJX2LeF6bt
          claim_id: c_NVrSibfwGJBCoJvQAzmnM2
          source_id: s_9B5FH6nFe7Z8paBdhBVM5A
          stance: supports
          locator: CBDB:640459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640459）
          source: &a1
            id: s_9B5FH6nFe7Z8paBdhBVM5A
            source_type: api_record
            title: 中国历代人物传记资料库：王道烈（CBDB 640459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640459&o=json
            external_identifier: CBDB:640459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RGU5aJHsmHKWF5K4fStj1v
        subject_person_id: p_aDfPHxqKcR9dUNAGKtddc8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道烈，清人物。籍贯松滋，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640459）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m3ozPzjCkBUBjbYQbBFMyb
          claim_id: c_RGU5aJHsmHKWF5K4fStj1v
          source_id: s_9B5FH6nFe7Z8paBdhBVM5A
          stance: supports
          locator: CBDB:640459
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

# 王道烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道烈 | accepted |
| bio.summary | 王道烈，清人物。籍贯松滋，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640459） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道烈（CBDB 640459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640459&o=json)
