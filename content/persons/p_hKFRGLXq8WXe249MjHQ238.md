---
schema: wang-person/v1
id: p_hKFRGLXq8WXe249MjHQ238
status: active
merged_into: null
display_name: 王晉俗
cbdb_id: 141177
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Q8AvN8qAs4xeVkPAc1DM6
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉俗，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gLsKXmTjKRbOymEMMkLhiM
          claim_id: c_1Q8AvN8qAs4xeVkPAc1DM6
          source_id: s_DTRZ3DmwiPEfvNXguhFYfh
          stance: supports
          locator: CBDB:141177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DTRZ3DmwiPEfvNXguhFYfh
            source_type: api_record
            title: 中国历代人物传记资料库：王晉俗（CBDB 141177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141177&o=json
            external_identifier: CBDB:141177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3B8NffksPRnDFCqHWvoDK
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉俗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wQiXeeReCfJrXdMMw3iy9q
          claim_id: c_V3B8NffksPRnDFCqHWvoDK
          source_id: s_DTRZ3DmwiPEfvNXguhFYfh
          stance: supports
          locator: CBDB:141177
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eoOTskhfE9_toJJ11UgcT1
        subject_person_id: p_v5MmEJDe32K8rngH1eRyit
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hKFRGLXq8WXe249MjHQ238
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSkcu3bA6joKvKU67Zy186
          claim_id: c_eoOTskhfE9_toJJ11UgcT1
          source_id: s_eRjPPHRRLEmcobb1rB25Sn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eRjPPHRRLEmcobb1rB25Sn
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 152434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152434&o=json
            external_identifier: CBDB:152434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v5MmEJDe32K8rngH1eRyit
        status: active
        display_name: 王琰
        merged_into_person_id: null
  children:
    - claim:
        id: c_sBpo8SlWXq0JB5VpfwdbLt
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHe4HjfevV_8D0YtWKs2c9
          claim_id: c_sBpo8SlWXq0JB5VpfwdbLt
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3avEwiiC8ybCtwy5vRfFf
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 140524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json
            external_identifier: CBDB:140524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3Nub68EqFpWgDf9Bo4NNh
        status: active
        display_name: 王怡
        merged_into_person_id: null
    - claim:
        id: c_5SEYL_QjmJHPYuM4tAIl9U
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EtqfqDDuQtb8WTLKx29oE8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tVkelUrqcndes3lTHUV3mQ
          claim_id: c_5SEYL_QjmJHPYuM4tAIl9U
          source_id: s_X6Vej1jufKMo3we1MZzwzd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X6Vej1jufKMo3we1MZzwzd
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 154883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154883&o=json
            external_identifier: CBDB:154883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EtqfqDDuQtb8WTLKx29oE8
        status: active
        display_name: 王惟
        merged_into_person_id: null
    - claim:
        id: c_2wkWxjaSi1wWg5KiydfK-i
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPPdwAmBzRv6YhCoU8U8kn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7QiCglr2rpE7TEB8q69tM
          claim_id: c_2wkWxjaSi1wWg5KiydfK-i
          source_id: s_wBL3fzq1DArkukGz1zmCsP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wBL3fzq1DArkukGz1zmCsP
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 154882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154882&o=json
            external_identifier: CBDB:154882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wPPdwAmBzRv6YhCoU8U8kn
        status: active
        display_name: 王悅
        merged_into_person_id: null
    - claim:
        id: c_43NoAQzBvp0SYdANuqGSAG
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7WBLGY5ofFz7HU1FFsNSh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx4-o4hvS3Z8rxxlv8w-sh
          claim_id: c_43NoAQzBvp0SYdANuqGSAG
          source_id: s_XpymcQvkXesikT6ZRGV6Vt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XpymcQvkXesikT6ZRGV6Vt
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 154881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154881&o=json
            external_identifier: CBDB:154881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_X7WBLGY5ofFz7HU1FFsNSh
        status: active
        display_name: 王恆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晉俗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晉俗，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141177） | accepted |
| name.primary | 王晉俗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v5MmEJDe32K8rngH1eRyit | 王琰 | accepted |
| children | p_A3Nub68EqFpWgDf9Bo4NNh | 王怡 | accepted |
| children | p_EtqfqDDuQtb8WTLKx29oE8 | 王惟 | accepted |
| children | p_wPPdwAmBzRv6YhCoU8U8kn | 王悅 | accepted |
| children | p_X7WBLGY5ofFz7HU1FFsNSh | 王恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 154881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154881&o=json)
- [中国历代人物传记资料库：王晉俗（CBDB 141177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141177&o=json)
- [中国历代人物传记资料库：王惟（CBDB 154883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154883&o=json)
- [中国历代人物传记资料库：王琰（CBDB 152434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152434&o=json)
- [中国历代人物传记资料库：王怡（CBDB 140524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json)
- [中国历代人物传记资料库：王悅（CBDB 154882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154882&o=json)
