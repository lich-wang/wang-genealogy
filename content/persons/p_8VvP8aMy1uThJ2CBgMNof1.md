---
schema: wang-person/v1
id: p_8VvP8aMy1uThJ2CBgMNof1
status: active
merged_into: null
display_name: 王之黼
cbdb_id: 413775
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cDTCXNP3ATwaKz5h7yjnx3
        subject_person_id: p_8VvP8aMy1uThJ2CBgMNof1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之黼，史料所见人物。本项目依据《中国历代人物传记资料库：王之黼（CBDB 413775）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-WKYDO-Qd3GC76mhcU6-BM
          claim_id: c_cDTCXNP3ATwaKz5h7yjnx3
          source_id: s_gy7J5Ku8inPVFKNssJwatC
          stance: supports
          locator: CBDB:413775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gy7J5Ku8inPVFKNssJwatC
            source_type: api_record
            title: 中国历代人物传记资料库：王之黼（CBDB 413775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413775&o=json
            external_identifier: CBDB:413775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S3TSJPKWameLDG52H5DmEV
        subject_person_id: p_8VvP8aMy1uThJ2CBgMNof1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之黼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KK9k2kdsZzjrfcBS31NQ71
          claim_id: c_S3TSJPKWameLDG52H5DmEV
          source_id: s_gy7J5Ku8inPVFKNssJwatC
          stance: supports
          locator: CBDB:413775
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 清
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

# 王之黼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之黼，史料所见人物。本项目依据《中国历代人物传记资料库：王之黼（CBDB 413775）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王之黼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之黼（CBDB 413775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413775&o=json)
