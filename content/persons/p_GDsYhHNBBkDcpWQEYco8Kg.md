---
schema: wang-person/v1
id: p_GDsYhHNBBkDcpWQEYco8Kg
status: active
merged_into: null
display_name: 王開
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KnYGzPrK6AbDVx9vEu4Hm5
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GnjjGpReNZGMp3LE8dVtmP
          claim_id: c_KnYGzPrK6AbDVx9vEu4Hm5
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
          stance: supports
          locator: CBDB:206147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206147）
          source: &a1
            id: s_LoN73eTPqyTHv6CNWcjQ8W
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 206147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206147&o=json
            external_identifier: CBDB:206147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K5o3JGMkDqZc29U3uD76kE
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rcRWx9TMLWApCaauhy6dC
          claim_id: c_K5o3JGMkDqZc29U3uD76kE
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
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
        id: c_LKtfh7DeYeuzEcGxx72BXp
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開（生于1539年），明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 206147）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qtOBs6OP9mXLUE5mliLV0O
          claim_id: c_LKtfh7DeYeuzEcGxx72BXp
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
          stance: supports
          locator: CBDB:206147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_NaFFWeby89s7T6a15SkTWd
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Sdqt4dwkYDw3H6cCryhKWp
        subject_person_id: p_9VtJ7v2PnFxabdG54S3Qd2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-9b0QI-oOQjzL6qxPC18k
          claim_id: c_Sdqt4dwkYDw3H6cCryhKWp
          source_id: s_iCtF9Qkm3KNJPcyjL6BgPm
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iCtF9Qkm3KNJPcyjL6BgPm
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 213938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213938&o=json
            external_identifier: CBDB:213938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9VtJ7v2PnFxabdG54S3Qd2
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_9EakGRTTC7ibwh9wR0JVN6
        subject_person_id: p_iCDdDuM5ZBCiF7WJbVHsw1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VK4MyXXsNuO4q0kQTNDKHk
          claim_id: c_9EakGRTTC7ibwh9wR0JVN6
          source_id: s_hGz4X4QhRE4GfMma6PB6ck
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hGz4X4QhRE4GfMma6PB6ck
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 213936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213936&o=json
            external_identifier: CBDB:213936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iCDdDuM5ZBCiF7WJbVHsw1
        status: active
        display_name: 王浩
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CJ-F0zUvdeb_2aleiBGXxJ
        subject_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4KwWbf6u_bcwkf-MLF4eC
          claim_id: c_CJ-F0zUvdeb_2aleiBGXxJ
          source_id: s_ufJuGvhQ9G-np7HxpjPdk6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_zU8cI5GG9xTy97m9tZ4YVq
        subject_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiUz9heyUNcnPfoPa6OThw
          claim_id: c_zU8cI5GG9xTy97m9tZ4YVq
          source_id: s_SrwN4ELMcnuo8p2JuNiNRc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jNBTq0aPjp3KMMrNNtO6AE
        subject_person_id: p_9yAZ8HiJAXYanutZzigvBw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KlBAAp3-ugVLwfu_gshQNP
          claim_id: c_jNBTq0aPjp3KMMrNNtO6AE
          source_id: s_NknUqM7TJRKUaI2MUBdq1i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_B6aaiJaDkJcAd6KmviVsmk
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PwACpjTAKGhdSig9N67kND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UeEkIpQprR7YHqUPw8IbNs
          claim_id: c_B6aaiJaDkJcAd6KmviVsmk
          source_id: s_BeLq5VbuzCq_MFAqcjGsKs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王開（生于1539年），明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 206147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NaFFWeby89s7T6a15SkTWd | 王德純 | accepted |
| ancestors | p_9VtJ7v2PnFxabdG54S3Qd2 | 王恩 | accepted |
| ancestors | p_iCDdDuM5ZBCiF7WJbVHsw1 | 王浩 | accepted |
| other | p_6aKDd5bp48i8wNWFQw3Ra1 | 王闉 | accepted |
| other | p_6brMKC1wiyW1Rf3Age6Z8j | 王闕 | accepted |
| other | p_9yAZ8HiJAXYanutZzigvBw | 王閥 | accepted |
| other | p_PwACpjTAKGhdSig9N67kND | 王閔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 213939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213939&o=json)
- [中国历代人物传记资料库：王恩（CBDB 213938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213938&o=json)
- [中国历代人物传记资料库：王閥（CBDB 213944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json)
- [中国历代人物传记资料库：王浩（CBDB 213936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213936&o=json)
- [中国历代人物传记资料库：王開（CBDB 206147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206147&o=json)
- [中国历代人物传记资料库：王閔（CBDB 213946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213946&o=json)
- [中国历代人物传记资料库：王闕（CBDB 213945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json)
- [中国历代人物传记资料库：王闉（CBDB 213943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json)
