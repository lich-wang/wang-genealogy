---
schema: wang-person/v1
id: p_Hgxi33jEZJCNUrJvtuJpZh
status: active
merged_into: null
display_name: 王庭哲
cbdb_id: 270483
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jjWrTWgCDgfUqR62KS8sPi
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭哲，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gwD3XhUTjcKxmd1pRkJA2j
          claim_id: c_jjWrTWgCDgfUqR62KS8sPi
          source_id: s_r2ktbXVBUgDJMQQYnCvHgr
          stance: supports
          locator: CBDB:270483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r2ktbXVBUgDJMQQYnCvHgr
            source_type: api_record
            title: 中国历代人物传记资料库：王庭哲（CBDB 270483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270483&o=json
            external_identifier: CBDB:270483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SqzNsfkCJMsYBYGuNT2tfQ
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JeDQeG67UTT1v57dHaf3Ay
          claim_id: c_SqzNsfkCJMsYBYGuNT2tfQ
          source_id: s_r2ktbXVBUgDJMQQYnCvHgr
          stance: supports
          locator: CBDB:270483
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GO5WJcX2h0y0Q1o0n-sKQC
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvjohzOCYOshUFZroSNgT6
          claim_id: c_GO5WJcX2h0y0Q1o0n-sKQC
          source_id: s_r2ktbXVBUgDJMQQYnCvHgr
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r2ktbXVBUgDJMQQYnCvHgr
            source_type: api_record
            title: 中国历代人物传记资料库：王庭哲（CBDB 270483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270483&o=json
            external_identifier: CBDB:270483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nr8RYEFav3WB5L5BxkUtUu
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_4fXWk9Vt2aq-UYnv5fqzQ1
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_518MAjgWUyHuRmraWVNPiT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ztus67iVAGZxj3y02cPv36
          claim_id: c_4fXWk9Vt2aq-UYnv5fqzQ1
          source_id: s_TLxC_cA2NMXvx0yj4V8G4S
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王銳 之父／母。
          source:
            id: s_TLxC_cA2NMXvx0yj4V8G4S
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 270528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json
            external_identifier: CBDB:270528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_518MAjgWUyHuRmraWVNPiT
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_enrZ892bOGAQ-VwdoY53wY
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JgEf657u1LhDVLqFMVXJKS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8IKBE2hfVz6W4G_NqXQCle
          claim_id: c_enrZ892bOGAQ-VwdoY53wY
          source_id: s_hpB_36syEQrLGctw-R50NR
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王鏞 之父／母。
          source:
            id: s_hpB_36syEQrLGctw-R50NR
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 270539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json
            external_identifier: CBDB:270539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JgEf657u1LhDVLqFMVXJKS
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_s48grGlexz3sQ-_wnCqRMZ
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_icmKKn6dtzVXpGw2D2U8LL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaKg_ScPXO5W2UXy6xxx5x
          claim_id: c_s48grGlexz3sQ-_wnCqRMZ
          source_id: s_ua3Yj4SyknaRJvkgeXKvpO
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王鐸 之父／母。
          source:
            id: s_ua3Yj4SyknaRJvkgeXKvpO
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 270516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json
            external_identifier: CBDB:270516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_icmKKn6dtzVXpGw2D2U8LL
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭哲，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270483） | accepted |
| name.primary | 王庭哲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nr8RYEFav3WB5L5BxkUtUu | 王欽 | accepted |
| children | p_518MAjgWUyHuRmraWVNPiT | 王銳 | accepted |
| children | p_JgEf657u1LhDVLqFMVXJKS | 王鏞 | accepted |
| children | p_icmKKn6dtzVXpGw2D2U8LL | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 270516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json)
- [中国历代人物传记资料库：王銳（CBDB 270528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json)
- [中国历代人物传记资料库：王庭哲（CBDB 270483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270483&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 270539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json)
