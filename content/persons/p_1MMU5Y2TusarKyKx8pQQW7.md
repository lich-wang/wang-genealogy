---
schema: wang-person/v1
id: p_1MMU5Y2TusarKyKx8pQQW7
status: active
merged_into: null
display_name: 王宏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RQwwpSWj4a1CCgU1Tkygux
        subject_person_id: p_1MMU5Y2TusarKyKx8pQQW7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VH53j1zmyNEJ93uNSBDawi
          claim_id: c_RQwwpSWj4a1CCgU1Tkygux
          source_id: s_nwcfuqtAa6Ei76KeQ5TeJn
          stance: supports
          locator: CBDB:278164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278164）
          source: &a1
            id: s_nwcfuqtAa6Ei76KeQ5TeJn
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 278164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278164&o=json
            external_identifier: CBDB:278164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ncDbHGP5mEmSBjnsMQsdqX
        subject_person_id: p_1MMU5Y2TusarKyKx8pQQW7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。景泰五年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 278164）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sejbe4PeVfq2qcPsxdnUq5
          claim_id: c_ncDbHGP5mEmSBjnsMQsdqX
          source_id: s_nwcfuqtAa6Ei76KeQ5TeJn
          stance: supports
          locator: CBDB:278164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FzRw40b5tCAdapGCDrubzT
        subject_person_id: p_kdUPqDPveaddB8fucGD47J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1MMU5Y2TusarKyKx8pQQW7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7IRxd5RNYpbQAzTgI0fUi
          claim_id: c_FzRw40b5tCAdapGCDrubzT
          source_id: s_hBCVyzN5ezsMiUiMZtbvDD
          stance: supports
          locator: CBDB：兄弟 王寬（198482）之父／母 王子良
          quotation: null
          interpretation_note: 由兄弟关系推断：王宏 与 王寬 为同胞（CBDB 记「兄」），王寬 之父／母即 王宏 之父／母。
          source:
            id: s_hBCVyzN5ezsMiUiMZtbvDD
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 278164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278164&o=json
            external_identifier: CBDB:278164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kdUPqDPveaddB8fucGD47J
        status: active
        display_name: 王子良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EG1lU6LOunF0E9i23OB-20
        subject_person_id: p_1MMU5Y2TusarKyKx8pQQW7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_puZ3JJpqIu1TX7IXqkbaVu
          claim_id: c_EG1lU6LOunF0E9i23OB-20
          source_id: s_hBCVyzN5ezsMiUiMZtbvDD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198482 王寬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hBCVyzN5ezsMiUiMZtbvDD
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 278164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278164&o=json
            external_identifier: CBDB:278164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqkQ2QrQi1t9x1JULvJyMw
        status: active
        display_name: 王寬
        merged_into_person_id: null
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。景泰五年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 278164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kdUPqDPveaddB8fucGD47J | 王子良 | accepted |
| other | p_nqkQ2QrQi1t9x1JULvJyMw | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 278164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278164&o=json)
