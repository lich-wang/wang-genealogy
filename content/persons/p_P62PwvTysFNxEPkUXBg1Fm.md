---
schema: wang-person/v1
id: p_P62PwvTysFNxEPkUXBg1Fm
status: active
merged_into: null
display_name: 王德新
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HyFfUvcPRnUuvHs8KNQ6F4
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KJZN5etHtXciN26CScik3Q
          claim_id: c_HyFfUvcPRnUuvHs8KNQ6F4
          source_id: s_Ldza8xWSRy9H786ZMeZvJ7
          stance: supports
          locator: CBDB:126819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126819）
          source: &a1
            id: s_Ldza8xWSRy9H786ZMeZvJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 126819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126819&o=json
            external_identifier: CBDB:126819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ydxLCYnLWmMnSDAm8NpJMh
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新，明人物。明清進士進士，籍贯安福，入仕進士，曾任兵部主事、光祿寺丞、刑部主事。（中国历代人物传记资料库 CBDB 126819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pq4OYCQnxHaINVgUBkaPVL
          claim_id: c_ydxLCYnLWmMnSDAm8NpJMh
          source_id: s_Ldza8xWSRy9H786ZMeZvJ7
          stance: supports
          locator: CBDB:126819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e6ZqVMQoMaUzm3e_cCKYvo
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sw_ptAPGEd8KZSn2zepDoq
          claim_id: c_e6ZqVMQoMaUzm3e_cCKYvo
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_23MLmrvbVSk3aR9pLKCLpH
            source_type: api_record
            title: 中国历代人物传记资料库：王士望（CBDB 218704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json
            external_identifier: CBDB:218704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_heKv1Lrv2nNs2FP242e8RP
        status: active
        display_name: 王士望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s8MQ6EaKHxcp4kMiSPheha
        subject_person_id: p_BmJiYvE4u2XkahiPTHU6KL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qU2sNIZotwg5ABUzRVfoM6
          claim_id: c_s8MQ6EaKHxcp4kMiSPheha
          source_id: s_uSUMFbvqSgs75BKZXo23c6
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uSUMFbvqSgs75BKZXo23c6
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 218701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218701&o=json
            external_identifier: CBDB:218701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BmJiYvE4u2XkahiPTHU6KL
        status: active
        display_name: 王衡
        merged_into_person_id: null
    - claim:
        id: c_sRTH-3orK1zIPagGa-R_vw
        subject_person_id: p_ecFrd5qerDXA9XmtuZkUzM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xXQ8xX2yE1T-7wioCF2rFw
          claim_id: c_sRTH-3orK1zIPagGa-R_vw
          source_id: s_WxYJKMb12xXJ9o4cKteH53
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WxYJKMb12xXJ9o4cKteH53
            source_type: api_record
            title: 中国历代人物传记资料库：王宗舜（CBDB 218702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218702&o=json
            external_identifier: CBDB:218702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ecFrd5qerDXA9XmtuZkUzM
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_uAgiI3Q_8uPFz2V56-_w79
        subject_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ReL1GousPOpnfs-wtBLgKd
          claim_id: c_uAgiI3Q_8uPFz2V56-_w79
          source_id: s_5mjf1oOKfbogpbSx3KKfmY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5mjf1oOKfbogpbSx3KKfmY
            source_type: api_record
            title: 中国历代人物传记资料库：王德和（CBDB 218711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json
            external_identifier: CBDB:218711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FmPZ9e75zqCio8hBbq7nuP
        status: active
        display_name: 王德和
        merged_into_person_id: null
    - claim:
        id: c_E3OqkFTlG4a8hM03PVVpuT
        subject_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21fEcV181W-_wC4DFDgJjh
          claim_id: c_E3OqkFTlG4a8hM03PVVpuT
          source_id: s_TOuJP5ePwwXX8k8qhw5n-r
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TOuJP5ePwwXX8k8qhw5n-r
            source_type: api_record
            title: 中国历代人物传记资料库：王德宿（CBDB 218712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json
            external_identifier: CBDB:218712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GnfZ7SBiwzY9KHGtcXMs2d
        status: active
        display_name: 王德宿
        merged_into_person_id: null
    - claim:
        id: c_16iLfGrBVZUB2_dJyoljjS
        subject_person_id: p_N1TXEWvdC8QVjsKgKvz8GJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tuwVbTl61c1qtl5UVWpHT5
          claim_id: c_16iLfGrBVZUB2_dJyoljjS
          source_id: s_h0ztp4dUPxLMEfJHrirH39
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h0ztp4dUPxLMEfJHrirH39
            source_type: api_record
            title: 中国历代人物传记资料库：王廷俊（CBDB 218710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json
            external_identifier: CBDB:218710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N1TXEWvdC8QVjsKgKvz8GJ
        status: active
        display_name: 王廷俊
        merged_into_person_id: null
    - claim:
        id: c_-9wC2ZR4WvwaEQyMSqd27s
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYzM9E9YhFCAyY-Ki7LnMu
          claim_id: c_-9wC2ZR4WvwaEQyMSqd27s
          source_id: s_5W3wzEYhkThsOnWTZvEAag
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5W3wzEYhkThsOnWTZvEAag
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RsX3Wf6p4rAM8SdmNchmQR
        status: active
        display_name: 王德宣
        merged_into_person_id: null
    - claim:
        id: c_pXnTE4FEZH2VNNX5B7zWZJ
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95Q99PJ3SuxK8oOfUZXfno
          claim_id: c_pXnTE4FEZH2VNNX5B7zWZJ
          source_id: s__zwgmwUm5UZdVq2e9jxXFA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__zwgmwUm5UZdVq2e9jxXFA
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 218709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json
            external_identifier: CBDB:218709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mFTnd1QNHXJPWon9Y4YcwK
        status: active
        display_name: 王德昇
        merged_into_person_id: null
    - claim:
        id: c_vG4vnW_Wndyby2DhJJYbQH
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGPi5VDd3eyVWzKfbPmcqL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tv9AQRJnmNwUri_9Dwy3mP
          claim_id: c_vG4vnW_Wndyby2DhJJYbQH
          source_id: s_P_2Bmwi6fkc3d2FIumjNnU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P_2Bmwi6fkc3d2FIumjNnU
            source_type: api_record
            title: 中国历代人物传记资料库：王德敏（CBDB 218708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218708&o=json
            external_identifier: CBDB:218708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wGPi5VDd3eyVWzKfbPmcqL
        status: active
        display_name: 王德敏
        merged_into_person_id: null
---

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | 王德新，明人物。明清進士進士，籍贯安福，入仕進士，曾任兵部主事、光祿寺丞、刑部主事。（中国历代人物传记资料库 CBDB 126819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heKv1Lrv2nNs2FP242e8RP | 王士望 | accepted |
| ancestors | p_BmJiYvE4u2XkahiPTHU6KL | 王衡 | accepted |
| ancestors | p_ecFrd5qerDXA9XmtuZkUzM | 王宗舜 | accepted |
| other | p_FmPZ9e75zqCio8hBbq7nuP | 王德和 | accepted |
| other | p_GnfZ7SBiwzY9KHGtcXMs2d | 王德宿 | accepted |
| other | p_N1TXEWvdC8QVjsKgKvz8GJ | 王廷俊 | accepted |
| other | p_RsX3Wf6p4rAM8SdmNchmQR | 王德宣 | accepted |
| other | p_mFTnd1QNHXJPWon9Y4YcwK | 王德昇 | accepted |
| other | p_wGPi5VDd3eyVWzKfbPmcqL | 王德敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德和（CBDB 218711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json)
- [中国历代人物传记资料库：王德敏（CBDB 218708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218708&o=json)
- [中国历代人物传记资料库：王德昇（CBDB 218709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json)
- [中国历代人物传记资料库：王德宿（CBDB 218712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json)
- [中国历代人物传记资料库：王德新（CBDB 126819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126819&o=json)
- [中国历代人物传记资料库：王德宣（CBDB 218713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json)
- [中国历代人物传记资料库：王衡（CBDB 218701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218701&o=json)
- [中国历代人物传记资料库：王士望（CBDB 218704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json)
- [中国历代人物传记资料库：王廷俊（CBDB 218710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json)
- [中国历代人物传记资料库：王宗舜（CBDB 218702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218702&o=json)
