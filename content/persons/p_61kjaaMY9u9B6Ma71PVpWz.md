---
schema: wang-person/v1
id: p_61kjaaMY9u9B6Ma71PVpWz
status: active
merged_into: null
display_name: 王國光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KmzgHF7bE5fKG9Y2qrG5T9
        subject_person_id: p_61kjaaMY9u9B6Ma71PVpWz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DFMM6v9JtZNFFvUcE2vj2V
          claim_id: c_KmzgHF7bE5fKG9Y2qrG5T9
          source_id: s_XP7JhDm8DFfSp71r8XhyNa
          stance: supports
          locator: CBDB:302578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302578）
          source: &a1
            id: s_XP7JhDm8DFfSp71r8XhyNa
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 302578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json
            external_identifier: CBDB:302578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NrTWe1PYVPqgdLy66Z4xZP
        subject_person_id: p_61kjaaMY9u9B6Ma71PVpWz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302578）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cKQHyBJKT1dSf4YDfCi22I
          claim_id: c_NrTWe1PYVPqgdLy66Z4xZP
          source_id: s_XP7JhDm8DFfSp71r8XhyNa
          stance: supports
          locator: CBDB:302578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bKD0_FwFXiLSji31Zh2HQb
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_61kjaaMY9u9B6Ma71PVpWz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fg2DyI09cw-uGGHnf2TpPB
          claim_id: c_bKD0_FwFXiLSji31Zh2HQb
          source_id: s_SGLbQhoGgUhBdb_A_rFm0-
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王國光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王國光 之父／母。
          source:
            id: s_SGLbQhoGgUhBdb_A_rFm0-
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 302578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json
            external_identifier: CBDB:302578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QG3uZTHCocd7ru7pA7gFNl
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_61kjaaMY9u9B6Ma71PVpWz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s4BQnHynUPmlVhN96i0Gu_
          claim_id: c_QG3uZTHCocd7ru7pA7gFNl
          source_id: s_SGLbQhoGgUhBdb_A_rFm0-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126622 王重光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SGLbQhoGgUhBdb_A_rFm0-
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 302578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json
            external_identifier: CBDB:302578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
---

# 王國光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國光 | accepted |
| bio.summary | 王國光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| other | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國光（CBDB 302578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json)
