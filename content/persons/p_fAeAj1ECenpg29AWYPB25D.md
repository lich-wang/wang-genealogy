---
schema: wang-person/v1
id: p_fAeAj1ECenpg29AWYPB25D
status: active
merged_into: null
display_name: 王國光
revision: 4
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
        id: c_HeNG28pSzgwj2Bh3tsg7DM
        subject_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
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
        - id: cs_JSH53ZSffAyKrYURaVkOyj
          claim_id: c_HeNG28pSzgwj2Bh3tsg7DM
          source_id: s_eHg7tHUDweN1C9jj2CK2AF
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eHg7tHUDweN1C9jj2CK2AF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（308153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308153&o=json
            external_identifier: CBDB:308153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.576Z
            metadata_json: null
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
  other: []
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
| spouses | p_f1W6QHDX2UCjZCHSgwPUAM | 张氏 | accepted |
| spouses | p_JuyWBFNLh4xbgCexQHVSLh | 卫氏 | accepted |
| ancestors | p_cvP1gJz184hGC1Ducr4dLY | 王子文 | accepted |
| ancestors | p_qMBPniX9L5uzUSacCxGcRs | 王昺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
- [CBDB 中国历代人物传记资料库：衛氏（308154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308154&o=json)
- [CBDB 中国历代人物传记资料库：張氏（308153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308153&o=json)
