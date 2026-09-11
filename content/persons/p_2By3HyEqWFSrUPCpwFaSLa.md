---
schema: wang-person/v1
id: p_2By3HyEqWFSrUPCpwFaSLa
status: active
merged_into: null
display_name: 王仲甫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Te4QT32RvkkLbbBF8Zfi4
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CBXKvUN7T9gmvBVknFQYaA
          claim_id: c_2Te4QT32RvkkLbbBF8Zfi4
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: CBDB:168571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168571）
          source: &a1
            id: s_WwkwnxKYTK9cFafz9RG2Wm
            source_type: api_record
            title: 中国历代人物传记资料库：王仲甫（CBDB 168571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json
            external_identifier: CBDB:168571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FohdAWf9FgfweyPssRNWTU
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲甫，史料所见人物。本项目依据《中国历代人物传记资料库：王仲甫（CBDB 168571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sVD0YpPPs_qmKNXVRglaDw
          claim_id: c_FohdAWf9FgfweyPssRNWTU
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: CBDB:168571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VuPgVIm9hitkELdydw-xed
        subject_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoVGSgGNKbBBUnXE7nh7G8
          claim_id: c_VuPgVIm9hitkELdydw-xed
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lq74ESPuUFpGQU5tURbhKg
        status: active
        display_name: 王文禮
        merged_into_person_id: null
  children:
    - claim:
        id: c_lM2YfIylLol0ImkfCP5e89
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YsPayRFH97RfRhHgyPnWty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-j0RmgjDpC7P5mZs6Vpsjo
          claim_id: c_lM2YfIylLol0ImkfCP5e89
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu8：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YsPayRFH97RfRhHgyPnWty
        status: active
        display_name: 王幼虞
        merged_into_person_id: null
    - claim:
        id: c_6gOfth8BWkXESml9l5WcWy
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VWWqQv6vR5MEFVM4pbbjGs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H4ank5Dv2fZvdtWxaudJs9
          claim_id: c_6gOfth8BWkXESml9l5WcWy
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VWWqQv6vR5MEFVM4pbbjGs
        status: active
        display_name: 王幼度
        merged_into_person_id: null
    - claim:
        id: c_4m-KH3DFO7Rz6ZMIOhtwq3
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DotisGBWuSy9QiJBhRBUkB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxgTWUVUKmdznhw7YXzPjy
          claim_id: c_4m-KH3DFO7Rz6ZMIOhtwq3
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DotisGBWuSy9QiJBhRBUkB
        status: active
        display_name: 王幼膚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲甫 | accepted |
| bio.summary | 王仲甫，史料所见人物。本项目依据《中国历代人物传记资料库：王仲甫（CBDB 168571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lq74ESPuUFpGQU5tURbhKg | 王文禮 | accepted |
| children | p_YsPayRFH97RfRhHgyPnWty | 王幼虞 | accepted |
| children | p_VWWqQv6vR5MEFVM4pbbjGs | 王幼度 | accepted |
| children | p_DotisGBWuSy9QiJBhRBUkB | 王幼膚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲甫（CBDB 168571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json)
