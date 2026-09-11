---
schema: wang-person/v1
id: p_n1RAMNCqfHxmzGckd3HNDY
status: active
merged_into: null
display_name: 王岑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hf3UBZ1HjQpTG551H26ojC
        subject_person_id: p_n1RAMNCqfHxmzGckd3HNDY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VbDRdKMD345Z9ZrfC7yPkM
          claim_id: c_Hf3UBZ1HjQpTG551H26ojC
          source_id: s_CdnT3HZkwYN7yeueLe8bzy
          stance: supports
          locator: CBDB:312130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312130）
          source: &a1
            id: s_CdnT3HZkwYN7yeueLe8bzy
            source_type: api_record
            title: 中国历代人物传记资料库：王岑（CBDB 312130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312130&o=json
            external_identifier: CBDB:312130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4LqukTiAs1CgtQM1YYve75
        subject_person_id: p_n1RAMNCqfHxmzGckd3HNDY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岑，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 312130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9eK8ktl0icoGRaIqSCpPD1
          claim_id: c_4LqukTiAs1CgtQM1YYve75
          source_id: s_CdnT3HZkwYN7yeueLe8bzy
          stance: supports
          locator: CBDB:312130
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
  descendants:
    - claim:
        id: c_nYujhX3_K4t3J4Q-_3ZZu4
        subject_person_id: p_n1RAMNCqfHxmzGckd3HNDY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LRcWA2OF3lsmQtPtuAUZC3
          claim_id: c_nYujhX3_K4t3J4Q-_3ZZu4
          source_id: s_CdnT3HZkwYN7yeueLe8bzy
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hh8fhsCR2PRgT3HnPmoPSX
        status: active
        display_name: 王三接
        merged_into_person_id: null
  other: []
---

# 王岑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岑 | accepted |
| bio.summary | 王岑，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 312130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hh8fhsCR2PRgT3HnPmoPSX | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岑（CBDB 312130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312130&o=json)
