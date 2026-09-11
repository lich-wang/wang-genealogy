---
schema: wang-person/v1
id: p_tmq6Wnq1CjinFj62NTxvnd
status: active
merged_into: null
display_name: 王师颜
cbdb_id: 22250
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q32W7iGj5j45ZWY8emx3Tc
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师颜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ssaTH1Z9rYKQW9TYqvMQd6
          claim_id: c_Q32W7iGj5j45ZWY8emx3Tc
          source_id: s_hfGnqqkZu2ykMbrGScDYiC
          stance: supports
          locator: Q45402112
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_hfGnqqkZu2ykMbrGScDYiC
            source_type: api_record
            title: 维基数据：王师颜（Q45402112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402112
            external_identifier: Q45402112
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_pRW36wpayKeT645FisYWzQ
          claim_id: c_Q32W7iGj5j45ZWY8emx3Tc
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: CBDB:22250
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_Z4fxo5rB3BvheXUFeqMwGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師顏（22250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json
            external_identifier: CBDB:22250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dsACeV5YPgFJ5udShbfHYE
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 22250)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRww3L2CAhCu4VSP3RXMuw
          claim_id: c_dsACeV5YPgFJ5udShbfHYE
          source_id: s_hfGnqqkZu2ykMbrGScDYiC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9ctDDfx8kkAA1uFwAZ8ov2
        subject_person_id: p_Myr7yL2y4NUdhUtw1bG9bq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gisVwBmHwiKE4xaN2TY9Du
          claim_id: c_9ctDDfx8kkAA1uFwAZ8ov2
          source_id: s_ZkMbPRZGMEwFHB19ascjGD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZkMbPRZGMEwFHB19ascjGD
            source_type: api_record
            title: 维基数据：王扶（Q45359463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359463
            external_identifier: Q45359463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%B6_(%E5%8C%97%E5%AE%8B)
        - id: cs_A2WKLsXBAbNRpUgWJAzQLT
          claim_id: c_9ctDDfx8kkAA1uFwAZ8ov2
          source_id: s_hfGnqqkZu2ykMbrGScDYiC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_UUFejo2By8FJmep4PEYJwf
          claim_id: c_9ctDDfx8kkAA1uFwAZ8ov2
          source_id: s_KK3ayXGH4yjNdD6jebqTPs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_KK3ayXGH4yjNdD6jebqTPs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王扶（1804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1804&o=json
            external_identifier: CBDB:1804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:20.458Z
            metadata_json: null
      object_person:
        id: p_Myr7yL2y4NUdhUtw1bG9bq
        status: active
        display_name: 王扶
        merged_into_person_id: null
  children:
    - claim:
        id: c_EwQ9omLi4zvL4GcpB4UnLB
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xymbWLJmY3XkbYD4jEzYfA
          claim_id: c_EwQ9omLi4zvL4GcpB4UnLB
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_jKXJkJ1TnTJjXXFiHkv8J6
          claim_id: c_EwQ9omLi4zvL4GcpB4UnLB
          source_id: s_hfGnqqkZu2ykMbrGScDYiC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_LFjdt9p5AsmDgzGet1fXc3
        status: active
        display_name: 王广渊
        merged_into_person_id: null
    - claim:
        id: c_jE1omeaqDbQAsjg91vfX5b
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_M7yR2N6radi7SJKEvust2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8RGYVzjh6R4psQUGzvHys
          claim_id: c_jE1omeaqDbQAsjg91vfX5b
          source_id: s_6mrtX7gdxC7sQ12Pspp7XE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_6mrtX7gdxC7sQ12Pspp7XE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣臨（2133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2133&o=json
            external_identifier: CBDB:2133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.587Z
            metadata_json: null
        - id: cs_vj2AsPHzsR1AT2xwQwHHGD
          claim_id: c_jE1omeaqDbQAsjg91vfX5b
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a2
      object_person:
        id: p_M7yR2N6radi7SJKEvust2s
        status: active
        display_name: 王临
        merged_into_person_id: null
    - claim:
        id: c_V2m65TFNfz9EbKXgWS6AW1
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_41bxVmHw5ND7pqZvCudej3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vpu7D6S562rQBrDstDXjw3
          claim_id: c_V2m65TFNfz9EbKXgWS6AW1
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a2
        - id: cs_BBD4ic3X7tBJVofSqQxwBF
          claim_id: c_V2m65TFNfz9EbKXgWS6AW1
          source_id: s_c2M6yJTXtwJQYDe1jSzzJG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_c2M6yJTXtwJQYDe1jSzzJG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣延（36573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36573&o=json
            external_identifier: CBDB:36573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.611Z
            metadata_json: null
      object_person:
        id: p_41bxVmHw5ND7pqZvCudej3
        status: active
        display_name: 王广延
        merged_into_person_id: null
    - claim:
        id: c_W8QnCdw3FNsfzQDn6ohr8K
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MF4Tkm8P8AmX2EL67mNieQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6HY4P1i5TZ3eCBaoHGqdy3
          claim_id: c_W8QnCdw3FNsfzQDn6ohr8K
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a2
        - id: cs_su6ofdbLPnEu1bwg2FrS13
          claim_id: c_W8QnCdw3FNsfzQDn6ohr8K
          source_id: s_djFgZSS6i8HzjLqngUeG5z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_djFgZSS6i8HzjLqngUeG5z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣臣（36574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36574&o=json
            external_identifier: CBDB:36574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:34.007Z
            metadata_json: null
      object_person:
        id: p_MF4Tkm8P8AmX2EL67mNieQ
        status: active
        display_name: 王广臣
        merged_into_person_id: null
    - claim:
        id: c_pCsVwMoZkjdFWFTH5ooneA
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ss4FDNkeA1F5Hedzt8DUZx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0eRXTjJde7CMq93_Pw362n
          claim_id: c_pCsVwMoZkjdFWFTH5ooneA
          source_id: s_4SaM89PBkxEmLnKXYfSE4V
          stance: supports
          locator: 鄖溪集：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4SaM89PBkxEmLnKXYfSE4V
            source_type: api_record
            title: 中国历代人物传记资料库：王廣廉（CBDB 1843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1843&o=json
            external_identifier: CBDB:1843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ss4FDNkeA1F5Hedzt8DUZx
        status: active
        display_name: 王廣廉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_WxZP-zFUdISEKiY-wACZcu
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8vyDFoA9sK1kQi3gjQvrix
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ffRSkKYML7KDh4Q5T7WSXA
          claim_id: c_WxZP-zFUdISEKiY-wACZcu
          source_id: s_d5feNfJB8JBMCJh56ikwqz
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d5feNfJB8JBMCJh56ikwqz
            source_type: api_record
            title: 中国历代人物传记资料库：王得凝（CBDB 695612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695612&o=json
            external_identifier: CBDB:695612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8vyDFoA9sK1kQi3gjQvrix
        status: active
        display_name: 王得凝
        merged_into_person_id: null
    - claim:
        id: c_7mLO0H5MREoa3rNN4lHADk
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FSPKUCsUhFPGcVbwr9ZPSh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rT9_LW4jRAvXIxJKIdaxkO
          claim_id: c_7mLO0H5MREoa3rNN4lHADk
          source_id: s_TCVw33SNvv2NfoH6NHEHyL
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TCVw33SNvv2NfoH6NHEHyL
            source_type: api_record
            title: 中国历代人物传记资料库：王得與（CBDB 695611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695611&o=json
            external_identifier: CBDB:695611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FSPKUCsUhFPGcVbwr9ZPSh
        status: active
        display_name: 王得與
        merged_into_person_id: null
    - claim:
        id: c_dFG9SChG7z0VZK2dB8FpI4
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UtxyZahWa6LaP1XseyvCe3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Q95CmbjkL9LSnAVYm-fi-
          claim_id: c_dFG9SChG7z0VZK2dB8FpI4
          source_id: s_P53btTDjbkVw2QTjRL7tZz
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P53btTDjbkVw2QTjRL7tZz
            source_type: api_record
            title: 中国历代人物传记资料库：王得象（CBDB 695613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695613&o=json
            external_identifier: CBDB:695613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UtxyZahWa6LaP1XseyvCe3
        status: active
        display_name: 王得象
        merged_into_person_id: null
  other: []
---

# 王师颜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王师颜 | accepted |
| bio.summary | Song dynasty person (CBDB = 22250) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Myr7yL2y4NUdhUtw1bG9bq | 王扶 | accepted |
| children | p_LFjdt9p5AsmDgzGet1fXc3 | 王广渊 | accepted |
| children | p_M7yR2N6radi7SJKEvust2s | 王临 | accepted |
| children | p_41bxVmHw5ND7pqZvCudej3 | 王广延 | accepted |
| children | p_MF4Tkm8P8AmX2EL67mNieQ | 王广臣 | accepted |
| children | p_Ss4FDNkeA1F5Hedzt8DUZx | 王廣廉 | accepted |
| descendants | p_8vyDFoA9sK1kQi3gjQvrix | 王得凝 | accepted |
| descendants | p_FSPKUCsUhFPGcVbwr9ZPSh | 王得與 | accepted |
| descendants | p_UtxyZahWa6LaP1XseyvCe3 | 王得象 | accepted |

## 外部来源

- [维基数据：王扶（Q45359463）](https://www.wikidata.org/wiki/Q45359463)
- [维基数据：王广渊（Q45359566）](https://www.wikidata.org/wiki/Q45359566)
- [维基数据：王师颜（Q45402112）](https://www.wikidata.org/wiki/Q45402112)
- [中国历代人物传记资料库：王得凝（CBDB 695612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695612&o=json)
- [中国历代人物传记资料库：王得象（CBDB 695613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695613&o=json)
- [中国历代人物传记资料库：王得與（CBDB 695611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695611&o=json)
- [中国历代人物传记资料库：王廣廉（CBDB 1843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1843&o=json)
- [CBDB 中国历代人物传记资料库：王扶（1804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1804&o=json)
- [CBDB 中国历代人物传记资料库：王廣臣（36574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36574&o=json)
- [CBDB 中国历代人物传记资料库：王廣臨（2133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2133&o=json)
- [CBDB 中国历代人物传记资料库：王廣延（36573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36573&o=json)
- [CBDB 中国历代人物传记资料库：王師顏（22250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json)
