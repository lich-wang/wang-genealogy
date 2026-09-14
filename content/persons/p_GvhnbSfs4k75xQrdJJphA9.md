---
schema: wang-person/v1
id: p_GvhnbSfs4k75xQrdJJphA9
status: active
merged_into: null
display_name: 王承祖
cbdb_id: 308148
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WXdCNjYVfhNohQyCa3Yb2f
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祖，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tVohLY8AEvSW6W1fwgWrL9
          claim_id: c_WXdCNjYVfhNohQyCa3Yb2f
          source_id: s_PTh47Lx54BK3CqoJSxaQef
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_PTh47Lx54BK3CqoJSxaQef
            source_type: api_record
            title: 维基数据：王承祖（Q45621088）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621088
            external_identifier: Q45621088
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
        - id: cs_Zu391ci2p4zTye6bqH1slR
          claim_id: c_WXdCNjYVfhNohQyCa3Yb2f
          source_id: s_1eLLNHd7MtVpQ9Cefm7NLv
          stance: supports
          locator: CBDB:308148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1eLLNHd7MtVpQ9Cefm7NLv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承祖（308148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308148&o=json
            external_identifier: CBDB:308148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:35.145Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aM4TcH8iMVbk81sEcNy3Sj
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WB9yxCuA9FrTNcSRd4BEFT
          claim_id: c_aM4TcH8iMVbk81sEcNy3Sj
          source_id: s_PTh47Lx54BK3CqoJSxaQef
          stance: supports
          locator: Q45621088
          quotation: null
          interpretation_note: null
          source:
            id: s_PTh47Lx54BK3CqoJSxaQef
            source_type: api_record
            title: 维基数据：王承祖（Q45621088）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621088
            external_identifier: Q45621088
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
        - id: cs_ZYAHCf8aJw5CTJJwnNu4XR
          claim_id: c_aM4TcH8iMVbk81sEcNy3Sj
          source_id: s_1eLLNHd7MtVpQ9Cefm7NLv
          stance: supports
          locator: Q45621088
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c66reWYB42H18WitEBNJ4g
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GvhnbSfs4k75xQrdJJphA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yqGBbUw8F29WCM8q3HjBJG
          claim_id: c_c66reWYB42H18WitEBNJ4g
          source_id: s_PTh47Lx54BK3CqoJSxaQef
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_rq4Lw5QAjijxiDRsDCCV4M
          claim_id: c_c66reWYB42H18WitEBNJ4g
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7LuvuxPskiCyDZ6ZzoBu4f
            source_type: api_record
            title: 维基数据：王昺（Q45621024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621024
            external_identifier: Q45621024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
      object_person:
        id: p_qMBPniX9L5uzUSacCxGcRs
        status: active
        display_name: 王昺
        merged_into_person_id: null
  children:
    - claim:
        id: c_SrdSVeK2V6BNUkoxCb425m
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_fpg1YKR3GH9Cg5FPGdQZW7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_agKfXSjS3MnfjiQfiG4te5
          claim_id: c_SrdSVeK2V6BNUkoxCb425m
          source_id: s_PTh47Lx54BK3CqoJSxaQef
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PTh47Lx54BK3CqoJSxaQef
            source_type: api_record
            title: 维基数据：王承祖（Q45621088）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621088
            external_identifier: Q45621088
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
        - id: cs_bhV3s2VXDTyLaSyvjL5Jyk
          claim_id: c_SrdSVeK2V6BNUkoxCb425m
          source_id: s_ZiSWdCePqhdbf1rEzq3pZR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZiSWdCePqhdbf1rEzq3pZR
            source_type: api_record
            title: 维基数据：王国光（Q15907167）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907167
            external_identifier: Q15907167
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
      object_person:
        id: p_fpg1YKR3GH9Cg5FPGdQZW7
        status: active
        display_name: 王国光
        merged_into_person_id: null
    - claim:
        id: c_DfEMDKl6WGKNlKXj_k2k8I
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9fuktUL2THbIiSSUW1K_g
          claim_id: c_DfEMDKl6WGKNlKXj_k2k8I
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vt2QnjwfvAN63GjXwa6CEm
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 125310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json
            external_identifier: CBDB:125310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
    - claim:
        id: c_YG4D0CYbDaNZtGDqQyFEtZ
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6nGGYqSNMxQAPjgMHQ999j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XpnV0oWLU4j3bQbRi5ZIr9
          claim_id: c_YG4D0CYbDaNZtGDqQyFEtZ
          source_id: s_ue683_FMHGW-9jreOPOz5q
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王爭光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王爭光 之父／母。
          source:
            id: s_ue683_FMHGW-9jreOPOz5q
            source_type: api_record
            title: 中国历代人物传记资料库：王爭光（CBDB 308156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308156&o=json
            external_identifier: CBDB:308156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6nGGYqSNMxQAPjgMHQ999j
        status: active
        display_name: 王爭光
        merged_into_person_id: null
    - claim:
        id: c_DLprcyWFNLmqn2LYPt9yqN
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7MEBkaWXDpbij9pwfN5fDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbNJRJXTNl2rB3EYYe40Zi
          claim_id: c_DLprcyWFNLmqn2LYPt9yqN
          source_id: s_fYK-RU4zfFdyE4pximlHeY
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王耿光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王耿光 之父／母。
          source:
            id: s_fYK-RU4zfFdyE4pximlHeY
            source_type: api_record
            title: 中国历代人物传记资料库：王耿光（CBDB 308160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308160&o=json
            external_identifier: CBDB:308160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7MEBkaWXDpbij9pwfN5fDq
        status: active
        display_name: 王耿光
        merged_into_person_id: null
    - claim:
        id: c_tC3LU3LLfSkuRJAB80ufgg
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QenDWAg1sW7MChUQCYk3zw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VG6PhTK0VHKf_xJXCkFCOs
          claim_id: c_tC3LU3LLfSkuRJAB80ufgg
          source_id: s_H2BAmnPO9uDHU6ev_I6hme
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王重光 与 王國光 为同胞（CBDB 记「弟」），王國光 之父／母即 王重光 之父／母。
          source:
            id: s_H2BAmnPO9uDHU6ev_I6hme
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 308155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308155&o=json
            external_identifier: CBDB:308155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QenDWAg1sW7MChUQCYk3zw
        status: active
        display_name: 王重光
        merged_into_person_id: null
    - claim:
        id: c_weeG2ph5xVvs6Z_N314plY
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h2CiArJALWMuwpvw4iZmq1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHhEybYiq2_iSFcMSYLeTO
          claim_id: c_weeG2ph5xVvs6Z_N314plY
          source_id: s_cVcWnmBbmojmZH70Grwxfi
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王前光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王前光 之父／母。
          source:
            id: s_cVcWnmBbmojmZH70Grwxfi
            source_type: api_record
            title: 中国历代人物传记资料库：王前光（CBDB 308157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308157&o=json
            external_identifier: CBDB:308157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h2CiArJALWMuwpvw4iZmq1
        status: active
        display_name: 王前光
        merged_into_person_id: null
    - claim:
        id: c_fmnMjPnn30obwGpegsrAtb
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvcT_ei85R2G4-ltccqOpT
          claim_id: c_fmnMjPnn30obwGpegsrAtb
          source_id: s_bXNPK8ffhOBrBODKb0DirF
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王奎光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王奎光 之父／母。
          source:
            id: s_bXNPK8ffhOBrBODKb0DirF
            source_type: api_record
            title: 中国历代人物传记资料库：王奎光（CBDB 308158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json
            external_identifier: CBDB:308158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kdyFbBQa8WtNVKHcguH9RH
        status: active
        display_name: 王奎光
        merged_into_person_id: null
    - claim:
        id: c_YIa6pAgpnqj0yoA0EyHibQ
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xMcg_c4NKvUhdXaq5_AhC
          claim_id: c_YIa6pAgpnqj0yoA0EyHibQ
          source_id: s_AIEGaUjYuwtFQNbV8U1G8q
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王近光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王近光 之父／母。
          source:
            id: s_AIEGaUjYuwtFQNbV8U1G8q
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 308159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json
            external_identifier: CBDB:308159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zyGgWgSrWwCDS1gGPv6jQB
        status: active
        display_name: 王近光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承祖，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308148） | accepted |
| name.primary | 王承祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qMBPniX9L5uzUSacCxGcRs | 王昺 | accepted |
| children | p_fpg1YKR3GH9Cg5FPGdQZW7 | 王国光 | accepted |
| children | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |
| children | p_6nGGYqSNMxQAPjgMHQ999j | 王爭光 | accepted |
| children | p_7MEBkaWXDpbij9pwfN5fDq | 王耿光 | accepted |
| children | p_QenDWAg1sW7MChUQCYk3zw | 王重光 | accepted |
| children | p_h2CiArJALWMuwpvw4iZmq1 | 王前光 | accepted |
| children | p_kdyFbBQa8WtNVKHcguH9RH | 王奎光 | accepted |
| children | p_zyGgWgSrWwCDS1gGPv6jQB | 王近光 | accepted |

## 外部来源

- [维基数据：王昺（Q45621024）](https://www.wikidata.org/wiki/Q45621024)
- [维基数据：王承祖（Q45621088）](https://www.wikidata.org/wiki/Q45621088)
- [维基数据：王国光（Q15907167）](https://www.wikidata.org/wiki/Q15907167)
- [中国历代人物传记资料库：王耿光（CBDB 308160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308160&o=json)
- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
- [中国历代人物传记资料库：王近光（CBDB 308159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json)
- [中国历代人物传记资料库：王奎光（CBDB 308158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json)
- [中国历代人物传记资料库：王前光（CBDB 308157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308157&o=json)
- [中国历代人物传记资料库：王爭光（CBDB 308156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308156&o=json)
- [中国历代人物传记资料库：王重光（CBDB 308155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308155&o=json)
- [CBDB 中国历代人物传记资料库：王承祖（308148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308148&o=json)
