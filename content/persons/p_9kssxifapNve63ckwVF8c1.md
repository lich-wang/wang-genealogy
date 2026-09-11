---
schema: wang-person/v1
id: p_9kssxifapNve63ckwVF8c1
status: active
merged_into: null
display_name: 王一元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGTrai6GzFvD4pAtgkcTqH
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8F9PxH2uRk96BoWp1pLY7v
          claim_id: c_YGTrai6GzFvD4pAtgkcTqH
          source_id: s_f1YZ5XEC2L5XdJh3FzVoLh
          stance: supports
          locator: CBDB:213982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213982）
          source: &a1
            id: s_f1YZ5XEC2L5XdJh3FzVoLh
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iaGhH9HyGhod6472q3d6KZ
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213982）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3Ij2xtcft7AwcJV-U5hxH
          claim_id: c_iaGhH9HyGhod6472q3d6KZ
          source_id: s_f1YZ5XEC2L5XdJh3FzVoLh
          stance: supports
          locator: CBDB:213982
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

# 王一元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一元 | accepted |
| bio.summary | 王一元，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一元（CBDB 213982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json)
