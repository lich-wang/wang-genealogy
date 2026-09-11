---
schema: wang-person/v1
id: p_v3csMHVQyKS6tcGrThkKWy
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cvhE6biZZ99bVtCQ965DTc
        subject_person_id: p_v3csMHVQyKS6tcGrThkKWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MWfkNZSDxmi9eyeYPagP52
          claim_id: c_cvhE6biZZ99bVtCQ965DTc
          source_id: s_D7kNkQ47edSEHzS43Bs4qZ
          stance: supports
          locator: CBDB:276663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276663）
          source: &a1
            id: s_D7kNkQ47edSEHzS43Bs4qZ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 276663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276663&o=json
            external_identifier: CBDB:276663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JRdBm3Utv8Wpc14THvjWSi
        subject_person_id: p_v3csMHVQyKS6tcGrThkKWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。正德六年進士，曾任正千戶。（中国历代人物传记资料库 CBDB 276663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eUvr4qe5rUC_yy84Qeoh6Z
          claim_id: c_JRdBm3Utv8Wpc14THvjWSi
          source_id: s_D7kNkQ47edSEHzS43Bs4qZ
          stance: supports
          locator: CBDB:276663
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
        id: c_FyKKM_Eny_fk3TazKzFqx_
        subject_person_id: p_v3csMHVQyKS6tcGrThkKWy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWNvdQm2pnvXJLlqi7hEoS
          claim_id: c_FyKKM_Eny_fk3TazKzFqx_
          source_id: s_D7kNkQ47edSEHzS43Bs4qZ
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。正德六年進士，曾任正千戶。（中国历代人物传记资料库 CBDB 276663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 276663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276663&o=json)
