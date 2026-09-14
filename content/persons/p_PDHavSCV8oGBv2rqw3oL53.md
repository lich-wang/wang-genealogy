---
schema: wang-person/v1
id: p_PDHavSCV8oGBv2rqw3oL53
status: active
merged_into: null
display_name: 王士點
cbdb_id: 28792
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dZQ73hhEQsv1AKL5XM18sL
        subject_person_id: p_PDHavSCV8oGBv2rqw3oL53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士點，元人物。籍贯須城，曾任翰林國史院修撰、祕書監管勾、侍儀司侍儀舍人。（中国历代人物传记资料库 CBDB 28792）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QAaVD9V58cytSl7J_gkqJb
          claim_id: c_dZQ73hhEQsv1AKL5XM18sL
          source_id: s_fQg7sYn3wcrCVzr5GHzvu6
          stance: supports
          locator: CBDB:28792
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fQg7sYn3wcrCVzr5GHzvu6
            source_type: api_record
            title: 中国历代人物传记资料库：王士點（CBDB 28792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28792&o=json
            external_identifier: CBDB:28792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_igi2sg1TgGa7M7G85Ta9mX
        subject_person_id: p_PDHavSCV8oGBv2rqw3oL53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士點
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xyVR3mJ9dwQcAq3icQEa2q
          claim_id: c_igi2sg1TgGa7M7G85Ta9mX
          source_id: s_fQg7sYn3wcrCVzr5GHzvu6
          stance: supports
          locator: CBDB:28792
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ak48wYLcTkoitEcHUN26EN
        subject_person_id: p_aBrfrjfaJYaR7SroBPRHWS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PDHavSCV8oGBv2rqw3oL53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_IUqglum0NACR0VM-LdssQK
          claim_id: c_ak48wYLcTkoitEcHUN26EN
          source_id: s_kUjWWDxns--IrqS2MYUD92
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28785）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kUjWWDxns--IrqS2MYUD92
            source_type: api_record
            title: 中国历代人物传记资料库：王士點（CBDB 28792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28792&o=json
            external_identifier: CBDB:28792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aBrfrjfaJYaR7SroBPRHWS
        status: active
        display_name: 王構
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y1dh3pt4oYJN_Ubc3nfMNx
        subject_person_id: p_PDHavSCV8oGBv2rqw3oL53
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cMEckG1hW4JyM3KUwMnEsE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDtkHaUSbA02abWrPr4bVG
          claim_id: c_y1dh3pt4oYJN_Ubc3nfMNx
          source_id: s_kUjWWDxns--IrqS2MYUD92
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 28791 王士熙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kUjWWDxns--IrqS2MYUD92
            source_type: api_record
            title: 中国历代人物传记资料库：王士點（CBDB 28792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28792&o=json
            external_identifier: CBDB:28792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cMEckG1hW4JyM3KUwMnEsE
        status: active
        display_name: 王士熙
        merged_into_person_id: null
---

# 王士點

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士點，元人物。籍贯須城，曾任翰林國史院修撰、祕書監管勾、侍儀司侍儀舍人。（中国历代人物传记资料库 CBDB 28792） | accepted |
| name.primary | 王士點 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aBrfrjfaJYaR7SroBPRHWS | 王構 | accepted |
| other | p_cMEckG1hW4JyM3KUwMnEsE | 王士熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士點（CBDB 28792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28792&o=json)
