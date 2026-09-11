---
schema: wang-person/v1
id: p_LPehjNKkq4LDvPu7Xhf9QQ
status: active
merged_into: null
display_name: 王神壽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aybubtbJDp5Bu8aPFGAnXz
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王神壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLvMqV3jFRxirAGxKoA6VM
          claim_id: c_aybubtbJDp5Bu8aPFGAnXz
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
          stance: supports
          locator: CBDB:175772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175772）
          source: &a1
            id: s_RLQtt3isK7zKK3zQy6NEd3
            source_type: api_record
            title: 中国历代人物传记资料库：王神壽（CBDB 175772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175772&o=json
            external_identifier: CBDB:175772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7MCSRaYm2U45hrZJCTPQ5v
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZ5wuK2Sbj3bHJEV4C8Byp
          claim_id: c_7MCSRaYm2U45hrZJCTPQ5v
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uSbG4KFd48mcNVT9SQcxc3
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王神壽（卒于680年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PgotVRmMWFp8TX5Z60NQys
          claim_id: c_uSbG4KFd48mcNVT9SQcxc3
          source_id: s_RLQtt3isK7zKK3zQy6NEd3
          stance: supports
          locator: CBDB:175772
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k52ZpmXwAgvHuZ5g6gS7ib
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H65hIESCU6qsw840ZxwkKu
          claim_id: c_k52ZpmXwAgvHuZ5g6gS7ib
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CfBgvGA6FYSyfBUU6oAfJj
            source_type: api_record
            title: 中国历代人物传记资料库：王孝幹（CBDB 175765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json
            external_identifier: CBDB:175765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_25r3CJHZNkQEGEuVBhWUVs
        status: active
        display_name: 王孝幹
        merged_into_person_id: null
  children:
    - claim:
        id: c_TmujFjrypmzR1ETxLIH0Tz
        subject_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pm4PNXKJgrShGFXjkL4WM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgKKS-oa561Nw8ofw52TQ0
          claim_id: c_TmujFjrypmzR1ETxLIH0Tz
          source_id: s_edKnWyV3DsgVgrv8k1hh5j
          stance: supports
          locator: 唐代墓誌彙編續集，tianbao48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_edKnWyV3DsgVgrv8k1hh5j
            source_type: api_record
            title: 中国历代人物传记资料库：王思立（CBDB 164671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164671&o=json
            external_identifier: CBDB:164671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9pm4PNXKJgrShGFXjkL4WM
        status: active
        display_name: 王思立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王神壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王神壽 | accepted |
| death.date | 680年 | accepted |
| bio.summary | 王神壽（卒于680年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175772） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_25r3CJHZNkQEGEuVBhWUVs | 王孝幹 | accepted |
| children | p_9pm4PNXKJgrShGFXjkL4WM | 王思立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王神壽（CBDB 175772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175772&o=json)
- [中国历代人物传记资料库：王思立（CBDB 164671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164671&o=json)
- [中国历代人物传记资料库：王孝幹（CBDB 175765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json)
