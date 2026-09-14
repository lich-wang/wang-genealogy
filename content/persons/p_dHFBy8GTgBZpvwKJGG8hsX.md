---
schema: wang-person/v1
id: p_dHFBy8GTgBZpvwKJGG8hsX
status: active
merged_into: null
display_name: 王暄
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NM4E914SETsavFAnNjc2bu
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T1U7HHwhascxfKPE2VFVgj
          claim_id: c_NM4E914SETsavFAnNjc2bu
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: CBDB:199620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199620）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BmXkh5xJCKRh1jyvZtLgaF
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5fZZ3gvk9X9Yo4AHg7XTP
          claim_id: c_BmXkh5xJCKRh1jyvZtLgaF
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
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
        id: c_RyAghFG6iNydq5oZU3NY4L
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暄（生于1438年），明人物。明清進士進士，籍贯嵊縣，入仕進士。（中国历代人物传记资料库 CBDB 199620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LeesfiH4nFz4aslHbXeTu2
          claim_id: c_RyAghFG6iNydq5oZU3NY4L
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: CBDB:199620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_grqJeDJ99YaK64EeO8dn3x
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RcohMEe4gfY6Nzm7nKZ8NH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTESa9G8KSZplSpZaXbVvr
          claim_id: c_grqJeDJ99YaK64EeO8dn3x
          source_id: s_Dq-FsmqGyX4rDdZ4JEGvFU
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dq-FsmqGyX4rDdZ4JEGvFU
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json
            external_identifier: CBDB:247366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RcohMEe4gfY6Nzm7nKZ8NH
        status: active
        display_name: 葉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jV8UhoUm4A0SUCRwYAgwEv
        subject_person_id: p_jf9czE6gj8V3fCw8ZoQ8o7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwT632YsFfSAag9fvfmftc
          claim_id: c_jV8UhoUm4A0SUCRwYAgwEv
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jf9czE6gj8V3fCw8ZoQ8o7
        status: active
        display_name: 王廷玉
        merged_into_person_id: null
    - claim:
        id: c_YnApwjtA1xoeLE6m0r_THg
        subject_person_id: p_8b5ygBMRrPL5bJPeuV8d8d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30kBGB8w2g-oc9xFQiOROp
          claim_id: c_YnApwjtA1xoeLE6m0r_THg
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8b5ygBMRrPL5bJPeuV8d8d
        status: active
        display_name: 王斯浩
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ra99JeiaWauVfgkqBLj83b
        subject_person_id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AsxsqlrEIh6hw2PDbkg_bN
          claim_id: c_ra99JeiaWauVfgkqBLj83b
          source_id: s_jUtvX3qdzad6B0BrB1h0Q2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_g1x7niL32i94JhBrUil9Ef
        subject_person_id: p_JDtg7PX3MajSBfpNGXkndC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RE2wMu9y2k1DrM03eSMgXa
          claim_id: c_g1x7niL32i94JhBrUil9Ef
          source_id: s_w9ecAAS-06hU5Nxi74F0Gi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_2cAnIOyze1Lvd1qK-r0aIX
        subject_person_id: p_PKPnxZYET1wxYB5DroJAiD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__gGldxV_wsNEh8y0U_3DnQ
          claim_id: c_2cAnIOyze1Lvd1qK-r0aIX
          source_id: s_RBFutxg_UpzVx0GJG7f-PR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FW7idon_op_3oLxa8eivMq
        subject_person_id: p_Qd85uok5uH3CeT38CqAWrK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2kSx6Au7kOsIECWAJrfue
          claim_id: c_FW7idon_op_3oLxa8eivMq
          source_id: s_4-oepba6hl_pXAEry68iKT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_DvW0SdQH2a5WdHpV_tsFRx
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eas684dJzw6XrZ2FgEQAEB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IYaCIlTetwY2iXPvC6dgbi
          claim_id: c_DvW0SdQH2a5WdHpV_tsFRx
          source_id: s_nOdPrMZKb5RW2mkZsSUSTK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jGt8bmqQt9Tdxo35z_ioc3
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j8SXH6XGi7kQ5wyS9QJnGN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMJ8F3-b4cp5ifkBpS8oN5
          claim_id: c_jGt8bmqQt9Tdxo35z_ioc3
          source_id: s_GeE7-zA_CJEdwPuObQhCiq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_KuB018bGrP1vCIvvdeCghW
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WhAgy9LawNjQTX36KowtsF
          claim_id: c_KuB018bGrP1vCIvvdeCghW
          source_id: s_02KkbDvm88fXIGqibpEwQc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ImWsKgc6lial9ugMVvFPN9
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vnY8QMHVpKeoeFhTrCMgrm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2kJ71lPirz8XE0FrV0rw7
          claim_id: c_ImWsKgc6lial9ugMVvFPN9
          source_id: s_frZkf4cCt4BoqOlAvbd7HY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王暄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暄 | accepted |
| birth.date | 1438年 | accepted |
| bio.summary | 王暄（生于1438年），明人物。明清進士進士，籍贯嵊縣，入仕進士。（中国历代人物传记资料库 CBDB 199620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| spouses | p_RcohMEe4gfY6Nzm7nKZ8NH | 葉氏 | accepted |
| ancestors | p_jf9czE6gj8V3fCw8ZoQ8o7 | 王廷玉 | accepted |
| ancestors | p_8b5ygBMRrPL5bJPeuV8d8d | 王斯浩 | accepted |
| other | p_6MNxbLMUF7ZGM2A5Z7B1Ju | 王晦 | accepted |
| other | p_JDtg7PX3MajSBfpNGXkndC | 王晚 | accepted |
| other | p_PKPnxZYET1wxYB5DroJAiD | 王暖 | accepted |
| other | p_Qd85uok5uH3CeT38CqAWrK | 王昱 | accepted |
| other | p_eas684dJzw6XrZ2FgEQAEB | 王暲 | accepted |
| other | p_j8SXH6XGi7kQ5wyS9QJnGN | 王晏 | accepted |
| other | p_nNrsXs6RFoPXgHdC3SJsPS | 王普 | accepted |
| other | p_vnY8QMHVpKeoeFhTrCMgrm | 王煚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晦（CBDB 247374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247374&o=json)
- [中国历代人物传记资料库：王煚（CBDB 247371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247371&o=json)
- [中国历代人物传记资料库：王暖（CBDB 247368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json)
- [中国历代人物传记资料库：王普（CBDB 247367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json)
- [中国历代人物传记资料库：王晚（CBDB 247373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247373&o=json)
- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)
- [中国历代人物传记资料库：王晏（CBDB 247372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247372&o=json)
- [中国历代人物传记资料库：王昱（CBDB 247369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json)
- [中国历代人物传记资料库：王暲（CBDB 247370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json)
- [中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json)
