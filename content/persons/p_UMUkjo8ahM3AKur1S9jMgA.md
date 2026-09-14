---
schema: wang-person/v1
id: p_UMUkjo8ahM3AKur1S9jMgA
status: active
merged_into: null
display_name: 王謠
revision: 10
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
          text: 王謠（生于1530年），明人物。明清進士進士，籍贯什邡，入仕進士。（中国历代人物传记资料库 CBDB 205360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGPNEQYruXLkMyOBo0r-50
          claim_id: c_p4SKHvxqzgqwMHkdC7WR8p
          source_id: s_tzUpLYwDdNZGCGQ1MbeFqj
          stance: supports
          locator: CBDB:205360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_Y9isMSH0A4JlsSL3HyJ5t8
        subject_person_id: p_3ygimbuKCCi9mcoHAHWATw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_14Kez2OhRR5GN48qCJ0MUL
          claim_id: c_Y9isMSH0A4JlsSL3HyJ5t8
          source_id: s_LH8sek9tNQA8KHthkDhFGn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LH8sek9tNQA8KHthkDhFGn
            source_type: api_record
            title: 中国历代人物传记资料库：王詩（CBDB 332115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json
            external_identifier: CBDB:332115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ygimbuKCCi9mcoHAHWATw
        status: active
        display_name: 王詩
        merged_into_person_id: null
    - claim:
        id: c_QWqe8cmaK9KlWIILfioH4V
        subject_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUrcz1Hr7GU26xKf2KSNXy
          claim_id: c_QWqe8cmaK9KlWIILfioH4V
          source_id: s_X3fBMkWtPnbBKOjcmxZYHu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X3fBMkWtPnbBKOjcmxZYHu
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 332114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json
            external_identifier: CBDB:332114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4goTpo5iS7ZGxNr8h4JZfQ
        status: active
        display_name: 王誠
        merged_into_person_id: null
    - claim:
        id: c_PPmWRN4UGOThAcmeQ-J23Z
        subject_person_id: p_H8xiGDEA4FNguQLBSYCnbR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I_3j_OWYYsSwO2Q86dWM0D
          claim_id: c_PPmWRN4UGOThAcmeQ-J23Z
          source_id: s_yaEsJgM2BuAy2ndLk_EbZ3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yaEsJgM2BuAy2ndLk_EbZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王許（CBDB 332117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json
            external_identifier: CBDB:332117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8xiGDEA4FNguQLBSYCnbR
        status: active
        display_name: 王許
        merged_into_person_id: null
    - claim:
        id: c_ihnPlUZjCFGI9si1bcpEBi
        subject_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-I1nMRQ5RFJjh15yHRTIAA
          claim_id: c_ihnPlUZjCFGI9si1bcpEBi
          source_id: s_6qNh8reZ3wJTZ54O0wZP5J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6qNh8reZ3wJTZ54O0wZP5J
            source_type: api_record
            title: 中国历代人物传记资料库：王謀（CBDB 332116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json
            external_identifier: CBDB:332116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LEBbiyhaB1AiEoiXUd4yqs
        status: active
        display_name: 王謀
        merged_into_person_id: null
    - claim:
        id: c_TfFuUFrJkD1k7O_w94IaaU
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CPLB6axLdEnfxPl1FgSIJH
          claim_id: c_TfFuUFrJkD1k7O_w94IaaU
          source_id: s_wbz9KIo9HwNwMIvKhnYE2X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wbz9KIo9HwNwMIvKhnYE2X
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 332113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json
            external_identifier: CBDB:332113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oSai1CEM7KTBFb5HHRgoaT
        status: active
        display_name: 王詠
        merged_into_person_id: null
    - claim:
        id: c_kqATrxBpBCBSR_RI9_-YSU
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MBAsIOTLU4BWBVRTGKHznX
          claim_id: c_kqATrxBpBCBSR_RI9_-YSU
          source_id: s_IiQKvT0O45o7f4CBWerSVt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IiQKvT0O45o7f4CBWerSVt
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 332118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json
            external_identifier: CBDB:332118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x55Ji43ffG77Vv6tFXSmuT
        status: active
        display_name: 王諧
        merged_into_person_id: null
---

# 王謠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謠 | accepted |
| birth.date | 1530年 | accepted |
| bio.summary | 王謠（生于1530年），明人物。明清進士進士，籍贯什邡，入仕進士。（中国历代人物传记资料库 CBDB 205360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| ancestors | p_4QxZ7mQuxJ5N4jCYcE8DD4 | 王翔 | accepted |
| ancestors | p_MYNEhQnetSCjeqd6R96N2Q | 王朝荣 | accepted |
| other | p_3ygimbuKCCi9mcoHAHWATw | 王詩 | accepted |
| other | p_4goTpo5iS7ZGxNr8h4JZfQ | 王誠 | accepted |
| other | p_H8xiGDEA4FNguQLBSYCnbR | 王許 | accepted |
| other | p_LEBbiyhaB1AiEoiXUd4yqs | 王謀 | accepted |
| other | p_oSai1CEM7KTBFb5HHRgoaT | 王詠 | accepted |
| other | p_x55Ji43ffG77Vv6tFXSmuT | 王諧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本堅（CBDB 332107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json)
- [中国历代人物传记资料库：王朝荣（CBDB 332105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332105&o=json)
- [中国历代人物传记资料库：王誠（CBDB 332114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json)
- [中国历代人物传记资料库：王謀（CBDB 332116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json)
- [中国历代人物传记资料库：王詩（CBDB 332115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json)
- [中国历代人物传记资料库：王翔（CBDB 332106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332106&o=json)
- [中国历代人物传记资料库：王諧（CBDB 332118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json)
- [中国历代人物传记资料库：王許（CBDB 332117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json)
- [中国历代人物传记资料库：王謠（CBDB 205360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205360&o=json)
- [中国历代人物传记资料库：王詠（CBDB 332113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json)
