---
schema: wang-person/v1
id: p_xrq9qyfwqop4m438PFbqGm
status: active
merged_into: null
display_name: 王耀南
cbdb_id: 123604
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xaGwVHHmPzSWqy3eBVrcui
        subject_person_id: p_xrq9qyfwqop4m438PFbqGm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀南（卒于1865年），史料所见人物。本项目依据《中国历代人物传记资料库：王耀南（CBDB 123604）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LGCryoOCZ_5CwF8BgV-r4o
          claim_id: c_xaGwVHHmPzSWqy3eBVrcui
          source_id: s_42NheiAJnkLvnez9iD8PMr
          stance: supports
          locator: CBDB:123604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_42NheiAJnkLvnez9iD8PMr
            source_type: api_record
            title: 中国历代人物传记资料库：王耀南（CBDB 123604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123604&o=json
            external_identifier: CBDB:123604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9UaJawA3GmJveymdaW7e6a
        subject_person_id: p_xrq9qyfwqop4m438PFbqGm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1865年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1865-01-01
            latest: 1865-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LwNa46wh1hVHKpEKZFWd8d
          claim_id: c_9UaJawA3GmJveymdaW7e6a
          source_id: s_42NheiAJnkLvnez9iD8PMr
          stance: supports
          locator: CBDB:123604
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1865
          source:
            id: s_42NheiAJnkLvnez9iD8PMr
            source_type: api_record
            title: 中国历代人物传记资料库：王耀南（CBDB 123604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123604&o=json
            external_identifier: CBDB:123604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMjBMrZrp7NEHqcG1Evw9K
        subject_person_id: p_xrq9qyfwqop4m438PFbqGm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FCXCikfX33m1q2cPGKu6xn
          claim_id: c_MMjBMrZrp7NEHqcG1Evw9K
          source_id: s_42NheiAJnkLvnez9iD8PMr
          stance: supports
          locator: CBDB:123604
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1865
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

# 王耀南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王耀南（卒于1865年），史料所见人物。本项目依据《中国历代人物传记资料库：王耀南（CBDB 123604）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1865年 | accepted |
| name.primary | 王耀南 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀南（CBDB 123604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123604&o=json)
