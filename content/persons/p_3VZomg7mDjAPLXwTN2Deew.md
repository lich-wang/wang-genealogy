---
schema: wang-person/v1
id: p_3VZomg7mDjAPLXwTN2Deew
status: active
merged_into: null
display_name: 王瑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WETsCb3zqe87Bp5sTADGjX
        subject_person_id: p_3VZomg7mDjAPLXwTN2Deew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9d9BP57pE3HJjjEFqkQ93
          claim_id: c_WETsCb3zqe87Bp5sTADGjX
          source_id: s_hdeFDzrwRDyAYr7FokM6DF
          stance: supports
          locator: CBDB:563037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563037）
          source: &a1
            id: s_hdeFDzrwRDyAYr7FokM6DF
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 563037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563037&o=json
            external_identifier: CBDB:563037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AaapRk65xg7kruYk3HudFR
        subject_person_id: p_3VZomg7mDjAPLXwTN2Deew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛，宋人物。籍贯通遠軍，曾任忠訓郎。（中国历代人物传记资料库 CBDB 563037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CG_kHYNjGciWJhVB-3ScT0
          claim_id: c_AaapRk65xg7kruYk3HudFR
          source_id: s_hdeFDzrwRDyAYr7FokM6DF
          stance: supports
          locator: CBDB:563037
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

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | 王瑛，宋人物。籍贯通遠軍，曾任忠訓郎。（中国历代人物传记资料库 CBDB 563037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 563037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563037&o=json)
