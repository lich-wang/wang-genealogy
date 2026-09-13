---
schema: wang-person/v1
id: p_KX3HaGwtHE9r1pvSuRLLHX
status: active
merged_into: null
display_name: 王渊
cbdb_id: 3998
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ffX5o4ySmVqygVmm31UH88
        subject_person_id: p_KX3HaGwtHE9r1pvSuRLLHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渊（卒于1085年），宋人物。籍贯管城，身份为富豪，入仕軍員轉補，曾任皇城使、閤門通事舍人、閤門祗候。（中国历代人物传记资料库 CBDB 3998）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_XVto2CVmfP2NYko1CboDQT
          claim_id: c_ffX5o4ySmVqygVmm31UH88
          source_id: s_dQp3ZyujbuE4phNXktFUSG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_dQp3ZyujbuE4phNXktFUSG
            source_type: api_record
            title: 维基数据：王渊（Q45363064）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363064
            external_identifier: Q45363064
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
        - id: cs_D45pUvdwgVt72X_Gbu5lbi
          claim_id: c_ffX5o4ySmVqygVmm31UH88
          source_id: s_GYLB1Q9Tg91zKxF4MPYxEX
          stance: supports
          locator: CBDB:3998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GYLB1Q9Tg91zKxF4MPYxEX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淵（3998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3998&o=json
            external_identifier: CBDB:3998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:09.047Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_A4C586Frof2ar4TysvPn83
        subject_person_id: p_KX3HaGwtHE9r1pvSuRLLHX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1085-01-01
            latest: 1085-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NfpoNPda5NoFVzLAhrn5Mu
          claim_id: c_A4C586Frof2ar4TysvPn83
          source_id: s_dQp3ZyujbuE4phNXktFUSG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dQp3ZyujbuE4phNXktFUSG
            source_type: api_record
            title: 维基数据：王渊（Q45363064）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363064
            external_identifier: Q45363064
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hVZZwsH2VhPw7o8HqK2zo4
        subject_person_id: p_KX3HaGwtHE9r1pvSuRLLHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k3BoskjNTg3muZNBy1DXFm
          claim_id: c_hVZZwsH2VhPw7o8HqK2zo4
          source_id: s_GYLB1Q9Tg91zKxF4MPYxEX
          stance: supports
          locator: Q45363064
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oQFZPqv9JE5EFN4DMCVPyo
          claim_id: c_hVZZwsH2VhPw7o8HqK2zo4
          source_id: s_dQp3ZyujbuE4phNXktFUSG
          stance: supports
          locator: Q45363064
          quotation: null
          interpretation_note: null
          source:
            id: s_dQp3ZyujbuE4phNXktFUSG
            source_type: api_record
            title: 维基数据：王渊（Q45363064）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363064
            external_identifier: Q45363064
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qpXK9xJWUVZLQc7qhFveg2
        subject_person_id: p_628btDKdbR4ERpBGANNokB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KX3HaGwtHE9r1pvSuRLLHX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9RCW74WWwyPz1VsM9p2JE
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_dQp3ZyujbuE4phNXktFUSG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_f2Xa5RoJFRQbgL43yYiyJt
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_Gp4WBVyZNHoDcTHDjYXkGL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp4WBVyZNHoDcTHDjYXkGL
            source_type: api_record
            title: 维基数据：王咸熙（Q45401562）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401562
            external_identifier: Q45401562
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_gDAfub7UoJzbF2pmDB9ty2
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_RY2uDCo42d26UVABT5UsPF
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RY2uDCo42d26UVABT5UsPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王咸熙（21947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json
            external_identifier: CBDB:21947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.378Z
            metadata_json: null
      object_person:
        id: p_628btDKdbR4ERpBGANNokB
        status: active
        display_name: 王咸熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王渊（卒于1085年），宋人物。籍贯管城，身份为富豪，入仕軍員轉補，曾任皇城使、閤門通事舍人、閤門祗候。（中国历代人物传记资料库 CBDB 3998） | accepted |
| death.date | 1085年 | accepted |
| name.primary | 王渊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_628btDKdbR4ERpBGANNokB | 王咸熙 | accepted |

## 外部来源

- [维基数据：王咸熙（Q45401562）](https://www.wikidata.org/wiki/Q45401562)
- [维基数据：王渊（Q45363064）](https://www.wikidata.org/wiki/Q45363064)
- [CBDB 中国历代人物传记资料库：王咸熙（21947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json)
- [CBDB 中国历代人物传记资料库：王淵（3998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3998&o=json)
