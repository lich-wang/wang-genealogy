---
schema: wang-person/v1
id: p_Tx5e1nr85Ax8xBvbkFoMbF
status: active
merged_into: null
display_name: 王三錫
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_shnUgGtXDAyemLfL8fPQEC
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7BubSoW42DWcEwLTp5vQU
          claim_id: c_shnUgGtXDAyemLfL8fPQEC
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
          stance: supports
          locator: CBDB:202405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202405）
          source: &a1
            id: s_PJPGdtorD8D8P1TSyQnC4r
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 202405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202405&o=json
            external_identifier: CBDB:202405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3nZJaTU9n6fK2ebnoVC9KY
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJSKq7r9hfv79QuugSULuF
          claim_id: c_3nZJaTU9n6fK2ebnoVC9KY
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
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
        id: c_Fp68dYEvHnv4Pa7m37oMCB
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫（生于1505年），明人物。嘉靖八年進士，籍贯崑山，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 202405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jNeS4dYPgGSuxjW1cIWufW
          claim_id: c_Fp68dYEvHnv4Pa7m37oMCB
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
          stance: supports
          locator: CBDB:202405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LMTu3cz3HccTzgbmLYq5rq
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oCIxf9v3_KPf0YojiQG3GP
          claim_id: c_LMTu3cz3HccTzgbmLYq5rq
          source_id: s_nzk1LkMaJ3Y57RJ5HrP1cC
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nzk1LkMaJ3Y57RJ5HrP1cC
            source_type: api_record
            title: 中国历代人物传记资料库：王時暘（CBDB 287524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287524&o=json
            external_identifier: CBDB:287524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aR8KKb1bqRKuHqsjVWi2mZ
        subject_person_id: p_7DDdFFCB5CtuqJpi5fHXjA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pF3jUQQVCeH4Jfu0T9FALD
          claim_id: c_aR8KKb1bqRKuHqsjVWi2mZ
          source_id: s_SMYRcTQ4b2UCV7mMiFspqq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SMYRcTQ4b2UCV7mMiFspqq
            source_type: api_record
            title: 中国历代人物传记资料库：王恢（CBDB 287523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287523&o=json
            external_identifier: CBDB:287523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7DDdFFCB5CtuqJpi5fHXjA
        status: active
        display_name: 王恢
        merged_into_person_id: null
    - claim:
        id: c_EGwAUn2nG5Gr_pS0gN7b6A
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dwonzHSUQvK7273-WgF-IR
          claim_id: c_EGwAUn2nG5Gr_pS0gN7b6A
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U9Q7JHAntALJujZ1eiyVy8
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 287522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json
            external_identifier: CBDB:287522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EceEHftq1dAuWXPD2WaHe8
        status: active
        display_name: 王訓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_WGC2g82sPqxwjjgPYFKc7r
        subject_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u22_RxVIEoPx0YrBYnIBON
          claim_id: c_WGC2g82sPqxwjjgPYFKc7r
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHTK5I1LGrj_VghOQ-G0WU
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hsu6GW2N5ZuX4ke5idnMuG
        status: active
        display_name: 王三顧
        merged_into_person_id: null
    - claim:
        id: c_z5Qyfzr9fXBA4d3AXl_a22
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YoVgtAqqhohknoyg7MCgA2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iTo-cZhJsc9quw1NZnXg2
          claim_id: c_z5Qyfzr9fXBA4d3AXl_a22
          source_id: s_e9NVEQdV12nRlSgvqwyvoQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e9NVEQdV12nRlSgvqwyvoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王三宥（CBDB 287532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json
            external_identifier: CBDB:287532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YoVgtAqqhohknoyg7MCgA2
        status: active
        display_name: 王三宥
        merged_into_person_id: null
    - claim:
        id: c_chya9Ul-PJdSmVy92SUQ0T
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dd6GmTW3dYfUwhtHVftk8d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5lR-Zpqz_WdJmDl29IiQaW
          claim_id: c_chya9Ul-PJdSmVy92SUQ0T
          source_id: s_IfgZgNcYG0qp0yAdsxZERG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IfgZgNcYG0qp0yAdsxZERG
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 287531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287531&o=json
            external_identifier: CBDB:287531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dd6GmTW3dYfUwhtHVftk8d
        status: active
        display_name: 王三聘
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
        id: p_ig2JoQCfVj1gy83tSkXmVm
        status: active
        display_name: 王任用
        merged_into_person_id: null
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | 王三錫（生于1505年），明人物。嘉靖八年進士，籍贯崑山，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 202405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| ancestors | p_7DDdFFCB5CtuqJpi5fHXjA | 王恢 | accepted |
| ancestors | p_EceEHftq1dAuWXPD2WaHe8 | 王訓 | accepted |
| other | p_Hsu6GW2N5ZuX4ke5idnMuG | 王三顧 | accepted |
| other | p_YoVgtAqqhohknoyg7MCgA2 | 王三宥 | accepted |
| other | p_dd6GmTW3dYfUwhtHVftk8d | 王三聘 | accepted |
| other | p_ig2JoQCfVj1gy83tSkXmVm | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恢（CBDB 287523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287523&o=json)
- [中国历代人物传记资料库：王任用（CBDB 287527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json)
- [中国历代人物传记资料库：王三顧（CBDB 287530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 287531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287531&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 202405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202405&o=json)
- [中国历代人物传记资料库：王三宥（CBDB 287532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json)
- [中国历代人物传记资料库：王時暘（CBDB 287524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287524&o=json)
- [中国历代人物传记资料库：王訓（CBDB 287522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json)
