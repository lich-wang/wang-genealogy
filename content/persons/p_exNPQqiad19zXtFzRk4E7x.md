---
schema: wang-person/v1
id: p_exNPQqiad19zXtFzRk4E7x
status: active
merged_into: null
display_name: 王琦
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YgqJRAwFFDBGJ5WQDCQAHo
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o36LVSPnpSUhQ3brLsMMQ5
          claim_id: c_YgqJRAwFFDBGJ5WQDCQAHo
          source_id: s_KJ2LiRNY2XexW7aMiZuRKD
          stance: supports
          locator: CBDB:286065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286065）
          source: &a1
            id: s_KJ2LiRNY2XexW7aMiZuRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 286065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json
            external_identifier: CBDB:286065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XhHKRQfiYGPYQEyR2JdyXs
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦，明人物。正德十六年進士，籍贯金吾右衛，曾任府同知。（中国历代人物传记资料库 CBDB 286065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_860wb_qJZTwvjQwFcpEO1e
          claim_id: c_XhHKRQfiYGPYQEyR2JdyXs
          source_id: s_KJ2LiRNY2XexW7aMiZuRKD
          stance: supports
          locator: CBDB:286065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ibeI6KZV63buuQLp9TJ3rf
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3jg7aKUVMegM2yCV7Ho8T
          claim_id: c_ibeI6KZV63buuQLp9TJ3rf
          source_id: s_KJ2LiRNY2XexW7aMiZuRKD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UHUqHrmc3KJzYiDRgXCMg7
        status: active
        display_name: 王傅
        merged_into_person_id: null
    - claim:
        id: c_Ms1Kr8I4jEab0cDdCstXWK
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RaCULe8YbsQAC9UBv88tPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHawJSAfb4c7dpz8LqBPfp
          claim_id: c_Ms1Kr8I4jEab0cDdCstXWK
          source_id: s_hpYukY3Bp9Zp77uV6LVlPr
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王倫 之父／母。
          source:
            id: s_hpYukY3Bp9Zp77uV6LVlPr
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 286072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json
            external_identifier: CBDB:286072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RaCULe8YbsQAC9UBv88tPg
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_86Y-s5oINx6QrrzQP8Ux6p
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQbn6Zo-3MusSHhthsb4KS
          claim_id: c_86Y-s5oINx6QrrzQP8Ux6p
          source_id: s_cbWH3noehCRlNSh-hsLzUj
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王佑 之父／母。
          source:
            id: s_cbWH3noehCRlNSh-hsLzUj
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 286075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json
            external_identifier: CBDB:286075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJBWu9Xd2q6he7vBE6hr8A
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_ZCsnn4v-5GAG1G5NQdMFQk
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cPuUpFf9kMsmpGodkcuj9o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbfmrPYQFXcf2VehIKEuxk
          claim_id: c_ZCsnn4v-5GAG1G5NQdMFQk
          source_id: s_ajTFAFyMf-CUHhDprDTqm6
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王傑 之父／母。
          source:
            id: s_ajTFAFyMf-CUHhDprDTqm6
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 286071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286071&o=json
            external_identifier: CBDB:286071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cPuUpFf9kMsmpGodkcuj9o
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_1Ngj5veiooWsg6nvGJ0VDK
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZpp13ehssl2EP9DMi3odt
          claim_id: c_1Ngj5veiooWsg6nvGJ0VDK
          source_id: s_wHguomZVrx7aEgJUVdRfv8
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王佐 之父／母。
          source:
            id: s_wHguomZVrx7aEgJUVdRfv8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 286074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json
            external_identifier: CBDB:286074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iWnciWJEHsQCVoY8eMUtjv
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | 王琦，明人物。正德十六年進士，籍贯金吾右衛，曾任府同知。（中国历代人物传记资料库 CBDB 286065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UHUqHrmc3KJzYiDRgXCMg7 | 王傅 | accepted |
| children | p_RaCULe8YbsQAC9UBv88tPg | 王倫 | accepted |
| children | p_SJBWu9Xd2q6he7vBE6hr8A | 王佑 | accepted |
| children | p_cPuUpFf9kMsmpGodkcuj9o | 王傑 | accepted |
| children | p_iWnciWJEHsQCVoY8eMUtjv | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 286071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286071&o=json)
- [中国历代人物传记资料库：王倫（CBDB 286072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json)
- [中国历代人物传记资料库：王琦（CBDB 286065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json)
- [中国历代人物传记资料库：王佑（CBDB 286075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json)
- [中国历代人物传记资料库：王佐（CBDB 286074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json)
