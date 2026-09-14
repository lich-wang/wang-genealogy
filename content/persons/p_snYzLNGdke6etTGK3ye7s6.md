---
schema: wang-person/v1
id: p_snYzLNGdke6etTGK3ye7s6
status: active
merged_into: null
display_name: 王瑞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_py1suMdfVz9JAjBUAWNvrb
        subject_person_id: p_snYzLNGdke6etTGK3ye7s6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CydAzPXs6GoFHdUvLjc6c2
          claim_id: c_py1suMdfVz9JAjBUAWNvrb
          source_id: s_RK5n3nhucHseGV58gqRk8f
          stance: supports
          locator: CBDB:244700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244700）
          source: &a1
            id: s_RK5n3nhucHseGV58gqRk8f
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 244700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json
            external_identifier: CBDB:244700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eEKyYCus73pgx5KPrF99M
        subject_person_id: p_snYzLNGdke6etTGK3ye7s6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DNApGAJdu5N0HJYsU33dG5
          claim_id: c_4eEKyYCus73pgx5KPrF99M
          source_id: s_RK5n3nhucHseGV58gqRk8f
          stance: supports
          locator: CBDB:244700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JYETkz_hjHOiB6gvLUNamR
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_snYzLNGdke6etTGK3ye7s6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iq9RG5XaVKawMQ8o3vVyy8
          claim_id: c_JYETkz_hjHOiB6gvLUNamR
          source_id: s_zrdcQQwtO4W8f-VbTuIK9V
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瑞 之父／母。
          source:
            id: s_zrdcQQwtO4W8f-VbTuIK9V
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 244700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json
            external_identifier: CBDB:244700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpyCf5W5QfEUuJVcAPTPqZ
        status: active
        display_name: 王幹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2-76y8lezKDCKBvlorjl0a
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_snYzLNGdke6etTGK3ye7s6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zREqV3epc08VWvmNAgay0u
          claim_id: c_2-76y8lezKDCKBvlorjl0a
          source_id: s_zrdcQQwtO4W8f-VbTuIK9V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zrdcQQwtO4W8f-VbTuIK9V
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 244700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json
            external_identifier: CBDB:244700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NpyCf5W5QfEUuJVcAPTPqZ | 王幹 | accepted |
| other | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 244700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json)
