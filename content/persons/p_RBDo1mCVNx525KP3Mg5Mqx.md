---
schema: wang-person/v1
id: p_RBDo1mCVNx525KP3Mg5Mqx
status: active
merged_into: null
display_name: 王鉞
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VwL46arjqsLSBiRptTddge
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MWVsoFat9QtDHCRyk2EFrM
          claim_id: c_VwL46arjqsLSBiRptTddge
          source_id: s_LvQUHn3wqMLHWJ277GDesV
          stance: supports
          locator: CBDB:234423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234423）
          source: &a1
            id: s_LvQUHn3wqMLHWJ277GDesV
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 234423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234423&o=json
            external_identifier: CBDB:234423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Es8HPFsowqCGb1RYmxKK1z
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。籍贯汶上。（中国历代人物传记资料库 CBDB 234423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_etfSHosmJjxTAdF9hDjpJh
          claim_id: c_Es8HPFsowqCGb1RYmxKK1z
          source_id: s_LvQUHn3wqMLHWJ277GDesV
          stance: supports
          locator: CBDB:234423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FIY87YS9brHm8k-ImycOTD
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EH9l9zgNhhzXsWPcCcqiFK
          claim_id: c_FIY87YS9brHm8k-ImycOTD
          source_id: s_LvQUHn3wqMLHWJ277GDesV
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
    - claim:
        id: c_-7uyLxl-HkOrjzZ4y7ZGgC
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1UZwxSQrk7J4REWeDmbQ7U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24WqPqv3_9qT21rXjYyWMa
          claim_id: c_-7uyLxl-HkOrjzZ4y7ZGgC
          source_id: s_qkzzvKvmHkB9IycYEurO14
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王自省 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王自省 之父／母。
          source:
            id: s_qkzzvKvmHkB9IycYEurO14
            source_type: api_record
            title: 中国历代人物传记资料库：王自省（CBDB 234427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234427&o=json
            external_identifier: CBDB:234427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1UZwxSQrk7J4REWeDmbQ7U
        status: active
        display_name: 王自省
        merged_into_person_id: null
    - claim:
        id: c_x5655sUMgmGCW2x0G5kSQS
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4zfcYJd5FkwiNeFa24NQmw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4vd_qBXQCBHcApTakN4pI
          claim_id: c_x5655sUMgmGCW2x0G5kSQS
          source_id: s_hyt7Xk6FvY58r8UXYI08zC
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王曆新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王曆新 之父／母。
          source:
            id: s_hyt7Xk6FvY58r8UXYI08zC
            source_type: api_record
            title: 中国历代人物传记资料库：王曆新（CBDB 234434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json
            external_identifier: CBDB:234434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4zfcYJd5FkwiNeFa24NQmw
        status: active
        display_name: 王曆新
        merged_into_person_id: null
    - claim:
        id: c_UVZQ1YiW5sU1ihutQgoirO
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5QoPdCGLNh3AFKD729c8r8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SuHUZjuWtZH423zI3x3ClM
          claim_id: c_UVZQ1YiW5sU1ihutQgoirO
          source_id: s_98w49GBKRH3TMCiYAZorqG
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王際新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王際新 之父／母。
          source:
            id: s_98w49GBKRH3TMCiYAZorqG
            source_type: api_record
            title: 中国历代人物传记资料库：王際新（CBDB 234436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234436&o=json
            external_identifier: CBDB:234436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5QoPdCGLNh3AFKD729c8r8
        status: active
        display_name: 王際新
        merged_into_person_id: null
    - claim:
        id: c__K7aNfSbj54Fm2hLialfXm
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Axqd5XkaT9NuwEDKBC97TW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8do-F0jya7Mys7VPIuJiOZ
          claim_id: c__K7aNfSbj54Fm2hLialfXm
          source_id: s_94AgTiXiXGD-KMcunvmWOn
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王合新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王合新 之父／母。
          source:
            id: s_94AgTiXiXGD-KMcunvmWOn
            source_type: api_record
            title: 中国历代人物传记资料库：王合新（CBDB 234432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234432&o=json
            external_identifier: CBDB:234432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Axqd5XkaT9NuwEDKBC97TW
        status: active
        display_name: 王合新
        merged_into_person_id: null
    - claim:
        id: c_KMXFYyZYPxkyPtO9TMTN5G
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GeKn9BcCAf5zuoKvTV3MAf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R36HFNV9bj4n6nu8q90bel
          claim_id: c_KMXFYyZYPxkyPtO9TMTN5G
          source_id: s_uxSzeWa5oOV0M4bNnUFmU9
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王化新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王化新 之父／母。
          source:
            id: s_uxSzeWa5oOV0M4bNnUFmU9
            source_type: api_record
            title: 中国历代人物传记资料库：王化新（CBDB 234433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234433&o=json
            external_identifier: CBDB:234433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GeKn9BcCAf5zuoKvTV3MAf
        status: active
        display_name: 王化新
        merged_into_person_id: null
    - claim:
        id: c_kcRncouHX7gsicak7LMKTr
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RozZ6h6P7z4p8jPGs658EF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lXgUxsBs04cocXD8xHnRYw
          claim_id: c_kcRncouHX7gsicak7LMKTr
          source_id: s_id35vsxxNhN4v3UgrCuhTw
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王應伸 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王應伸 之父／母。
          source:
            id: s_id35vsxxNhN4v3UgrCuhTw
            source_type: api_record
            title: 中国历代人物传记资料库：王應伸（CBDB 234429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234429&o=json
            external_identifier: CBDB:234429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RozZ6h6P7z4p8jPGs658EF
        status: active
        display_name: 王應伸
        merged_into_person_id: null
    - claim:
        id: c_4blJpC0Tm9x9ee-l1-P5fg
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_asUa71ZMBMEaaffPVDnbLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DurPxdLhaRZL8pMoSlbCyW
          claim_id: c_4blJpC0Tm9x9ee-l1-P5fg
          source_id: s_NoOB645o0_2lDnYBq2aSMC
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王擇 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王擇 之父／母。
          source:
            id: s_NoOB645o0_2lDnYBq2aSMC
            source_type: api_record
            title: 中国历代人物传记资料库：王擇（CBDB 234430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json
            external_identifier: CBDB:234430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_asUa71ZMBMEaaffPVDnbLN
        status: active
        display_name: 王擇
        merged_into_person_id: null
    - claim:
        id: c_jufJgZ1CAtcsh_R29y4Nio
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fqyGvHbLQv8UJwu7h95AiA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6G3eVdmCLNsSPQrlhzRYRH
          claim_id: c_jufJgZ1CAtcsh_R29y4Nio
          source_id: s_cyheDKQt-BmQp-ITL09Bbh
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王運新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王運新 之父／母。
          source:
            id: s_cyheDKQt-BmQp-ITL09Bbh
            source_type: api_record
            title: 中国历代人物传记资料库：王運新（CBDB 234431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json
            external_identifier: CBDB:234431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fqyGvHbLQv8UJwu7h95AiA
        status: active
        display_name: 王運新
        merged_into_person_id: null
    - claim:
        id: c_H0hvBHeGOJ3VS3GtdPxqYw
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sXBC6QJmxtxqjgvbdZ5qzb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FEgwl-n5PhGylsmG-9AvL_
          claim_id: c_H0hvBHeGOJ3VS3GtdPxqYw
          source_id: s_QnN-bizM6WVzGpz9SEcHq0
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王揚 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王揚 之父／母。
          source:
            id: s_QnN-bizM6WVzGpz9SEcHq0
            source_type: api_record
            title: 中国历代人物传记资料库：王揚（CBDB 234428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json
            external_identifier: CBDB:234428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sXBC6QJmxtxqjgvbdZ5qzb
        status: active
        display_name: 王揚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。籍贯汶上。（中国历代人物传记资料库 CBDB 234423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |
| children | p_1UZwxSQrk7J4REWeDmbQ7U | 王自省 | accepted |
| children | p_4zfcYJd5FkwiNeFa24NQmw | 王曆新 | accepted |
| children | p_5QoPdCGLNh3AFKD729c8r8 | 王際新 | accepted |
| children | p_Axqd5XkaT9NuwEDKBC97TW | 王合新 | accepted |
| children | p_GeKn9BcCAf5zuoKvTV3MAf | 王化新 | accepted |
| children | p_RozZ6h6P7z4p8jPGs658EF | 王應伸 | accepted |
| children | p_asUa71ZMBMEaaffPVDnbLN | 王擇 | accepted |
| children | p_fqyGvHbLQv8UJwu7h95AiA | 王運新 | accepted |
| children | p_sXBC6QJmxtxqjgvbdZ5qzb | 王揚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王合新（CBDB 234432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234432&o=json)
- [中国历代人物传记资料库：王化新（CBDB 234433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234433&o=json)
- [中国历代人物传记资料库：王際新（CBDB 234436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234436&o=json)
- [中国历代人物传记资料库：王曆新（CBDB 234434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json)
- [中国历代人物传记资料库：王揚（CBDB 234428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json)
- [中国历代人物传记资料库：王應伸（CBDB 234429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234429&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 234423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234423&o=json)
- [中国历代人物传记资料库：王運新（CBDB 234431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json)
- [中国历代人物传记资料库：王擇（CBDB 234430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json)
- [中国历代人物传记资料库：王自省（CBDB 234427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234427&o=json)
