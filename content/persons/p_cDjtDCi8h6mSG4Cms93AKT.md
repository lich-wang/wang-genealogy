---
schema: wang-person/v1
id: p_cDjtDCi8h6mSG4Cms93AKT
status: active
merged_into: null
display_name: 王深
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KHUcKRiEbnwZpoxDMTyuBg
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zq5g1Pm7kkDY9NT1Xzfwo9
          claim_id: c_KHUcKRiEbnwZpoxDMTyuBg
          source_id: s_sC1ZqLTT81hUx4vovz4x5G
          stance: supports
          locator: CBDB:294953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294953）
          source: &a1
            id: s_sC1ZqLTT81hUx4vovz4x5G
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 294953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json
            external_identifier: CBDB:294953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7oib8hdALV6h8iDpQPzr1C
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TjP90cgETLoXD8IeW6b9Ey
          claim_id: c_7oib8hdALV6h8iDpQPzr1C
          source_id: s_sC1ZqLTT81hUx4vovz4x5G
          stance: supports
          locator: CBDB:294953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fRXUHSyGtBaF-bL5ACyknY
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgE5ADHUh6omf2-6fLJ6gn
          claim_id: c_fRXUHSyGtBaF-bL5ACyknY
          source_id: s_sC1ZqLTT81hUx4vovz4x5G
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ShbQcKbhPZJtYL14xZXyTR
        status: active
        display_name: 王佩
        merged_into_person_id: null
    - claim:
        id: c_gKRsW0FgtYXq9BzTQqKQ-o
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FPPqqpmpr1dQzrNM4f842m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__MwXzP8lcQVtT4vxufIuDJ
          claim_id: c_gKRsW0FgtYXq9BzTQqKQ-o
          source_id: s_7rMAm9MWhyPOJA21KzwA0x
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王珂 与 王佩 为同胞（CBDB 记「弟」），王佩 之父／母即 王珂 之父／母。
          source:
            id: s_7rMAm9MWhyPOJA21KzwA0x
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 294957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json
            external_identifier: CBDB:294957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FPPqqpmpr1dQzrNM4f842m
        status: active
        display_name: 王珂
        merged_into_person_id: null
    - claim:
        id: c_4RDWm99Ol-EFC3wSVcO7hb
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCvrnA8oUM8obQJHS1AyUb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IdKMNe3Osu7aeZrK1lO0IQ
          claim_id: c_4RDWm99Ol-EFC3wSVcO7hb
          source_id: s_JEJF94WCYHrfkrKutwlNdF
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王玻 与 王佩 为同胞（CBDB 记「兄」），王佩 之父／母即 王玻 之父／母。
          source:
            id: s_JEJF94WCYHrfkrKutwlNdF
            source_type: api_record
            title: 中国历代人物传记资料库：王玻（CBDB 294960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294960&o=json
            external_identifier: CBDB:294960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RCvrnA8oUM8obQJHS1AyUb
        status: active
        display_name: 王玻
        merged_into_person_id: null
    - claim:
        id: c_hTNmPaxKsHYIFFFk11Gg0Y
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jrznE4b26e5BrcocqTd29S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZuVEoFtRXWA2154npoqzn
          claim_id: c_hTNmPaxKsHYIFFFk11Gg0Y
          source_id: s_w5Rp9jhn5rFoJZ1wlXKRwZ
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王璞 与 王佩 为同胞（CBDB 记「兄」），王佩 之父／母即 王璞 之父／母。
          source:
            id: s_w5Rp9jhn5rFoJZ1wlXKRwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 294958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294958&o=json
            external_identifier: CBDB:294958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jrznE4b26e5BrcocqTd29S
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_NNNMzIXHqNyjN-Zcl57wRY
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n2oTZTtv7eB89Qsr3D1F47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ef1yImRINfBcNPFkGUVUjG
          claim_id: c_NNNMzIXHqNyjN-Zcl57wRY
          source_id: s_auAE2ntc7MzfU-4KThGe7x
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王价 与 王佩 为同胞（CBDB 记「兄」），王佩 之父／母即 王价 之父／母。
          source:
            id: s_auAE2ntc7MzfU-4KThGe7x
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 294961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json
            external_identifier: CBDB:294961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n2oTZTtv7eB89Qsr3D1F47
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_NaVYp7h4YTGlXHju5goGSl
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPriaqYVjKQYmfTe7ujnCw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inWI70ZjLoxEd3nSkJqcuk
          claim_id: c_NaVYp7h4YTGlXHju5goGSl
          source_id: s_6o1cQQCIfrONYqmaZNPmL3
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王儇 与 王佩 为同胞（CBDB 记「兄」），王佩 之父／母即 王儇 之父／母。
          source:
            id: s_6o1cQQCIfrONYqmaZNPmL3
            source_type: api_record
            title: 中国历代人物传记资料库：王儇（CBDB 294959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json
            external_identifier: CBDB:294959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPriaqYVjKQYmfTe7ujnCw
        status: active
        display_name: 王儇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | 王深，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ShbQcKbhPZJtYL14xZXyTR | 王佩 | accepted |
| children | p_FPPqqpmpr1dQzrNM4f842m | 王珂 | accepted |
| children | p_RCvrnA8oUM8obQJHS1AyUb | 王玻 | accepted |
| children | p_jrznE4b26e5BrcocqTd29S | 王璞 | accepted |
| children | p_n2oTZTtv7eB89Qsr3D1F47 | 王价 | accepted |
| children | p_rPriaqYVjKQYmfTe7ujnCw | 王儇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玻（CBDB 294960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294960&o=json)
- [中国历代人物传记资料库：王价（CBDB 294961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json)
- [中国历代人物传记资料库：王珂（CBDB 294957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json)
- [中国历代人物传记资料库：王璞（CBDB 294958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294958&o=json)
- [中国历代人物传记资料库：王深（CBDB 294953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json)
- [中国历代人物传记资料库：王儇（CBDB 294959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json)
