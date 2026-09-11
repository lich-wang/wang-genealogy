---
schema: wang-person/v1
id: p_hWNF7HbB9E5if6kNK731ro
status: active
merged_into: null
display_name: 王祿兆
cbdb_id: 206985
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jBsHqb4xPXZbZSLiJk9wqv
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿兆（生于1543年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206985 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AvDfX0uDwShpG3WEXbGgwj
          claim_id: c_jBsHqb4xPXZbZSLiJk9wqv
          source_id: s_18YGXzxxfpdnMfHsAbYHEq
          stance: supports
          locator: CBDB:206985
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_18YGXzxxfpdnMfHsAbYHEq
            source_type: api_record
            title: 中国历代人物传记资料库：王祿兆（CBDB 206985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206985&o=json
            external_identifier: CBDB:206985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qySsw84PVC7r8kr2aUhPE5
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1543-01-01
            latest: 1543-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g2ycZccr4yVCPyXixQb7XG
          claim_id: c_qySsw84PVC7r8kr2aUhPE5
          source_id: s_18YGXzxxfpdnMfHsAbYHEq
          stance: supports
          locator: CBDB:206985
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1543
          source:
            id: s_18YGXzxxfpdnMfHsAbYHEq
            source_type: api_record
            title: 中国历代人物传记资料库：王祿兆（CBDB 206985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206985&o=json
            external_identifier: CBDB:206985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8L4S9sVNL2nm77Z9Lbxum
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jeZk956n98vkeDacDLFDUo
          claim_id: c_t8L4S9sVNL2nm77Z9Lbxum
          source_id: s_18YGXzxxfpdnMfHsAbYHEq
          stance: supports
          locator: CBDB:206985
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1543
          source:
            id: s_18YGXzxxfpdnMfHsAbYHEq
            source_type: api_record
            title: 中国历代人物传记资料库：王祿兆（CBDB 206985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206985&o=json
            external_identifier: CBDB:206985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZDXZ3w-NCt2EsTnBLbxGUY
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ehjf68mueDGfSXrtAZslUb
          claim_id: c_ZDXZ3w-NCt2EsTnBLbxGUY
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cw2NXiSd1Jch75ohxBsXNX
            source_type: api_record
            title: 中国历代人物传记资料库：王光遠（CBDB 225797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json
            external_identifier: CBDB:225797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aZXBatcc6mdp3QRC5AaJD4
        status: active
        display_name: 王光遠
        merged_into_person_id: null
  children:
    - claim:
        id: c_sST8qtoVMXw02eB02KMdbU
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1o4XKx8YTnpd6vNvapNi4H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EKZJYdtG52SAdksXVX4zfN
          claim_id: c_sST8qtoVMXw02eB02KMdbU
          source_id: s_qVe1pydzV49DWLWaLBAF5r
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qVe1pydzV49DWLWaLBAF5r
            source_type: api_record
            title: 中国历代人物传记资料库：王崇節（CBDB 225809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225809&o=json
            external_identifier: CBDB:225809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1o4XKx8YTnpd6vNvapNi4H
        status: active
        display_name: 王崇節
        merged_into_person_id: null
    - claim:
        id: c_Z0WSI_aqxMSqLzZcPwHHqx
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pVQkcRuM7NhnjcWcLav1if
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2zt6ktyOxtBpsVvcoz43w
          claim_id: c_Z0WSI_aqxMSqLzZcPwHHqx
          source_id: s_RCHeuxtMU1jHegLq44JSWC
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RCHeuxtMU1jHegLq44JSWC
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 225807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225807&o=json
            external_identifier: CBDB:225807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pVQkcRuM7NhnjcWcLav1if
        status: active
        display_name: 王崇信
        merged_into_person_id: null
    - claim:
        id: c_0RkrXujwV_3zuK1Ce7GF03
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJ1f7ooA9jPEPSrDSvEcw5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5ITGM0_KN-Jkjf8APLbka
          claim_id: c_0RkrXujwV_3zuK1Ce7GF03
          source_id: s_5mJokYPPEzrcKEZoR4Ryhd
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5mJokYPPEzrcKEZoR4Ryhd
            source_type: api_record
            title: 中国历代人物传记资料库：王崇約（CBDB 225808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225808&o=json
            external_identifier: CBDB:225808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rJ1f7ooA9jPEPSrDSvEcw5
        status: active
        display_name: 王崇約
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pPsx2-E5rlj-N10rHKQgT4
        subject_person_id: p_AHERTQYCVyYdyM4voMz6Hc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMIboEfU1XMx9l9tRkbVF8
          claim_id: c_pPsx2-E5rlj-N10rHKQgT4
          source_id: s_Nc1L2EhUSAWB1k5mj1ujdW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nc1L2EhUSAWB1k5mj1ujdW
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 225796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225796&o=json
            external_identifier: CBDB:225796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AHERTQYCVyYdyM4voMz6Hc
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_UE_MpOsngYNRkbqpQ4dS9N
        subject_person_id: p_RTkxkvApHDbDxZZrHrwzG2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9C9cXAezBLjT0MtmRvZuqi
          claim_id: c_UE_MpOsngYNRkbqpQ4dS9N
          source_id: s_GqycFRtk33GWjyWmQYcpKA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GqycFRtk33GWjyWmQYcpKA
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 225795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225795&o=json
            external_identifier: CBDB:225795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RTkxkvApHDbDxZZrHrwzG2
        status: active
        display_name: 王惠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祿兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祿兆（生于1543年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206985 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1543年 | accepted |
| name.primary | 王祿兆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZXBatcc6mdp3QRC5AaJD4 | 王光遠 | accepted |
| children | p_1o4XKx8YTnpd6vNvapNi4H | 王崇節 | accepted |
| children | p_pVQkcRuM7NhnjcWcLav1if | 王崇信 | accepted |
| children | p_rJ1f7ooA9jPEPSrDSvEcw5 | 王崇約 | accepted |
| ancestors | p_AHERTQYCVyYdyM4voMz6Hc | 王經 | accepted |
| ancestors | p_RTkxkvApHDbDxZZrHrwzG2 | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇節（CBDB 225809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225809&o=json)
- [中国历代人物传记资料库：王崇信（CBDB 225807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225807&o=json)
- [中国历代人物传记资料库：王崇約（CBDB 225808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225808&o=json)
- [中国历代人物传记资料库：王光遠（CBDB 225797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json)
- [中国历代人物传记资料库：王惠（CBDB 225795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225795&o=json)
- [中国历代人物传记资料库：王經（CBDB 225796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225796&o=json)
- [中国历代人物传记资料库：王祿兆（CBDB 206985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206985&o=json)
