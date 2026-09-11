---
schema: wang-person/v1
id: p_PCEXu25GY7tYnCvrTEmtNu
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GLzxbgHFymGwdh6xA6usMX
        subject_person_id: p_PCEXu25GY7tYnCvrTEmtNu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9h3gEo4UyJrarge9JifuoL
          claim_id: c_GLzxbgHFymGwdh6xA6usMX
          source_id: s_DM9gPrqEHb3LGD2teFETnC
          stance: supports
          locator: CBDB:100720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100720）
          source: &a1
            id: s_DM9gPrqEHb3LGD2teFETnC
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 100720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100720&o=json
            external_identifier: CBDB:100720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9F77fYn3wGzph12vv6oYZ3
        subject_person_id: p_PCEXu25GY7tYnCvrTEmtNu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，元人物。籍贯處州路，曾任縣學教諭。（中国历代人物传记资料库 CBDB 100720）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jkpfFzCQhp4uIoS7d6kKfB
          claim_id: c_9F77fYn3wGzph12vv6oYZ3
          source_id: s_DM9gPrqEHb3LGD2teFETnC
          stance: supports
          locator: CBDB:100720
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，元人物。籍贯處州路，曾任縣學教諭。（中国历代人物传记资料库 CBDB 100720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 100720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100720&o=json)
