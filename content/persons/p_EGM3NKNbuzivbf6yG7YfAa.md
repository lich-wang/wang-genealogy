---
schema: wang-person/v1
id: p_EGM3NKNbuzivbf6yG7YfAa
status: active
merged_into: null
display_name: 王鎌
cbdb_id: 318310
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cxvNgDDiXMGKDaCPK9c82
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎌，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318310）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rTvfjCxm5WwoEJgpq6EZVp
          claim_id: c_1cxvNgDDiXMGKDaCPK9c82
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: CBDB:318310
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aGmu253DAHvMUPPFMGST4C
            source_type: api_record
            title: 中国历代人物传记资料库：王鎌（CBDB 318310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json
            external_identifier: CBDB:318310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFX1c7YJUQspKDJ7M7eJsD
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hbYCiFRH32m43ENx1CTf1w
          claim_id: c_jFX1c7YJUQspKDJ7M7eJsD
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: CBDB:318310
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WSrug1D1O-JrdfC9iKS5WR
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fV_BynYnRf9f2fsNAUKFLN
          claim_id: c_WSrug1D1O-JrdfC9iKS5WR
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aGmu253DAHvMUPPFMGST4C
            source_type: api_record
            title: 中国历代人物传记资料库：王鎌（CBDB 318310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json
            external_identifier: CBDB:318310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_sNBx1By3rYXjFtLdVCyoze
        status: active
        display_name: 王汝言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鎌，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318310） | accepted |
| name.primary | 王鎌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sNBx1By3rYXjFtLdVCyoze | 王汝言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎌（CBDB 318310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json)
