---
schema: wang-person/v1
id: p_GDsYhHNBBkDcpWQEYco8Kg
status: active
merged_into: null
display_name: 王開
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KnYGzPrK6AbDVx9vEu4Hm5
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GnjjGpReNZGMp3LE8dVtmP
          claim_id: c_KnYGzPrK6AbDVx9vEu4Hm5
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
          stance: supports
          locator: CBDB:206147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206147）
          source: &a1
            id: s_LoN73eTPqyTHv6CNWcjQ8W
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 206147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206147&o=json
            external_identifier: CBDB:206147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K5o3JGMkDqZc29U3uD76kE
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rcRWx9TMLWApCaauhy6dC
          claim_id: c_K5o3JGMkDqZc29U3uD76kE
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
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
        id: c_LKtfh7DeYeuzEcGxx72BXp
        subject_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
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
        - id: cs_EmzFyoTCKFZ2X9F4C6iwKT
          claim_id: c_LKtfh7DeYeuzEcGxx72BXp
          source_id: s_LoN73eTPqyTHv6CNWcjQ8W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Sdqt4dwkYDw3H6cCryhKWp
        subject_person_id: p_9VtJ7v2PnFxabdG54S3Qd2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-9b0QI-oOQjzL6qxPC18k
          claim_id: c_Sdqt4dwkYDw3H6cCryhKWp
          source_id: s_iCtF9Qkm3KNJPcyjL6BgPm
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iCtF9Qkm3KNJPcyjL6BgPm
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 213938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213938&o=json
            external_identifier: CBDB:213938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9VtJ7v2PnFxabdG54S3Qd2
        status: active
        display_name: 王恩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9VtJ7v2PnFxabdG54S3Qd2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 213938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213938&o=json)
- [中国历代人物传记资料库：王開（CBDB 206147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206147&o=json)
