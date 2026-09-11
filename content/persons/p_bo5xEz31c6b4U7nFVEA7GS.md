---
schema: wang-person/v1
id: p_bo5xEz31c6b4U7nFVEA7GS
status: active
merged_into: null
display_name: 王塤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15UqJoVQDd53u84zEJh55u
        subject_person_id: p_bo5xEz31c6b4U7nFVEA7GS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TJxAooVMyTK2N5AvtRqvqF
          claim_id: c_15UqJoVQDd53u84zEJh55u
          source_id: s_Y6EwvfpHgPhU8RuiPwdKv8
          stance: supports
          locator: CBDB:38900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38900）
          source: &a1
            id: s_Y6EwvfpHgPhU8RuiPwdKv8
            source_type: api_record
            title: 中国历代人物传记资料库：王塤（CBDB 38900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38900&o=json
            external_identifier: CBDB:38900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kjZL6HsUoPrc5SANVYdPJP
        subject_person_id: p_bo5xEz31c6b4U7nFVEA7GS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤，史料所见人物。本项目依据《中国历代人物传记资料库：王塤（CBDB 38900）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rhMLbSy42FHJ0S2SMTfM8Q
          claim_id: c_kjZL6HsUoPrc5SANVYdPJP
          source_id: s_Y6EwvfpHgPhU8RuiPwdKv8
          stance: supports
          locator: CBDB:38900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王塤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塤 | accepted |
| bio.summary | 王塤，史料所见人物。本项目依据《中国历代人物传记资料库：王塤（CBDB 38900）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王塤（CBDB 38900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38900&o=json)
