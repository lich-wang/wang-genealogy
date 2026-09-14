---
schema: wang-person/v1
id: p_SGWPi4n8QUjY5AE1caMiEq
status: active
merged_into: null
display_name: 王傑
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGYUYanQXTztK7xAcELN9W
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HXPuoHtZNNxk6wZ9GoDzHq
          claim_id: c_pGYUYanQXTztK7xAcELN9W
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
          stance: supports
          locator: CBDB:204108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204108）
          source: &a1
            id: s_eFGLzDAVuuNao9ZLPcjNaj
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 204108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204108&o=json
            external_identifier: CBDB:204108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UKYUYH8thAUk3EXiM4TQHB
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CatzzAmiXXKcDTMknqLu1g
          claim_id: c_UKYUYH8thAUk3EXiM4TQHB
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
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
        id: c_pGFTpb1n5WkWrE3dZLYRNv
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑（生于1515年），明人物。明清進士進士，籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 204108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KRaoxRQQt41QRKoyrry9gw
          claim_id: c_pGFTpb1n5WkWrE3dZLYRNv
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
          stance: supports
          locator: CBDB:204108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fn-nDPo_QKcv4W1Vf9QSEX
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqWctAKkcklbI5a7-ENEV5
          claim_id: c_fn-nDPo_QKcv4W1Vf9QSEX
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3bUYPAJ3VBmeuq3LMyjgZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王滔（CBDB 314532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json
            external_identifier: CBDB:314532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mz9BXCY2MrMzrtedYeaKMu
        status: active
        display_name: 王滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ynRVn8ABpi6Rsq3XUMUGrT
        subject_person_id: p_3EE7i32dLDmsve95JNsPmg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vfla_krs8BkGa7Kid9TY2N
          claim_id: c_ynRVn8ABpi6Rsq3XUMUGrT
          source_id: s_ULVtcr5CrszB6k2sEGJKie
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ULVtcr5CrszB6k2sEGJKie
            source_type: api_record
            title: 中国历代人物传记资料库：王盤（CBDB 314531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314531&o=json
            external_identifier: CBDB:314531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3EE7i32dLDmsve95JNsPmg
        status: active
        display_name: 王盤
        merged_into_person_id: null
    - claim:
        id: c_ROwzxHPxRsEF1fzElyVJsb
        subject_person_id: p_hswpPvKbzAtg24GiziCtp1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQoAR-oID9Jnr6APSzCgen
          claim_id: c_ROwzxHPxRsEF1fzElyVJsb
          source_id: s_w5pfbTmuXssnF7qiBLmcoG
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w5pfbTmuXssnF7qiBLmcoG
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 314530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314530&o=json
            external_identifier: CBDB:314530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hswpPvKbzAtg24GiziCtp1
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_LIjkwMPrn1MdmiaecWjEAr
        subject_person_id: p_Ajw6Fqyss17DGRpSEdXew1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4UpYT2SSCQOdWDdyg4VReW
          claim_id: c_LIjkwMPrn1MdmiaecWjEAr
          source_id: s_hnq2vehJBosS7WejEuBCQn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hnq2vehJBosS7WejEuBCQn
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 314542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314542&o=json
            external_identifier: CBDB:314542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ajw6Fqyss17DGRpSEdXew1
        status: active
        display_name: 王樂
        merged_into_person_id: null
    - claim:
        id: c_NejASGx9nIYL9j2lQz1goc
        subject_person_id: p_BMr8fHe6qjj9pcZdEtmZ7G
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3o73p6GxbhUckyG3FFbe8a
          claim_id: c_NejASGx9nIYL9j2lQz1goc
          source_id: s_T2i3ti6i5gXuEq6WrM-6WR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T2i3ti6i5gXuEq6WrM-6WR
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 314543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314543&o=json
            external_identifier: CBDB:314543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BMr8fHe6qjj9pcZdEtmZ7G
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_vBEVGkf__dA4f7FliTdDTB
        subject_person_id: p_C5KPY2rU8Xhk2zhHW5t6TH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Lu8gtgb8PRs0a2d7hXqK2
          claim_id: c_vBEVGkf__dA4f7FliTdDTB
          source_id: s_hL05Tf1q5OpOBLJkdF2M28
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hL05Tf1q5OpOBLJkdF2M28
            source_type: api_record
            title: 中国历代人物传记资料库：王梯（CBDB 314541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314541&o=json
            external_identifier: CBDB:314541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5KPY2rU8Xhk2zhHW5t6TH
        status: active
        display_name: 王梯
        merged_into_person_id: null
    - claim:
        id: c_xb6f5RK9XoBZS6QY0edzls
        subject_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9IpV7QiDP_ghP0dO4_QwIg
          claim_id: c_xb6f5RK9XoBZS6QY0edzls
          source_id: s_J6geewZld3LIFnmZYtWk0f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J6geewZld3LIFnmZYtWk0f
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 314537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json
            external_identifier: CBDB:314537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ee4iFkc9roSHJWdXooW3sy
        status: active
        display_name: 王榜
        merged_into_person_id: null
    - claim:
        id: c_mP8rRHBxTdtnvMRldPYxJY
        subject_person_id: p_QnFzyqPLNBaxunjvwAc26X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mA7TqjzY2yuoczc-Jvmwo0
          claim_id: c_mP8rRHBxTdtnvMRldPYxJY
          source_id: s_8PF7r75d8i486yePiq5YCl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8PF7r75d8i486yePiq5YCl
            source_type: api_record
            title: 中国历代人物传记资料库：王杏（CBDB 314540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314540&o=json
            external_identifier: CBDB:314540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QnFzyqPLNBaxunjvwAc26X
        status: active
        display_name: 王杏
        merged_into_person_id: null
    - claim:
        id: c_dp4mnsDS1Dvsd4DYoYTaiN
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UFDKS92oNLzJRy5ZNTb8oN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0XtygxPRd-vv9eyfZy-WLY
          claim_id: c_dp4mnsDS1Dvsd4DYoYTaiN
          source_id: s_6-uclET-5HFi9WSRvPq_y6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6-uclET-5HFi9WSRvPq_y6
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314536&o=json
            external_identifier: CBDB:314536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UFDKS92oNLzJRy5ZNTb8oN
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_0luVipxFHdy7GuINXV34BO
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s1RhRcXywNH5GQTB7Z7BjE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kz5ptWani4xqi43FGMEo2P
          claim_id: c_0luVipxFHdy7GuINXV34BO
          source_id: s_QPtgqWQU4IGtGHcKY0C8_c
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QPtgqWQU4IGtGHcKY0C8_c
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 314538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314538&o=json
            external_identifier: CBDB:314538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s1RhRcXywNH5GQTB7Z7BjE
        status: active
        display_name: 王本
        merged_into_person_id: null
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王傑（生于1515年），明人物。明清進士進士，籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 204108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mz9BXCY2MrMzrtedYeaKMu | 王滔 | accepted |
| ancestors | p_3EE7i32dLDmsve95JNsPmg | 王盤 | accepted |
| ancestors | p_hswpPvKbzAtg24GiziCtp1 | 王鏞 | accepted |
| other | p_Ajw6Fqyss17DGRpSEdXew1 | 王樂 | accepted |
| other | p_BMr8fHe6qjj9pcZdEtmZ7G | 王桐 | accepted |
| other | p_C5KPY2rU8Xhk2zhHW5t6TH | 王梯 | accepted |
| other | p_Ee4iFkc9roSHJWdXooW3sy | 王榜 | accepted |
| other | p_QnFzyqPLNBaxunjvwAc26X | 王杏 | accepted |
| other | p_UFDKS92oNLzJRy5ZNTb8oN | 王材 | accepted |
| other | p_s1RhRcXywNH5GQTB7Z7BjE | 王本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榜（CBDB 314537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json)
- [中国历代人物传记资料库：王本（CBDB 314538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314538&o=json)
- [中国历代人物传记资料库：王材（CBDB 314536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314536&o=json)
- [中国历代人物传记资料库：王傑（CBDB 204108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204108&o=json)
- [中国历代人物传记资料库：王樂（CBDB 314542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314542&o=json)
- [中国历代人物传记资料库：王盤（CBDB 314531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314531&o=json)
- [中国历代人物传记资料库：王滔（CBDB 314532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json)
- [中国历代人物传记资料库：王梯（CBDB 314541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314541&o=json)
- [中国历代人物传记资料库：王桐（CBDB 314543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314543&o=json)
- [中国历代人物传记资料库：王杏（CBDB 314540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314540&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 314530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314530&o=json)
