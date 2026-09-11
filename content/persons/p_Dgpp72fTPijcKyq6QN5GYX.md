---
schema: wang-person/v1
id: p_Dgpp72fTPijcKyq6QN5GYX
status: active
merged_into: null
display_name: 王寅亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6D9TDr613SyzuJG6KuBe5J
        subject_person_id: p_Dgpp72fTPijcKyq6QN5GYX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MWsCUTRD5uiQyuWzHVD74
          claim_id: c_6D9TDr613SyzuJG6KuBe5J
          source_id: s_kUrE3TBQqJjARuC3wKLUHq
          stance: supports
          locator: CBDB:72023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72023）
          source: &a1
            id: s_kUrE3TBQqJjARuC3wKLUHq
            source_type: api_record
            title: 中国历代人物传记资料库：王寅亮（CBDB 72023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72023&o=json
            external_identifier: CBDB:72023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rxVViKDTELgaoeMPgUL9J2
        subject_person_id: p_Dgpp72fTPijcKyq6QN5GYX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1830年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2neo4rpL9JR9aENN2US9uN
          claim_id: c_rxVViKDTELgaoeMPgUL9J2
          source_id: s_kUrE3TBQqJjARuC3wKLUHq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NAsSCjtXArP5bq9h64fb2i
        subject_person_id: p_Dgpp72fTPijcKyq6QN5GYX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅亮（生于1830年），清人物。籍贯閬中。（中国历代人物传记资料库 CBDB 72023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TzHJXmpGAJXjfC7jpfhqUr
          claim_id: c_NAsSCjtXArP5bq9h64fb2i
          source_id: s_kUrE3TBQqJjARuC3wKLUHq
          stance: supports
          locator: CBDB:72023
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

# 王寅亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅亮 | accepted |
| birth.date | 1830年 | accepted |
| bio.summary | 王寅亮（生于1830年），清人物。籍贯閬中。（中国历代人物传记资料库 CBDB 72023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅亮（CBDB 72023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72023&o=json)
