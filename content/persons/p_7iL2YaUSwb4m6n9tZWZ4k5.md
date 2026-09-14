---
schema: wang-person/v1
id: p_7iL2YaUSwb4m6n9tZWZ4k5
status: active
merged_into: null
display_name: 唐氏
revision: 7
cbdb_id: 386677
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JxCvfGK53-G71uwtpnz2v
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LctYxHgJb2fcNdH2D6_xSb
          claim_id: c_5JxCvfGK53-G71uwtpnz2v
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB:386677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7UCTNJaNxmObBFUHvI204B
            source_type: api_record
            title: 中国历代人物传记资料库：唐氏(王肖翁妻)（CBDB 386677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386677&o=json
            external_identifier: CBDB:386677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4phDw9FhKI1dTGKdx88u0
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRcO7wpkt_c8lrP-Fe9Dvx
          claim_id: c_y4phDw9FhKI1dTGKdx88u0
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB:386677
          quotation: null
          interpretation_note: CBDB 明确记录的王肖翁配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FtKlfeorK1OmymgLHk-PsG
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_1BKgqDdnsrgV2GCevBUtrp
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kv102CRNe5_2I6LNm9rtx1
          claim_id: c_FtKlfeorK1OmymgLHk-PsG
          source_id: s_ChR6kfJG4Zb-3Mcgq5qnXA
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ChR6kfJG4Zb-3Mcgq5qnXA
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 386679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386679&o=json
            external_identifier: CBDB:386679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1BKgqDdnsrgV2GCevBUtrp
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c_aHnlY00-B2tL9GHIgflIJt
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_92VF1iW6JXEt2qbBTL6utd
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QnDOURmPnlhbQ-ANtzHm3
          claim_id: c_aHnlY00-B2tL9GHIgflIJt
          source_id: s_s1FJpUbp_y_-Tt31-0JWls
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_s1FJpUbp_y_-Tt31-0JWls
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 386680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386680&o=json
            external_identifier: CBDB:386680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92VF1iW6JXEt2qbBTL6utd
        status: active
        display_name: 王蘭
        merged_into_person_id: null
    - claim:
        id: c_H6ornUKw7tvAMV17YvV-GF
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_APJrGh4Gen9uGxSwawqtDY
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zGwalPyII5ix0NXv91lGEJ
          claim_id: c_H6ornUKw7tvAMV17YvV-GF
          source_id: s_fPraUexi9cI9q3jdBR_8uE
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_fPraUexi9cI9q3jdBR_8uE
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 386681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386681&o=json
            external_identifier: CBDB:386681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_APJrGh4Gen9uGxSwawqtDY
        status: active
        display_name: 王荃
        merged_into_person_id: null
    - claim:
        id: c_E59NIK3SYNYD0VjGXZYCDr
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_aLzY6WUq3wQYv7dJGLN3FC
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9XO9g5sWKrQ5g6kWSVocmn
          claim_id: c_E59NIK3SYNYD0VjGXZYCDr
          source_id: s_k-8t0wfvrLKmBmmicHq4_l
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_k-8t0wfvrLKmBmmicHq4_l
            source_type: api_record
            title: 中国历代人物传记资料库：王藥（CBDB 386683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386683&o=json
            external_identifier: CBDB:386683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aLzY6WUq3wQYv7dJGLN3FC
        status: active
        display_name: 王藥
        merged_into_person_id: null
    - claim:
        id: c_gf_fiQYSxrK__W3KGx0vCq
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_g9Gg9bo5HdEWZ1pBbBB64S
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCDsKbwcvpX3EbuLFuZrsi
          claim_id: c_gf_fiQYSxrK__W3KGx0vCq
          source_id: s_oAhMZABFq0bODTS_DM-JpO
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_oAhMZABFq0bODTS_DM-JpO
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 386682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386682&o=json
            external_identifier: CBDB:386682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9Gg9bo5HdEWZ1pBbBB64S
        status: active
        display_name: 王葵
        merged_into_person_id: null
    - claim:
        id: c_PFCffkWjdPzQHew1NxicGC
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_u4rSUFah6dKGQcKe4dbR1A
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EbNL6wh4WQmcy1toYE9eMV
          claim_id: c_PFCffkWjdPzQHew1NxicGC
          source_id: s__LPCm_EEYidbXkI2-uReNr
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s__LPCm_EEYidbXkI2-uReNr
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 386678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386678&o=json
            external_identifier: CBDB:386678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u4rSUFah6dKGQcKe4dbR1A
        status: active
        display_name: 王萱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R4jJkfSLcUxfGGpevzNauU
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jr84YymB7K92_kY6L879C_
          claim_id: c_R4jJkfSLcUxfGGpevzNauU
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB 双向互证（妻子 唐氏(王肖翁妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nTVozGACxLLaWGNjhMQxnM
        status: active
        display_name: 王肖翁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 唐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 唐氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386677） | accepted |
| name.primary | 唐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1BKgqDdnsrgV2GCevBUtrp | 王藻 | accepted |
| children | p_92VF1iW6JXEt2qbBTL6utd | 王蘭 | accepted |
| children | p_APJrGh4Gen9uGxSwawqtDY | 王荃 | accepted |
| children | p_aLzY6WUq3wQYv7dJGLN3FC | 王藥 | accepted |
| children | p_g9Gg9bo5HdEWZ1pBbBB64S | 王葵 | accepted |
| children | p_u4rSUFah6dKGQcKe4dbR1A | 王萱 | accepted |
| spouses | p_nTVozGACxLLaWGNjhMQxnM | 王肖翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐氏(王肖翁妻)（CBDB 386677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386677&o=json)
- [中国历代人物传记资料库：王葵（CBDB 386682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386682&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 386680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386680&o=json)
- [中国历代人物传记资料库：王荃（CBDB 386681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386681&o=json)
- [中国历代人物传记资料库：王萱（CBDB 386678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386678&o=json)
- [中国历代人物传记资料库：王藥（CBDB 386683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386683&o=json)
- [中国历代人物传记资料库：王藻（CBDB 386679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386679&o=json)
