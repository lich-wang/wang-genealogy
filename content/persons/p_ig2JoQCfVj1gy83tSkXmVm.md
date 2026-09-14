---
schema: wang-person/v1
id: p_ig2JoQCfVj1gy83tSkXmVm
status: active
merged_into: null
display_name: 王任用
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1XYQPaCd8NFNgR3Po7P46
        subject_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_diLHsNeqbzmJJnMnSpvs4m
          claim_id: c_S1XYQPaCd8NFNgR3Po7P46
          source_id: s_gGKxZ2rr7NAscZgm6hxion
          stance: supports
          locator: CBDB:287527
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287527）
          source: &a1
            id: s_gGKxZ2rr7NAscZgm6hxion
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 287527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json
            external_identifier: CBDB:287527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEboXJe6Cfq8PnKccPEoVF
        subject_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任用，明人物。嘉靖八年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s2DevycsTC_zYZ8_zaoAvK
          claim_id: c_QEboXJe6Cfq8PnKccPEoVF
          source_id: s_gGKxZ2rr7NAscZgm6hxion
          stance: supports
          locator: CBDB:287527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6BWLyIEbqIgIDlZNJdQr1j
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CuB2_h49KP8pCAQKb9NCe
          claim_id: c_6BWLyIEbqIgIDlZNJdQr1j
          source_id: s_YqLIpDIK5YqWhH90iKi3uD
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王任用 与 王三接 为同胞（CBDB 记「弟」），王三接 之父／母即 王任用 之父／母。
          source:
            id: s_YqLIpDIK5YqWhH90iKi3uD
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 287527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json
            external_identifier: CBDB:287527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_89IMeMsWx47s8EHuwKB4vJ
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bp6hIEyjfuvde29yRGEy-j
          claim_id: c_89IMeMsWx47s8EHuwKB4vJ
          source_id: s_YqLIpDIK5YqWhH90iKi3uD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YqLIpDIK5YqWhH90iKi3uD
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 287527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json
            external_identifier: CBDB:287527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        status: active
        display_name: 王三接
        merged_into_person_id: null
    - claim:
        id: c_J115UfgUaDhpfqxUmBSecL
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ig2JoQCfVj1gy83tSkXmVm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDouEBp51vOPIrMkDkiNLq
          claim_id: c_J115UfgUaDhpfqxUmBSecL
          source_id: s_YqLIpDIK5YqWhH90iKi3uD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YqLIpDIK5YqWhH90iKi3uD
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 287527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json
            external_identifier: CBDB:287527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tx5e1nr85Ax8xBvbkFoMbF
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王任用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任用 | accepted |
| bio.summary | 王任用，明人物。嘉靖八年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287527） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| other | p_GQ5Yfy9Q67yZ3hJuaQcGg3 | 王三接 | accepted |
| other | p_Tx5e1nr85Ax8xBvbkFoMbF | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任用（CBDB 287527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json)
