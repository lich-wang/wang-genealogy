---
schema: wang-person/v1
id: p_bWHBrETwPeRBJYtc82ehET
status: active
merged_into: null
display_name: 王定
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYtAgrr3gNVB9P3DBACRoB
        subject_person_id: p_bWHBrETwPeRBJYtc82ehET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9357iHXJFVpeu9SfKpiDWa
          claim_id: c_RYtAgrr3gNVB9P3DBACRoB
          source_id: s_m2Mpm6TzLa2a2toGPpzj5F
          stance: supports
          locator: CBDB:162924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162924）
          source: &a1
            id: s_m2Mpm6TzLa2a2toGPpzj5F
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 162924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162924&o=json
            external_identifier: CBDB:162924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyQAuATqmUSpMg16q298Da
        subject_person_id: p_bWHBrETwPeRBJYtc82ehET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定，史料所见人物。本项目依据《中国历代人物传记资料库：王定（CBDB 162924）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uIKq7LREjtdzAnUbeG5foS
          claim_id: c_GyQAuATqmUSpMg16q298Da
          source_id: s_m2Mpm6TzLa2a2toGPpzj5F
          stance: supports
          locator: CBDB:162924
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_le5WZU4net6cSJDSWE49x4
        subject_person_id: p_bWHBrETwPeRBJYtc82ehET
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5Q2mxLa-GR6_s2iWNxnxx
          claim_id: c_le5WZU4net6cSJDSWE49x4
          source_id: s_m2Mpm6TzLa2a2toGPpzj5F
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong20：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d9H6Bj2BpxB74PwED6LAp4
        status: active
        display_name: 王林
        merged_into_person_id: null
  other: []
---

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | 王定，史料所见人物。本项目依据《中国历代人物传记资料库：王定（CBDB 162924）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_d9H6Bj2BpxB74PwED6LAp4 | 王林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 162924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162924&o=json)
