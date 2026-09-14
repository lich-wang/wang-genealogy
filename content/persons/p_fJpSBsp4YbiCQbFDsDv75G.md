---
schema: wang-person/v1
id: p_fJpSBsp4YbiCQbFDsDv75G
status: active
merged_into: null
display_name: 王繹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vXo8Q1K7RTmWmhXV4DycfN
        subject_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cxxp3HoCUAzcXELM3TxDxL
          claim_id: c_vXo8Q1K7RTmWmhXV4DycfN
          source_id: s_M9uKDS95BBw1GMGrRU1Lyp
          stance: supports
          locator: CBDB:259214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259214）
          source: &a1
            id: s_M9uKDS95BBw1GMGrRU1Lyp
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json
            external_identifier: CBDB:259214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BtydsNEbkQjGiP4ivEFQo5
        subject_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Iw1h7uSu_XpjlAObAMLJtj
          claim_id: c_BtydsNEbkQjGiP4ivEFQo5
          source_id: s_M9uKDS95BBw1GMGrRU1Lyp
          stance: supports
          locator: CBDB:259214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WBi4bEOF3gP6o3lIGsFDcP
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P11uOGEzku5B7gtUN_Dw-A
          claim_id: c_WBi4bEOF3gP6o3lIGsFDcP
          source_id: s_fymQ6DewAXqIHt7Rx0qF41
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王繹 之父／母。
          source:
            id: s_fymQ6DewAXqIHt7Rx0qF41
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json
            external_identifier: CBDB:259214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o8zvgJXd9bgohC9oUj28Xv
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IUfOMKi4UdgqX9ftWsOFUp
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgH71O5HEODHhbCHXL6HVE
          claim_id: c_IUfOMKi4UdgqX9ftWsOFUp
          source_id: s_fymQ6DewAXqIHt7Rx0qF41
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fymQ6DewAXqIHt7Rx0qF41
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json
            external_identifier: CBDB:259214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o8zvgJXd9bgohC9oUj28Xv | 王敏 | accepted |
| other | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 259214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json)
