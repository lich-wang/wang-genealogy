---
schema: wang-person/v1
id: p_emRFonnZuCJKKPb7oDivvy
status: active
merged_into: null
display_name: 王道直
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaTxFXaXArDsj1ixPnhjyG
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nqMA2h3RQ1qAi5RcuvwncX
          claim_id: c_QaTxFXaXArDsj1ixPnhjyG
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
          stance: supports
          locator: CBDB:204021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204021）
          source: &a1
            id: s_A8hUijcJXQq8JwoN2yTSsp
            source_type: api_record
            title: 中国历代人物传记资料库：王道直（CBDB 204021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204021&o=json
            external_identifier: CBDB:204021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EYcLk2JwBANJeh26qqXg8s
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jRop7sdcjx8k32w3uxyyx
          claim_id: c_EYcLk2JwBANJeh26qqXg8s
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
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
        id: c_wp99uJJ5h9V4wwMUTJifLN
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道直（生于1517年），明人物。明清進士進士，籍贯咸陽，入仕進士。（中国历代人物传记资料库 CBDB 204021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nn4tzGA-Jr9WLhD8TlZx8S
          claim_id: c_wp99uJJ5h9V4wwMUTJifLN
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
          stance: supports
          locator: CBDB:204021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CoPF9n7WeliGRoh4fqm7D2
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huOjUs1s-CVAWXguO5mMrR
          claim_id: c_CoPF9n7WeliGRoh4fqm7D2
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VpqdCQeZzzvdm8X8ssSNqu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 313336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json
            external_identifier: CBDB:313336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5g7L2cx4uEGXE6LnD5Pz5F
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YmOXiY3wlD5uOjTj4Mvs4j
        subject_person_id: p_9dndF91Cp3MxiCBxuANawM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8cRfHrYm-i3y83u5h3uaJ
          claim_id: c_YmOXiY3wlD5uOjTj4Mvs4j
          source_id: s_mS2EJeBETQ4KMtHcLozP4C
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mS2EJeBETQ4KMtHcLozP4C
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 313335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json
            external_identifier: CBDB:313335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9dndF91Cp3MxiCBxuANawM
        status: active
        display_name: 王才
        merged_into_person_id: null
    - claim:
        id: c_2S3fH34wuN6TOKbAlGuJCR
        subject_person_id: p_FJvozsV24nKnT7VfdoPWCG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hXlNbYF9wiXCyxYdIqLJcc
          claim_id: c_2S3fH34wuN6TOKbAlGuJCR
          source_id: s_ddyMY9r6uA18GATDufhd6U
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ddyMY9r6uA18GATDufhd6U
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 313334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313334&o=json
            external_identifier: CBDB:313334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FJvozsV24nKnT7VfdoPWCG
        status: active
        display_name: 王整
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8BNg7Y9i3YMLn8bA8ACqs2
        subject_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsoKpNMNSwUlGsipOGOrGW
          claim_id: c_8BNg7Y9i3YMLn8bA8ACqs2
          source_id: s_BR2DJ3W-IUzPMBnm2SNmgq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BR2DJ3W-IUzPMBnm2SNmgq
            source_type: api_record
            title: 中国历代人物传记资料库：王道寬（CBDB 313343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json
            external_identifier: CBDB:313343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LrWvySaKBSHFaZdPPoGS9Q
        status: active
        display_name: 王道寬
        merged_into_person_id: null
    - claim:
        id: c_KtgHVaWeL3dRWRs2Grnxne
        subject_person_id: p_Q9mDx1wUHCXGPCF1MmjhMu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e22YuK6if3snTerlMtOLS9
          claim_id: c_KtgHVaWeL3dRWRs2Grnxne
          source_id: s_NCcRpdikbC6FjcQQeFqDsE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NCcRpdikbC6FjcQQeFqDsE
            source_type: api_record
            title: 中国历代人物传记资料库：王道平（CBDB 313342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313342&o=json
            external_identifier: CBDB:313342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9mDx1wUHCXGPCF1MmjhMu
        status: active
        display_name: 王道平
        merged_into_person_id: null
    - claim:
        id: c_tj0fEHmrtosE4ec7CM4nsT
        subject_person_id: p_XYErMzjxPsiZD8kroR3G4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pB01gSEKRikabXWIY2DI_V
          claim_id: c_tj0fEHmrtosE4ec7CM4nsT
          source_id: s_iwAi0YHdJwaHGZfod6YiWQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iwAi0YHdJwaHGZfod6YiWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道正（CBDB 313341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313341&o=json
            external_identifier: CBDB:313341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XYErMzjxPsiZD8kroR3G4E
        status: active
        display_name: 王道正
        merged_into_person_id: null
    - claim:
        id: c_D08IL4WeuVUnomL-EVXk0r
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5TXLYPactGeeLE8QZ-q78
          claim_id: c_D08IL4WeuVUnomL-EVXk0r
          source_id: s_V_4pWNSbZh6rNKAzPIqcPc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V_4pWNSbZh6rNKAzPIqcPc
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 313345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json
            external_identifier: CBDB:313345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p2ds3eQx6gn32ZVKniwjr9
        status: active
        display_name: 王道成
        merged_into_person_id: null
    - claim:
        id: c_K9Xozp9RlQdp8mS6QXklo2
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wuS1SJFpyPHDuRTM9NL3yy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PNdYL7c1O_TK_ANzPmIKKp
          claim_id: c_K9Xozp9RlQdp8mS6QXklo2
          source_id: s_mleZo0mRNHHaMjB-Tte-6t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mleZo0mRNHHaMjB-Tte-6t
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 313344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json
            external_identifier: CBDB:313344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wuS1SJFpyPHDuRTM9NL3yy
        status: active
        display_name: 王道純
        merged_into_person_id: null
    - claim:
        id: c_qqSKtcWj7Wye0VAKFj9NL3
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_la8AcoDZxUDSJfNA4JMS6l
          claim_id: c_qqSKtcWj7Wye0VAKFj9NL3
          source_id: s_0rgHzgedvKSJyKf9NIBD59
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0rgHzgedvKSJyKf9NIBD59
            source_type: api_record
            title: 中国历代人物传记资料库：王道公（CBDB 313346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json
            external_identifier: CBDB:313346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xdMmyTQBkhL8iBNWY99mYL
        status: active
        display_name: 王道公
        merged_into_person_id: null
---

# 王道直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道直 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | 王道直（生于1517年），明人物。明清進士進士，籍贯咸陽，入仕進士。（中国历代人物传记资料库 CBDB 204021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5g7L2cx4uEGXE6LnD5Pz5F | 王獻 | accepted |
| ancestors | p_9dndF91Cp3MxiCBxuANawM | 王才 | accepted |
| ancestors | p_FJvozsV24nKnT7VfdoPWCG | 王整 | accepted |
| other | p_LrWvySaKBSHFaZdPPoGS9Q | 王道寬 | accepted |
| other | p_Q9mDx1wUHCXGPCF1MmjhMu | 王道平 | accepted |
| other | p_XYErMzjxPsiZD8kroR3G4E | 王道正 | accepted |
| other | p_p2ds3eQx6gn32ZVKniwjr9 | 王道成 | accepted |
| other | p_wuS1SJFpyPHDuRTM9NL3yy | 王道純 | accepted |
| other | p_xdMmyTQBkhL8iBNWY99mYL | 王道公 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 313335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json)
- [中国历代人物传记资料库：王道成（CBDB 313345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json)
- [中国历代人物传记资料库：王道純（CBDB 313344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json)
- [中国历代人物传记资料库：王道公（CBDB 313346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json)
- [中国历代人物传记资料库：王道寬（CBDB 313343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json)
- [中国历代人物传记资料库：王道平（CBDB 313342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313342&o=json)
- [中国历代人物传记资料库：王道正（CBDB 313341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313341&o=json)
- [中国历代人物传记资料库：王道直（CBDB 204021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204021&o=json)
- [中国历代人物传记资料库：王獻（CBDB 313336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json)
- [中国历代人物传记资料库：王整（CBDB 313334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313334&o=json)
