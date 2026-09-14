---
schema: wang-person/v1
id: p_yBv5FsmN9BCFNm7cQbu6uG
status: active
merged_into: null
display_name: 王問
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AdnqByDERxc4SF55A4RKvr
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpEu1MG1oqTP63A8FXphpS
          claim_id: c_AdnqByDERxc4SF55A4RKvr
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: CBDB:126680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126680）
          source: &a1
            id: s_4aTsDo2SV3fPavKDsGeNKr
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 126680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126680&o=json
            external_identifier: CBDB:126680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UbekEwic5Gs4Sw3MhHdGUF
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rjFPL18auFurTyFJi5YH4t
          claim_id: c_UbekEwic5Gs4Sw3MhHdGUF
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eTGJmeQXsURbsPGPV19Kyb
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1576年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XjvJr8BhZ49toW2CJBowqf
          claim_id: c_eTGJmeQXsURbsPGPV19Kyb
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z6zZZnVw23AuMPohfq3GQ7
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問（1497年—1576年），明人物。明清進士進士，籍贯無錫，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 126680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6DUGO_L06WPOzWRkSpCnXA
          claim_id: c_z6zZZnVw23AuMPohfq3GQ7
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: CBDB:126680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tuy2sq4f8GYmRwiWdURtZq
        subject_person_id: p_y7EyMSu7d6G6tRK3dnwd4b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stsLal1AZRhXRtpvURqS9d
          claim_id: c_tuy2sq4f8GYmRwiWdURtZq
          source_id: s_i8xAX94weziP8c78vuWm49
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i8xAX94weziP8c78vuWm49
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 298837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298837&o=json
            external_identifier: CBDB:298837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_y7EyMSu7d6G6tRK3dnwd4b
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children:
    - claim:
        id: c_BQsfPLXldH98VMeOsAVTkE
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpAHXL69MEG9l9YTeLPnHf
          claim_id: c_BQsfPLXldH98VMeOsAVTkE
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SUmsFVocSHYtEuenTLpTH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 126886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json
            external_identifier: CBDB:126886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_KdfXi9OY07oxcFw8YqyGSs
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6mc9uEBTKomUX9exaBo2tW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAqQ76qkWlzvbR7-BHecs1
          claim_id: c_KdfXi9OY07oxcFw8YqyGSs
          source_id: s_uHiSFxwEt6WBs3fzLeHxq5
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王欽 之父／母。
          source:
            id: s_uHiSFxwEt6WBs3fzLeHxq5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 329596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json
            external_identifier: CBDB:329596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6mc9uEBTKomUX9exaBo2tW
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_gHGA1-FKjNu1bj5Gia7qst
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bp2BczPYCNHkaVBoEQhqS8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hV33UbGg5uu2GG76-Ns0TU
          claim_id: c_gHGA1-FKjNu1bj5Gia7qst
          source_id: s_FjKknn3bRRLxDMs7yCbjNY
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王金 与 王鑑 为同胞（CBDB 记「弟」），王鑑 之父／母即 王金 之父／母。
          source:
            id: s_FjKknn3bRRLxDMs7yCbjNY
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 329595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json
            external_identifier: CBDB:329595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bp2BczPYCNHkaVBoEQhqS8
        status: active
        display_name: 王金
        merged_into_person_id: null
    - claim:
        id: c_ScHqcR2OFC61i1xQ9YLQqX
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6iBUnc9MSyRL9jUSfA87V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVWHqmhYALBu9r0r0_BXvm
          claim_id: c_ScHqcR2OFC61i1xQ9YLQqX
          source_id: s_iuCb5we0gisvmADCe6F3vY
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎬 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王鎬 之父／母。
          source:
            id: s_iuCb5we0gisvmADCe6F3vY
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 329597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json
            external_identifier: CBDB:329597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6iBUnc9MSyRL9jUSfA87V
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yE-U2JHj3LPx8J_GNqiBal
        subject_person_id: p_CLoHFxBigUAoAPHA5drAtB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_bnoWI0_p3TDAarB6G_kl
          claim_id: c_yE-U2JHj3LPx8J_GNqiBal
          source_id: s_g37KFiHv2QsMaWusyfDLQY
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g37KFiHv2QsMaWusyfDLQY
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 298834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298834&o=json
            external_identifier: CBDB:298834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CLoHFxBigUAoAPHA5drAtB
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_XPCvgE6Pmrx6sW8z095W-t
        subject_person_id: p_JRdSLcrg8zDf9gc8W2tb94
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2xFyhKbCPMFDzc5X9Cbuw
          claim_id: c_XPCvgE6Pmrx6sW8z095W-t
          source_id: s_FM1dM5hebFApgsBhwstHfV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FM1dM5hebFApgsBhwstHfV
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 298836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298836&o=json
            external_identifier: CBDB:298836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JRdSLcrg8zDf9gc8W2tb94
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OsuoEXr7yN70fymnFAyo2Q
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bd-1Pl-LWYF56vsCMldqnS
          claim_id: c_OsuoEXr7yN70fymnFAyo2Q
          source_id: s_5Sr0BGorT3hgoXQIBft6Dp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126680 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5Sr0BGorT3hgoXQIBft6Dp
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 298842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json
            external_identifier: CBDB:298842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KiNkPP3iEABYbFUC75o3nF
        status: active
        display_name: 王咨
        merged_into_person_id: null
    - claim:
        id: c_o6D7TynBCa2hePsdYuTeXv
        subject_person_id: p_d9CFodbc3LrLmn8gXkEgFg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_faeyTj2vSKHGQZucVgkLbn
          claim_id: c_o6D7TynBCa2hePsdYuTeXv
          source_id: s_MbmpJtQR-xaFiV7TMbi-oS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126680 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MbmpJtQR-xaFiV7TMbi-oS
            source_type: api_record
            title: 中国历代人物传记资料库：王召（CBDB 298841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298841&o=json
            external_identifier: CBDB:298841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d9CFodbc3LrLmn8gXkEgFg
        status: active
        display_name: 王召
        merged_into_person_id: null
---

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| birth.date | 1497年 | accepted |
| death.date | 1576年 | accepted |
| bio.summary | 王問（1497年—1576年），明人物。明清進士進士，籍贯無錫，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 126680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y7EyMSu7d6G6tRK3dnwd4b | 王澤 | accepted |
| children | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |
| children | p_6mc9uEBTKomUX9exaBo2tW | 王欽 | accepted |
| children | p_Bp2BczPYCNHkaVBoEQhqS8 | 王金 | accepted |
| children | p_Q6iBUnc9MSyRL9jUSfA87V | 王鎬 | accepted |
| ancestors | p_CLoHFxBigUAoAPHA5drAtB | 王經 | accepted |
| ancestors | p_JRdSLcrg8zDf9gc8W2tb94 | 王宗 | accepted |
| other | p_KiNkPP3iEABYbFUC75o3nF | 王咨 | accepted |
| other | p_d9CFodbc3LrLmn8gXkEgFg | 王召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 329597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 126886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json)
- [中国历代人物传记资料库：王金（CBDB 329595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json)
- [中国历代人物传记资料库：王經（CBDB 298834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298834&o=json)
- [中国历代人物传记资料库：王欽（CBDB 329596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json)
- [中国历代人物传记资料库：王問（CBDB 126680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126680&o=json)
- [中国历代人物传记资料库：王澤（CBDB 298837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298837&o=json)
- [中国历代人物传记资料库：王召（CBDB 298841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298841&o=json)
- [中国历代人物传记资料库：王咨（CBDB 298842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json)
- [中国历代人物传记资料库：王宗（CBDB 298836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298836&o=json)
