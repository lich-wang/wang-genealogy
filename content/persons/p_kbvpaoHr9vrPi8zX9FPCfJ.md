---
schema: wang-person/v1
id: p_kbvpaoHr9vrPi8zX9FPCfJ
status: active
merged_into: null
display_name: 王徽典
cbdb_id: 325301
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCHED9SRpeA3Aw6QeKiuC2
        subject_person_id: p_kbvpaoHr9vrPi8zX9FPCfJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽典，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325301）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wbYflX8b4cU4-nMZjCS9g8
          claim_id: c_oCHED9SRpeA3Aw6QeKiuC2
          source_id: s_YCxsDHUYvADT6kFKMeXAvk
          stance: supports
          locator: CBDB:325301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YCxsDHUYvADT6kFKMeXAvk
            source_type: api_record
            title: 中国历代人物传记资料库：王徽典（CBDB 325301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json
            external_identifier: CBDB:325301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3CG9DbTADrG7L92RG9xwa
        subject_person_id: p_kbvpaoHr9vrPi8zX9FPCfJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WefEirjVdY59TP9kaGp7eM
          claim_id: c_E3CG9DbTADrG7L92RG9xwa
          source_id: s_YCxsDHUYvADT6kFKMeXAvk
          stance: supports
          locator: CBDB:325301
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xlcLUec4QCRNI2DKgXtLmI
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kbvpaoHr9vrPi8zX9FPCfJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SdhAbDCjKhI8nTlKxPYGBa
          claim_id: c_xlcLUec4QCRNI2DKgXtLmI
          source_id: s_VuUNUCZStW5ixDUw0reoO8
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽典 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽典 之父／母。
          source:
            id: s_VuUNUCZStW5ixDUw0reoO8
            source_type: api_record
            title: 中国历代人物传记资料库：王徽典（CBDB 325301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json
            external_identifier: CBDB:325301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v2Fkat16mGPQiTSwTrQAp8
        status: active
        display_name: 王宦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_grEPD2HGPPn5RJPOZ8c1T8
        subject_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kbvpaoHr9vrPi8zX9FPCfJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lEazY7OQb1rHAFqfFqpx8r
          claim_id: c_grEPD2HGPPn5RJPOZ8c1T8
          source_id: s_VuUNUCZStW5ixDUw0reoO8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204879 王徽猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VuUNUCZStW5ixDUw0reoO8
            source_type: api_record
            title: 中国历代人物传记资料库：王徽典（CBDB 325301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json
            external_identifier: CBDB:325301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N1zXfVAzsHV9UYAEDLb5C7
        status: active
        display_name: 王徽猷
        merged_into_person_id: null
---

# 王徽典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徽典，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325301） | accepted |
| name.primary | 王徽典 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v2Fkat16mGPQiTSwTrQAp8 | 王宦 | accepted |
| other | p_N1zXfVAzsHV9UYAEDLb5C7 | 王徽猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽典（CBDB 325301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json)
