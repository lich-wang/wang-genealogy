---
schema: wang-person/v1
id: p_KTx4PEgMvJg5ELAPrb2xVC
status: active
merged_into: null
display_name: 王鍾滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jEfYzCXnokaLpQDhxerGnQ
        subject_person_id: p_KTx4PEgMvJg5ELAPrb2xVC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9UMJVUYKEDQsaVXQS5KK8Z
          claim_id: c_jEfYzCXnokaLpQDhxerGnQ
          source_id: s_XTrB7MnDeAwTQkvjkCQjKV
          stance: supports
          locator: CBDB:640675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640675）
          source: &a1
            id: s_XTrB7MnDeAwTQkvjkCQjKV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾滋（CBDB 640675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640675&o=json
            external_identifier: CBDB:640675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zi7T5yFj5SVQH8EFs3whbM
        subject_person_id: p_KTx4PEgMvJg5ELAPrb2xVC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾滋，清人物。籍贯武進，曾任司獄。（中国历代人物传记资料库 CBDB 640675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SBDIXjyQYgexpJNsQbCtDl
          claim_id: c_zi7T5yFj5SVQH8EFs3whbM
          source_id: s_XTrB7MnDeAwTQkvjkCQjKV
          stance: supports
          locator: CBDB:640675
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

# 王鍾滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾滋 | accepted |
| bio.summary | 王鍾滋，清人物。籍贯武進，曾任司獄。（中国历代人物传记资料库 CBDB 640675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾滋（CBDB 640675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640675&o=json)
