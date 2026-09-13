---
schema: wang-person/v1
id: p_xyPtAQ7AR8yTpy2qwHiGWa
status: active
merged_into: null
display_name: 王氏
cbdb_id: 39733
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ieVYCaT6WZ6gSbseFivNr
        subject_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，向敏中妻。维基数据以独立条目 Q45434499 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_FYyUzO44P9NGckfFzwHq1a
          claim_id: c_9ieVYCaT6WZ6gSbseFivNr
          source_id: s_DkRGP27FpX8V7aNdqGSGon
          stance: supports
          locator: Q45434499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_DkRGP27FpX8V7aNdqGSGon
            source_type: api_record
            title: 维基数据：王氏（Q45434499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434499
            external_identifier: Q45434499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tye7Fb7e86ZV4Ksd268KdK
        subject_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7cZ5Y45yxNe5qNoL8RcJ1j
          claim_id: c_Tye7Fb7e86ZV4Ksd268KdK
          source_id: s_DkRGP27FpX8V7aNdqGSGon
          stance: supports
          locator: Q45434499
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_fd3VmzeJi35qJNFNihvBYV
          claim_id: c_Tye7Fb7e86ZV4Ksd268KdK
          source_id: s_rinUBvPiEE2sXPXgwXBiwm
          stance: supports
          locator: Q45434499
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_rinUBvPiEE2sXPXgwXBiwm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（39733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39733&o=json
            external_identifier: CBDB:39733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.443Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QRFBg3vztVrPRhT9bK4yiX
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JHCaZYHpZctMsbPADM7r6t
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_xENpuVFCdYJGng5v6VfekN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王審琦（3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:41.447Z
            metadata_json: null
        - id: cs_fMBmH42MMMnVQ43gxUe7sX
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
          source_id: s_DkRGP27FpX8V7aNdqGSGon
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DkRGP27FpX8V7aNdqGSGon
            source_type: api_record
            title: 维基数据：王氏（Q45434499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434499
            external_identifier: Q45434499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_nbrkYaYxNXW6pQ8bB2C7bJ
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DD7i8QKPn7xPVwKmB24Dfi
            source_type: api_record
            title: 维基数据：王审琦（Q15940340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940340
            external_identifier: Q15940340
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_jhAXJEb1U9Ldt73n9uUeLS
        status: active
        display_name: 王审琦
        merged_into_person_id: null
    - claim:
        id: c_m4rLsA-mkaohGHX5z1Wx96
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SdL729y47SNbxV8eRL4vrr
          claim_id: c_m4rLsA-mkaohGHX5z1Wx96
          source_id: s_rinUBvPiEE2sXPXgwXBiwm
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_3FwfmVLuawARCoZyhyo5mg
        status: active
        display_name: 王審琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZuXPuiaYHUcV8588feQMkN
        subject_person_id: p_juEm8j4Sb9dvXhaC1CMA9c
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZqMGzvbrFtnZZBRpeHnVx
          claim_id: c_ZuXPuiaYHUcV8588feQMkN
          source_id: s_DkRGP27FpX8V7aNdqGSGon
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_DkRGP27FpX8V7aNdqGSGon
            source_type: api_record
            title: 维基数据：王氏（Q45434499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434499
            external_identifier: Q45434499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_jBZHoSVu3913yfEJtB4QBr
          claim_id: c_ZuXPuiaYHUcV8588feQMkN
          source_id: s_dV5C6vX8OnshhwhJU34Pxl
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dV5C6vX8OnshhwhJU34Pxl
            source_type: website
            title: 中文维基百科：向敏中
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%90%91%E6%95%8F%E4%B8%AD
            external_identifier: Q10918129
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
        - id: cs_psrPB4mgRZkiwQhsRnwvpC
          claim_id: c_ZuXPuiaYHUcV8588feQMkN
          source_id: s_rinUBvPiEE2sXPXgwXBiwm
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a2
      object_person:
        id: p_juEm8j4Sb9dvXhaC1CMA9c
        status: active
        display_name: 向敏中
        merged_into_person_id: null
    - claim:
        id: c_XY_zcWCaBBodt5LxBrfRuc
        subject_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_juEm8j4Sb9dvXhaC1CMA9c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UAjvIoJslR1LzWHXH4Buy
          claim_id: c_XY_zcWCaBBodt5LxBrfRuc
          source_id: s_rinUBvPiEE2sXPXgwXBiwm
          stance: supports
          locator: 宋人傳記資料索引(電子版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_juEm8j4Sb9dvXhaC1CMA9c
        status: active
        display_name: 向敏中
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，向敏中妻。维基数据以独立条目 Q45434499 收录该人物。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |
| parents | p_3FwfmVLuawARCoZyhyo5mg | 王審琦 | accepted |
| spouses | p_juEm8j4Sb9dvXhaC1CMA9c | 向敏中 | accepted |
| spouses | p_juEm8j4Sb9dvXhaC1CMA9c | 向敏中 | accepted |

## 外部来源

- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [维基数据：王氏（Q45434499）](https://www.wikidata.org/wiki/Q45434499)
- [中文维基百科：向敏中](https://zh.wikipedia.org/wiki/%E5%90%91%E6%95%8F%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王審琦（3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [CBDB 中国历代人物传记资料库：王氏（39733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39733&o=json)
