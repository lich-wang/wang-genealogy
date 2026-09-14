---
schema: wang-person/v1
id: p_BtDG6VoMZJKLkro1XEtynE
status: active
merged_into: null
display_name: 王交
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PVyp8FGuLNZ9wCEvmeMsGa
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TpxVU78zMcrTCYU8n5KVH
          claim_id: c_PVyp8FGuLNZ9wCEvmeMsGa
          source_id: s_4BPSPcLCgXckishAaYqrqA
          stance: supports
          locator: CBDB:310881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310881）
          source: &a1
            id: s_4BPSPcLCgXckishAaYqrqA
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 310881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310881&o=json
            external_identifier: CBDB:310881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FgEDN3hTtVYQn9u3hkuSr2
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Up83sl5xmW_4w9ccz1iDWl
          claim_id: c_FgEDN3hTtVYQn9u3hkuSr2
          source_id: s_4BPSPcLCgXckishAaYqrqA
          stance: supports
          locator: CBDB:310881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kl8euLA_3aNzo3sM65GxYa
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_weeUT0QX9lSxlmLM7MrFI-
          claim_id: c_kl8euLA_3aNzo3sM65GxYa
          source_id: s_4BPSPcLCgXckishAaYqrqA
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uMoYvHtHcYSbRrJYWwDGUq
        status: active
        display_name: 王陳策
        merged_into_person_id: null
    - claim:
        id: c_XGG9ECZAntm1tIN7HFRd_g
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2H7wDAyC2pUCToo884MHkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfpELR7eo3CZNXO2GJXS4K
          claim_id: c_XGG9ECZAntm1tIN7HFRd_g
          source_id: s_hTx3yLGsPqFqnXHXRgGV_x
          stance: supports
          locator: CBDB：兄弟 王陳策（203846）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王陳善 与 王陳策 为同胞（CBDB 记「弟」），王陳策 之父／母即 王陳善 之父／母。
          source:
            id: s_hTx3yLGsPqFqnXHXRgGV_x
            source_type: api_record
            title: 中国历代人物传记资料库：王陳善（CBDB 310886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json
            external_identifier: CBDB:310886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2H7wDAyC2pUCToo884MHkb
        status: active
        display_name: 王陳善
        merged_into_person_id: null
    - claim:
        id: c_uoTbClb50mBNFY5Lhlz2Mh
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C26spKJK4PxuGw8LBtUqDJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYt4obQf3Yvh55YEOLUmvy
          claim_id: c_uoTbClb50mBNFY5Lhlz2Mh
          source_id: s_Irqk3TDElvhzn2JOGzpzTh
          stance: supports
          locator: CBDB：兄弟 王陳策（203846）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王陳範 与 王陳策 为同胞（CBDB 记「兄」），王陳策 之父／母即 王陳範 之父／母。
          source:
            id: s_Irqk3TDElvhzn2JOGzpzTh
            source_type: api_record
            title: 中国历代人物传记资料库：王陳範（CBDB 310887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310887&o=json
            external_identifier: CBDB:310887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C26spKJK4PxuGw8LBtUqDJ
        status: active
        display_name: 王陳範
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王交

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王交 | accepted |
| bio.summary | 王交，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uMoYvHtHcYSbRrJYWwDGUq | 王陳策 | accepted |
| children | p_2H7wDAyC2pUCToo884MHkb | 王陳善 | accepted |
| children | p_C26spKJK4PxuGw8LBtUqDJ | 王陳範 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳範（CBDB 310887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310887&o=json)
- [中国历代人物传记资料库：王陳善（CBDB 310886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json)
- [中国历代人物传记资料库：王交（CBDB 310881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310881&o=json)
