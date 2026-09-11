---
schema: wang-person/v1
id: p_M4bsVbzDptP7tcN3DStZkb
status: active
merged_into: null
display_name: 王炎澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RpB3io7ej8N1AxUprDQJny
        subject_person_id: p_M4bsVbzDptP7tcN3DStZkb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w7Jg9beZ4kYqzRnbm7StD6
          claim_id: c_RpB3io7ej8N1AxUprDQJny
          source_id: s_yGX38UHZe2zLmaGhJQ8Rn1
          stance: supports
          locator: CBDB:475762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475762）
          source: &a1
            id: s_yGX38UHZe2zLmaGhJQ8Rn1
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 475762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475762&o=json
            external_identifier: CBDB:475762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6MSAtCF3iXS6jxkGX64Q4
        subject_person_id: p_M4bsVbzDptP7tcN3DStZkb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤，宋人物。曾任教官。（中国历代人物传记资料库 CBDB 475762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s5RddAW846_GmvajJ8yCzQ
          claim_id: c_L6MSAtCF3iXS6jxkGX64Q4
          source_id: s_yGX38UHZe2zLmaGhJQ8Rn1
          stance: supports
          locator: CBDB:475762
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

# 王炎澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎澤 | accepted |
| bio.summary | 王炎澤，宋人物。曾任教官。（中国历代人物传记资料库 CBDB 475762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎澤（CBDB 475762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475762&o=json)
