---
schema: wang-person/v1
id: p_ptGw2Ux5EUNCZB6gq3DCnB
status: active
merged_into: null
display_name: 王拱仁
cbdb_id: 279463
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WD3dcrQWjSKpJQ7pSoqgkD
        subject_person_id: p_ptGw2Ux5EUNCZB6gq3DCnB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱仁，明人物。正德十二年進士，曾任同知。（中国历代人物传记资料库 CBDB 279463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7V0thrm8T1E3Kb6P5IzcRg
          claim_id: c_WD3dcrQWjSKpJQ7pSoqgkD
          source_id: s_K3S3DqKeVGUfSSLgn1UgRJ
          stance: supports
          locator: CBDB:279463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_K3S3DqKeVGUfSSLgn1UgRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王拱仁（CBDB 279463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279463&o=json
            external_identifier: CBDB:279463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKZZ8jRERmPuSrf7GKyFAB
        subject_person_id: p_ptGw2Ux5EUNCZB6gq3DCnB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_14PbQcNzhyh64RJyKskx1F
          claim_id: c_DKZZ8jRERmPuSrf7GKyFAB
          source_id: s_K3S3DqKeVGUfSSLgn1UgRJ
          stance: supports
          locator: CBDB:279463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_eeIaf8Enxb67OMUnC5-hBm
        subject_person_id: p_ptGw2Ux5EUNCZB6gq3DCnB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pe-8DxAMiChQwVYSQFHPL_
          claim_id: c_eeIaf8Enxb67OMUnC5-hBm
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EMFDyqiwB7TGfKzHDKUFLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json
            external_identifier: CBDB:201866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2oy62EEzX8avtnwM7s1tDJ
        status: active
        display_name: 王綸
        merged_into_person_id: null
  other: []
---

# 王拱仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拱仁，明人物。正德十二年進士，曾任同知。（中国历代人物传记资料库 CBDB 279463） | accepted |
| name.primary | 王拱仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2oy62EEzX8avtnwM7s1tDJ | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱仁（CBDB 279463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279463&o=json)
- [中国历代人物传记资料库：王綸（CBDB 201866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json)
