---
schema: wang-person/v1
id: p_YS93bFMg2tXSWdgNRCjryF
status: active
merged_into: null
display_name: 王宗彝
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qkrtodkqq6DUDn12BfdAKk
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tvpqBXYF9GQQMtmhHbjjtR
          claim_id: c_Qkrtodkqq6DUDn12BfdAKk
          source_id: s_GD5TWfkGPtg4LD6DAKTBJh
          stance: supports
          locator: CBDB:126562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126562）
          source: &a1
            id: s_GD5TWfkGPtg4LD6DAKTBJh
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彝（CBDB 126562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126562&o=json
            external_identifier: CBDB:126562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TVqrUjaBaYTEEpVD13DAwd
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彝，明人物。籍贯束鹿，入仕進士，曾任禮部尚書。（中国历代人物传记资料库 CBDB 126562）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hiNVyV7swK1hXoa96A-daM
          claim_id: c_TVqrUjaBaYTEEpVD13DAwd
          source_id: s_GD5TWfkGPtg4LD6DAKTBJh
          stance: supports
          locator: CBDB:126562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m_w3FdsiRAEqkwe4-WT2Dl
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdYFQU2E8Q0eRe-8emoLVi
          claim_id: c_m_w3FdsiRAEqkwe4-WT2Dl
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qf5hsZqv3ZBiyVrRkjb7CZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 225993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json
            external_identifier: CBDB:225993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eQTph1AyQLCRGPwJS5yprV
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0jTvMfz63RMN9iuD1LNetf
        subject_person_id: p_DnHsbgmu4N2LK2hm5zmcYp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0Oujf5pSHznWjZ2WrIO93
          claim_id: c_0jTvMfz63RMN9iuD1LNetf
          source_id: s_pKcvMqkb2QEkTk8fkQT313
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pKcvMqkb2QEkTk8fkQT313
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 225980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225980&o=json
            external_identifier: CBDB:225980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DnHsbgmu4N2LK2hm5zmcYp
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_R0MK7-iL2PMTzQ59R_NwtI
        subject_person_id: p_tXSdbcCnA8nFshDNUY5F3D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJuc9GfuS3cXK8gTBqEEa6
          claim_id: c_R0MK7-iL2PMTzQ59R_NwtI
          source_id: s_am1Nm27PEZQtFDQP3pnqa7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_am1Nm27PEZQtFDQP3pnqa7
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 225969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225969&o=json
            external_identifier: CBDB:225969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tXSdbcCnA8nFshDNUY5F3D
        status: active
        display_name: 王璧
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hyE2y0987hR-I64hDncp44
        subject_person_id: p_7qPx7PU53ZthQYtAvBB1th
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdEZbXleFilRoHESE1urxf
          claim_id: c_hyE2y0987hR-I64hDncp44
          source_id: s_d6piwZLQQP0Trp9_zA84ZH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_d6piwZLQQP0Trp9_zA84ZH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗弼（CBDB 226071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226071&o=json
            external_identifier: CBDB:226071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qPx7PU53ZthQYtAvBB1th
        status: active
        display_name: 王宗弼
        merged_into_person_id: null
    - claim:
        id: c_wD_sa-iop6KoXB838tVSCg
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jdAcgNfnQPHLzzbzCX6cg5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8vLwgOV8Ofc5YpNVYynhIu
          claim_id: c_wD_sa-iop6KoXB838tVSCg
          source_id: s_5h3K5dri73nGQA1lgrsfVw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5h3K5dri73nGQA1lgrsfVw
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 226049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226049&o=json
            external_identifier: CBDB:226049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jdAcgNfnQPHLzzbzCX6cg5
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_Ex3K77KdF1wokSNmsWMvWP
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mBaNKAhkGBmeaH659gnUQM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5_Xx_j59RtGv__DKoPzNGd
          claim_id: c_Ex3K77KdF1wokSNmsWMvWP
          source_id: s_oVH3NbJu7RafPxUw4w4MtC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oVH3NbJu7RafPxUw4w4MtC
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 226038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json
            external_identifier: CBDB:226038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mBaNKAhkGBmeaH659gnUQM
        status: active
        display_name: 王元
        merged_into_person_id: null
    - claim:
        id: c_f9Hh-uI_DBLmgq8fOm6aIa
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ursTJm9AdEpR7MB7U81vxY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zimMEFsa-9sO4kJRsprEd8
          claim_id: c_f9Hh-uI_DBLmgq8fOm6aIa
          source_id: s_vXOoAyt6GQbNfpMsERUwKq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vXOoAyt6GQbNfpMsERUwKq
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 226060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226060&o=json
            external_identifier: CBDB:226060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ursTJm9AdEpR7MB7U81vxY
        status: active
        display_name: 王宸
        merged_into_person_id: null
    - claim:
        id: c_gzGhaDnQCm1ba0fqZl0xTb
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yK17GKCFC21J7svXAAWmxy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pv0YQzZqwT_JmnU9kKCNoB
          claim_id: c_gzGhaDnQCm1ba0fqZl0xTb
          source_id: s_Rty2B7ZAupVszQXyVtYQ4v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Rty2B7ZAupVszQXyVtYQ4v
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 226027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226027&o=json
            external_identifier: CBDB:226027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yK17GKCFC21J7svXAAWmxy
        status: active
        display_name: 王敬
        merged_into_person_id: null
---

# 王宗彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗彝 | accepted |
| bio.summary | 王宗彝，明人物。籍贯束鹿，入仕進士，曾任禮部尚書。（中国历代人物传记资料库 CBDB 126562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eQTph1AyQLCRGPwJS5yprV | 王文 | accepted |
| ancestors | p_DnHsbgmu4N2LK2hm5zmcYp | 王緒 | accepted |
| ancestors | p_tXSdbcCnA8nFshDNUY5F3D | 王璧 | accepted |
| other | p_7qPx7PU53ZthQYtAvBB1th | 王宗弼 | accepted |
| other | p_jdAcgNfnQPHLzzbzCX6cg5 | 王中 | accepted |
| other | p_mBaNKAhkGBmeaH659gnUQM | 王元 | accepted |
| other | p_ursTJm9AdEpR7MB7U81vxY | 王宸 | accepted |
| other | p_yK17GKCFC21J7svXAAWmxy | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 225969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225969&o=json)
- [中国历代人物传记资料库：王宸（CBDB 226060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226060&o=json)
- [中国历代人物传记资料库：王敬（CBDB 226027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226027&o=json)
- [中国历代人物传记资料库：王文（CBDB 225993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json)
- [中国历代人物传记资料库：王緒（CBDB 225980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225980&o=json)
- [中国历代人物传记资料库：王元（CBDB 226038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json)
- [中国历代人物传记资料库：王中（CBDB 226049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226049&o=json)
- [中国历代人物传记资料库：王宗弼（CBDB 226071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226071&o=json)
- [中国历代人物传记资料库：王宗彝（CBDB 126562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126562&o=json)
