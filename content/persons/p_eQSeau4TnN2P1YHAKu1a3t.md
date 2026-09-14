---
schema: wang-person/v1
id: p_eQSeau4TnN2P1YHAKu1a3t
status: active
merged_into: null
display_name: 王道
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yRp83CP1R2hwQ4br6NhhTb
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_So7s6QAydC4urKKqtpvfxT
          claim_id: c_yRp83CP1R2hwQ4br6NhhTb
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
          stance: supports
          locator: CBDB:126743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126743）
          source: &a1
            id: s_SDTWLwe8yfNNX1QNrMi7Pn
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 126743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126743&o=json
            external_identifier: CBDB:126743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CFkPXK8PGMKtGKgdxQAJ72
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TNrd58r8dwKxyLGnjeLJ4C
          claim_id: c_CFkPXK8PGMKtGKgdxQAJ72
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
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
        id: c_bS7vtGN47wFPcPtRSJ74Pz
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wG4r4hRYHaNg4fm6LcMPxu
          claim_id: c_bS7vtGN47wFPcPtRSJ74Pz
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
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
        id: c_KdCYeDGuBdGeKLCuXf2SHo
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道（1487年—1547年），明人物。明清進士進士，籍贯武城，入仕進士。（中国历代人物传记资料库 CBDB 126743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6rGBslt0Rf0DejmGUAb12V
          claim_id: c_KdCYeDGuBdGeKLCuXf2SHo
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
          stance: supports
          locator: CBDB:126743
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_auFESy6ttH1cvrseo4KPKH
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eny2nQ8kjY0ScXe9UJu8bS
          claim_id: c_auFESy6ttH1cvrseo4KPKH
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xBqdQS3J8npNXQbvVRSH9d
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 276414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json
            external_identifier: CBDB:276414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hTdIJyDsobwg_dRvrjV60j
        subject_person_id: p_T75KHPyoLcBvbRibcnbRgQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OyBONEifszz8Pp_qqvHY98
          claim_id: c_hTdIJyDsobwg_dRvrjV60j
          source_id: s_o8a9kw48JE7ciS4KU8As67
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o8a9kw48JE7ciS4KU8As67
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 276413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276413&o=json
            external_identifier: CBDB:276413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_T75KHPyoLcBvbRibcnbRgQ
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_Z3OwQ_zJPTi94UPXcq46Hv
        subject_person_id: p_J4M9BRMcoHGA8wk5E2Ac4V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsUS-8uwwUfKq5SQRcpHim
          claim_id: c_Z3OwQ_zJPTi94UPXcq46Hv
          source_id: s_oDe4npP7BoQ9t6yfCudZpi
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oDe4npP7BoQ9t6yfCudZpi
            source_type: api_record
            title: 中国历代人物传记资料库：王某禮（CBDB 276412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276412&o=json
            external_identifier: CBDB:276412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_J4M9BRMcoHGA8wk5E2Ac4V
        status: active
        display_name: 王某禮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_zPLK_-Roy4yMrI-hz-pmEo
        subject_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xS9TODSWCqVCmcDNWNQ1SV
          claim_id: c_zPLK_-Roy4yMrI-hz-pmEo
          source_id: s_PjmKovt-VMpFCYLQbpPY2q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PjmKovt-VMpFCYLQbpPY2q
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 276425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json
            external_identifier: CBDB:276425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_29D3zZKvWQiHCfh1mCPcjC
        status: active
        display_name: 王适
        merged_into_person_id: null
    - claim:
        id: c_TXb2P41J6S18sfJBw8mjmt
        subject_person_id: p_5kHWtHG41N7FxgK4Dffrc3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kMYpb7rAsqdzU-KAKTgGKb
          claim_id: c_TXb2P41J6S18sfJBw8mjmt
          source_id: s_RnfI542ldC2SnolTpjTZQc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RnfI542ldC2SnolTpjTZQc
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 276423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json
            external_identifier: CBDB:276423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5kHWtHG41N7FxgK4Dffrc3
        status: active
        display_name: 王逈
        merged_into_person_id: null
    - claim:
        id: c_dO3Pvk7K-lPOZbsAv_JPSj
        subject_person_id: p_6vuEmZPvM17kD96hvGXxj6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHiLjXtHirASTw0atT1qCD
          claim_id: c_dO3Pvk7K-lPOZbsAv_JPSj
          source_id: s_B1XVtRNAH02DA6hyZeMhJe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B1XVtRNAH02DA6hyZeMhJe
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 276421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json
            external_identifier: CBDB:276421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6vuEmZPvM17kD96hvGXxj6
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_SV40sAecJbjQxivOmeOV5_
        subject_person_id: p_PiFt1PACby6934NxdsbuQ1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdFY5xhCa3UMldw1cPCFIX
          claim_id: c_SV40sAecJbjQxivOmeOV5_
          source_id: s_E7L8H1t-SC0DLdFtAc-jnS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E7L8H1t-SC0DLdFtAc-jnS
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 276424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json
            external_identifier: CBDB:276424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PiFt1PACby6934NxdsbuQ1
        status: active
        display_name: 王邁
        merged_into_person_id: null
    - claim:
        id: c_cCVd628Nd-rWCI068hkbeb
        subject_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IFTlvGnWjMaATAOdkjOYbI
          claim_id: c_cCVd628Nd-rWCI068hkbeb
          source_id: s_fCwtL4ANei3r_MW0D_IWuG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fCwtL4ANei3r_MW0D_IWuG
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 276422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json
            external_identifier: CBDB:276422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WLx3Kf78a9Boh4RiRRgyWy
        status: active
        display_name: 王遇
        merged_into_person_id: null
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1487年 | accepted |
| death.date | 1547年 | accepted |
| bio.summary | 王道（1487年—1547年），明人物。明清進士進士，籍贯武城，入仕進士。（中国历代人物传记资料库 CBDB 126743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |
| ancestors | p_T75KHPyoLcBvbRibcnbRgQ | 王綸 | accepted |
| ancestors | p_J4M9BRMcoHGA8wk5E2Ac4V | 王某禮 | accepted |
| other | p_29D3zZKvWQiHCfh1mCPcjC | 王适 | accepted |
| other | p_5kHWtHG41N7FxgK4Dffrc3 | 王逈 | accepted |
| other | p_6vuEmZPvM17kD96hvGXxj6 | 王選 | accepted |
| other | p_PiFt1PACby6934NxdsbuQ1 | 王邁 | accepted |
| other | p_WLx3Kf78a9Boh4RiRRgyWy | 王遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 276414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json)
- [中国历代人物传记资料库：王道（CBDB 126743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126743&o=json)
- [中国历代人物传记资料库：王逈（CBDB 276423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json)
- [中国历代人物传记资料库：王綸（CBDB 276413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276413&o=json)
- [中国历代人物传记资料库：王邁（CBDB 276424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json)
- [中国历代人物传记资料库：王某禮（CBDB 276412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276412&o=json)
- [中国历代人物传记资料库：王适（CBDB 276425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json)
- [中国历代人物传记资料库：王選（CBDB 276421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json)
- [中国历代人物传记资料库：王遇（CBDB 276422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json)
