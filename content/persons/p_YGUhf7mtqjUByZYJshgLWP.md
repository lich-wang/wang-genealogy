---
schema: wang-person/v1
id: p_YGUhf7mtqjUByZYJshgLWP
status: active
merged_into: null
display_name: 王之荀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5BuGHzxSVcy4164UF1GyoU
        subject_person_id: p_YGUhf7mtqjUByZYJshgLWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之荀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DAonpoBZ2zdvzr9WJrBEYC
          claim_id: c_5BuGHzxSVcy4164UF1GyoU
          source_id: s_DdS6u6gha7YSZrko98Bosy
          stance: supports
          locator: CBDB:97776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97776）
          source: &a1
            id: s_DdS6u6gha7YSZrko98Bosy
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 97776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97776&o=json
            external_identifier: CBDB:97776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_egx126KM8BjjEun2cEVSsx
        subject_person_id: p_YGUhf7mtqjUByZYJshgLWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之荀，史料所见人物。本项目依据《中国历代人物传记资料库：王之荀（CBDB 97776）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C-1ZietJeVUbLKdA8ktTor
          claim_id: c_egx126KM8BjjEun2cEVSsx
          source_id: s_DdS6u6gha7YSZrko98Bosy
          stance: supports
          locator: CBDB:97776
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

# 王之荀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之荀 | accepted |
| bio.summary | 王之荀，史料所见人物。本项目依据《中国历代人物传记资料库：王之荀（CBDB 97776）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之荀（CBDB 97776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97776&o=json)
