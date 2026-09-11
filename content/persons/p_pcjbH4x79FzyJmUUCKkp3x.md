---
schema: wang-person/v1
id: p_pcjbH4x79FzyJmUUCKkp3x
status: active
merged_into: null
display_name: 王師閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a594MR5jwa8gJbdwcLKiqq
        subject_person_id: p_pcjbH4x79FzyJmUUCKkp3x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EaL9zuv8Uh5TYMWEHhxA64
          claim_id: c_a594MR5jwa8gJbdwcLKiqq
          source_id: s_521gi6ebQyPm8T42w3zJKZ
          stance: supports
          locator: CBDB:91992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91992）
          source: &a1
            id: s_521gi6ebQyPm8T42w3zJKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王師閔（CBDB 91992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91992&o=json
            external_identifier: CBDB:91992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7SsvwuPn829EeXntmfXhJe
        subject_person_id: p_pcjbH4x79FzyJmUUCKkp3x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師閔，吳(楊)人物。身份为詩人，曾任州刺史。（中国历代人物传记资料库 CBDB 91992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDHXGQbV5THUuIXaBVY-Mp
          claim_id: c_7SsvwuPn829EeXntmfXhJe
          source_id: s_521gi6ebQyPm8T42w3zJKZ
          stance: supports
          locator: CBDB:91992
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

# 王師閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師閔 | accepted |
| bio.summary | 王師閔，吳(楊)人物。身份为詩人，曾任州刺史。（中国历代人物传记资料库 CBDB 91992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師閔（CBDB 91992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91992&o=json)
