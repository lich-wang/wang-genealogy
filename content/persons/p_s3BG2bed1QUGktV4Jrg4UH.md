---
schema: wang-person/v1
id: p_s3BG2bed1QUGktV4Jrg4UH
status: active
merged_into: null
display_name: 王學書
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2kk8jaoQxPqHBUNiYytRUN
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h7UiS1HiofsTSDkmqom1ec
          claim_id: c_2kk8jaoQxPqHBUNiYytRUN
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
          stance: supports
          locator: CBDB:206005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206005）
          source: &a1
            id: s_WKDr1dswcQSmJcHF8n6G5x
            source_type: api_record
            title: 中国历代人物传记资料库：王學書（CBDB 206005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206005&o=json
            external_identifier: CBDB:206005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Wnj9yyKRDL9AKs44qgD1u4
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
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
        - id: cs_94cDky2e2mfhAG85mcD6UV
          claim_id: c_Wnj9yyKRDL9AKs44qgD1u4
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
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
        id: c_3Hy97eRtQNsnjNEfNrqBUy
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學書（生于1534年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 206005）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTUg98656FAh_ZAoyhcwK0
          claim_id: c_3Hy97eRtQNsnjNEfNrqBUy
          source_id: s_WKDr1dswcQSmJcHF8n6G5x
          stance: supports
          locator: CBDB:206005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eWQ6QTLLyN7hWGinxgz0Nt
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1nWjSKHOYGEbeeXaC_yYy
          claim_id: c_eWQ6QTLLyN7hWGinxgz0Nt
          source_id: s_BEDXWmZabRVmSBSSb2PEQu
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BEDXWmZabRVmSBSSb2PEQu
            source_type: api_record
            title: 中国历代人物传记资料库：王兌（CBDB 211980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json
            external_identifier: CBDB:211980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aEy4RxmjmGXnETHRGP3pm2
        status: active
        display_name: 王兌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DnZpOfR9b4Yv4v-Co_02vR
        subject_person_id: p_HQAnGUmDhovTFseQeXia8R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cu_NiBUdvxUTk-KumTMcHB
          claim_id: c_DnZpOfR9b4Yv4v-Co_02vR
          source_id: s_rrMLuAh4LqaZbyaArhstuy
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rrMLuAh4LqaZbyaArhstuy
            source_type: api_record
            title: 中国历代人物传记资料库：王勝（CBDB 211978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json
            external_identifier: CBDB:211978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HQAnGUmDhovTFseQeXia8R
        status: active
        display_name: 王勝
        merged_into_person_id: null
    - claim:
        id: c_RksMyzDz9Ely0Tb-nd9ofU
        subject_person_id: p_MrxHLGeDi5tr5p7y2EPuCv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-njGGN1gDpn2cwesg3CpK7
          claim_id: c_RksMyzDz9Ely0Tb-nd9ofU
          source_id: s_5h9Gdhhiw7L33Ujo7HV58k
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5h9Gdhhiw7L33Ujo7HV58k
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 211979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json
            external_identifier: CBDB:211979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrxHLGeDi5tr5p7y2EPuCv
        status: active
        display_name: 王山
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_RSwpzUysFS0b-Nz1k8iYHO
        subject_person_id: p_AWSa8tLY68DLhENxSE2F4D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERshuR2b0OCJR59msQ6P1r
          claim_id: c_RSwpzUysFS0b-Nz1k8iYHO
          source_id: s_FDsP1gsNnOA4g-D7C2G4vR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FDsP1gsNnOA4g-D7C2G4vR
            source_type: api_record
            title: 中国历代人物传记资料库：王學易（CBDB 211989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json
            external_identifier: CBDB:211989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AWSa8tLY68DLhENxSE2F4D
        status: active
        display_name: 王學易
        merged_into_person_id: null
    - claim:
        id: c_B6c2EylRim1cRtGjE6f7Xh
        subject_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UzFvzWDTJyZrfRfoRcZ4q
          claim_id: c_B6c2EylRim1cRtGjE6f7Xh
          source_id: s_Sw7CD430-HgYfjclhXVKs8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sw7CD430-HgYfjclhXVKs8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝登（CBDB 211985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json
            external_identifier: CBDB:211985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FojijtxJJhVsRkF2Bt86Mf
        status: active
        display_name: 王汝登
        merged_into_person_id: null
    - claim:
        id: c_lAUeo-XBJuaht1Mevn8m1L
        subject_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gL8F2nWgwlIROPM9_4JJFd
          claim_id: c_lAUeo-XBJuaht1Mevn8m1L
          source_id: s_uEYEfT5G-KYUTJNIsunIxo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEYEfT5G-KYUTJNIsunIxo
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 211990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json
            external_identifier: CBDB:211990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NQ8mkgAu6KxcsGFUuZARwz
        status: active
        display_name: 王學顏
        merged_into_person_id: null
    - claim:
        id: c_pF-b8d6YxQePaLvkDRi1k0
        subject_person_id: p_SpPiLCiECtSxJFFSbvvw4H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lWiTVWqCDiVbuIvJ7CqKYI
          claim_id: c_pF-b8d6YxQePaLvkDRi1k0
          source_id: s_dDbnZa-ZS_21JKr9bfJ8ir
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dDbnZa-ZS_21JKr9bfJ8ir
            source_type: api_record
            title: 中国历代人物传记资料库：王汝科（CBDB 211986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json
            external_identifier: CBDB:211986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SpPiLCiECtSxJFFSbvvw4H
        status: active
        display_name: 王汝科
        merged_into_person_id: null
    - claim:
        id: c_LxwrZC-5IvveekKaLBNMz-
        subject_person_id: p_fKMuYXt6fUwgZatNXQSatB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46PJm8OsZceyKKeHjXSWqG
          claim_id: c_LxwrZC-5IvveekKaLBNMz-
          source_id: s_1OPNsv4sY1iDs9ttoXQ0DR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1OPNsv4sY1iDs9ttoXQ0DR
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 211991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json
            external_identifier: CBDB:211991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKMuYXt6fUwgZatNXQSatB
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_ctB3fpR7RS4IXj2TlOLKym
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uWjrDnnhQjXA8NkKCXBTd4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_esaF81-AhUX83QrTLvrsSA
          claim_id: c_ctB3fpR7RS4IXj2TlOLKym
          source_id: s_g9Br-3YRn2i8I8C42WyXIQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g9Br-3YRn2i8I8C42WyXIQ
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 211987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json
            external_identifier: CBDB:211987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWjrDnnhQjXA8NkKCXBTd4
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_J5ILs7re9v7G1u1W2803py
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAn0F12SUScxIuMcOePAp_
          claim_id: c_J5ILs7re9v7G1u1W2803py
          source_id: s_bZMw6hrocfvibHXAoJfadR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bZMw6hrocfvibHXAoJfadR
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 211988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json
            external_identifier: CBDB:211988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yyc6ocVbQU2gcZc6J58PD2
        status: active
        display_name: 王學禮
        merged_into_person_id: null
---

# 王學書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學書 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | 王學書（生于1534年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 206005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| ancestors | p_HQAnGUmDhovTFseQeXia8R | 王勝 | accepted |
| ancestors | p_MrxHLGeDi5tr5p7y2EPuCv | 王山 | accepted |
| other | p_AWSa8tLY68DLhENxSE2F4D | 王學易 | accepted |
| other | p_FojijtxJJhVsRkF2Bt86Mf | 王汝登 | accepted |
| other | p_NQ8mkgAu6KxcsGFUuZARwz | 王學顏 | accepted |
| other | p_SpPiLCiECtSxJFFSbvvw4H | 王汝科 | accepted |
| other | p_fKMuYXt6fUwgZatNXQSatB | 王學曾 | accepted |
| other | p_uWjrDnnhQjXA8NkKCXBTd4 | 王學詩 | accepted |
| other | p_yyc6ocVbQU2gcZc6J58PD2 | 王學禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兌（CBDB 211980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211980&o=json)
- [中国历代人物传记资料库：王汝登（CBDB 211985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json)
- [中国历代人物传记资料库：王汝科（CBDB 211986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json)
- [中国历代人物传记资料库：王山（CBDB 211979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json)
- [中国历代人物传记资料库：王勝（CBDB 211978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 211991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json)
- [中国历代人物传记资料库：王學禮（CBDB 211988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 211987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json)
- [中国历代人物传记资料库：王學書（CBDB 206005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206005&o=json)
- [中国历代人物传记资料库：王學顏（CBDB 211990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json)
- [中国历代人物传记资料库：王學易（CBDB 211989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json)
