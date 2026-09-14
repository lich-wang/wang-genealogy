---
schema: wang-person/v1
id: p_YFaXZA3dXJaciqHKQ72Qru
status: active
merged_into: null
display_name: 王堯仁
cbdb_id: 221770
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nrXfWK2tN2fjieZe3KNHer
        subject_person_id: p_YFaXZA3dXJaciqHKQ72Qru
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯仁，明人物。萬曆八年進士，籍贯滄州，入仕監生。（中国历代人物传记资料库 CBDB 221770）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_knQmYWWkwuvdYTfe7M2XI1
          claim_id: c_nrXfWK2tN2fjieZe3KNHer
          source_id: s_n3cLeQtxXQUftrGkq1E3R6
          stance: supports
          locator: CBDB:221770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n3cLeQtxXQUftrGkq1E3R6
            source_type: api_record
            title: 中国历代人物传记资料库：王堯仁（CBDB 221770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json
            external_identifier: CBDB:221770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kvvy6TnDTja35D98VdbHvo
        subject_person_id: p_YFaXZA3dXJaciqHKQ72Qru
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uZHEVVutEQJhjXQEpFD3zT
          claim_id: c_Kvvy6TnDTja35D98VdbHvo
          source_id: s_n3cLeQtxXQUftrGkq1E3R6
          stance: supports
          locator: CBDB:221770
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qN3yFZ1nNVfuZyYoZhIVVG
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YFaXZA3dXJaciqHKQ72Qru
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PCm4OCKOM9PT-_13LatqEQ
          claim_id: c_qN3yFZ1nNVfuZyYoZhIVVG
          source_id: s_1n59qTyyBQKli26Bg8YWmI
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯仁 与 王顯仁 为同胞（CBDB 记「弟」），王顯仁 之父／母即 王堯仁 之父／母。
          source:
            id: s_1n59qTyyBQKli26Bg8YWmI
            source_type: api_record
            title: 中国历代人物传记资料库：王堯仁（CBDB 221770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json
            external_identifier: CBDB:221770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GOkRIkhQn2zqTqMsnR5O8E
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YFaXZA3dXJaciqHKQ72Qru
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35DSi57sVRbNjYDzmfknx5
          claim_id: c_GOkRIkhQn2zqTqMsnR5O8E
          source_id: s_1n59qTyyBQKli26Bg8YWmI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1n59qTyyBQKli26Bg8YWmI
            source_type: api_record
            title: 中国历代人物传记资料库：王堯仁（CBDB 221770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json
            external_identifier: CBDB:221770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王堯仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯仁，明人物。萬曆八年進士，籍贯滄州，入仕監生。（中国历代人物传记资料库 CBDB 221770） | accepted |
| name.primary | 王堯仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯仁（CBDB 221770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221770&o=json)
