---
schema: wang-person/v1
id: p_4j28cTB4FbkC46frs3J8PW
status: active
merged_into: null
display_name: 王俸
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDrG9fLXbEXqV41iPPoiTk
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mykBzC7PFNiJNjAkfCw9Fw
          claim_id: c_pDrG9fLXbEXqV41iPPoiTk
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: CBDB:204993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204993）
          source: &a1
            id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 204993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json
            external_identifier: CBDB:204993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Cm38uejVYj3LFowku3z4zU
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3BANsqgGTEGLMugzaAnZ2
          claim_id: c_Cm38uejVYj3LFowku3z4zU
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
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
        id: c_Rp5QV56Cfb5jEjsF4BMVU9
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸（生于1534年），明人物。明清進士進士，籍贯秀水，入仕進士。（中国历代人物传记资料库 CBDB 204993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wZS_bGA08hWNEyHRS2XAG9
          claim_id: c_Rp5QV56Cfb5jEjsF4BMVU9
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: CBDB:204993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c8koLmQAzj6H9NTXzRsOmo
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4j28cTB4FbkC46frs3J8PW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkGN_FVoFU7M5yi_OkRtiL
          claim_id: c_c8koLmQAzj6H9NTXzRsOmo
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CYU3Lmv2NgFNx8uqhmJMJn
        status: active
        display_name: 王周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_89hA-Y8vHXTMRedV5iNw_0
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YtCtdN7YNku3PyQRz98krw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmSWWDZ1ZmgZXDVM3BQO4P
          claim_id: c_89hA-Y8vHXTMRedV5iNw_0
          source_id: s_1boo89w4uh_zPWwvfVOUBe
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1boo89w4uh_zPWwvfVOUBe
            source_type: api_record
            title: 中国历代人物传记资料库：顧氏(王俸妻)（CBDB 326926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326926&o=json
            external_identifier: CBDB:326926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YtCtdN7YNku3PyQRz98krw
        status: active
        display_name: 顧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KKdbVMNnrl22dwarzFuo-F
        subject_person_id: p_ptHknkqPUqxkwUQH4M34f1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4j28cTB4FbkC46frs3J8PW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNolO42VbpgrzAFg6bYfXq
          claim_id: c_KKdbVMNnrl22dwarzFuo-F
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ptHknkqPUqxkwUQH4M34f1
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c_cUHIZ9Th7bLHUb-3DVmZLz
        subject_person_id: p_b3DzMFD6PUKX3kbAmmh81b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4j28cTB4FbkC46frs3J8PW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tjph7yAKYs1WUpYFonyXJA
          claim_id: c_cUHIZ9Th7bLHUb-3DVmZLz
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b3DzMFD6PUKX3kbAmmh81b
        status: active
        display_name: 王瑜
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BxjVwitxsi7FxjGXluszlW
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5xAVa3shVSKKWDozY77843
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vUvHeDB6r3Mb9m90YBpjz
          claim_id: c_BxjVwitxsi7FxjGXluszlW
          source_id: s_dRhJNSqrFbbesJm5DZj8Rg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204993 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dRhJNSqrFbbesJm5DZj8Rg
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 326928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json
            external_identifier: CBDB:326928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5xAVa3shVSKKWDozY77843
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_0CUpJjcf3Ng9xH-xcjlpvu
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cXHv7PKynVHMNbBR9FMZQr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6w3W-FWnfeEyJWzFof9zrm
          claim_id: c_0CUpJjcf3Ng9xH-xcjlpvu
          source_id: s_OXRr7eeHJSX0y53-MgP2qP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204993 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OXRr7eeHJSX0y53-MgP2qP
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 326927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json
            external_identifier: CBDB:326927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cXHv7PKynVHMNbBR9FMZQr
        status: active
        display_name: 王化
        merged_into_person_id: null
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | 王俸（生于1534年），明人物。明清進士進士，籍贯秀水，入仕進士。（中国历代人物传记资料库 CBDB 204993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CYU3Lmv2NgFNx8uqhmJMJn | 王周 | accepted |
| spouses | p_YtCtdN7YNku3PyQRz98krw | 顧氏 | accepted |
| ancestors | p_ptHknkqPUqxkwUQH4M34f1 | 王賢 | accepted |
| ancestors | p_b3DzMFD6PUKX3kbAmmh81b | 王瑜 | accepted |
| other | p_5xAVa3shVSKKWDozY77843 | 王儼 | accepted |
| other | p_cXHv7PKynVHMNbBR9FMZQr | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧氏(王俸妻)（CBDB 326926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326926&o=json)
- [中国历代人物传记资料库：王俸（CBDB 204993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json)
- [中国历代人物传记资料库：王化（CBDB 326927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json)
- [中国历代人物传记资料库：王儼（CBDB 326928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json)
