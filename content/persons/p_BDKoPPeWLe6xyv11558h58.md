---
schema: wang-person/v1
id: p_BDKoPPeWLe6xyv11558h58
status: active
merged_into: null
display_name: 王敘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayzWPSt2AQvbrG8Mj1Z2wC
        subject_person_id: p_BDKoPPeWLe6xyv11558h58
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2tMk7F5n16Vjnez1FG1m5d
          claim_id: c_ayzWPSt2AQvbrG8Mj1Z2wC
          source_id: s_gxdDWGxGtFMuksYGWXi18L
          stance: supports
          locator: CBDB:310367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310367）
          source: &a1
            id: s_gxdDWGxGtFMuksYGWXi18L
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 310367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json
            external_identifier: CBDB:310367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3G7YHFJ9gXaMyVxfu9LJJn
        subject_person_id: p_BDKoPPeWLe6xyv11558h58
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_liMFKRZokwLxsy7NTkadoK
          claim_id: c_3G7YHFJ9gXaMyVxfu9LJJn
          source_id: s_gxdDWGxGtFMuksYGWXi18L
          stance: supports
          locator: CBDB:310367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oPkdJIneOTUyoZm77GVYsv
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDKoPPeWLe6xyv11558h58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h1We3-PLQcXYZdNVouzVII
          claim_id: c_oPkdJIneOTUyoZm77GVYsv
          source_id: s_j7-TGqGOT8LyU-m0GjkfQh
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王敘 与 王遴 为同胞（CBDB 记「弟」），王遴 之父／母即 王敘 之父／母。
          source:
            id: s_j7-TGqGOT8LyU-m0GjkfQh
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 310367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json
            external_identifier: CBDB:310367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BM46tZGN4EBcE7FUMvw1gL
        status: active
        display_name: 王宗義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Gb5bWxD6j67cG28B-XH58B
        subject_person_id: p_BDKoPPeWLe6xyv11558h58
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgVr6I7-DuLK8UAaed1Zbe
          claim_id: c_Gb5bWxD6j67cG28B-XH58B
          source_id: s_j7-TGqGOT8LyU-m0GjkfQh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124734 王遴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j7-TGqGOT8LyU-m0GjkfQh
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 310367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json
            external_identifier: CBDB:310367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
---

# 王敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敘 | accepted |
| bio.summary | 王敘，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BM46tZGN4EBcE7FUMvw1gL | 王宗義 | accepted |
| other | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敘（CBDB 310367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310367&o=json)
