---
schema: wang-person/v1
id: p_sESRoWJizs7MHuiDbBsH4y
status: active
merged_into: null
display_name: 王弘度
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3F2sM2R1iWhJEt3YULUmKw
        subject_person_id: p_sESRoWJizs7MHuiDbBsH4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Awbb5XPnnHjCvCwqSNHUUF
          claim_id: c_3F2sM2R1iWhJEt3YULUmKw
          source_id: s_AJkP2GGCuSERekLhGu713g
          stance: supports
          locator: CBDB:257398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257398）
          source: &a1
            id: s_AJkP2GGCuSERekLhGu713g
            source_type: api_record
            title: 中国历代人物传记资料库：王弘度（CBDB 257398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json
            external_identifier: CBDB:257398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pm4JsS7JzV57rCybrtkbGF
        subject_person_id: p_sESRoWJizs7MHuiDbBsH4y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘度，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V7CcwNtP-KqapMFFH5V3ex
          claim_id: c_Pm4JsS7JzV57rCybrtkbGF
          source_id: s_AJkP2GGCuSERekLhGu713g
          stance: supports
          locator: CBDB:257398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RHwXwXaQgv7U8d98nmLWKS
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sESRoWJizs7MHuiDbBsH4y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5VmdPu64a-Meqp0Cxglhf
          claim_id: c_RHwXwXaQgv7U8d98nmLWKS
          source_id: s_vfiEdiwPEsog69o0TZCs3h
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘度 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王弘度 之父／母。
          source:
            id: s_vfiEdiwPEsog69o0TZCs3h
            source_type: api_record
            title: 中国历代人物传记资料库：王弘度（CBDB 257398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json
            external_identifier: CBDB:257398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JRSMPB6yVrvoB4Rsfsm44J
        status: active
        display_name: 王懷廣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_slDQ1R-Insee17SbvebdBd
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sESRoWJizs7MHuiDbBsH4y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VL9xPvWGtsJ3eIwzsvKbpm
          claim_id: c_slDQ1R-Insee17SbvebdBd
          source_id: s_vfiEdiwPEsog69o0TZCs3h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126657 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vfiEdiwPEsog69o0TZCs3h
            source_type: api_record
            title: 中国历代人物传记资料库：王弘度（CBDB 257398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json
            external_identifier: CBDB:257398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mQ1J7fd25Z6UXRPAETHXDi
        status: active
        display_name: 王純
        merged_into_person_id: null
---

# 王弘度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘度 | accepted |
| bio.summary | 王弘度，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JRSMPB6yVrvoB4Rsfsm44J | 王懷廣 | accepted |
| other | p_mQ1J7fd25Z6UXRPAETHXDi | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘度（CBDB 257398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257398&o=json)
