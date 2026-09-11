---
schema: wang-person/v1
id: p_y9Be6wCSGkH3WJd1jLBiqu
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eF6A4PH18hvDjMKbi9HcWG
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMRn5C2ojjDh3RZaUtMmvs
          claim_id: c_eF6A4PH18hvDjMKbi9HcWG
          source_id: s_DZxEYHuf2yj5mmqBWaWCDr
          stance: supports
          locator: CBDB:283521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283521）
          source: &a1
            id: s_DZxEYHuf2yj5mmqBWaWCDr
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 283521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283521&o=json
            external_identifier: CBDB:283521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qrJiif3nVoGLWJJg9STo8e
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IsktbRq2-KZyvfzqFRXHmB
          claim_id: c_qrJiif3nVoGLWJJg9STo8e
          source_id: s_DZxEYHuf2yj5mmqBWaWCDr
          stance: supports
          locator: CBDB:283521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XhOeqjQW2bzOq594kVS_Tz
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ss9c8qPRalXsgtJPahtOpu
          claim_id: c_XhOeqjQW2bzOq594kVS_Tz
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oYEu5Xwri3kM83JFCb6pJB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 202099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json
            external_identifier: CBDB:202099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 202099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json)
- [中国历代人物传记资料库：王相（CBDB 283521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283521&o=json)
