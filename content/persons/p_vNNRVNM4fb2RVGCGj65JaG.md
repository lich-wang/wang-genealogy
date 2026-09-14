---
schema: wang-person/v1
id: p_vNNRVNM4fb2RVGCGj65JaG
status: active
merged_into: null
display_name: 王鈍
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wzE9qHPvKAGcjH2C4BysWn
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AgYDg5n7Zd3pcqPPaYeXFz
          claim_id: c_wzE9qHPvKAGcjH2C4BysWn
          source_id: s_c4f72e9txJXvFsDeQZthDX
          stance: supports
          locator: CBDB:247363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247363）
          source: &a1
            id: s_c4f72e9txJXvFsDeQZthDX
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 247363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247363&o=json
            external_identifier: CBDB:247363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNrQVo3grwHSDY1ccM38pt
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍，明人物。成化八年進士，籍贯嵊縣，曾任訓導。（中国历代人物传记资料库 CBDB 247363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pS3ax4lxBLFGiagqLeKAq-
          claim_id: c_fNrQVo3grwHSDY1ccM38pt
          source_id: s_c4f72e9txJXvFsDeQZthDX
          stance: supports
          locator: CBDB:247363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nRnbEWc9Mb5pP5AJY4orlp
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVgnxxxjLSBHiuLh4vjbmU
          claim_id: c_nRnbEWc9Mb5pP5AJY4orlp
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UajPbreWAJ8SWtEFXGFhUY
            source_type: api_record
            title: 中国历代人物传记资料库：王暄（CBDB 199620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json
            external_identifier: CBDB:199620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
    - claim:
        id: c_1z8ycr-KjKU5Uuyc8TPAFR
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4T3t4rZJlKVFYJissSpwxO
          claim_id: c_1z8ycr-KjKU5Uuyc8TPAFR
          source_id: s_jUtvX3qdzad6B0BrB1h0Q2
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王晦 与 王暄 为同胞（CBDB 记「兄」），王暄 之父／母即 王晦 之父／母。
          source:
            id: s_jUtvX3qdzad6B0BrB1h0Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王晦（CBDB 247374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247374&o=json
            external_identifier: CBDB:247374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
        status: active
        display_name: 王晦
        merged_into_person_id: null
    - claim:
        id: c_I_Po2vub6p9dDppNhvZn72
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JDtg7PX3MajSBfpNGXkndC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UyQUdkADlg1YDZ84eRtfE
          claim_id: c_I_Po2vub6p9dDppNhvZn72
          source_id: s_w9ecAAS-06hU5Nxi74F0Gi
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王晚 与 王暄 为同胞（CBDB 记「兄」），王暄 之父／母即 王晚 之父／母。
          source:
            id: s_w9ecAAS-06hU5Nxi74F0Gi
            source_type: api_record
            title: 中国历代人物传记资料库：王晚（CBDB 247373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247373&o=json
            external_identifier: CBDB:247373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JDtg7PX3MajSBfpNGXkndC
        status: active
        display_name: 王晚
        merged_into_person_id: null
    - claim:
        id: c_utQ6yQZFfXuIeHywybgnFi
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PKPnxZYET1wxYB5DroJAiD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4pwj37sE6fJmWEUVaYKKB
          claim_id: c_utQ6yQZFfXuIeHywybgnFi
          source_id: s_RBFutxg_UpzVx0GJG7f-PR
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王暖 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王暖 之父／母。
          source:
            id: s_RBFutxg_UpzVx0GJG7f-PR
            source_type: api_record
            title: 中国历代人物传记资料库：王暖（CBDB 247368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json
            external_identifier: CBDB:247368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PKPnxZYET1wxYB5DroJAiD
        status: active
        display_name: 王暖
        merged_into_person_id: null
    - claim:
        id: c_2mJ-wZp05uuSViFS5PhYFv
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qd85uok5uH3CeT38CqAWrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LU_Ui8iRtN7Ipw-mLvXHy8
          claim_id: c_2mJ-wZp05uuSViFS5PhYFv
          source_id: s_4-oepba6hl_pXAEry68iKT
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王昱 之父／母。
          source:
            id: s_4-oepba6hl_pXAEry68iKT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 247369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json
            external_identifier: CBDB:247369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qd85uok5uH3CeT38CqAWrK
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_8h8J8FdiKPF5WJIntGmEO9
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eas684dJzw6XrZ2FgEQAEB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPOhnsim940YwINP1o8Tmp
          claim_id: c_8h8J8FdiKPF5WJIntGmEO9
          source_id: s_nOdPrMZKb5RW2mkZsSUSTK
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王暲 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王暲 之父／母。
          source:
            id: s_nOdPrMZKb5RW2mkZsSUSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王暲（CBDB 247370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json
            external_identifier: CBDB:247370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eas684dJzw6XrZ2FgEQAEB
        status: active
        display_name: 王暲
        merged_into_person_id: null
    - claim:
        id: c_TFxjqzDNnh_xSWfNf1WEzo
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j8SXH6XGi7kQ5wyS9QJnGN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmBCRg0b2oU2ofkesOg72N
          claim_id: c_TFxjqzDNnh_xSWfNf1WEzo
          source_id: s_GeE7-zA_CJEdwPuObQhCiq
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王晏 与 王暄 为同胞（CBDB 记「兄」），王暄 之父／母即 王晏 之父／母。
          source:
            id: s_GeE7-zA_CJEdwPuObQhCiq
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 247372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247372&o=json
            external_identifier: CBDB:247372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j8SXH6XGi7kQ5wyS9QJnGN
        status: active
        display_name: 王晏
        merged_into_person_id: null
    - claim:
        id: c_cmjxG039RTieWZTim69_Fl
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAczJO-YQ4vCMfNJBMtW62
          claim_id: c_cmjxG039RTieWZTim69_Fl
          source_id: s_02KkbDvm88fXIGqibpEwQc
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王普 之父／母。
          source:
            id: s_02KkbDvm88fXIGqibpEwQc
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 247367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json
            external_identifier: CBDB:247367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nNrsXs6RFoPXgHdC3SJsPS
        status: active
        display_name: 王普
        merged_into_person_id: null
    - claim:
        id: c__q0WTUvKCfzj5b40tT2uA2
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vnY8QMHVpKeoeFhTrCMgrm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUyIjglvd0rZVN0UBVseOO
          claim_id: c__q0WTUvKCfzj5b40tT2uA2
          source_id: s_frZkf4cCt4BoqOlAvbd7HY
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王煚 与 王暄 为同胞（CBDB 记「兄」），王暄 之父／母即 王煚 之父／母。
          source:
            id: s_frZkf4cCt4BoqOlAvbd7HY
            source_type: api_record
            title: 中国历代人物传记资料库：王煚（CBDB 247371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247371&o=json
            external_identifier: CBDB:247371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vnY8QMHVpKeoeFhTrCMgrm
        status: active
        display_name: 王煚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鈍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈍 | accepted |
| bio.summary | 王鈍，明人物。成化八年進士，籍贯嵊縣，曾任訓導。（中国历代人物传记资料库 CBDB 247363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |
| children | p_6MNxbLMUF7ZGM2A5Z7B1Ju | 王晦 | accepted |
| children | p_JDtg7PX3MajSBfpNGXkndC | 王晚 | accepted |
| children | p_PKPnxZYET1wxYB5DroJAiD | 王暖 | accepted |
| children | p_Qd85uok5uH3CeT38CqAWrK | 王昱 | accepted |
| children | p_eas684dJzw6XrZ2FgEQAEB | 王暲 | accepted |
| children | p_j8SXH6XGi7kQ5wyS9QJnGN | 王晏 | accepted |
| children | p_nNrsXs6RFoPXgHdC3SJsPS | 王普 | accepted |
| children | p_vnY8QMHVpKeoeFhTrCMgrm | 王煚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈍（CBDB 247363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247363&o=json)
- [中国历代人物传记资料库：王晦（CBDB 247374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247374&o=json)
- [中国历代人物传记资料库：王煚（CBDB 247371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247371&o=json)
- [中国历代人物传记资料库：王暖（CBDB 247368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json)
- [中国历代人物传记资料库：王普（CBDB 247367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json)
- [中国历代人物传记资料库：王晚（CBDB 247373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247373&o=json)
- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)
- [中国历代人物传记资料库：王晏（CBDB 247372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247372&o=json)
- [中国历代人物传记资料库：王昱（CBDB 247369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json)
- [中国历代人物传记资料库：王暲（CBDB 247370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json)
