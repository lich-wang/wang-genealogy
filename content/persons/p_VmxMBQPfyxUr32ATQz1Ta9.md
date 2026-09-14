---
schema: wang-person/v1
id: p_VmxMBQPfyxUr32ATQz1Ta9
status: active
merged_into: null
display_name: 王時暘
cbdb_id: 287524
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RePCgRvrd59Kq7BrKQXKe
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時暘，明人物。嘉靖八年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 287524）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_am5MuQ0U72kajI51qPP-Co
          claim_id: c_2RePCgRvrd59Kq7BrKQXKe
          source_id: s_nzk1LkMaJ3Y57RJ5HrP1cC
          stance: supports
          locator: CBDB:287524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Md7K8upK8P2hNygU86TwCA
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時暘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HRdKUi4omwQseRzWEEqExR
          claim_id: c_Md7K8upK8P2hNygU86TwCA
          source_id: s_nzk1LkMaJ3Y57RJ5HrP1cC
          stance: supports
          locator: CBDB:287524
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F7mLk6-swGWvZYZvBFxF-f
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kt0ccZx9ELYO5K2RA7Yp18
          claim_id: c_F7mLk6-swGWvZYZvBFxF-f
          source_id: s_nzk1LkMaJ3Y57RJ5HrP1cC
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
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
        id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        status: active
        display_name: 王三接
        merged_into_person_id: null
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
          source: *a2
      object_person:
        id: p_Tx5e1nr85Ax8xBvbkFoMbF
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_PZEzvQCsfJGXGqCLOJQtef
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DLqmVJjIGCh_bxTxniDuDx
          claim_id: c_PZEzvQCsfJGXGqCLOJQtef
          source_id: s_vNrnECc7km1ko-slX1INls
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三重 之父／母。
          source:
            id: s_vNrnECc7km1ko-slX1INls
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 297446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json
            external_identifier: CBDB:297446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F4mEENCe5fqMjF9B3i9Jc5
        status: active
        display_name: 王三重
        merged_into_person_id: null
    - claim:
        id: c_k_aMiro9jwnS9ELnHaNk8d
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PLQL113GH7UbXIG2Ru4zCM
          claim_id: c_k_aMiro9jwnS9ELnHaNk8d
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三顧 之父／母。
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
        id: c_kZY90bG5uDqjZ8RLlPXuGt
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YoVgtAqqhohknoyg7MCgA2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8xBleolWheQr8te5cC4ve
          claim_id: c_kZY90bG5uDqjZ8RLlPXuGt
          source_id: s_e9NVEQdV12nRlSgvqwyvoQ
          stance: supports
          locator: CBDB：兄弟 王三錫（202405）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三宥 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三宥 之父／母。
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
        id: c_umVtBJgBPMku7shzhOL_01
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dd6GmTW3dYfUwhtHVftk8d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BVIFSTFqYEiFQG1Z4O_1T
          claim_id: c_umVtBJgBPMku7shzhOL_01
          source_id: s_IfgZgNcYG0qp0yAdsxZERG
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三聘 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三聘 之父／母。
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
        id: p_ig2JoQCfVj1gy83tSkXmVm
        status: active
        display_name: 王任用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時暘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時暘，明人物。嘉靖八年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 287524） | accepted |
| name.primary | 王時暘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GQ5Yfy9Q67yZ3hJuaQcGg3 | 王三接 | accepted |
| children | p_Tx5e1nr85Ax8xBvbkFoMbF | 王三錫 | accepted |
| children | p_F4mEENCe5fqMjF9B3i9Jc5 | 王三重 | accepted |
| children | p_Hsu6GW2N5ZuX4ke5idnMuG | 王三顧 | accepted |
| children | p_YoVgtAqqhohknoyg7MCgA2 | 王三宥 | accepted |
| children | p_dd6GmTW3dYfUwhtHVftk8d | 王三聘 | accepted |
| children | p_ig2JoQCfVj1gy83tSkXmVm | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任用（CBDB 287527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287527&o=json)
- [中国历代人物传记资料库：王三顧（CBDB 287530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 287531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287531&o=json)
- [中国历代人物传记资料库：王三宥（CBDB 287532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json)
- [中国历代人物传记资料库：王三重（CBDB 297446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json)
- [中国历代人物传记资料库：王時暘（CBDB 287524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287524&o=json)
