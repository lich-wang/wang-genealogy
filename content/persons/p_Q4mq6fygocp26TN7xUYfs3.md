---
schema: wang-person/v1
id: p_Q4mq6fygocp26TN7xUYfs3
status: active
merged_into: null
display_name: 王弘祖
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZSu32MshxDh8kaoRuNQACJ
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E7H8LSmo1C3mg1oWDJpXXG
          claim_id: c_ZSu32MshxDh8kaoRuNQACJ
          source_id: s_N3Zck2MxGQSU8jmjg2h6PR
          stance: supports
          locator: CBDB:207804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207804）
          source: &a1
            id: s_N3Zck2MxGQSU8jmjg2h6PR
            source_type: api_record
            title: 中国历代人物传记资料库：王弘祖（CBDB 207804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207804&o=json
            external_identifier: CBDB:207804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6hq7njXGxHWixbqUExX7rM
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1586年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YNSJoD1EVd7ZzL3wQ6MxQ
          claim_id: c_6hq7njXGxHWixbqUExX7rM
          source_id: s_N3Zck2MxGQSU8jmjg2h6PR
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
        id: c_G8vB5PQ5TxgCuS8PFFHBfy
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVRBNJ7FedV8ELuRduQiqj
          claim_id: c_G8vB5PQ5TxgCuS8PFFHBfy
          source_id: s_N3Zck2MxGQSU8jmjg2h6PR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CogB1AJOUR1_NK-Oc4KBaN
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLuSIXbAkXHmzw87bBk9DM
          claim_id: c_CogB1AJOUR1_NK-Oc4KBaN
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RpFUfgLjZke4p125QL1oHk
            source_type: api_record
            title: 中国历代人物传记资料库：王應誥（CBDB 236256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json
            external_identifier: CBDB:236256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8EDFnNdhzDymseXpHLiztk
        status: active
        display_name: 王應誥
        merged_into_person_id: null
  children:
    - claim:
        id: c_vWW_djJY38J2Rli0G_U72a
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2bAFPA2B6z7Y79GVcB1qC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E-NGB6DxgpdsZ1UT75k9sX
          claim_id: c_vWW_djJY38J2Rli0G_U72a
          source_id: s_e6V5HTFN1c2PLgfFztmn1w
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e6V5HTFN1c2PLgfFztmn1w
            source_type: api_record
            title: 中国历代人物传记资料库：王緒隆（CBDB 236273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236273&o=json
            external_identifier: CBDB:236273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2bAFPA2B6z7Y79GVcB1qC2
        status: active
        display_name: 王緒隆
        merged_into_person_id: null
    - claim:
        id: c_Wn70XCUwLA864BDr2qCrLi
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CGkJtm8VupEuaCofySvwdX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9pksdRYWuFJDnIxn4k_tX
          claim_id: c_Wn70XCUwLA864BDr2qCrLi
          source_id: s_hd8vV4AtzrgKczHLAmNC5i
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hd8vV4AtzrgKczHLAmNC5i
            source_type: api_record
            title: 中国历代人物传记资料库：王緒延（CBDB 236275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236275&o=json
            external_identifier: CBDB:236275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CGkJtm8VupEuaCofySvwdX
        status: active
        display_name: 王緒延
        merged_into_person_id: null
    - claim:
        id: c_u6R2E6JUYOljpr20TkDpja
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_njfbn7Jdq9tce3UpcHzJJk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-SYTD4Hwx-c-1jxDbff0Xf
          claim_id: c_u6R2E6JUYOljpr20TkDpja
          source_id: s_xwua2Qj8KykieN89BEqCDg
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xwua2Qj8KykieN89BEqCDg
            source_type: api_record
            title: 中国历代人物传记资料库：王緒昌（CBDB 236274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236274&o=json
            external_identifier: CBDB:236274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_njfbn7Jdq9tce3UpcHzJJk
        status: active
        display_name: 王緒昌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pqcYyNclIRRBlUT_2cy9df
        subject_person_id: p_aDDye8gqV97KR7ZcVZmzpH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x9rIIf2oc0f0qQHW4m3HGY
          claim_id: c_pqcYyNclIRRBlUT_2cy9df
          source_id: s_Uz3Zj3USJax82Ucuko7p17
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Uz3Zj3USJax82Ucuko7p17
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 236255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236255&o=json
            external_identifier: CBDB:236255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aDDye8gqV97KR7ZcVZmzpH
        status: active
        display_name: 王密
        merged_into_person_id: null
    - claim:
        id: c_MLkN8rAPI6QvxKNV3f5wr4
        subject_person_id: p_JyZytS2CPhoEB38LQDTM3g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KplCQp582DHIzpNdOS2Vdu
          claim_id: c_MLkN8rAPI6QvxKNV3f5wr4
          source_id: s_PyYpG1tVrzHMtc9x9WevjW
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PyYpG1tVrzHMtc9x9WevjW
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 236253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236253&o=json
            external_identifier: CBDB:236253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JyZytS2CPhoEB38LQDTM3g
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弘祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘祖 | accepted |
| birth.date | 1586年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8EDFnNdhzDymseXpHLiztk | 王應誥 | accepted |
| children | p_2bAFPA2B6z7Y79GVcB1qC2 | 王緒隆 | accepted |
| children | p_CGkJtm8VupEuaCofySvwdX | 王緒延 | accepted |
| children | p_njfbn7Jdq9tce3UpcHzJJk | 王緒昌 | accepted |
| ancestors | p_aDDye8gqV97KR7ZcVZmzpH | 王密 | accepted |
| ancestors | p_JyZytS2CPhoEB38LQDTM3g | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 236253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236253&o=json)
- [中国历代人物传记资料库：王弘祖（CBDB 207804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207804&o=json)
- [中国历代人物传记资料库：王密（CBDB 236255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236255&o=json)
- [中国历代人物传记资料库：王緒昌（CBDB 236274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236274&o=json)
- [中国历代人物传记资料库：王緒隆（CBDB 236273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236273&o=json)
- [中国历代人物传记资料库：王緒延（CBDB 236275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236275&o=json)
- [中国历代人物传记资料库：王應誥（CBDB 236256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json)
