---
schema: wang-person/v1
id: p_EubdaeFSWc8pKsGxhe2PFM
status: active
merged_into: null
display_name: 王學古
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2vTLhZWSyhVJjTj4Bp7Ka
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8aBkhovHYMnCpeRXD3z5hr
          claim_id: c_L2vTLhZWSyhVJjTj4Bp7Ka
          source_id: s_JPgUEN1u7YPCqTPCBashqU
          stance: supports
          locator: CBDB:205095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205095）
          source: &a1
            id: s_JPgUEN1u7YPCqTPCBashqU
            source_type: api_record
            title: 中国历代人物传记资料库：王學古（CBDB 205095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205095&o=json
            external_identifier: CBDB:205095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BTkKc8tgtj97nWTA2F79kt
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KZkEWt64aTtt1LGjDeapU
          claim_id: c_BTkKc8tgtj97nWTA2F79kt
          source_id: s_JPgUEN1u7YPCqTPCBashqU
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
        id: c_ze9Y4KtyJ2B9mi8xtXptBL
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古（生于1527年），明人物。明清進士進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 205095）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_atDlACFGVCQZ9oB8XXlNhl
          claim_id: c_ze9Y4KtyJ2B9mi8xtXptBL
          source_id: s_JPgUEN1u7YPCqTPCBashqU
          stance: supports
          locator: CBDB:205095
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SnhpLj1dfndDldT9yzANsl
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LymFw1VWJbC8JscJ7YZvWZ
          claim_id: c_SnhpLj1dfndDldT9yzANsl
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WWo3kG2R2Pqv7JiMi5mLqk
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 328246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json
            external_identifier: CBDB:328246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4rZFET2VU5QfJTezy8ktoQ
        status: active
        display_name: 王來召
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DRRxxVUzYLFNnuBaMGj4Le
        subject_person_id: p_AEoLvxREWsQv64x31fvdPq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjRtqRGi7rvOfPckAPciif
          claim_id: c_DRRxxVUzYLFNnuBaMGj4Le
          source_id: s_BeBTYcMcFuseukqVQsTkow
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BeBTYcMcFuseukqVQsTkow
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 328245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328245&o=json
            external_identifier: CBDB:328245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AEoLvxREWsQv64x31fvdPq
        status: active
        display_name: 王夔
        merged_into_person_id: null
    - claim:
        id: c_3mjTmYRtZN_DRjM2TQRq96
        subject_person_id: p_NW1w6vJKoibfXJvGkuM1JG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVKa0CWw2ibeEmHGwgWPyJ
          claim_id: c_3mjTmYRtZN_DRjM2TQRq96
          source_id: s_kQnAFasSQ9pPy7CXdEnMBY
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kQnAFasSQ9pPy7CXdEnMBY
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 328244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json
            external_identifier: CBDB:328244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NW1w6vJKoibfXJvGkuM1JG
        status: active
        display_name: 王文美
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_5HbXQwCdSuyvIJWx6_Dcvj
        subject_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ip32E-iZKkK3JHh8psC-lF
          claim_id: c_5HbXQwCdSuyvIJWx6_Dcvj
          source_id: s_OxX0WUFSrbURw70en3Sm-j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OxX0WUFSrbURw70en3Sm-j
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 328258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json
            external_identifier: CBDB:328258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2s8aBYKDBC3T1HYGSUcTDN
        status: active
        display_name: 王學淵
        merged_into_person_id: null
    - claim:
        id: c_E7LQHj4_bHzEkbptkF_Ftf
        subject_person_id: p_ApG3DVV2gRaJPESw5Nde1D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XDnyLZ4gTu16JWSFs1ijgU
          claim_id: c_E7LQHj4_bHzEkbptkF_Ftf
          source_id: s_MNk9h-4tBtUHRbQsCGP3iC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MNk9h-4tBtUHRbQsCGP3iC
            source_type: api_record
            title: 中国历代人物传记资料库：王學問（CBDB 328252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328252&o=json
            external_identifier: CBDB:328252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ApG3DVV2gRaJPESw5Nde1D
        status: active
        display_name: 王學問
        merged_into_person_id: null
    - claim:
        id: c_Dxf6RovNP3zrmUDeLMLBcF
        subject_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wWczqIlqbeo_rz8Hkc7zXE
          claim_id: c_Dxf6RovNP3zrmUDeLMLBcF
          source_id: s_MfD6O9BWI85vfRJrkyiLC9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MfD6O9BWI85vfRJrkyiLC9
            source_type: api_record
            title: 中国历代人物传记资料库：王學閩（CBDB 328256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json
            external_identifier: CBDB:328256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyDwnotNaEGHDTfCUEzzuL
        status: active
        display_name: 王學閩
        merged_into_person_id: null
    - claim:
        id: c_xRqlCa-sUIUca0vmH5B3Z3
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Us1c6VFylVSdLU9IyW_zU6
          claim_id: c_xRqlCa-sUIUca0vmH5B3Z3
          source_id: s_smZ2rhQrLzIWBgVofv33LB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_smZ2rhQrLzIWBgVofv33LB
            source_type: api_record
            title: 中国历代人物传记资料库：王學呂（CBDB 328250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json
            external_identifier: CBDB:328250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P3JXgAo8uqV4W8uPXgoVMo
        status: active
        display_name: 王學呂
        merged_into_person_id: null
    - claim:
        id: c_Opc3-C8OpT3Jo2OkSZWvI-
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_avLQ7dwMeTkL41yvPqo18f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hrYvinB_R9GsinGSwuQ_jO
          claim_id: c_Opc3-C8OpT3Jo2OkSZWvI-
          source_id: s_cW-dpF9HtXY1Ni3j9hWquZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cW-dpF9HtXY1Ni3j9hWquZ
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 328249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328249&o=json
            external_identifier: CBDB:328249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_avLQ7dwMeTkL41yvPqo18f
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_dpNn2oPC5FNKYRHG2vQhJ9
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bjuGL4Uk7bjH32ZBbY5LKt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUedG5Omi6agOvA8EivjkZ
          claim_id: c_dpNn2oPC5FNKYRHG2vQhJ9
          source_id: s_iE6xg75UAzG5AvUUCIWGZn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iE6xg75UAzG5AvUUCIWGZn
            source_type: api_record
            title: 中国历代人物传记资料库：王學閔（CBDB 328254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328254&o=json
            external_identifier: CBDB:328254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bjuGL4Uk7bjH32ZBbY5LKt
        status: active
        display_name: 王學閔
        merged_into_person_id: null
    - claim:
        id: c_QiRzDnWs5KQ2AVH5UPbf-h
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mKC9weEHWjFT3p3rLUuXK5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGkzT4cmfaScIOsEY5M34m
          claim_id: c_QiRzDnWs5KQ2AVH5UPbf-h
          source_id: s_slL-S2efElCgvXwD6pqhwv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_slL-S2efElCgvXwD6pqhwv
            source_type: api_record
            title: 中国历代人物传记资料库：王學關（CBDB 328255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328255&o=json
            external_identifier: CBDB:328255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mKC9weEHWjFT3p3rLUuXK5
        status: active
        display_name: 王學關
        merged_into_person_id: null
    - claim:
        id: c_-WfCPvG_25fvj_sHqo8qpv
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a09L9tvB3TO66bZUcwTYwF
          claim_id: c_-WfCPvG_25fvj_sHqo8qpv
          source_id: s_uEgBcY-it8n3FgujHeRCze
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEgBcY-it8n3FgujHeRCze
            source_type: api_record
            title: 中国历代人物传记资料库：王學洛（CBDB 328257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json
            external_identifier: CBDB:328257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rEn5d5M4F5rsvt2FFZCJAG
        status: active
        display_name: 王學洛
        merged_into_person_id: null
---

# 王學古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學古 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | 王學古（生于1527年），明人物。明清進士進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 205095） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| ancestors | p_AEoLvxREWsQv64x31fvdPq | 王夔 | accepted |
| ancestors | p_NW1w6vJKoibfXJvGkuM1JG | 王文美 | accepted |
| other | p_2s8aBYKDBC3T1HYGSUcTDN | 王學淵 | accepted |
| other | p_ApG3DVV2gRaJPESw5Nde1D | 王學問 | accepted |
| other | p_DyDwnotNaEGHDTfCUEzzuL | 王學閩 | accepted |
| other | p_P3JXgAo8uqV4W8uPXgoVMo | 王學呂 | accepted |
| other | p_avLQ7dwMeTkL41yvPqo18f | 王學詩 | accepted |
| other | p_bjuGL4Uk7bjH32ZBbY5LKt | 王學閔 | accepted |
| other | p_mKC9weEHWjFT3p3rLUuXK5 | 王學關 | accepted |
| other | p_rEn5d5M4F5rsvt2FFZCJAG | 王學洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 328245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328245&o=json)
- [中国历代人物传记资料库：王來召（CBDB 328246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json)
- [中国历代人物传记资料库：王文美（CBDB 328244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json)
- [中国历代人物传记资料库：王學古（CBDB 205095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205095&o=json)
- [中国历代人物传记资料库：王學關（CBDB 328255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328255&o=json)
- [中国历代人物传记资料库：王學呂（CBDB 328250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json)
- [中国历代人物传记资料库：王學洛（CBDB 328257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json)
- [中国历代人物传记资料库：王學閔（CBDB 328254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328254&o=json)
- [中国历代人物传记资料库：王學閩（CBDB 328256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 328249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328249&o=json)
- [中国历代人物传记资料库：王學問（CBDB 328252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328252&o=json)
- [中国历代人物传记资料库：王學淵（CBDB 328258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json)
