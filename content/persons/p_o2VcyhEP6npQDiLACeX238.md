---
schema: wang-person/v1
id: p_o2VcyhEP6npQDiLACeX238
status: active
merged_into: null
display_name: 王琥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cETQ4CpoPqx4SVxGHuoBSt
        subject_person_id: p_o2VcyhEP6npQDiLACeX238
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xa9sMxy8Q2AH2H4XeT1Fa5
          claim_id: c_cETQ4CpoPqx4SVxGHuoBSt
          source_id: s_vjf6322v56GB5BfrP3w8B2
          stance: supports
          locator: CBDB:260376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260376）
          source: &a1
            id: s_vjf6322v56GB5BfrP3w8B2
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 260376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json
            external_identifier: CBDB:260376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cnAWA5XN8uFR8v89v8mMZD
        subject_person_id: p_o2VcyhEP6npQDiLACeX238
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥，明人物。成化二十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 260376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6B3HbdcB3m2P8sHS4fDOaH
          claim_id: c_cnAWA5XN8uFR8v89v8mMZD
          source_id: s_vjf6322v56GB5BfrP3w8B2
          stance: supports
          locator: CBDB:260376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fy9agG_dTGR3TdX11CI0Yf
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o2VcyhEP6npQDiLACeX238
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hyi_VZMLdLWy3eclf461KO
          claim_id: c_Fy9agG_dTGR3TdX11CI0Yf
          source_id: s_-IamA25zLGiSDmo6mqXsyl
          stance: supports
          locator: CBDB：兄弟 王珀（126601）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王琥 与 王珀 为同胞（CBDB 记「弟」），王珀 之父／母即 王琥 之父／母。
          source:
            id: s_-IamA25zLGiSDmo6mqXsyl
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 260376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json
            external_identifier: CBDB:260376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MKEkt3Lg84W4AyK4JA3PFs
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZzA_j3xllJH-mr3aHz-pog
        subject_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o2VcyhEP6npQDiLACeX238
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztOgNbd_i_mXI2p1Zx-6xa
          claim_id: c_ZzA_j3xllJH-mr3aHz-pog
          source_id: s_-IamA25zLGiSDmo6mqXsyl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126601 王珀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-IamA25zLGiSDmo6mqXsyl
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 260376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json
            external_identifier: CBDB:260376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        status: active
        display_name: 王珀
        merged_into_person_id: null
---

# 王琥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琥 | accepted |
| bio.summary | 王琥，明人物。成化二十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 260376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MKEkt3Lg84W4AyK4JA3PFs | 王鎮 | accepted |
| other | p_Qvi4bpPzBmsqf5Y7oUFpd5 | 王珀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琥（CBDB 260376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json)
