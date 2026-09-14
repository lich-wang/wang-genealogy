---
schema: wang-person/v1
id: p_DVj3x7bTLNfdzZiuwDwTNz
status: active
merged_into: null
display_name: 王應選
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fxBWYhE8ZHQGCdSAhYBnh6
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zUjvNJTzA2NiBrRz2o54pN
          claim_id: c_fxBWYhE8ZHQGCdSAhYBnh6
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: CBDB:206025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206025）
          source: &a1
            id: s_N92t1qt6tC69nFxar3kdyC
            source_type: api_record
            title: 中国历代人物传记资料库：王應選（CBDB 206025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json
            external_identifier: CBDB:206025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_583SH8EBmBgPydmdF67Bjj
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
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
        - id: cs_Yf7vxP7HShTVKBPfr7JmQA
          claim_id: c_583SH8EBmBgPydmdF67Bjj
          source_id: s_N92t1qt6tC69nFxar3kdyC
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
        id: c_4FH2StkdcHwpCxfMpAYgHh
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應選（生于1539年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 206025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IoPXgdLuWW7yeaLZIJ7yAx
          claim_id: c_4FH2StkdcHwpCxfMpAYgHh
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: CBDB:206025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i2cnYUv5DyaBGRhmOJXKO9
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hrFkJ3WZPlubIIuUO8kMKw
          claim_id: c_i2cnYUv5DyaBGRhmOJXKO9
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ihrtmmYxDE76Umzs4UE6Cs
        status: active
        display_name: 王亮采
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hpMTWDB69MIOXqPRgnho8M
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KbGBHQQQbKRJiB323Cmdqx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNr56flgO03oaHiRlg2P8T
          claim_id: c_hpMTWDB69MIOXqPRgnho8M
          source_id: s_El80vI06f8KErKKnrUKXiw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_El80vI06f8KErKKnrUKXiw
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王應選妻)（CBDB 212300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212300&o=json
            external_identifier: CBDB:212300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KbGBHQQQbKRJiB323Cmdqx
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_G9WKEKd2-oiCHhulONfELw
        subject_person_id: p_mK5D2X8Ro4CfZ376aeXdHw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_615pO42QSdNpGWnGjYjB7x
          claim_id: c_G9WKEKd2-oiCHhulONfELw
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mK5D2X8Ro4CfZ376aeXdHw
        status: active
        display_name: 王鋼
        merged_into_person_id: null
    - claim:
        id: c_B5yBVZ1_QHAEdLisfEE5xB
        subject_person_id: p_f9fKkrpc2WRdSRBHDWdsek
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hcTh8dlFhfo23ViNSd6A3W
          claim_id: c_B5yBVZ1_QHAEdLisfEE5xB
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f9fKkrpc2WRdSRBHDWdsek
        status: active
        display_name: 王游
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_uWPl8rP_ZUVNCLFWkuxNru
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73P334QscL-CO_fadfNWWn
          claim_id: c_uWPl8rP_ZUVNCLFWkuxNru
          source_id: s_Vva3psO_cBw6sfCqCvEqPR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Vva3psO_cBw6sfCqCvEqPR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1y18Ba6vJZgtotJSEi5dQB
        status: active
        display_name: 王應春
        merged_into_person_id: null
    - claim:
        id: c_FDsw_gEiO3jXV7eZzr1xDR
        subject_person_id: p_6bYAjEoYQhAkcu4EHY3t9N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGUzDTxRSZBrrMmLdaF0kZ
          claim_id: c_FDsw_gEiO3jXV7eZzr1xDR
          source_id: s_lqhiPr-L17iyBlC9aLAt6o
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lqhiPr-L17iyBlC9aLAt6o
            source_type: api_record
            title: 中国历代人物传记资料库：王㸅（CBDB 212307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212307&o=json
            external_identifier: CBDB:212307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6bYAjEoYQhAkcu4EHY3t9N
        status: active
        display_name: 王㸅
        merged_into_person_id: null
    - claim:
        id: c_G3xgZg4q9VnmzGMTv5ngfD
        subject_person_id: p_952bj193cEMGV1CkMmx8Mx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Lmqxa64AJLI244PlrPUVR
          claim_id: c_G3xgZg4q9VnmzGMTv5ngfD
          source_id: s_RvcKLZ_G0D2df20ohfoz58
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RvcKLZ_G0D2df20ohfoz58
            source_type: api_record
            title: 中国历代人物传记资料库：王應秋（CBDB 212301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json
            external_identifier: CBDB:212301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_952bj193cEMGV1CkMmx8Mx
        status: active
        display_name: 王應秋
        merged_into_person_id: null
    - claim:
        id: c_avIFsG6aIks8ez_SZfWNm4
        subject_person_id: p_ArG513WdUNSgtVATnE6N2N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKkxJGWe0Fc3JHxQkad_c3
          claim_id: c_avIFsG6aIks8ez_SZfWNm4
          source_id: s_EBwugeRpd2S-QIx2Z4HKGe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EBwugeRpd2S-QIx2Z4HKGe
            source_type: api_record
            title: 中国历代人物传记资料库：王燭（CBDB 212302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212302&o=json
            external_identifier: CBDB:212302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ArG513WdUNSgtVATnE6N2N
        status: active
        display_name: 王燭
        merged_into_person_id: null
    - claim:
        id: c_VrHmoWAxd2MkcHzHjPkxxV
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EbnPei14Yt5DuHpobpEWS9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3Q2OR6dBweXbc3jVT5Fc9
          claim_id: c_VrHmoWAxd2MkcHzHjPkxxV
          source_id: s_7vpCMv8Cqev4m_FZq1jjTQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7vpCMv8Cqev4m_FZq1jjTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 212305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json
            external_identifier: CBDB:212305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EbnPei14Yt5DuHpobpEWS9
        status: active
        display_name: 王應奎
        merged_into_person_id: null
    - claim:
        id: c_ZPIXWgQYIDdf-jXX3Kzquj
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nTTQBy1ebbRRVzyLiUqc5G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4Gfy6Ar7UWEgtfa838yhT
          claim_id: c_ZPIXWgQYIDdf-jXX3Kzquj
          source_id: s_nrjE75vJrwQXvV0fsosFoi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nrjE75vJrwQXvV0fsosFoi
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 212306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212306&o=json
            external_identifier: CBDB:212306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nTTQBy1ebbRRVzyLiUqc5G
        status: active
        display_name: 王應祥
        merged_into_person_id: null
---

# 王應選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應選 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王應選（生于1539年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 206025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ihrtmmYxDE76Umzs4UE6Cs | 王亮采 | accepted |
| spouses | p_KbGBHQQQbKRJiB323Cmdqx | 陳氏 | accepted |
| ancestors | p_mK5D2X8Ro4CfZ376aeXdHw | 王鋼 | accepted |
| ancestors | p_f9fKkrpc2WRdSRBHDWdsek | 王游 | accepted |
| other | p_1y18Ba6vJZgtotJSEi5dQB | 王應春 | accepted |
| other | p_6bYAjEoYQhAkcu4EHY3t9N | 王㸅 | accepted |
| other | p_952bj193cEMGV1CkMmx8Mx | 王應秋 | accepted |
| other | p_ArG513WdUNSgtVATnE6N2N | 王燭 | accepted |
| other | p_EbnPei14Yt5DuHpobpEWS9 | 王應奎 | accepted |
| other | p_nTTQBy1ebbRRVzyLiUqc5G | 王應祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王應選妻)（CBDB 212300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212300&o=json)
- [中国历代人物传记资料库：王應春（CBDB 212304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 212305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json)
- [中国历代人物传记资料库：王應秋（CBDB 212301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 212306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212306&o=json)
- [中国历代人物传记资料库：王應選（CBDB 206025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json)
- [中国历代人物传记资料库：王燭（CBDB 212302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212302&o=json)
- [中国历代人物传记资料库：王㸅（CBDB 212307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212307&o=json)
