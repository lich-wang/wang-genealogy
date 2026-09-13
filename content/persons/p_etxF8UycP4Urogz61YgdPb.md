---
schema: wang-person/v1
id: p_etxF8UycP4Urogz61YgdPb
status: active
merged_into: null
display_name: 王安舜
cbdb_id: 207738
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TCzKJkwbpqwFomdE1Az6Z7
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安舜（生于1582年），史料所见人物。本项目依据《中国历代人物传记资料库：王安舜（CBDB 207738）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_UAJdqF7wZuQSlpxSCXUQjn
          claim_id: c_TCzKJkwbpqwFomdE1Az6Z7
          source_id: s_wyVK7bW3t3D8gjVP5YbSCQ
          stance: supports
          locator: CBDB:207738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wyVK7bW3t3D8gjVP5YbSCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王安舜（CBDB 207738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207738&o=json
            external_identifier: CBDB:207738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BVse41nDuvJWFLgJLbb5AY
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1582年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1582-01-01
            latest: 1582-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TY8gVLGZyraKgj4gYwHM9r
          claim_id: c_BVse41nDuvJWFLgJLbb5AY
          source_id: s_wyVK7bW3t3D8gjVP5YbSCQ
          stance: supports
          locator: CBDB:207738
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1582
          source:
            id: s_wyVK7bW3t3D8gjVP5YbSCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王安舜（CBDB 207738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207738&o=json
            external_identifier: CBDB:207738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2w2HL9QGFnuFwFRQwN9oV
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sMrK4DEmvAKvi7xBeS46SV
          claim_id: c_v2w2HL9QGFnuFwFRQwN9oV
          source_id: s_wyVK7bW3t3D8gjVP5YbSCQ
          stance: supports
          locator: CBDB:207738
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1582
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1MCjLoR3OqrGBSMnFyg7ue
        subject_person_id: p_VDcSxdbjB5JPLzERpmYvFU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_etxF8UycP4Urogz61YgdPb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XUNF3dOHQQfLpSbP576FI5
          claim_id: c_1MCjLoR3OqrGBSMnFyg7ue
          source_id: s_DdLHuAh55YmvgPYyFJ33xS
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DdLHuAh55YmvgPYyFJ33xS
            source_type: api_record
            title: 中国历代人物传记资料库：王泝（CBDB 234985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234985&o=json
            external_identifier: CBDB:234985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VDcSxdbjB5JPLzERpmYvFU
        status: active
        display_name: 王泝
        merged_into_person_id: null
  children:
    - claim:
        id: c_LbGr16pflN4z9mAOUG7j7A
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rL8eYtTnkBPxdnZ2ccwgxd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXMfbKqRLPXqxqrMCspQYG
          claim_id: c_LbGr16pflN4z9mAOUG7j7A
          source_id: s_FRWergd6GNDkFFeLx51Sk6
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FRWergd6GNDkFFeLx51Sk6
            source_type: api_record
            title: 中国历代人物传记资料库：王作箕（CBDB 234992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234992&o=json
            external_identifier: CBDB:234992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rL8eYtTnkBPxdnZ2ccwgxd
        status: active
        display_name: 王作箕
        merged_into_person_id: null
    - claim:
        id: c_UK6RTdFFklpQEgygPAsee2
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UXKgyQePSrwswQHXfyHCxp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSrkN9mrAiN2pivpSTFqnv
          claim_id: c_UK6RTdFFklpQEgygPAsee2
          source_id: s_GuEbdSay6tqRMNfFY12F9V
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GuEbdSay6tqRMNfFY12F9V
            source_type: api_record
            title: 中国历代人物传记资料库：王作翼（CBDB 234993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234993&o=json
            external_identifier: CBDB:234993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UXKgyQePSrwswQHXfyHCxp
        status: active
        display_name: 王作翼
        merged_into_person_id: null
    - claim:
        id: c_MobYqIpRR7N7nQw4EeW3Ia
        subject_person_id: p_etxF8UycP4Urogz61YgdPb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vG8PQBwfZ9HjqfNa8GhzNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WAOMxoYRXH6Sv9acu5lb3a
          claim_id: c_MobYqIpRR7N7nQw4EeW3Ia
          source_id: s_TpnBcm3xHfhbZv8X3UJM9v
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TpnBcm3xHfhbZv8X3UJM9v
            source_type: api_record
            title: 中国历代人物传记资料库：王作璧（CBDB 234994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234994&o=json
            external_identifier: CBDB:234994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vG8PQBwfZ9HjqfNa8GhzNJ
        status: active
        display_name: 王作璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yTKUjovalga9OVVMfvkvH2
        subject_person_id: p_5dSakUSWw4kjHJqxaV8CHv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_etxF8UycP4Urogz61YgdPb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTCOfPZf0OObl9qk07mh9x
          claim_id: c_yTKUjovalga9OVVMfvkvH2
          source_id: s_CDUCnkGTaFDR7GkhHR3efe
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CDUCnkGTaFDR7GkhHR3efe
            source_type: api_record
            title: 中国历代人物传记资料库：王鈺（CBDB 234984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234984&o=json
            external_identifier: CBDB:234984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5dSakUSWw4kjHJqxaV8CHv
        status: active
        display_name: 王鈺
        merged_into_person_id: null
    - claim:
        id: c_95Oeg7WpWeEOEpcsALeyai
        subject_person_id: p_f1etzqZkjDQnNgQC99Wzfa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_etxF8UycP4Urogz61YgdPb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSVxQfPA7U-XZco-_nv5P3
          claim_id: c_95Oeg7WpWeEOEpcsALeyai
          source_id: s_9wW7a6AbKnTUU7Ce259nvU
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9wW7a6AbKnTUU7Ce259nvU
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 234983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234983&o=json
            external_identifier: CBDB:234983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f1etzqZkjDQnNgQC99Wzfa
        status: active
        display_name: 王昺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王安舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安舜（生于1582年），史料所见人物。本项目依据《中国历代人物传记资料库：王安舜（CBDB 207738）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1582年 | accepted |
| name.primary | 王安舜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VDcSxdbjB5JPLzERpmYvFU | 王泝 | accepted |
| children | p_rL8eYtTnkBPxdnZ2ccwgxd | 王作箕 | accepted |
| children | p_UXKgyQePSrwswQHXfyHCxp | 王作翼 | accepted |
| children | p_vG8PQBwfZ9HjqfNa8GhzNJ | 王作璧 | accepted |
| ancestors | p_5dSakUSWw4kjHJqxaV8CHv | 王鈺 | accepted |
| ancestors | p_f1etzqZkjDQnNgQC99Wzfa | 王昺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安舜（CBDB 207738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207738&o=json)
- [中国历代人物传记资料库：王昺（CBDB 234983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234983&o=json)
- [中国历代人物传记资料库：王泝（CBDB 234985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234985&o=json)
- [中国历代人物传记资料库：王鈺（CBDB 234984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234984&o=json)
- [中国历代人物传记资料库：王作璧（CBDB 234994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234994&o=json)
- [中国历代人物传记资料库：王作箕（CBDB 234992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234992&o=json)
- [中国历代人物传记资料库：王作翼（CBDB 234993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234993&o=json)
