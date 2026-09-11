---
schema: wang-person/v1
id: p_gEPN4Y1sSEhqz6ktqB2iGE
status: active
merged_into: null
display_name: 王所用
cbdb_id: 207628
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DqMsv6VAoApHjaF55HY9Qq
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所用（生于1572年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207628 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_thrLk_IMgCZEidChgY_ZBM
          claim_id: c_DqMsv6VAoApHjaF55HY9Qq
          source_id: s_9AmsYvEVfRRcHAVv8kSbQT
          stance: supports
          locator: CBDB:207628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_9AmsYvEVfRRcHAVv8kSbQT
            source_type: api_record
            title: 中国历代人物传记资料库：王所用（CBDB 207628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207628&o=json
            external_identifier: CBDB:207628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HoZuYHBMCF2yhmcDKzsbPU
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1572年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1572-01-01
            latest: 1572-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hRSJkL56RJbavMPwKvJgrB
          claim_id: c_HoZuYHBMCF2yhmcDKzsbPU
          source_id: s_9AmsYvEVfRRcHAVv8kSbQT
          stance: supports
          locator: CBDB:207628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1572
          source:
            id: s_9AmsYvEVfRRcHAVv8kSbQT
            source_type: api_record
            title: 中国历代人物传记资料库：王所用（CBDB 207628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207628&o=json
            external_identifier: CBDB:207628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4QhbjwtLuPKQEJpq9Ge89
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X9Awg15ezE8UGiR8A32nZT
          claim_id: c_Q4QhbjwtLuPKQEJpq9Ge89
          source_id: s_9AmsYvEVfRRcHAVv8kSbQT
          stance: supports
          locator: CBDB:207628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1572
          source:
            id: s_9AmsYvEVfRRcHAVv8kSbQT
            source_type: api_record
            title: 中国历代人物传记资料库：王所用（CBDB 207628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207628&o=json
            external_identifier: CBDB:207628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cF2Klxm-X-8JW3XwvvQ3St
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w9gVjzT4od7mCfqYHawSzG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ApvmuTo1u8bEppLkL6eiA4
          claim_id: c_cF2Klxm-X-8JW3XwvvQ3St
          source_id: s_gdd54vkAs7YWYZNbNt1kYm
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gdd54vkAs7YWYZNbNt1kYm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 232795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232795&o=json
            external_identifier: CBDB:232795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w9gVjzT4od7mCfqYHawSzG
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_kvcDo4JLe2ondKUj8e9NRm
        subject_person_id: p_BT2N2Uv89nFrcJ7EvHA3Tt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PEqeQSB1aGfAp30Jc8LiZ9
          claim_id: c_kvcDo4JLe2ondKUj8e9NRm
          source_id: s_waxKDhMDSoZoDoaqF31KV1
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_waxKDhMDSoZoDoaqF31KV1
            source_type: api_record
            title: 中国历代人物传记资料库：王問臣（CBDB 232787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232787&o=json
            external_identifier: CBDB:232787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BT2N2Uv89nFrcJ7EvHA3Tt
        status: active
        display_name: 王問臣
        merged_into_person_id: null
    - claim:
        id: c_7Gy-2xTHsgWmhpY0eitlJ-
        subject_person_id: p_cMgegQDACuJnSsTmWAJHpr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSNHpZofngMZLfBoc759yU
          claim_id: c_7Gy-2xTHsgWmhpY0eitlJ-
          source_id: s_wqPjeAUHViYe5jQoFHnLw4
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wqPjeAUHViYe5jQoFHnLw4
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 232786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232786&o=json
            external_identifier: CBDB:232786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cMgegQDACuJnSsTmWAJHpr
        status: active
        display_name: 王瀛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王所用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王所用（生于1572年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207628 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1572年 | accepted |
| name.primary | 王所用 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_w9gVjzT4od7mCfqYHawSzG | 王玉汝 | accepted |
| ancestors | p_BT2N2Uv89nFrcJ7EvHA3Tt | 王問臣 | accepted |
| ancestors | p_cMgegQDACuJnSsTmWAJHpr | 王瀛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王所用（CBDB 207628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207628&o=json)
- [中国历代人物传记资料库：王問臣（CBDB 232787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232787&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 232786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232786&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 232795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232795&o=json)
