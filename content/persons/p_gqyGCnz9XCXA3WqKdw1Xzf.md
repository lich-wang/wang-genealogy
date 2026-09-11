---
schema: wang-person/v1
id: p_gqyGCnz9XCXA3WqKdw1Xzf
status: active
merged_into: null
display_name: 王其仁
cbdb_id: 136191
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f3zNTyY1acbbq6jjRUKHTu
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其仁，清人物。中国历代人物传记资料库（CBDB）以人物编号 136191 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Vl387kkEUcKQyJZcdiVaq4
          claim_id: c_f3zNTyY1acbbq6jjRUKHTu
          source_id: s_ydERv3bDLow44sLKK1hE7Y
          stance: supports
          locator: CBDB:136191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ydERv3bDLow44sLKK1hE7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王其仁（CBDB 136191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136191&o=json
            external_identifier: CBDB:136191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9U3yQtZw2ppbwrZv959GAq
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qyiJuszGLRKJJ3R7JTDDZY
          claim_id: c_9U3yQtZw2ppbwrZv959GAq
          source_id: s_ydERv3bDLow44sLKK1hE7Y
          stance: supports
          locator: CBDB:136191
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_ydERv3bDLow44sLKK1hE7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王其仁（CBDB 136191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136191&o=json
            external_identifier: CBDB:136191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Cm88UvA-VtWXb220Utc25v
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3BLAEupnmgoMx9jqAGj5U3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fDdDFhrGU_5StgCkSVPbAm
          claim_id: c_Cm88UvA-VtWXb220Utc25v
          source_id: s_apZZrera5W2yseuGYqDH8e
          stance: supports
          locator: 沅湘耆舊集:二百卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_apZZrera5W2yseuGYqDH8e
            source_type: api_record
            title: 中国历代人物传记资料库：王文羽（CBDB 121806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121806&o=json
            external_identifier: CBDB:121806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3BLAEupnmgoMx9jqAGj5U3
        status: active
        display_name: 王文羽
        merged_into_person_id: null
    - claim:
        id: c_qzPsi6uDVLr4VAq7oC7cmF
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jJid7wVthUjvqYN45c4FGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPY281TjPgSz5znPTx4rvQ
          claim_id: c_qzPsi6uDVLr4VAq7oC7cmF
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: 名媛詩話:十二卷，4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XMqjceTtuJJMgcp14FCqZU
            source_type: api_record
            title: 中国历代人物传记资料库：王玥（CBDB 121804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121804&o=json
            external_identifier: CBDB:121804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jJid7wVthUjvqYN45c4FGt
        status: active
        display_name: 王玥
        merged_into_person_id: null
    - claim:
        id: c_FZookyDqyuNxw3-A_VsiJP
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iL6RAKnmLTU4wkzWYyrNXf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pDzq0-YUweyRFRYijOjUiM
          claim_id: c_FZookyDqyuNxw3-A_VsiJP
          source_id: s_ydERv3bDLow44sLKK1hE7Y
          stance: supports
          locator: CBDB 双向互证（子 王啟玉 ⇄ 父 王其仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iL6RAKnmLTU4wkzWYyrNXf
        status: active
        display_name: 王啟玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5sXyEmP1M5EMgnd5BEzrZL
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3uJyMW5XZoMjyd6QhQ3poA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kw7iDCnyORdAOAzVVATD5P
          claim_id: c_5sXyEmP1M5EMgnd5BEzrZL
          source_id: s_QcMO59V2lsxdN0nC_cgNWD
          stance: supports
          locator: CBDB 双向互证（妻子 鄧氏(王玥母)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QcMO59V2lsxdN0nC_cgNWD
            source_type: api_record
            title: 中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136192&o=json
            external_identifier: CBDB:136192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3uJyMW5XZoMjyd6QhQ3poA
        status: active
        display_name: 鄧氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王其仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王其仁，清人物。中国历代人物传记资料库（CBDB）以人物编号 136191 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王其仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3BLAEupnmgoMx9jqAGj5U3 | 王文羽 | accepted |
| children | p_jJid7wVthUjvqYN45c4FGt | 王玥 | accepted |
| children | p_iL6RAKnmLTU4wkzWYyrNXf | 王啟玉 | accepted |
| spouses | p_3uJyMW5XZoMjyd6QhQ3poA | 鄧氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136192&o=json)
- [中国历代人物传记资料库：王其仁（CBDB 136191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136191&o=json)
- [中国历代人物传记资料库：王文羽（CBDB 121806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121806&o=json)
- [中国历代人物传记资料库：王玥（CBDB 121804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121804&o=json)
