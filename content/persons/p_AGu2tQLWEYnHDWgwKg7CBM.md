---
schema: wang-person/v1
id: p_AGu2tQLWEYnHDWgwKg7CBM
status: active
merged_into: null
display_name: 王喻
cbdb_id: 207601
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7mJa9vohxNS11nSRe8gmGf
        subject_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喻（生于1559年），明人物。入仕進士。（中国历代人物传记资料库 CBDB 207601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MPVQHL8dejx31bCkjjYvs0
          claim_id: c_7mJa9vohxNS11nSRe8gmGf
          source_id: s_JR5LLBu9MpHLDXyDksnuX4
          stance: supports
          locator: CBDB:207601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JR5LLBu9MpHLDXyDksnuX4
            source_type: api_record
            title: 中国历代人物传记资料库：王喻（CBDB 207601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207601&o=json
            external_identifier: CBDB:207601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LB62ipngXQ563wLfXshjmb
        subject_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1559-01-01
            latest: 1559-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KN2Vcw9uwH7eUbJNkyq2Er
          claim_id: c_LB62ipngXQ563wLfXshjmb
          source_id: s_JR5LLBu9MpHLDXyDksnuX4
          stance: supports
          locator: CBDB:207601
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source:
            id: s_JR5LLBu9MpHLDXyDksnuX4
            source_type: api_record
            title: 中国历代人物传记资料库：王喻（CBDB 207601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207601&o=json
            external_identifier: CBDB:207601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LnZbsYjgbwGmuAvH7xEhiS
        subject_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6hTxA5nywb6kBKM3oEjuLS
          claim_id: c_LnZbsYjgbwGmuAvH7xEhiS
          source_id: s_JR5LLBu9MpHLDXyDksnuX4
          stance: supports
          locator: CBDB:207601
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__SmcUVUguIOc_aQeooUNYO
        subject_person_id: p_iSm59KSahaPBEQYyVsVN9c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cb2VK3X6o18bbQNmeY2bzP
          claim_id: c__SmcUVUguIOc_aQeooUNYO
          source_id: s_jLX6xmsJHG7qoxwaLkNS7p
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jLX6xmsJHG7qoxwaLkNS7p
            source_type: api_record
            title: 中国历代人物传记资料库：王文翰（CBDB 232693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232693&o=json
            external_identifier: CBDB:232693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iSm59KSahaPBEQYyVsVN9c
        status: active
        display_name: 王文翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_R_ZIVhS0RFKLhEK5swrPx-
        subject_person_id: p_syL6ixC5MPoD5HtgSLg4NQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGaEBicyMzhjsHT-hqUgpP
          claim_id: c_R_ZIVhS0RFKLhEK5swrPx-
          source_id: s_hvFxpZJZ5MfpXDVtBPRuJQ
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hvFxpZJZ5MfpXDVtBPRuJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 232692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232692&o=json
            external_identifier: CBDB:232692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_syL6ixC5MPoD5HtgSLg4NQ
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_kY8bBlMEZDMCHzTlGIRv5u
        subject_person_id: p_96BxodT5MiXx3oFPqpeKMP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6p45KToKTmG8qWgvb1jnJZ
          claim_id: c_kY8bBlMEZDMCHzTlGIRv5u
          source_id: s_pgib96LQnGyCTTEEqcBwjs
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pgib96LQnGyCTTEEqcBwjs
            source_type: api_record
            title: 中国历代人物传记资料库：王德昂（CBDB 232691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232691&o=json
            external_identifier: CBDB:232691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_96BxodT5MiXx3oFPqpeKMP
        status: active
        display_name: 王德昂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王喻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王喻（生于1559年），明人物。入仕進士。（中国历代人物传记资料库 CBDB 207601） | accepted |
| birth.date | 1559年 | accepted |
| name.primary | 王喻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iSm59KSahaPBEQYyVsVN9c | 王文翰 | accepted |
| ancestors | p_syL6ixC5MPoD5HtgSLg4NQ | 王純 | accepted |
| ancestors | p_96BxodT5MiXx3oFPqpeKMP | 王德昂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 232692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232692&o=json)
- [中国历代人物传记资料库：王德昂（CBDB 232691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232691&o=json)
- [中国历代人物传记资料库：王文翰（CBDB 232693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232693&o=json)
- [中国历代人物传记资料库：王喻（CBDB 207601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207601&o=json)
