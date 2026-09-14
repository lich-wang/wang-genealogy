---
schema: wang-person/v1
id: p_LNAKBPYt9PQCz44835GtLD
status: active
merged_into: null
display_name: 王續之
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VYj4TYYQYH7wuFwJjVZgNf
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vqjJWbGjZqhHdAfibjuKK7
          claim_id: c_VYj4TYYQYH7wuFwJjVZgNf
          source_id: s_6awbq68aufhR92WGrbmNvR
          stance: supports
          locator: CBDB:204986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204986）
          source: &a1
            id: s_6awbq68aufhR92WGrbmNvR
            source_type: api_record
            title: 中国历代人物传记资料库：王續之（CBDB 204986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204986&o=json
            external_identifier: CBDB:204986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EfGDGKvRndtSfMpKws59jm
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkMeF9XhEzsWKbJfX2TzUG
          claim_id: c_EfGDGKvRndtSfMpKws59jm
          source_id: s_6awbq68aufhR92WGrbmNvR
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
        id: c_ApG7MbiGLi5wUzFRJsH9yY
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續之（生于1534年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 204986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3-CXlyXb3tNK1yxGz3076U
          claim_id: c_ApG7MbiGLi5wUzFRJsH9yY
          source_id: s_6awbq68aufhR92WGrbmNvR
          stance: supports
          locator: CBDB:204986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YbXpkaIhpg5T4PTu4vWizl
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZkUivbljmu_kADppLhA0K7
          claim_id: c_YbXpkaIhpg5T4PTu4vWizl
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FLYjb1DFHNr84N9a3wBTWi
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 326819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json
            external_identifier: CBDB:326819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vK3QABJxLZ3CGaf98onw4k
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_56qZCzU3RwCNYU2YzG_8Rf
        subject_person_id: p_JH4jDbcMV3BNGKWbQ9vKF4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7yVq2MFq8BsabJKBEt-ra
          claim_id: c_56qZCzU3RwCNYU2YzG_8Rf
          source_id: s_zK3XJnZokR4EFPfZGjURLH
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zK3XJnZokR4EFPfZGjURLH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 326816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326816&o=json
            external_identifier: CBDB:326816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JH4jDbcMV3BNGKWbQ9vKF4
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_DBBKh7SPpH3bgaOoyp8Lzv
        subject_person_id: p_ZWx9BUeSiDUd2ZtZQJRxGo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__XFJR3Ks9t1oJAnN8fd9uJ
          claim_id: c_DBBKh7SPpH3bgaOoyp8Lzv
          source_id: s_7bD6X6QACgJ5TN9t5K7TYM
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7bD6X6QACgJ5TN9t5K7TYM
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 326817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json
            external_identifier: CBDB:326817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZWx9BUeSiDUd2ZtZQJRxGo
        status: active
        display_name: 王希文
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_w44bxDtCB171A-FgSBxjyf
        subject_person_id: p_17oK99DspuBT9okPYzji4T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BejG4ZiqQhzmqHtNMggNkx
          claim_id: c_w44bxDtCB171A-FgSBxjyf
          source_id: s_l-6ifaqfIylkeM_eMHsiQE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l-6ifaqfIylkeM_eMHsiQE
            source_type: api_record
            title: 中国历代人物传记资料库：王綏之（CBDB 326827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326827&o=json
            external_identifier: CBDB:326827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_17oK99DspuBT9okPYzji4T
        status: active
        display_name: 王綏之
        merged_into_person_id: null
    - claim:
        id: c_F7mTMzi0K0wJtafFhtk-ux
        subject_person_id: p_4RdBz4yqStWy94sdFFBDWq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRjd9WCME3EUIRJ33gaOob
          claim_id: c_F7mTMzi0K0wJtafFhtk-ux
          source_id: s_X5cwhvcjDHSDb76v6jLjiw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X5cwhvcjDHSDb76v6jLjiw
            source_type: api_record
            title: 中国历代人物传记资料库：王顯之（CBDB 326831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326831&o=json
            external_identifier: CBDB:326831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RdBz4yqStWy94sdFFBDWq
        status: active
        display_name: 王顯之
        merged_into_person_id: null
    - claim:
        id: c_sHIwu8_BbuEWUa4eTs4CeD
        subject_person_id: p_4XCesiUNZYdZu6Mx3QqL1e
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NfOYvXmzU-oRyoa5-9iflt
          claim_id: c_sHIwu8_BbuEWUa4eTs4CeD
          source_id: s_ncTFEEAqXnvB-ye1mGS93k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncTFEEAqXnvB-ye1mGS93k
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 326828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json
            external_identifier: CBDB:326828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4XCesiUNZYdZu6Mx3QqL1e
        status: active
        display_name: 王繼之
        merged_into_person_id: null
    - claim:
        id: c_uFFxVP3jWV3A9IeWSqPrrp
        subject_person_id: p_9gtC4BUCYSX9f6WF3f3Kqu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPQUkWK-qW44mtuvZZ9YVZ
          claim_id: c_uFFxVP3jWV3A9IeWSqPrrp
          source_id: s_q5omb3vzxkVYhRGjCq4_dk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q5omb3vzxkVYhRGjCq4_dk
            source_type: api_record
            title: 中国历代人物传记资料库：王衡宏（CBDB 326823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326823&o=json
            external_identifier: CBDB:326823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9gtC4BUCYSX9f6WF3f3Kqu
        status: active
        display_name: 王衡宏
        merged_into_person_id: null
    - claim:
        id: c_gCd8QawwJWzsHt-nquGaEI
        subject_person_id: p_EeEpuisuA3Qq5iKmC1k22C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IaSmm-R56YwUAOxORHAkZm
          claim_id: c_gCd8QawwJWzsHt-nquGaEI
          source_id: s_2FOPKZIatnEIoTuP5y6brS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2FOPKZIatnEIoTuP5y6brS
            source_type: api_record
            title: 中国历代人物传记资料库：王紀之（CBDB 326826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326826&o=json
            external_identifier: CBDB:326826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EeEpuisuA3Qq5iKmC1k22C
        status: active
        display_name: 王紀之
        merged_into_person_id: null
    - claim:
        id: c_VXo06l6PNuaToJ9F4rnjOt
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Pg9NC9oQxbiBVHEgN5cQQg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qr4m4woxgde7XZ4hwvdYby
          claim_id: c_VXo06l6PNuaToJ9F4rnjOt
          source_id: s_DsgafEh9QlR6avbOB8MRqj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DsgafEh9QlR6avbOB8MRqj
            source_type: api_record
            title: 中国历代人物传记资料库：王宣宸（CBDB 326824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326824&o=json
            external_identifier: CBDB:326824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pg9NC9oQxbiBVHEgN5cQQg
        status: active
        display_name: 王宣宸
        merged_into_person_id: null
    - claim:
        id: c_qmLgx56vYn9kjpWZRqtOjc
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4iJO2STyTfhnu-J8ug4wY
          claim_id: c_qmLgx56vYn9kjpWZRqtOjc
          source_id: s_jF_SUsWTNuqb66aI_X8oG_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jF_SUsWTNuqb66aI_X8oG_
            source_type: api_record
            title: 中国历代人物传记资料库：王緯之（CBDB 326825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json
            external_identifier: CBDB:326825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S3wL46qhSVMW3TDdGUdqcU
        status: active
        display_name: 王緯之
        merged_into_person_id: null
    - claim:
        id: c_1WPuztufywbnlt8Y0C53mc
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jmcd61oFbYW0UAVYR19q-r
          claim_id: c_1WPuztufywbnlt8Y0C53mc
          source_id: s_8upuHHr5IumF3nDmAVLxSs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204986 王續之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8upuHHr5IumF3nDmAVLxSs
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 326830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json
            external_identifier: CBDB:326830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZQYg3GXccVDCkyEdjCfGUD
        status: active
        display_name: 王補之
        merged_into_person_id: null
---

# 王續之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續之 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | 王續之（生于1534年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 204986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vK3QABJxLZ3CGaf98onw4k | 王廷 | accepted |
| ancestors | p_JH4jDbcMV3BNGKWbQ9vKF4 | 王銳 | accepted |
| ancestors | p_ZWx9BUeSiDUd2ZtZQJRxGo | 王希文 | accepted |
| other | p_17oK99DspuBT9okPYzji4T | 王綏之 | accepted |
| other | p_4RdBz4yqStWy94sdFFBDWq | 王顯之 | accepted |
| other | p_4XCesiUNZYdZu6Mx3QqL1e | 王繼之 | accepted |
| other | p_9gtC4BUCYSX9f6WF3f3Kqu | 王衡宏 | accepted |
| other | p_EeEpuisuA3Qq5iKmC1k22C | 王紀之 | accepted |
| other | p_Pg9NC9oQxbiBVHEgN5cQQg | 王宣宸 | accepted |
| other | p_S3wL46qhSVMW3TDdGUdqcU | 王緯之 | accepted |
| other | p_ZQYg3GXccVDCkyEdjCfGUD | 王補之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補之（CBDB 326830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json)
- [中国历代人物传记资料库：王衡宏（CBDB 326823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326823&o=json)
- [中国历代人物传记资料库：王紀之（CBDB 326826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326826&o=json)
- [中国历代人物传记资料库：王繼之（CBDB 326828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json)
- [中国历代人物传记资料库：王銳（CBDB 326816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326816&o=json)
- [中国历代人物传记资料库：王綏之（CBDB 326827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326827&o=json)
- [中国历代人物传记资料库：王廷（CBDB 326819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json)
- [中国历代人物传记资料库：王緯之（CBDB 326825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json)
- [中国历代人物传记资料库：王希文（CBDB 326817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json)
- [中国历代人物传记资料库：王顯之（CBDB 326831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326831&o=json)
- [中国历代人物传记资料库：王續之（CBDB 204986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204986&o=json)
- [中国历代人物传记资料库：王宣宸（CBDB 326824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326824&o=json)
