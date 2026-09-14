---
schema: wang-person/v1
id: p_DJhG2TFTs2BSF3ec5E2mBn
status: active
merged_into: null
display_name: 王甫
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K73kSfWNFPC28vM55nZjXa
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q8iaeBy9D9D5Qn8tvSgrXb
          claim_id: c_K73kSfWNFPC28vM55nZjXa
          source_id: s_wZkUUmsf8RZXGnKqWrmYDk
          stance: supports
          locator: CBDB:198828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198828）
          source: &a1
            id: s_wZkUUmsf8RZXGnKqWrmYDk
            source_type: api_record
            title: 中国历代人物传记资料库：王甫（CBDB 198828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198828&o=json
            external_identifier: CBDB:198828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AEja1u9wD5VQR79tP6a5RS
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1429年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2RfUQxjxadqofxjJekrUU
          claim_id: c_AEja1u9wD5VQR79tP6a5RS
          source_id: s_wZkUUmsf8RZXGnKqWrmYDk
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
        id: c_ghELPfpPr5JDzALW5RJnA6
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫（生于1429年），明人物。明清進士進士，籍贯易州，入仕進士。（中国历代人物传记资料库 CBDB 198828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZKCt1DKNIaczURPLuB19br
          claim_id: c_ghELPfpPr5JDzALW5RJnA6
          source_id: s_wZkUUmsf8RZXGnKqWrmYDk
          stance: supports
          locator: CBDB:198828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_risw6_JJ51On36_W6oDGYn
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IcmssjjylmfSfqamxmJNV
          claim_id: c_risw6_JJ51On36_W6oDGYn
          source_id: s_6YVmpTasfpJXywfV5GiNCD
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6YVmpTasfpJXywfV5GiNCD
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 321651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321651&o=json
            external_identifier: CBDB:321651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Rh3yGLnnM5LyvxUZe67wC
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__x-tL_6SwhEAg_zKMGw2gK
        subject_person_id: p_ArpJ9f9NEk531zFtDWyBgp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzOFBneqiOPMX0nVfrSMjX
          claim_id: c__x-tL_6SwhEAg_zKMGw2gK
          source_id: s_LJksdvM51f7BDcKkRmQqyR
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJksdvM51f7BDcKkRmQqyR
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 321629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321629&o=json
            external_identifier: CBDB:321629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ArpJ9f9NEk531zFtDWyBgp
        status: active
        display_name: 王從善
        merged_into_person_id: null
    - claim:
        id: c_m-OOU0ytgJrSUd4Tvq_OWm
        subject_person_id: p_UB2pNeMpKVvzV5sfM4MQfN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umSAEcfqbcwSL-TjyGtdoY
          claim_id: c_m-OOU0ytgJrSUd4Tvq_OWm
          source_id: s_xERFYPbmhvB1FN1Sc7txzr
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xERFYPbmhvB1FN1Sc7txzr
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 321640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321640&o=json
            external_identifier: CBDB:321640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UB2pNeMpKVvzV5sfM4MQfN
        status: active
        display_name: 王銘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_b_f6SwfMJjN1NxfuKzGhK6
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sKhyxMDBnGYTDz8J6THmsG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7-N_BAAX0mQk60Vrl3O1JW
          claim_id: c_b_f6SwfMJjN1NxfuKzGhK6
          source_id: s_R7NrkwfJ3WNIithnjd8szJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198828 王甫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R7NrkwfJ3WNIithnjd8szJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 321707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321707&o=json
            external_identifier: CBDB:321707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sKhyxMDBnGYTDz8J6THmsG
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_KR243rA2b9uyYMw2VrRUNa
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wBsn35NJZ9ksA5qLB8RNYN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4DagXoBtdEpvGUdjR99xv
          claim_id: c_KR243rA2b9uyYMw2VrRUNa
          source_id: s_XcYyKltVfGojl9RoMWXfK7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198828 王甫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XcYyKltVfGojl9RoMWXfK7
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 321685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321685&o=json
            external_identifier: CBDB:321685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wBsn35NJZ9ksA5qLB8RNYN
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_Iry0W0-osJd6PSoZZnaJlv
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zdBqTBX2h482tXog9Wui3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiZUqnhaMW-De11-06WOrd
          claim_id: c_Iry0W0-osJd6PSoZZnaJlv
          source_id: s_5qCYDyFUSzaOw5Hk4ccKUu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198828 王甫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5qCYDyFUSzaOw5Hk4ccKUu
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 321696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json
            external_identifier: CBDB:321696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zdBqTBX2h482tXog9Wui3F
        status: active
        display_name: 王琛
        merged_into_person_id: null
---

# 王甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甫 | accepted |
| birth.date | 1429年 | accepted |
| bio.summary | 王甫（生于1429年），明人物。明清進士進士，籍贯易州，入仕進士。（中国历代人物传记资料库 CBDB 198828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2Rh3yGLnnM5LyvxUZe67wC | 王傑 | accepted |
| ancestors | p_ArpJ9f9NEk531zFtDWyBgp | 王從善 | accepted |
| ancestors | p_UB2pNeMpKVvzV5sfM4MQfN | 王銘 | accepted |
| other | p_sKhyxMDBnGYTDz8J6THmsG | 王璲 | accepted |
| other | p_wBsn35NJZ9ksA5qLB8RNYN | 王鑾 | accepted |
| other | p_zdBqTBX2h482tXog9Wui3F | 王琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 321696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json)
- [中国历代人物传记资料库：王從善（CBDB 321629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321629&o=json)
- [中国历代人物传记资料库：王甫（CBDB 198828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198828&o=json)
- [中国历代人物传记资料库：王傑（CBDB 321651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321651&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 321685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321685&o=json)
- [中国历代人物传记资料库：王銘（CBDB 321640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321640&o=json)
- [中国历代人物传记资料库：王璲（CBDB 321707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321707&o=json)
