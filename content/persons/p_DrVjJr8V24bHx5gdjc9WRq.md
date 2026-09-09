---
schema: wang-person/v1
id: p_DrVjJr8V24bHx5gdjc9WRq
status: active
merged_into: null
display_name: 王錄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TSXCbuKjkCKAWq2i8gfUgp
        subject_person_id: p_DrVjJr8V24bHx5gdjc9WRq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NFbkQZ6V4JwqhMEEw93Lk2
          claim_id: c_TSXCbuKjkCKAWq2i8gfUgp
          source_id: s_td9YSPo2YHrjgdCk4rkBKw
          stance: supports
          locator: CBDB:260528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260528）
          source: &a1
            id: s_td9YSPo2YHrjgdCk4rkBKw
            source_type: api_record
            title: 中国历代人物传记资料库：王錄（CBDB 260528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260528&o=json
            external_identifier: CBDB:260528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5W8jEk3sre1FVkPLFQKXC
        subject_person_id: p_DrVjJr8V24bHx5gdjc9WRq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zm1syWVRVn5ivBjP5F6WV8
          claim_id: c_w5W8jEk3sre1FVkPLFQKXC
          source_id: s_td9YSPo2YHrjgdCk4rkBKw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錄（CBDB 260528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260528&o=json)
