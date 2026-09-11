---
schema: wang-person/v1
id: p_5NvgpfYRCbA6xFX2b2beZH
status: active
merged_into: null
display_name: 王繼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5swSyB3BHcwTvbWkawALHH
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8jCLVSJCcTLhkyPbdLGFJ4
          claim_id: c_5swSyB3BHcwTvbWkawALHH
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: CBDB:211406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211406）
          source: &a1
            id: s_6Qxigr21Es5GTqyWWcgpWX
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 211406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json
            external_identifier: CBDB:211406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EsmCUEcNv1hPFQidpueCq1
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。隆慶五年進士，籍贯懷仁，曾任義官。（中国历代人物传记资料库 CBDB 211406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bbob3Sv5W-30b06ASz7oE5
          claim_id: c_EsmCUEcNv1hPFQidpueCq1
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: CBDB:211406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M5ZgXEBVRbTG49918D5hKE
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0vmr-PKXdcEtcJJgAj1-i
          claim_id: c_M5ZgXEBVRbTG49918D5hKE
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MmVpUWztCQKaC484qaKxXc
        status: active
        display_name: 王汝濂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。隆慶五年進士，籍贯懷仁，曾任義官。（中国历代人物传记资料库 CBDB 211406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MmVpUWztCQKaC484qaKxXc | 王汝濂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 211406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json)
