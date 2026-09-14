---
schema: wang-person/v1
id: p_K3LMX71NuopFidrizDU5pe
status: active
merged_into: null
display_name: 王盖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZPQ6GGM8DMH2AZL673FWxc
        subject_person_id: p_K3LMX71NuopFidrizDU5pe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ARct91NoE2fSKf8EHbotGC
          claim_id: c_ZPQ6GGM8DMH2AZL673FWxc
          source_id: s_wfmA6oghzCxcWxQwZgPaVt
          stance: supports
          locator: CBDB:279345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279345）
          source: &a1
            id: s_wfmA6oghzCxcWxQwZgPaVt
            source_type: api_record
            title: 中国历代人物传记资料库：王盖（CBDB 279345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json
            external_identifier: CBDB:279345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5D5J1yADuAFmnHpvLGCy2F
        subject_person_id: p_K3LMX71NuopFidrizDU5pe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盖，明人物。正德六年進士，籍贯宣城，曾任戶科給事中。（中国历代人物传记资料库 CBDB 279345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xN584JFBNeX1MWNVLCVq_6
          claim_id: c_5D5J1yADuAFmnHpvLGCy2F
          source_id: s_wfmA6oghzCxcWxQwZgPaVt
          stance: supports
          locator: CBDB:279345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7CYM0S8bi8fJg7klx74-oQ
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K3LMX71NuopFidrizDU5pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KHGhNAlqOv7gLGimZ25-6v
          claim_id: c_7CYM0S8bi8fJg7klx74-oQ
          source_id: s_Mf0pNdDe0HOEh2_WF8SgGv
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王盖 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王盖 之父／母。
          source:
            id: s_Mf0pNdDe0HOEh2_WF8SgGv
            source_type: api_record
            title: 中国历代人物传记资料库：王盖（CBDB 279345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json
            external_identifier: CBDB:279345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ga7sI5zU8UEIe4BCDkAHOu
        subject_person_id: p_K3LMX71NuopFidrizDU5pe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eiiXj7V2PcRnyNIRNUlekH
          claim_id: c_Ga7sI5zU8UEIe4BCDkAHOu
          source_id: s_Mf0pNdDe0HOEh2_WF8SgGv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mf0pNdDe0HOEh2_WF8SgGv
            source_type: api_record
            title: 中国历代人物传记资料库：王盖（CBDB 279345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json
            external_identifier: CBDB:279345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王盖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盖 | accepted |
| bio.summary | 王盖，明人物。正德六年進士，籍贯宣城，曾任戶科給事中。（中国历代人物传记资料库 CBDB 279345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| other | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盖（CBDB 279345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json)
