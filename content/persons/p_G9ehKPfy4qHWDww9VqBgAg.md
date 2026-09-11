---
schema: wang-person/v1
id: p_G9ehKPfy4qHWDww9VqBgAg
status: active
merged_into: null
display_name: 王嘉祥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NYgGkemeRYhCrZrXw1EP5u
        subject_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CSqL3Av7voBEPMAGXgSoQB
          claim_id: c_NYgGkemeRYhCrZrXw1EP5u
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: CBDB:205047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205047）
          source: &a1
            id: s_ftz4oMb7kDPD8mWuGX6mYA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉祥（CBDB 205047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205047&o=json
            external_identifier: CBDB:205047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zA45rNbVTtn2Lqwc9Kt6tg
        subject_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpbAJJk6ZLah2bhQE6X8Fv
          claim_id: c_zA45rNbVTtn2Lqwc9Kt6tg
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxwFMyAVaxRbsaD59MF8yc
        subject_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉祥（生于1528年），明人物。明清進士進士，籍贯莘縣，入仕進士。（中国历代人物传记资料库 CBDB 205047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mRHyxcj51W9d9JS36BOnV_
          claim_id: c_bxwFMyAVaxRbsaD59MF8yc
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: CBDB:205047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f-kXcjVpS97tAV5ZW2TCKW
        subject_person_id: p_pT7TCSRM8w3DVm9eJuF7tH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iu6TN03dce-v_HSMyLYJxu
          claim_id: c_f-kXcjVpS97tAV5ZW2TCKW
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pT7TCSRM8w3DVm9eJuF7tH
        status: active
        display_name: 王聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MCF1CBtaTo_2JqJgWRifBf
        subject_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QjERUgyPRhDEjuFy4w9wU4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iCzbx5hKyGsqU5QTBuF5Fg
          claim_id: c_MCF1CBtaTo_2JqJgWRifBf
          source_id: s_Elifw1YnlEoYg89dk-zn0_
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Elifw1YnlEoYg89dk-zn0_
            source_type: api_record
            title: 中国历代人物传记资料库：虞氏(王嘉祥妻)（CBDB 327599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327599&o=json
            external_identifier: CBDB:327599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QjERUgyPRhDEjuFy4w9wU4
        status: active
        display_name: 虞氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Mz8AAaUKpZ4lflghuVKwIu
        subject_person_id: p_kyk9i6qugNFcR16NKhmVa3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_olwtGVQDTrvCBsMexwCoZL
          claim_id: c_Mz8AAaUKpZ4lflghuVKwIu
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kyk9i6qugNFcR16NKhmVa3
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_z0qnoaexA2QA_L-bPPHv-G
        subject_person_id: p_QaMcRbPvFjSK5reVSLvNn3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XhbGRFw39miEhThsrj03YW
          claim_id: c_z0qnoaexA2QA_L-bPPHv-G
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QaMcRbPvFjSK5reVSLvNn3
        status: active
        display_name: 王緯
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉祥 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | 王嘉祥（生于1528年），明人物。明清進士進士，籍贯莘縣，入仕進士。（中国历代人物传记资料库 CBDB 205047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pT7TCSRM8w3DVm9eJuF7tH | 王聘 | accepted |
| spouses | p_QjERUgyPRhDEjuFy4w9wU4 | 虞氏 | accepted |
| ancestors | p_kyk9i6qugNFcR16NKhmVa3 | 王琮 | accepted |
| ancestors | p_QaMcRbPvFjSK5reVSLvNn3 | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉祥（CBDB 205047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205047&o=json)
- [中国历代人物传记资料库：虞氏(王嘉祥妻)（CBDB 327599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327599&o=json)
