---
schema: wang-person/v1
id: p_QnpAMHvuyLgE52HMUUdB1Q
status: active
merged_into: null
display_name: 王好義
cbdb_id: 338030
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_52yEWmKKwcakrRPw9gXTGj
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好義，明人物。隆慶五年進士，籍贯合肥，曾任壽官。（中国历代人物传记资料库 CBDB 338030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Cn3nmPcVgCShW6ZbFwDPd7
          claim_id: c_52yEWmKKwcakrRPw9gXTGj
          source_id: s_x8PPxyuPd6JN5n7t22Gjrm
          stance: supports
          locator: CBDB:338030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x8PPxyuPd6JN5n7t22Gjrm
            source_type: api_record
            title: 中国历代人物传记资料库：王好義（CBDB 338030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338030&o=json
            external_identifier: CBDB:338030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_skpTk3sD8mpCAaFwYUoNK4
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L8CXPt6JhVUPDdMihhWXNU
          claim_id: c_skpTk3sD8mpCAaFwYUoNK4
          source_id: s_x8PPxyuPd6JN5n7t22Gjrm
          stance: supports
          locator: CBDB:338030
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F5E816KORK9gEQVG5iunM8
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IaC7jgEeClKDl_h9PMAVlM
          claim_id: c_F5E816KORK9gEQVG5iunM8
          source_id: s_x8PPxyuPd6JN5n7t22Gjrm
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x8PPxyuPd6JN5n7t22Gjrm
            source_type: api_record
            title: 中国历代人物传记资料库：王好義（CBDB 338030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338030&o=json
            external_identifier: CBDB:338030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aAFSBPvreHZtKBpYbVoLGC
        status: active
        display_name: 王來賢
        merged_into_person_id: null
    - claim:
        id: c_Am_HYXvhhRwShS3vFBVJbR
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3s7v73vFKQD8q1YUeZswcD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQAF6V4Htin7NV2wWLYfmP
          claim_id: c_Am_HYXvhhRwShS3vFBVJbR
          source_id: s_9zlFTu3ACu5pJm3hE6AAts
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賀 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來賀 之父／母。
          source:
            id: s_9zlFTu3ACu5pJm3hE6AAts
            source_type: api_record
            title: 中国历代人物传记资料库：王來賀（CBDB 338034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json
            external_identifier: CBDB:338034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3s7v73vFKQD8q1YUeZswcD
        status: active
        display_name: 王來賀
        merged_into_person_id: null
    - claim:
        id: c_mROWV8I45CI_iEPEKgdc7U
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FNfrSn5qku67Ca9gH7ugC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWFfteOCod_6-5P6Fv8Cv3
          claim_id: c_mROWV8I45CI_iEPEKgdc7U
          source_id: s_6_KMxrMzqzxFMYtgtCwSj4
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來旬 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來旬 之父／母。
          source:
            id: s_6_KMxrMzqzxFMYtgtCwSj4
            source_type: api_record
            title: 中国历代人物传记资料库：王來旬（CBDB 338038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338038&o=json
            external_identifier: CBDB:338038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FNfrSn5qku67Ca9gH7ugC2
        status: active
        display_name: 王來旬
        merged_into_person_id: null
    - claim:
        id: c_VYknxEbVtLZVDfq9Be6IMO
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KiFYN7jscB6DHipu7TDA6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m_BGg5Ey2qk_VUaVZQoBTH
          claim_id: c_VYknxEbVtLZVDfq9Be6IMO
          source_id: s_o4KhR2mUd4Wlmdh4Cx1sHj
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賓 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來賓 之父／母。
          source:
            id: s_o4KhR2mUd4Wlmdh4Cx1sHj
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 338035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json
            external_identifier: CBDB:338035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KiFYN7jscB6DHipu7TDA6c
        status: active
        display_name: 王來賓
        merged_into_person_id: null
    - claim:
        id: c_U8sIBblQpDwYwnjRbDzbjQ
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3dXWg5Fi1YJDcKXZ4z291
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tWmhe3trHqzfGwwRE0auwj
          claim_id: c_U8sIBblQpDwYwnjRbDzbjQ
          source_id: s_hDDVyJYB-sWciWNLHWsqso
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來問 之父／母。
          source:
            id: s_hDDVyJYB-sWciWNLHWsqso
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 338037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338037&o=json
            external_identifier: CBDB:338037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3dXWg5Fi1YJDcKXZ4z291
        status: active
        display_name: 王來問
        merged_into_person_id: null
    - claim:
        id: c_Y4lzRUSI44Fi6dLX4CuIcw
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdZCg7EDcX7vRWBHuSzpwj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D2qQQWQTNZ1hF8ZpCT8N-R
          claim_id: c_Y4lzRUSI44Fi6dLX4CuIcw
          source_id: s_EiMqELbXnn9hpphoWkbg4R
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來聘 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來聘 之父／母。
          source:
            id: s_EiMqELbXnn9hpphoWkbg4R
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 338036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338036&o=json
            external_identifier: CBDB:338036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdZCg7EDcX7vRWBHuSzpwj
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王好義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王好義，明人物。隆慶五年進士，籍贯合肥，曾任壽官。（中国历代人物传记资料库 CBDB 338030） | accepted |
| name.primary | 王好義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aAFSBPvreHZtKBpYbVoLGC | 王來賢 | accepted |
| children | p_3s7v73vFKQD8q1YUeZswcD | 王來賀 | accepted |
| children | p_FNfrSn5qku67Ca9gH7ugC2 | 王來旬 | accepted |
| children | p_KiFYN7jscB6DHipu7TDA6c | 王來賓 | accepted |
| children | p_q3dXWg5Fi1YJDcKXZ4z291 | 王來問 | accepted |
| children | p_qdZCg7EDcX7vRWBHuSzpwj | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好義（CBDB 338030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338030&o=json)
- [中国历代人物传记资料库：王來賓（CBDB 338035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json)
- [中国历代人物传记资料库：王來賀（CBDB 338034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json)
- [中国历代人物传记资料库：王來聘（CBDB 338036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338036&o=json)
- [中国历代人物传记资料库：王來問（CBDB 338037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338037&o=json)
- [中国历代人物传记资料库：王來旬（CBDB 338038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338038&o=json)
