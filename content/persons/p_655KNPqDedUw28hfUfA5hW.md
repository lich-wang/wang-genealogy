---
schema: wang-person/v1
id: p_655KNPqDedUw28hfUfA5hW
status: active
merged_into: null
display_name: 王瑶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9dVM51H8YpUJFfAV85qHA
        subject_person_id: p_655KNPqDedUw28hfUfA5hW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gp2GxzHh4qi6htAVsB9WF3
          claim_id: c_y9dVM51H8YpUJFfAV85qHA
          source_id: s_4CwhNsSqv9BLpRv94oM9W4
          stance: supports
          locator: CBDB:531742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531742）
          source: &a1
            id: s_4CwhNsSqv9BLpRv94oM9W4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑶（CBDB 531742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531742&o=json
            external_identifier: CBDB:531742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wh5Npf6qgGKA2wxrdNkKRJ
        subject_person_id: p_655KNPqDedUw28hfUfA5hW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶，宋人物。籍贯瑞安，入仕進士。（中国历代人物传记资料库 CBDB 531742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s1MDDEezKQIQcc5eqzS8Dk
          claim_id: c_wh5Npf6qgGKA2wxrdNkKRJ
          source_id: s_4CwhNsSqv9BLpRv94oM9W4
          stance: supports
          locator: CBDB:531742
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

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑶 | accepted |
| bio.summary | 王瑶，宋人物。籍贯瑞安，入仕進士。（中国历代人物传记资料库 CBDB 531742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑶（CBDB 531742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531742&o=json)
