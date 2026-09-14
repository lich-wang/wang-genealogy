---
schema: wang-person/v1
id: p_AgMZD8G7EJ5K7P49yaqHgS
status: active
merged_into: null
display_name: 王順媖
cbdb_id: 522348
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_92J948upjr9ZSyCXrgsoUd
        subject_person_id: p_AgMZD8G7EJ5K7P49yaqHgS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順媖，史料所见人物。本项目依据《中国历代人物传记资料库：王順媖（CBDB 522348）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_VNwhJAbCiKCex3xeR3-NJO
          claim_id: c_92J948upjr9ZSyCXrgsoUd
          source_id: s_3HU3rX5RAmZLR1QkjJ9ttG
          stance: supports
          locator: CBDB:522348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3HU3rX5RAmZLR1QkjJ9ttG
            source_type: api_record
            title: 中国历代人物传记资料库：王順媖（CBDB 522348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522348&o=json
            external_identifier: CBDB:522348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMtzRZ71KBgdM7D9WZ3H2F
        subject_person_id: p_AgMZD8G7EJ5K7P49yaqHgS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順媖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z5NG25DZMnZXRfLtfUuk6M
          claim_id: c_sMtzRZ71KBgdM7D9WZ3H2F
          source_id: s_3HU3rX5RAmZLR1QkjJ9ttG
          stance: supports
          locator: CBDB:522348
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ur4L6Ut-O8khtRPBuzI6Qp
        subject_person_id: p_WvKfEJB5FudMr9CF2R37Ax
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AgMZD8G7EJ5K7P49yaqHgS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KtFNo33xEIK3iPMY6TWHwP
          claim_id: c_ur4L6Ut-O8khtRPBuzI6Qp
          source_id: s_hwG0bupYf_RGTvwLH8paOz
          stance: supports
          locator: CBDB：兄弟 王鳴盛（29898）之父／母 王尔达
          quotation: null
          interpretation_note: 由兄弟关系推断：王順媖 与 王鳴盛 为同胞（CBDB 记「姊」），王鳴盛 之父／母即 王順媖 之父／母。
          source:
            id: s_hwG0bupYf_RGTvwLH8paOz
            source_type: api_record
            title: 中国历代人物传记资料库：王順媖（CBDB 522348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522348&o=json
            external_identifier: CBDB:522348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WvKfEJB5FudMr9CF2R37Ax
        status: active
        display_name: 王尔达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MqBUUBkQgXQAuRZ7Usa-9e
        subject_person_id: p_AgMZD8G7EJ5K7P49yaqHgS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0TQLQT2KmxK9PvRE5IHR41
          claim_id: c_MqBUUBkQgXQAuRZ7Usa-9e
          source_id: s_hwG0bupYf_RGTvwLH8paOz
          stance: supports
          locator: CBDB 亲属：姊（KinPerson 29898 王鳴盛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hwG0bupYf_RGTvwLH8paOz
            source_type: api_record
            title: 中国历代人物传记资料库：王順媖（CBDB 522348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522348&o=json
            external_identifier: CBDB:522348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZyHjRaen1EDymdU7e3vR6e
        status: active
        display_name: 王鳴盛
        merged_into_person_id: null
---

# 王順媖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王順媖，史料所见人物。本项目依据《中国历代人物传记资料库：王順媖（CBDB 522348）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王順媖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WvKfEJB5FudMr9CF2R37Ax | 王尔达 | accepted |
| other | p_ZyHjRaen1EDymdU7e3vR6e | 王鳴盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順媖（CBDB 522348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522348&o=json)
