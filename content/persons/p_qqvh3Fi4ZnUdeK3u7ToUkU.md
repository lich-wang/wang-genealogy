---
schema: wang-person/v1
id: p_qqvh3Fi4ZnUdeK3u7ToUkU
status: active
merged_into: null
display_name: 王民
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oD1w26uDTfEgRdRBQM41JC
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMRdDMqo9k1Tvsz6u8z7oj
          claim_id: c_oD1w26uDTfEgRdRBQM41JC
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
          stance: supports
          locator: CBDB:203553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203553）
          source: &a1
            id: s_P25JNVAP8b6KzJjMhEAnnC
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 203553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203553&o=json
            external_identifier: CBDB:203553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XwJfFHw3XhJ2onLAgiSwQJ
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkskKpFiDNELR3xJoUxqwY
          claim_id: c_XwJfFHw3XhJ2onLAgiSwQJ
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
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
        id: c_6GnNWicUZmWobrUMZZ5DU6
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民（生于1511年），明人物。明清進士進士，籍贯臨清，入仕進士。（中国历代人物传记资料库 CBDB 203553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_srP0gDZYdBF6qLUq5z5K1q
          claim_id: c_6GnNWicUZmWobrUMZZ5DU6
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
          stance: supports
          locator: CBDB:203553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9nA8Wo35FfsCV5vdIqZNPr
        subject_person_id: p_ZKoPE8TuvEtbXLmSpeFQDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qhewSMz_7bs85J86aoTBA2
          claim_id: c_9nA8Wo35FfsCV5vdIqZNPr
          source_id: s_vRiJa6cq6ucycTE41M6CK1
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vRiJa6cq6ucycTE41M6CK1
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 306448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306448&o=json
            external_identifier: CBDB:306448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZKoPE8TuvEtbXLmSpeFQDG
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_KGaTe5Q_f90DMxu7EZH6kX
        subject_person_id: p_1wxP2x8dUkwdeDn188csTf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ujHLQzUMW69lh5tG1rS3O
          claim_id: c_KGaTe5Q_f90DMxu7EZH6kX
          source_id: s_sqK7GHn1d4t7FkUAg54Emn
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sqK7GHn1d4t7FkUAg54Emn
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 306446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306446&o=json
            external_identifier: CBDB:306446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wxP2x8dUkwdeDn188csTf
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_s3EInqaWH7hZ7u-RfvQsX4
        subject_person_id: p_nYzAuuQqmQkLdqyF77GYra
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBXQr9rIuixJtEMe-f8FT3
          claim_id: c_s3EInqaWH7hZ7u-RfvQsX4
          source_id: s_9eE1UkrouSpu4nKGkCsEmD
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9eE1UkrouSpu4nKGkCsEmD
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 306447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306447&o=json
            external_identifier: CBDB:306447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nYzAuuQqmQkLdqyF77GYra
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | 王民（生于1511年），明人物。明清進士進士，籍贯臨清，入仕進士。（中国历代人物传记资料库 CBDB 203553） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZKoPE8TuvEtbXLmSpeFQDG | 王琮 | accepted |
| ancestors | p_1wxP2x8dUkwdeDn188csTf | 王玉 | accepted |
| ancestors | p_nYzAuuQqmQkLdqyF77GYra | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 306448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306448&o=json)
- [中国历代人物传记资料库：王和（CBDB 306447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306447&o=json)
- [中国历代人物传记资料库：王民（CBDB 203553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203553&o=json)
- [中国历代人物传记资料库：王玉（CBDB 306446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306446&o=json)
