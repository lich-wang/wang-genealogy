---
schema: wang-person/v1
id: p_ve3PDbNGqaNQgddGuw2C43
status: active
merged_into: null
display_name: 王燁
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muHrG8MZ3VdqB5BpjRGW9N
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPQyGKe8vwn19vDqp1EQF6
          claim_id: c_muHrG8MZ3VdqB5BpjRGW9N
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
          stance: supports
          locator: CBDB:126822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126822）
          source: &a1
            id: s_eMfJH2tsZJRFU4Bz3R1GC3
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 126822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json
            external_identifier: CBDB:126822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iEDM1zpJCjXYFJKzq5vXa
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁，明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 126822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3blNR58zGz4ZvjYLWPtWnW
          claim_id: c_1iEDM1zpJCjXYFJKzq5vXa
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
          stance: supports
          locator: CBDB:126822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p12Q0ANeZh4jDNFEGzu4uy
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQC_CVpGir-y1oqepycvLU
          claim_id: c_p12Q0ANeZh4jDNFEGzu4uy
          source_id: s_b8xwN94GvqbDpnKDRZDaVD
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b8xwN94GvqbDpnKDRZDaVD
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 296931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json
            external_identifier: CBDB:296931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wVWD91i8nHFULhDK68aKM7
        status: active
        display_name: 王材
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zh-ojBupqgN1Dvx6DYv-_X
        subject_person_id: p_75n4ono3HYazm2Qe1pxMfA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZerQxkteLPp24BzhRBanVF
          claim_id: c_zh-ojBupqgN1Dvx6DYv-_X
          source_id: s_Ric6MnHmh2hRXCVaVbcptK
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ric6MnHmh2hRXCVaVbcptK
            source_type: api_record
            title: 中国历代人物传记资料库：王衷（CBDB 296929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296929&o=json
            external_identifier: CBDB:296929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_75n4ono3HYazm2Qe1pxMfA
        status: active
        display_name: 王衷
        merged_into_person_id: null
    - claim:
        id: c_Zx7iHnU8nGyTc5SJVPucMe
        subject_person_id: p_nT1UNCZyvDbXe3ZzPGhbdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvELy-tOO73QX1MYcovX_Z
          claim_id: c_Zx7iHnU8nGyTc5SJVPucMe
          source_id: s_z5H7mnAfz3wRDELLh5djkn
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z5H7mnAfz3wRDELLh5djkn
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 296930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json
            external_identifier: CBDB:296930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nT1UNCZyvDbXe3ZzPGhbdz
        status: active
        display_name: 王宏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王燁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燁 | accepted |
| bio.summary | 王燁，明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 126822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVWD91i8nHFULhDK68aKM7 | 王材 | accepted |
| ancestors | p_75n4ono3HYazm2Qe1pxMfA | 王衷 | accepted |
| ancestors | p_nT1UNCZyvDbXe3ZzPGhbdz | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 296931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json)
- [中国历代人物传记资料库：王宏（CBDB 296930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json)
- [中国历代人物传记资料库：王燁（CBDB 126822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json)
- [中国历代人物传记资料库：王衷（CBDB 296929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296929&o=json)
