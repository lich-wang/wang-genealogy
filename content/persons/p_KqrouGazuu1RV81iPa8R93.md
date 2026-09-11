---
schema: wang-person/v1
id: p_KqrouGazuu1RV81iPa8R93
status: active
merged_into: null
display_name: 王蘭蓀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VfxR8XoPnnhpaTr5o5AUu3
        subject_person_id: p_KqrouGazuu1RV81iPa8R93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭蓀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tWrk11kqRRDhSj74L9X2Rr
          claim_id: c_VfxR8XoPnnhpaTr5o5AUu3
          source_id: s_GQ5YK5L4h6x6EJKChKNXtN
          stance: supports
          locator: CBDB:100087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100087）
          source: &a1
            id: s_GQ5YK5L4h6x6EJKChKNXtN
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭蓀（CBDB 100087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100087&o=json
            external_identifier: CBDB:100087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ajm7Rrg9FXBiChJ54EGpnF
        subject_person_id: p_KqrouGazuu1RV81iPa8R93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭蓀，史料所见人物。本项目依据《中国历代人物传记资料库：王蘭蓀（CBDB 100087）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qShkZ1LlVvv0tzyl6AX5To
          claim_id: c_ajm7Rrg9FXBiChJ54EGpnF
          source_id: s_GQ5YK5L4h6x6EJKChKNXtN
          stance: supports
          locator: CBDB:100087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KLFwfm1TdQeUbItxwtpKY5
        subject_person_id: p_KqrouGazuu1RV81iPa8R93
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_am7uRiUcAMwPgixMG5LWQu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlDW6H2gcNAbHRLYP_HyeS
          claim_id: c_KLFwfm1TdQeUbItxwtpKY5
          source_id: s_hbUwmGDQ5ZrilyENMVOxa1
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1807：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hbUwmGDQ5ZrilyENMVOxa1
            source_type: api_record
            title: 中国历代人物传记资料库：程德班（CBDB 100088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100088&o=json
            external_identifier: CBDB:100088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_am7uRiUcAMwPgixMG5LWQu
        status: active
        display_name: 程德班
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蘭蓀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭蓀 | accepted |
| bio.summary | 王蘭蓀，史料所见人物。本项目依据《中国历代人物传记资料库：王蘭蓀（CBDB 100087）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_am7uRiUcAMwPgixMG5LWQu | 程德班 | accepted |

## 外部来源

- [中国历代人物传记资料库：程德班（CBDB 100088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100088&o=json)
- [中国历代人物传记资料库：王蘭蓀（CBDB 100087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100087&o=json)
