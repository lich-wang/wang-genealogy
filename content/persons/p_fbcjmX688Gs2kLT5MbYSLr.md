---
schema: wang-person/v1
id: p_fbcjmX688Gs2kLT5MbYSLr
status: active
merged_into: null
display_name: 王伯堅
cbdb_id: 273594
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j6mp8FeCxx5JJ3w5bK761b
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堅，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uI26fObyEW7cgkV2BMjFQu
          claim_id: c_j6mp8FeCxx5JJ3w5bK761b
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: CBDB:273594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5GmKVCG3pEU9z49RRsPfCX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堅（CBDB 273594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json
            external_identifier: CBDB:273594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKL66rGitADgJ5XRsEtPUX
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GKFLBuPVZaaBLHiYvs2Wfg
          claim_id: c_HKL66rGitADgJ5XRsEtPUX
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: CBDB:273594
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZtcbwnNIx-GqH_gU-7tmTd
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiyRiNY5bekK928s7e81KO
          claim_id: c_ZtcbwnNIx-GqH_gU-7tmTd
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5GmKVCG3pEU9z49RRsPfCX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堅（CBDB 273594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json
            external_identifier: CBDB:273594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YZgMMK2h5d44s5CGoUpM7o
        status: active
        display_name: 王盧
        merged_into_person_id: null
    - claim:
        id: c_NZAhwDV1VIVSGZ3UbNcm-0
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9trnTxMJH6XbK8DNVRiQvo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NGrAe2iBlHiMyAxHf3gKF
          claim_id: c_NZAhwDV1VIVSGZ3UbNcm-0
          source_id: s_TdewXk6R55_5XlGFWPCqJ-
          stance: supports
          locator: CBDB：兄弟 王盧（198449）之父／母 王伯堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏈 与 王盧 为同胞（CBDB 记「兄」），王盧 之父／母即 王鏈 之父／母。
          source:
            id: s_TdewXk6R55_5XlGFWPCqJ-
            source_type: api_record
            title: 中国历代人物传记资料库：王鏈（CBDB 273673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json
            external_identifier: CBDB:273673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9trnTxMJH6XbK8DNVRiQvo
        status: active
        display_name: 王鏈
        merged_into_person_id: null
    - claim:
        id: c_GYnb01fL0mXfuBfEZmxKUt
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmttuErUT2T1qBa2PZf2xq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBkJFFSu7WAlFBFKSCITaj
          claim_id: c_GYnb01fL0mXfuBfEZmxKUt
          source_id: s_LMM8U4BqyR6_JTu0i_dsPb
          stance: supports
          locator: CBDB：兄弟 王盧（198449）之父／母 王伯堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王錞 与 王盧 为同胞（CBDB 记「兄」），王盧 之父／母即 王錞 之父／母。
          source:
            id: s_LMM8U4BqyR6_JTu0i_dsPb
            source_type: api_record
            title: 中国历代人物传记资料库：王錞（CBDB 273662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273662&o=json
            external_identifier: CBDB:273662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MmttuErUT2T1qBa2PZf2xq
        status: active
        display_name: 王錞
        merged_into_person_id: null
    - claim:
        id: c_yNBlCJZKEIAxlz4LfPNYyn
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ScLXmLf2o1TeTAygM8y8wC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GTLl5tSV1NerfwqGp6QIpI
          claim_id: c_yNBlCJZKEIAxlz4LfPNYyn
          source_id: s_anlu_u9C2o3QoV72LyrmO9
          stance: supports
          locator: CBDB：兄弟 王盧（198449）之父／母 王伯堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王康 与 王盧 为同胞（CBDB 记「弟」），王盧 之父／母即 王康 之父／母。
          source:
            id: s_anlu_u9C2o3QoV72LyrmO9
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 273640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273640&o=json
            external_identifier: CBDB:273640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ScLXmLf2o1TeTAygM8y8wC
        status: active
        display_name: 王康
        merged_into_person_id: null
    - claim:
        id: c_RywlcEm7V5JnHY60nbU1-_
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VrERyQJSNSaviohGQW1ath
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gyIHnG5bnbpFO6WP7k6Xfk
          claim_id: c_RywlcEm7V5JnHY60nbU1-_
          source_id: s_PGIx2bFwM_LJb-H06e7TfS
          stance: supports
          locator: CBDB：兄弟 王盧（198449）之父／母 王伯堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王錦 与 王盧 为同胞（CBDB 记「兄」），王盧 之父／母即 王錦 之父／母。
          source:
            id: s_PGIx2bFwM_LJb-H06e7TfS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 273651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273651&o=json
            external_identifier: CBDB:273651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VrERyQJSNSaviohGQW1ath
        status: active
        display_name: 王錦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯堅，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273594） | accepted |
| name.primary | 王伯堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YZgMMK2h5d44s5CGoUpM7o | 王盧 | accepted |
| children | p_9trnTxMJH6XbK8DNVRiQvo | 王鏈 | accepted |
| children | p_MmttuErUT2T1qBa2PZf2xq | 王錞 | accepted |
| children | p_ScLXmLf2o1TeTAygM8y8wC | 王康 | accepted |
| children | p_VrERyQJSNSaviohGQW1ath | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯堅（CBDB 273594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json)
- [中国历代人物传记资料库：王錞（CBDB 273662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273662&o=json)
- [中国历代人物传记资料库：王錦（CBDB 273651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273651&o=json)
- [中国历代人物传记资料库：王康（CBDB 273640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273640&o=json)
- [中国历代人物传记资料库：王鏈（CBDB 273673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json)
