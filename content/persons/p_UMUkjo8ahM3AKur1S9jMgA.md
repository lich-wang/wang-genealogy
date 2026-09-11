---
schema: wang-person/v1
id: p_UMUkjo8ahM3AKur1S9jMgA
status: active
merged_into: null
display_name: 王謠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A91wwMeStmEdgHVUqy6xQ2
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9P6En1ZkPZaWBxKmx817pG
          claim_id: c_A91wwMeStmEdgHVUqy6xQ2
          source_id: s_tzUpLYwDdNZGCGQ1MbeFqj
          stance: supports
          locator: CBDB:205360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205360）
          source: &a1
            id: s_tzUpLYwDdNZGCGQ1MbeFqj
            source_type: api_record
            title: 中国历代人物传记资料库：王謠（CBDB 205360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205360&o=json
            external_identifier: CBDB:205360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_b1SG7jY2fJzT5hc5vP2WT4
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1530年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygqJxN8GFBCgVt2UYJfCHw
          claim_id: c_b1SG7jY2fJzT5hc5vP2WT4
          source_id: s_tzUpLYwDdNZGCGQ1MbeFqj
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
        id: c_p4SKHvxqzgqwMHkdC7WR8p
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
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
        - id: cs_dMS6L8yy3B7vV9izWF3YBg
          claim_id: c_p4SKHvxqzgqwMHkdC7WR8p
          source_id: s_tzUpLYwDdNZGCGQ1MbeFqj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dpCeYS1s3NAuekdwLFJdeK
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vj-Clyv4nisZKI7-fQiKtf
          claim_id: c_dpCeYS1s3NAuekdwLFJdeK
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8mW4QyCmDN4jrYUjExNRUL
            source_type: api_record
            title: 中国历代人物传记资料库：王本堅（CBDB 332107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json
            external_identifier: CBDB:332107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qqsY6t9Q8faV4F4CdLeZ5T
        status: active
        display_name: 王本堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lzcP7Rx9AKeYj81-klofsS
        subject_person_id: p_4QxZ7mQuxJ5N4jCYcE8DD4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9biowq1tuxkcM6gVT6DZD
          claim_id: c_lzcP7Rx9AKeYj81-klofsS
          source_id: s_pnznhiSzEG2A6ympuM1j2s
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pnznhiSzEG2A6ympuM1j2s
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 332106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332106&o=json
            external_identifier: CBDB:332106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4QxZ7mQuxJ5N4jCYcE8DD4
        status: active
        display_name: 王翔
        merged_into_person_id: null
    - claim:
        id: c_FOtHiwtKb8J9HouWT9onIs
        subject_person_id: p_MYNEhQnetSCjeqd6R96N2Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BD3r-1w3YrgLIUcdjIY1Jx
          claim_id: c_FOtHiwtKb8J9HouWT9onIs
          source_id: s_fiEjNq1G7cc9xHtMC1LFjn
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fiEjNq1G7cc9xHtMC1LFjn
            source_type: api_record
            title: 中国历代人物传记资料库：王朝荣（CBDB 332105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332105&o=json
            external_identifier: CBDB:332105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MYNEhQnetSCjeqd6R96N2Q
        status: active
        display_name: 王朝荣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王謠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謠 | accepted |
| birth.date | 1530年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| ancestors | p_4QxZ7mQuxJ5N4jCYcE8DD4 | 王翔 | accepted |
| ancestors | p_MYNEhQnetSCjeqd6R96N2Q | 王朝荣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本堅（CBDB 332107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json)
- [中国历代人物传记资料库：王朝荣（CBDB 332105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332105&o=json)
- [中国历代人物传记资料库：王翔（CBDB 332106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332106&o=json)
- [中国历代人物传记资料库：王謠（CBDB 205360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205360&o=json)
