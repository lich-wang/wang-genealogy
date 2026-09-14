---
schema: wang-person/v1
id: p_fAeAj1ECenpg29AWYPB25D
status: active
merged_into: null
display_name: 王國光
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eq8gzpbB7TXCaiJJm9C1x2
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4b4CY4CgrxCPk8dSnUFEVU
          claim_id: c_Eq8gzpbB7TXCaiJJm9C1x2
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: CBDB:125310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（125310）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FravaiJsDxUNV3hNVCq5c
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KADsaymjRuREggPAxYNKH5
          claim_id: c_4FravaiJsDxUNV3hNVCq5c
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NmnRCSd46PZH3BUWLYq2c7
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJXBtorGqEzogevBr2VRsb
          claim_id: c_NmnRCSd46PZH3BUWLYq2c7
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uzgMryM7ZpE4NywKQhzYr5
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光（1512年—1594年），明人物。籍贯陽城，入仕進士，曾任刑部尚書、知縣、太僕寺卿。（中国历代人物传记资料库 CBDB 125310）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GqcxARFCDSVBDzTnetYqBQ
          claim_id: c_uzgMryM7ZpE4NywKQhzYr5
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: CBDB:125310
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_GvhnbSfs4k75xQrdJJphA9
        status: active
        display_name: 王承祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hdEbDYI7T8T-wPP9f1la9H
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iK4VXYne4jWVGUqW1CQ5c6
          claim_id: c_hdEbDYI7T8T-wPP9f1la9H
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f1W6QHDX2UCjZCHSgwPUAM
        status: active
        display_name: 张氏
        merged_into_person_id: null
    - claim:
        id: c_OvldpaIXZpK7vK-eqNJLrh
        subject_person_id: p_JuyWBFNLh4xbgCexQHVSLh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McYdASh4sCsQ0HI0xg5Cbh
          claim_id: c_OvldpaIXZpK7vK-eqNJLrh
          source_id: s_uKF46Z26U4Zt7sgNBVxKSq
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uKF46Z26U4Zt7sgNBVxKSq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：衛氏（308154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308154&o=json
            external_identifier: CBDB:308154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.584Z
            metadata_json: null
      object_person:
        id: p_JuyWBFNLh4xbgCexQHVSLh
        status: active
        display_name: 卫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_aipovPq7p-ELtEsrNjEq_n
        subject_person_id: p_cvP1gJz184hGC1Ducr4dLY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DdYMAPenwL-nkFDNTsxqs3
          claim_id: c_aipovPq7p-ELtEsrNjEq_n
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cvP1gJz184hGC1Ducr4dLY
        status: active
        display_name: 王子文
        merged_into_person_id: null
    - claim:
        id: c__W6JwAKbn2I2AZxme4wUv1
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80eUobPhK2fz4u5EmCXMgG
          claim_id: c__W6JwAKbn2I2AZxme4wUv1
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qMBPniX9L5uzUSacCxGcRs
        status: active
        display_name: 王昺
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JNl95TJUsjMQ-esWVTIeyZ
        subject_person_id: p_6nGGYqSNMxQAPjgMHQ999j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pj8MdNXuUzf4cZIirtOXfy
          claim_id: c_JNl95TJUsjMQ-esWVTIeyZ
          source_id: s_ue683_FMHGW-9jreOPOz5q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_f3yioqIK-yfmLSaQv4hPZZ
        subject_person_id: p_7MEBkaWXDpbij9pwfN5fDq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nko8tEDJnTEoXezj_BLMJq
          claim_id: c_f3yioqIK-yfmLSaQv4hPZZ
          source_id: s_fYK-RU4zfFdyE4pximlHeY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ukYPmKpFmNJUZXxFIBMZ5q
        subject_person_id: p_QenDWAg1sW7MChUQCYk3zw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qDzMP40_ipeDOQ7_brykFY
          claim_id: c_ukYPmKpFmNJUZXxFIBMZ5q
          source_id: s_H2BAmnPO9uDHU6ev_I6hme
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_JQd0pxENMoh3mGOzKaB8jA
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h2CiArJALWMuwpvw4iZmq1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-frIQHKqbLBLqI6eZ-Xk1J
          claim_id: c_JQd0pxENMoh3mGOzKaB8jA
          source_id: s_cVcWnmBbmojmZH70Grwxfi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_oBamOElTXADVidHleARXLs
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CLdSS7IbeeIDYPi0-9p8Ms
          claim_id: c_oBamOElTXADVidHleARXLs
          source_id: s_bXNPK8ffhOBrBODKb0DirF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_GjEdkAkFVaetg1_gKvMATW
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk6aOHWg7jqAXgO3czNJ78
          claim_id: c_GjEdkAkFVaetg1_gKvMATW
          source_id: s_AIEGaUjYuwtFQNbV8U1G8q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王國光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國光 | accepted |
| birth.date | 1512年 | accepted |
| death.date | 1594年 | accepted |
| bio.summary | 王國光（1512年—1594年），明人物。籍贯陽城，入仕進士，曾任刑部尚書、知縣、太僕寺卿。（中国历代人物传记资料库 CBDB 125310） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GvhnbSfs4k75xQrdJJphA9 | 王承祖 | accepted |
| spouses | p_f1W6QHDX2UCjZCHSgwPUAM | 张氏 | accepted |
| spouses | p_JuyWBFNLh4xbgCexQHVSLh | 卫氏 | accepted |
| ancestors | p_cvP1gJz184hGC1Ducr4dLY | 王子文 | accepted |
| ancestors | p_qMBPniX9L5uzUSacCxGcRs | 王昺 | accepted |
| other | p_6nGGYqSNMxQAPjgMHQ999j | 王爭光 | accepted |
| other | p_7MEBkaWXDpbij9pwfN5fDq | 王耿光 | accepted |
| other | p_QenDWAg1sW7MChUQCYk3zw | 王重光 | accepted |
| other | p_h2CiArJALWMuwpvw4iZmq1 | 王前光 | accepted |
| other | p_kdyFbBQa8WtNVKHcguH9RH | 王奎光 | accepted |
| other | p_zyGgWgSrWwCDS1gGPv6jQB | 王近光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耿光（CBDB 308160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308160&o=json)
- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
- [中国历代人物传记资料库：王近光（CBDB 308159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json)
- [中国历代人物传记资料库：王奎光（CBDB 308158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json)
- [中国历代人物传记资料库：王前光（CBDB 308157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308157&o=json)
- [中国历代人物传记资料库：王爭光（CBDB 308156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308156&o=json)
- [中国历代人物传记资料库：王重光（CBDB 308155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308155&o=json)
- [CBDB 中国历代人物传记资料库：衛氏（308154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308154&o=json)
