---
schema: wang-person/v1
id: p_DJcqSVwRMjWd5tk8GAdMxa
status: active
merged_into: null
display_name: 王佐
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gr3j2PMmgGtH3PokFDYQTJ
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dpC8pWswY3k9FJDFuaxTLT
          claim_id: c_Gr3j2PMmgGtH3PokFDYQTJ
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
          stance: supports
          locator: CBDB:207228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207228）
          source: &a1
            id: s_FcLxjRasG8Cpm8SXFoJ3Nu
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 207228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207228&o=json
            external_identifier: CBDB:207228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GwAx3H2R8y2ZykF1wBx4Xz
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Pzd5TQry4vmcMUQhcYJdK
          claim_id: c_GwAx3H2R8y2ZykF1wBx4Xz
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
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
        id: c_yUEUiWkEA2ZQG8hqq8oMR1
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（生于1561年），明人物。明清進士進士，籍贯武陵，入仕進士，曾任吏部觀政。（中国历代人物传记资料库 CBDB 207228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3Q76oFv2S0reoJdO89k_-
          claim_id: c_yUEUiWkEA2ZQG8hqq8oMR1
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
          stance: supports
          locator: CBDB:207228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WCqGlaJU5Bfb2wTlMBzVQp
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmzqNDkEawe2Y5acGSvw17
          claim_id: c_WCqGlaJU5Bfb2wTlMBzVQp
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpmE2qAdCZPZnB4KMQikrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 229896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json
            external_identifier: CBDB:229896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HMYgDEoVuyW9xCPbxcPZ9o
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children:
    - claim:
        id: c_ly3Pb8eB8Jk0YdPGqgER57
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7CDVStC37Bm3jkdzWufAMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03PIt4qujquFUR_88toxpm
          claim_id: c_ly3Pb8eB8Jk0YdPGqgER57
          source_id: s_CkYUU6XYgf6aGXMHUFCdzP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CkYUU6XYgf6aGXMHUFCdzP
            source_type: api_record
            title: 中国历代人物传记资料库：王國祥（CBDB 229907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json
            external_identifier: CBDB:229907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7CDVStC37Bm3jkdzWufAMo
        status: active
        display_name: 王國祥
        merged_into_person_id: null
    - claim:
        id: c_k3BQPq0EoK8OKB-RnemAmX
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PdrBQQQnPmoMPssgytt3Ma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ay81tshaJ1tIpPwULOnWHJ
          claim_id: c_k3BQPq0EoK8OKB-RnemAmX
          source_id: s_pur8zxmSFmEqAsJd5EUQzP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pur8zxmSFmEqAsJd5EUQzP
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 229909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229909&o=json
            external_identifier: CBDB:229909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PdrBQQQnPmoMPssgytt3Ma
        status: active
        display_name: 王國瑞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TtEQy5Jk-99ctE2bJzj6xm
        subject_person_id: p_5tUGjNNTxa32Gu1p3k1bMA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7uZ6D-5U5K3dYOOn7ylC4
          claim_id: c_TtEQy5Jk-99ctE2bJzj6xm
          source_id: s_JDHukXmCY3ppiwfPPRcN7C
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JDHukXmCY3ppiwfPPRcN7C
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 229894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json
            external_identifier: CBDB:229894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5tUGjNNTxa32Gu1p3k1bMA
        status: active
        display_name: 王良
        merged_into_person_id: null
    - claim:
        id: c_JktO-d-xpi0vwttvH-SPC0
        subject_person_id: p_VKKz661Cm99djPyZpNiEkc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1CFwEAsnYr0MaKWHNtrKmu
          claim_id: c_JktO-d-xpi0vwttvH-SPC0
          source_id: s_LQHp6nU1iFUg68Q5swFcBW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LQHp6nU1iFUg68Q5swFcBW
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 229895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229895&o=json
            external_identifier: CBDB:229895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VKKz661Cm99djPyZpNiEkc
        status: active
        display_name: 王俊
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_krCNE0DcbEI19asMe-Lg9X
        subject_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uoljjBMD1iRoo7W-7xknk8
          claim_id: c_krCNE0DcbEI19asMe-Lg9X
          source_id: s_K0rAn1kalvCbKbc4o4B3VT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K0rAn1kalvCbKbc4o4B3VT
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 229901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json
            external_identifier: CBDB:229901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gUZDgUcY4twcJGR5cGBqV
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_fIcUEZyZ-2qZGGTK8i0TYT
        subject_person_id: p_94c89e5wW4HwVLc9t5cktH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v99O26DAZy_MnDSICoQXuF
          claim_id: c_fIcUEZyZ-2qZGGTK8i0TYT
          source_id: s_g7AaeNGl43196oxZvejE2Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g7AaeNGl43196oxZvejE2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王位（CBDB 229904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json
            external_identifier: CBDB:229904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_94c89e5wW4HwVLc9t5cktH
        status: active
        display_name: 王位
        merged_into_person_id: null
    - claim:
        id: c_8CoAIo0JpYtYDbtKApgqCQ
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rTP320phuoUfWODoYRfuFI
          claim_id: c_8CoAIo0JpYtYDbtKApgqCQ
          source_id: s_1_afEcblhDRggphzyo3msl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1_afEcblhDRggphzyo3msl
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 229903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json
            external_identifier: CBDB:229903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQ5nxPpSRDXAG9TwYsDwF2
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_PZpDCYTMft1ovl86dMv23s
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fNZadZEQF62pN9HseFJCx8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxXfoNK7hCP5utmhxznztw
          claim_id: c_PZpDCYTMft1ovl86dMv23s
          source_id: s_r9SYJaZFB2TiCGINi6xF-3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r9SYJaZFB2TiCGINi6xF-3
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 229902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json
            external_identifier: CBDB:229902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fNZadZEQF62pN9HseFJCx8
        status: active
        display_name: 王任
        merged_into_person_id: null
    - claim:
        id: c_ivaj20QpPNXVWDqGdRcEfn
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nJAyAGcRTC4guGFCXraA7W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgoHsDxtOjhNO_C1UDkVaX
          claim_id: c_ivaj20QpPNXVWDqGdRcEfn
          source_id: s_ztRRSzagEcLrnJDut4gz9w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ztRRSzagEcLrnJDut4gz9w
            source_type: api_record
            title: 中国历代人物传记资料库：王作（CBDB 229906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229906&o=json
            external_identifier: CBDB:229906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nJAyAGcRTC4guGFCXraA7W
        status: active
        display_name: 王作
        merged_into_person_id: null
    - claim:
        id: c_FesuK1CVgd-m1cS8BGm545
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ocbi4TNc3qKRe3qT6f6KJa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ul6-kO4PpZbNDRzgqHc026
          claim_id: c_FesuK1CVgd-m1cS8BGm545
          source_id: s_Bkxz7e3xxQaPO-zhZmqvLQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bkxz7e3xxQaPO-zhZmqvLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王傚（CBDB 229900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json
            external_identifier: CBDB:229900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ocbi4TNc3qKRe3qT6f6KJa
        status: active
        display_name: 王傚
        merged_into_person_id: null
    - claim:
        id: c_V00DiHmLOGLmaPvJDsneeD
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tNoD3zpU8YE5MAho6viEZZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lIO-_pj5jk0qH7JHJZSq7X
          claim_id: c_V00DiHmLOGLmaPvJDsneeD
          source_id: s_-6ZJn30F3HZWF9eUqwxQOr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-6ZJn30F3HZWF9eUqwxQOr
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 229905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229905&o=json
            external_identifier: CBDB:229905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tNoD3zpU8YE5MAho6viEZZ
        status: active
        display_name: 王佶
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | 王佐（生于1561年），明人物。明清進士進士，籍贯武陵，入仕進士，曾任吏部觀政。（中国历代人物传记资料库 CBDB 207228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| children | p_7CDVStC37Bm3jkdzWufAMo | 王國祥 | accepted |
| children | p_PdrBQQQnPmoMPssgytt3Ma | 王國瑞 | accepted |
| ancestors | p_5tUGjNNTxa32Gu1p3k1bMA | 王良 | accepted |
| ancestors | p_VKKz661Cm99djPyZpNiEkc | 王俊 | accepted |
| other | p_3gUZDgUcY4twcJGR5cGBqV | 王仕 | accepted |
| other | p_94c89e5wW4HwVLc9t5cktH | 王位 | accepted |
| other | p_YQ5nxPpSRDXAG9TwYsDwF2 | 王化 | accepted |
| other | p_fNZadZEQF62pN9HseFJCx8 | 王任 | accepted |
| other | p_nJAyAGcRTC4guGFCXraA7W | 王作 | accepted |
| other | p_ocbi4TNc3qKRe3qT6f6KJa | 王傚 | accepted |
| other | p_tNoD3zpU8YE5MAho6viEZZ | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 229896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json)
- [中国历代人物传记资料库：王國瑞（CBDB 229909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229909&o=json)
- [中国历代人物传记资料库：王國祥（CBDB 229907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json)
- [中国历代人物传记资料库：王化（CBDB 229903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json)
- [中国历代人物传记资料库：王佶（CBDB 229905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229905&o=json)
- [中国历代人物传记资料库：王俊（CBDB 229895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229895&o=json)
- [中国历代人物传记资料库：王良（CBDB 229894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json)
- [中国历代人物传记资料库：王任（CBDB 229902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json)
- [中国历代人物传记资料库：王仕（CBDB 229901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json)
- [中国历代人物传记资料库：王位（CBDB 229904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json)
- [中国历代人物传记资料库：王傚（CBDB 229900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json)
- [中国历代人物传记资料库：王佐（CBDB 207228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207228&o=json)
- [中国历代人物传记资料库：王作（CBDB 229906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229906&o=json)
