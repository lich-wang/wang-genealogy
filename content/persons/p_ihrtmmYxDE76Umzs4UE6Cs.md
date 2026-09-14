---
schema: wang-person/v1
id: p_ihrtmmYxDE76Umzs4UE6Cs
status: active
merged_into: null
display_name: 王亮采
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QELgo7E7ovSAhr4A8ELyGW
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1UQWzRwTyN6LxE5M1W51US
          claim_id: c_QELgo7E7ovSAhr4A8ELyGW
          source_id: s_ADU3wiVtg9Nu8nKzh359Lr
          stance: supports
          locator: CBDB:212298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212298）
          source: &a1
            id: s_ADU3wiVtg9Nu8nKzh359Lr
            source_type: api_record
            title: 中国历代人物传记资料库：王亮采（CBDB 212298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212298&o=json
            external_identifier: CBDB:212298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4SsuenVcwbaJ9MkGQ4nJvr
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王亮采，明人物。萬曆二年進士，籍贯慈溪，入仕貢生: 歲貢、常貢、挨貢，曾任教授、學正。（中国历代人物传记资料库 CBDB 212298）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OeVMJ50axQYEXPUla5GbSY
          claim_id: c_4SsuenVcwbaJ9MkGQ4nJvr
          source_id: s_ADU3wiVtg9Nu8nKzh359Lr
          stance: supports
          locator: CBDB:212298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_i2cnYUv5DyaBGRhmOJXKO9
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hrFkJ3WZPlubIIuUO8kMKw
          claim_id: c_i2cnYUv5DyaBGRhmOJXKO9
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N92t1qt6tC69nFxar3kdyC
            source_type: api_record
            title: 中国历代人物传记资料库：王應選（CBDB 206025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json
            external_identifier: CBDB:206025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DVj3x7bTLNfdzZiuwDwTNz
        status: active
        display_name: 王應選
        merged_into_person_id: null
    - claim:
        id: c_742aoHCI03fI6cADXSArIf
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyxSDrli-2HfCMjXubDEb4
          claim_id: c_742aoHCI03fI6cADXSArIf
          source_id: s_Vva3psO_cBw6sfCqCvEqPR
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應春 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應春 之父／母。
          source:
            id: s_Vva3psO_cBw6sfCqCvEqPR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1y18Ba6vJZgtotJSEi5dQB
        status: active
        display_name: 王應春
        merged_into_person_id: null
    - claim:
        id: c_WVRN5SyANo-p_G4uUlVuuV
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6bYAjEoYQhAkcu4EHY3t9N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFtHs0pdVsXzvRtj6yz7Xv
          claim_id: c_WVRN5SyANo-p_G4uUlVuuV
          source_id: s_lqhiPr-L17iyBlC9aLAt6o
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王㸅 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王㸅 之父／母。
          source:
            id: s_lqhiPr-L17iyBlC9aLAt6o
            source_type: api_record
            title: 中国历代人物传记资料库：王㸅（CBDB 212307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212307&o=json
            external_identifier: CBDB:212307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6bYAjEoYQhAkcu4EHY3t9N
        status: active
        display_name: 王㸅
        merged_into_person_id: null
    - claim:
        id: c_7C9hPGN_6IPXrbaGSprsNG
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_952bj193cEMGV1CkMmx8Mx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLoYIqzlEut3LProBaROkj
          claim_id: c_7C9hPGN_6IPXrbaGSprsNG
          source_id: s_RvcKLZ_G0D2df20ohfoz58
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應秋 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應秋 之父／母。
          source:
            id: s_RvcKLZ_G0D2df20ohfoz58
            source_type: api_record
            title: 中国历代人物传记资料库：王應秋（CBDB 212301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json
            external_identifier: CBDB:212301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_952bj193cEMGV1CkMmx8Mx
        status: active
        display_name: 王應秋
        merged_into_person_id: null
    - claim:
        id: c_tlrkFpXFxrSKdVUqouoYJg
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ArG513WdUNSgtVATnE6N2N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34HU14RQPapl9HK77I-PY4
          claim_id: c_tlrkFpXFxrSKdVUqouoYJg
          source_id: s_EBwugeRpd2S-QIx2Z4HKGe
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王燭 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王燭 之父／母。
          source:
            id: s_EBwugeRpd2S-QIx2Z4HKGe
            source_type: api_record
            title: 中国历代人物传记资料库：王燭（CBDB 212302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212302&o=json
            external_identifier: CBDB:212302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ArG513WdUNSgtVATnE6N2N
        status: active
        display_name: 王燭
        merged_into_person_id: null
    - claim:
        id: c_Wy439R4PDICooDwONQLOrs
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EbnPei14Yt5DuHpobpEWS9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IG8OS8VLR6rme_QifqyKL8
          claim_id: c_Wy439R4PDICooDwONQLOrs
          source_id: s_7vpCMv8Cqev4m_FZq1jjTQ
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應奎 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應奎 之父／母。
          source:
            id: s_7vpCMv8Cqev4m_FZq1jjTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 212305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json
            external_identifier: CBDB:212305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EbnPei14Yt5DuHpobpEWS9
        status: active
        display_name: 王應奎
        merged_into_person_id: null
    - claim:
        id: c_Tub8ooHdT1fXVAtZeCASAF
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTTQBy1ebbRRVzyLiUqc5G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jb0pkuzITjtezGB8K0CAkT
          claim_id: c_Tub8ooHdT1fXVAtZeCASAF
          source_id: s_nrjE75vJrwQXvV0fsosFoi
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應祥 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應祥 之父／母。
          source:
            id: s_nrjE75vJrwQXvV0fsosFoi
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 212306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212306&o=json
            external_identifier: CBDB:212306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nTTQBy1ebbRRVzyLiUqc5G
        status: active
        display_name: 王應祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亮采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮采 | accepted |
| bio.summary | 王亮采，明人物。萬曆二年進士，籍贯慈溪，入仕貢生: 歲貢、常貢、挨貢，曾任教授、學正。（中国历代人物传记资料库 CBDB 212298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DVj3x7bTLNfdzZiuwDwTNz | 王應選 | accepted |
| children | p_1y18Ba6vJZgtotJSEi5dQB | 王應春 | accepted |
| children | p_6bYAjEoYQhAkcu4EHY3t9N | 王㸅 | accepted |
| children | p_952bj193cEMGV1CkMmx8Mx | 王應秋 | accepted |
| children | p_ArG513WdUNSgtVATnE6N2N | 王燭 | accepted |
| children | p_EbnPei14Yt5DuHpobpEWS9 | 王應奎 | accepted |
| children | p_nTTQBy1ebbRRVzyLiUqc5G | 王應祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮采（CBDB 212298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212298&o=json)
- [中国历代人物传记资料库：王應春（CBDB 212304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 212305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json)
- [中国历代人物传记资料库：王應秋（CBDB 212301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 212306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212306&o=json)
- [中国历代人物传记资料库：王應選（CBDB 206025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json)
- [中国历代人物传记资料库：王燭（CBDB 212302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212302&o=json)
- [中国历代人物传记资料库：王㸅（CBDB 212307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212307&o=json)
