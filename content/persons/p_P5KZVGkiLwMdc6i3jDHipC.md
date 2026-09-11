---
schema: wang-person/v1
id: p_P5KZVGkiLwMdc6i3jDHipC
status: active
merged_into: null
display_name: 王以清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dZxKi7E4JUXEHVm3N2SEaV
        subject_person_id: p_P5KZVGkiLwMdc6i3jDHipC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eXUwLRNiZQeATD9sAoMvqp
          claim_id: c_dZxKi7E4JUXEHVm3N2SEaV
          source_id: s_tZaXaP7bim1UjZAcbCuao3
          stance: supports
          locator: CBDB:239107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239107）
          source: &a1
            id: s_tZaXaP7bim1UjZAcbCuao3
            source_type: api_record
            title: 中国历代人物传记资料库：王以清（CBDB 239107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239107&o=json
            external_identifier: CBDB:239107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TpQGkksDuK9x4g9bA2ZXxp
        subject_person_id: p_P5KZVGkiLwMdc6i3jDHipC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以清，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K1e3Xm8df1uHWSetIBxMRS
          claim_id: c_TpQGkksDuK9x4g9bA2ZXxp
          source_id: s_tZaXaP7bim1UjZAcbCuao3
          stance: supports
          locator: CBDB:239107
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
        id: c_241mXXo3WHnZ8cnNCtAxIs
        subject_person_id: p_P5KZVGkiLwMdc6i3jDHipC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CIhHf8cKJLDXmV6WQV0ISw
          claim_id: c_241mXXo3WHnZ8cnNCtAxIs
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ocnBND2ZpeAEqtQToHFBV8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 208004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json
            external_identifier: CBDB:208004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EKnyL5yNzB3UQXTrkLtsAg
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  other: []
---

# 王以清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以清 | accepted |
| bio.summary | 王以清，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EKnyL5yNzB3UQXTrkLtsAg | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以清（CBDB 239107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239107&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 208004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json)
