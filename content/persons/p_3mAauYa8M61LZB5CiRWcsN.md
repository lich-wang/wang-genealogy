---
schema: wang-person/v1
id: p_3mAauYa8M61LZB5CiRWcsN
status: active
merged_into: null
display_name: 王崇
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pEjFgkRgmhhHr4ZFm8LLKJ
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zbSoMMEHEs5CRmHA5yk8WG
          claim_id: c_pEjFgkRgmhhHr4ZFm8LLKJ
          source_id: s_igwudz9aT2smGBUd49MDRf
          stance: supports
          locator: CBDB:198899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198899）
          source: &a1
            id: s_igwudz9aT2smGBUd49MDRf
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 198899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198899&o=json
            external_identifier: CBDB:198899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NQvG3F3oQptFzyX21ZqhpT
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odjM4Ex3uNrz7Lh2uWuVCk
          claim_id: c_NQvG3F3oQptFzyX21ZqhpT
          source_id: s_igwudz9aT2smGBUd49MDRf
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
        id: c_ALjwi8Y12p6zdB7h1uG8QQ
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇（生于1428年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 198899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JWou6c83q3rcjNrmhXk0T_
          claim_id: c_ALjwi8Y12p6zdB7h1uG8QQ
          source_id: s_igwudz9aT2smGBUd49MDRf
          stance: supports
          locator: CBDB:198899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yZC-wx0xvdiWDsIhDArEw-
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnA3xB0dWd-_vY-E-tf5Sn
          claim_id: c_yZC-wx0xvdiWDsIhDArEw-
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1bhXJAXaVpf689XsatKT86
        status: active
        display_name: 王公冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aAUm54laWpKo7kIQekINfd
        subject_person_id: p_32HrxL1829R9R83frFBagU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfWohBLq6t5Um-i_YKiZWX
          claim_id: c_aAUm54laWpKo7kIQekINfd
          source_id: s_fdv118UJ2LwvQFq3opAdUM
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fdv118UJ2LwvQFq3opAdUM
            source_type: api_record
            title: 中国历代人物传记资料库：王伯脩（CBDB 332811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332811&o=json
            external_identifier: CBDB:332811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32HrxL1829R9R83frFBagU
        status: active
        display_name: 王伯脩
        merged_into_person_id: null
    - claim:
        id: c_B-VI3jW3Xg1QDoIYTDVMWj
        subject_person_id: p_MBN6oFuGrYdJby5Q2jFoXA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7eaeZ4Ni6WwBjke6YgwYLc
          claim_id: c_B-VI3jW3Xg1QDoIYTDVMWj
          source_id: s_BvW5VPzJ88YRk2od2rLnVE
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BvW5VPzJ88YRk2od2rLnVE
            source_type: api_record
            title: 中国历代人物传记资料库：王子丕（CBDB 332822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332822&o=json
            external_identifier: CBDB:332822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MBN6oFuGrYdJby5Q2jFoXA
        status: active
        display_name: 王子丕
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_84xoql79n9eOA5QZwlisQR
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N7LCVcZXSYwiwG743AcXBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYwP2ZWWx1ZIwgyYMZBXj1
          claim_id: c_84xoql79n9eOA5QZwlisQR
          source_id: s_L385Zl8UjqkFasSWvL8-7I
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L385Zl8UjqkFasSWvL8-7I
            source_type: api_record
            title: 中国历代人物传记资料库：王崢（CBDB 332866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332866&o=json
            external_identifier: CBDB:332866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7LCVcZXSYwiwG743AcXBe
        status: active
        display_name: 王崢
        merged_into_person_id: null
    - claim:
        id: c_SHvLLWiYHG__-IUB2EAvIf
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9pMEFWIpR6BoexlJWt8Xkt
          claim_id: c_SHvLLWiYHG__-IUB2EAvIf
          source_id: s_prXpst5PaW0FWrVUk_leZQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_prXpst5PaW0FWrVUk_leZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嶸（CBDB 332922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json
            external_identifier: CBDB:332922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yap43sMPPgQeMHyWeaNJ3S
        status: active
        display_name: 王嶸
        merged_into_person_id: null
    - claim:
        id: c_6LwOpQo5hPOdiWeICHgoaI
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cCkuUqyrSEwXPGDf3QRiyw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iAh8SFDRysvgelf9qOGivv
          claim_id: c_6LwOpQo5hPOdiWeICHgoaI
          source_id: s_QbavqfopkkrKaYegBP_4su
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QbavqfopkkrKaYegBP_4su
            source_type: api_record
            title: 中国历代人物传记资料库：王嶨（CBDB 332911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332911&o=json
            external_identifier: CBDB:332911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCkuUqyrSEwXPGDf3QRiyw
        status: active
        display_name: 王嶨
        merged_into_person_id: null
    - claim:
        id: c_RKRjspA-hR0ebFpVBeIlYW
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dy27ajzh3QzQRxcmcsRwGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVxwBLtK_mZIdjLHEnM8uO
          claim_id: c_RKRjspA-hR0ebFpVBeIlYW
          source_id: s_l3JHEU8bsb4nXF7KGUz4-2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l3JHEU8bsb4nXF7KGUz4-2
            source_type: api_record
            title: 中国历代人物传记资料库：王岏（CBDB 332877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332877&o=json
            external_identifier: CBDB:332877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dy27ajzh3QzQRxcmcsRwGE
        status: active
        display_name: 王岏
        merged_into_person_id: null
    - claim:
        id: c_ei9fZx8SF2LCYwcQNmuW_Q
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DdK_vzjsuwh9YMq19dj45Z
          claim_id: c_ei9fZx8SF2LCYwcQNmuW_Q
          source_id: s_lQfjOL2tqGKES3mCWMXVaw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lQfjOL2tqGKES3mCWMXVaw
            source_type: api_record
            title: 中国历代人物传记资料库：王岫（CBDB 332900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json
            external_identifier: CBDB:332900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kv4sjC5VXhvz3Tw97ERrL6
        status: active
        display_name: 王岫
        merged_into_person_id: null
    - claim:
        id: c_lC6kGcgrG47ucNOJ3Et0iT
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qGcgjetyzP3K3Bq2Gw8v4X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emKEKjwkiOske6IU7HyPNE
          claim_id: c_lC6kGcgrG47ucNOJ3Et0iT
          source_id: s_epgFCv9vaKwa5QuS-MU4Xp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_epgFCv9vaKwa5QuS-MU4Xp
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 332889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json
            external_identifier: CBDB:332889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGcgjetyzP3K3Bq2Gw8v4X
        status: active
        display_name: 王嵩
        merged_into_person_id: null
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | 王崇（生于1428年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 198899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1bhXJAXaVpf689XsatKT86 | 王公冕 | accepted |
| ancestors | p_32HrxL1829R9R83frFBagU | 王伯脩 | accepted |
| ancestors | p_MBN6oFuGrYdJby5Q2jFoXA | 王子丕 | accepted |
| other | p_N7LCVcZXSYwiwG743AcXBe | 王崢 | accepted |
| other | p_Yap43sMPPgQeMHyWeaNJ3S | 王嶸 | accepted |
| other | p_cCkuUqyrSEwXPGDf3QRiyw | 王嶨 | accepted |
| other | p_dy27ajzh3QzQRxcmcsRwGE | 王岏 | accepted |
| other | p_kv4sjC5VXhvz3Tw97ERrL6 | 王岫 | accepted |
| other | p_qGcgjetyzP3K3Bq2Gw8v4X | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯脩（CBDB 332811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332811&o=json)
- [中国历代人物传记资料库：王崇（CBDB 198899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198899&o=json)
- [中国历代人物传记资料库：王公冕（CBDB 332833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json)
- [中国历代人物传记资料库：王嶸（CBDB 332922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 332889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json)
- [中国历代人物传记资料库：王岏（CBDB 332877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332877&o=json)
- [中国历代人物传记资料库：王岫（CBDB 332900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json)
- [中国历代人物传记资料库：王嶨（CBDB 332911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332911&o=json)
- [中国历代人物传记资料库：王崢（CBDB 332866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332866&o=json)
- [中国历代人物传记资料库：王子丕（CBDB 332822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332822&o=json)
