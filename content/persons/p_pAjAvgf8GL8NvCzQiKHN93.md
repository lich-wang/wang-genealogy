---
schema: wang-person/v1
id: p_pAjAvgf8GL8NvCzQiKHN93
status: active
merged_into: null
display_name: 王國某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HgU2CL5V2HY6dk3fysYAAu
        subject_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xPrxmd5HSiTMmZfVepA14T
          claim_id: c_HgU2CL5V2HY6dk3fysYAAu
          source_id: s_WVKQF4kXKLmeLW3Dvgpbj6
          stance: supports
          locator: CBDB:300447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300447）
          source: &a1
            id: s_WVKQF4kXKLmeLW3Dvgpbj6
            source_type: api_record
            title: 中国历代人物传记资料库：王國某（CBDB 300447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json
            external_identifier: CBDB:300447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4KcrCbLVvpUzhoX8zSqqpg
        subject_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國某，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300447）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nSGHS9ibgyprEihDwoFFb_
          claim_id: c_4KcrCbLVvpUzhoX8zSqqpg
          source_id: s_WVKQF4kXKLmeLW3Dvgpbj6
          stance: supports
          locator: CBDB:300447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vsUjrZQhAFtZrLMD9DMaP4
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eqig8m1DIuwOuD7P00HeXO
          claim_id: c_vsUjrZQhAFtZrLMD9DMaP4
          source_id: s_QTK-yV3EwZyjyrbM-5n18h
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國某 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國某 之父／母。
          source:
            id: s_QTK-yV3EwZyjyrbM-5n18h
            source_type: api_record
            title: 中国历代人物传记资料库：王國某（CBDB 300447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json
            external_identifier: CBDB:300447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nfDQpFcmyR41HhRtmj92PA
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_olPdX19llEvqz-kw9Fhc0T
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUG3J3Q9-_4UD66T3wp7or
          claim_id: c_olPdX19llEvqz-kw9Fhc0T
          source_id: s_QTK-yV3EwZyjyrbM-5n18h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QTK-yV3EwZyjyrbM-5n18h
            source_type: api_record
            title: 中国历代人物传记资料库：王國某（CBDB 300447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json
            external_identifier: CBDB:300447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
---

# 王國某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國某 | accepted |
| bio.summary | 王國某，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nfDQpFcmyR41HhRtmj92PA | 王愷 | accepted |
| other | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國某（CBDB 300447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json)
