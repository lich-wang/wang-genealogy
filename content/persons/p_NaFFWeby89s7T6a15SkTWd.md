---
schema: wang-person/v1
id: p_NaFFWeby89s7T6a15SkTWd
status: active
merged_into: null
display_name: 王德純
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2KYHt9AZtz1cvt3whUXAdc
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sC2Ean6r8WnsMz93burAJs
          claim_id: c_2KYHt9AZtz1cvt3whUXAdc
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: CBDB:213939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213939）
          source: &a1
            id: s_3GogRG36UmHxwwxTT7TDpC
            source_type: api_record
            title: 中国历代人物传记资料库：王德純（CBDB 213939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213939&o=json
            external_identifier: CBDB:213939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hzu445ZxqHzX6JmkWi3uvZ
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純，明人物。萬曆二年進士，籍贯清苑，曾任縣丞、刑部主事、承德郎。（中国历代人物传记资料库 CBDB 213939）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_54z57Tq1rGPN_guY9lE97U
          claim_id: c_hzu445ZxqHzX6JmkWi3uvZ
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: CBDB:213939
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LGO4lHsKVahGWDD0_ITuwR
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Omtqt8u_gi0qgo0CSaB1PU
          claim_id: c_LGO4lHsKVahGWDD0_ITuwR
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GDsYhHNBBkDcpWQEYco8Kg
        status: active
        display_name: 王開
        merged_into_person_id: null
    - claim:
        id: c_D4DvY966iPMeWs-snmaTgS
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GArFDB61sqJUSpCMFxHlDl
          claim_id: c_D4DvY966iPMeWs-snmaTgS
          source_id: s_ufJuGvhQ9G-np7HxpjPdk6
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闉 与 王開 为同胞（CBDB 记「弟」），王開 之父／母即 王闉 之父／母。
          source:
            id: s_ufJuGvhQ9G-np7HxpjPdk6
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 213943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json
            external_identifier: CBDB:213943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6aKDd5bp48i8wNWFQw3Ra1
        status: active
        display_name: 王闉
        merged_into_person_id: null
    - claim:
        id: c_Y8d06Pw612FhjDiL5G1CKf
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QkBBEgi-5AQP2b81_EJ3Fq
          claim_id: c_Y8d06Pw612FhjDiL5G1CKf
          source_id: s_SrwN4ELMcnuo8p2JuNiNRc
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闕 与 王開 为同胞（CBDB 记「兄」），王開 之父／母即 王闕 之父／母。
          source:
            id: s_SrwN4ELMcnuo8p2JuNiNRc
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 213945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json
            external_identifier: CBDB:213945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6brMKC1wiyW1Rf3Age6Z8j
        status: active
        display_name: 王闕
        merged_into_person_id: null
    - claim:
        id: c_gNoy8E2GKLG9EwMbeyNnTp
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9yAZ8HiJAXYanutZzigvBw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsM9uyL_vkS1mTW_l4PFDf
          claim_id: c_gNoy8E2GKLG9EwMbeyNnTp
          source_id: s_NknUqM7TJRKUaI2MUBdq1i
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閥 与 王開 为同胞（CBDB 记「弟」），王開 之父／母即 王閥 之父／母。
          source:
            id: s_NknUqM7TJRKUaI2MUBdq1i
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 213944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json
            external_identifier: CBDB:213944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9yAZ8HiJAXYanutZzigvBw
        status: active
        display_name: 王閥
        merged_into_person_id: null
    - claim:
        id: c_0PGkPxiT9NBAILlVMV7zpr
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PwACpjTAKGhdSig9N67kND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0F8jv_aLSpbt3HISNTGIJ
          claim_id: c_0PGkPxiT9NBAILlVMV7zpr
          source_id: s_BeLq5VbuzCq_MFAqcjGsKs
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閔 与 王開 为同胞（CBDB 记「兄」），王開 之父／母即 王閔 之父／母。
          source:
            id: s_BeLq5VbuzCq_MFAqcjGsKs
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 213946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213946&o=json
            external_identifier: CBDB:213946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PwACpjTAKGhdSig9N67kND
        status: active
        display_name: 王閔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德純 | accepted |
| bio.summary | 王德純，明人物。萬曆二年進士，籍贯清苑，曾任縣丞、刑部主事、承德郎。（中国历代人物传记资料库 CBDB 213939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GDsYhHNBBkDcpWQEYco8Kg | 王開 | accepted |
| children | p_6aKDd5bp48i8wNWFQw3Ra1 | 王闉 | accepted |
| children | p_6brMKC1wiyW1Rf3Age6Z8j | 王闕 | accepted |
| children | p_9yAZ8HiJAXYanutZzigvBw | 王閥 | accepted |
| children | p_PwACpjTAKGhdSig9N67kND | 王閔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 213939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213939&o=json)
- [中国历代人物传记资料库：王閥（CBDB 213944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json)
- [中国历代人物传记资料库：王閔（CBDB 213946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213946&o=json)
- [中国历代人物传记资料库：王闕（CBDB 213945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json)
- [中国历代人物传记资料库：王闉（CBDB 213943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json)
