---
schema: wang-person/v1
id: p_F8jwsMqHnXUjYuiyHvkyxB
status: active
merged_into: null
display_name: 王瑶
cbdb_id: 175353
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BBNwYPTHS156FTY5xog8mF
        subject_person_id: p_F8jwsMqHnXUjYuiyHvkyxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任果毅。中国历代人物传记资料库（CBDB）以人物编号 175353 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_F8qj8kSVZP9Bi6KfgGNyGz
          claim_id: c_BBNwYPTHS156FTY5xog8mF
          source_id: s_G8uuvxXaSE9cZcRA9qW88w
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G8uuvxXaSE9cZcRA9qW88w
            source_type: api_record
            title: 维基数据：王瑶（Q45654752）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654752
            external_identifier: Q45654752
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_9E_5kN-1NGnXcDXQEILClZ
          claim_id: c_BBNwYPTHS156FTY5xog8mF
          source_id: s_N84VTJwDB5wZrY57mNdoXm
          stance: supports
          locator: CBDB:175353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N84VTJwDB5wZrY57mNdoXm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瑤（175353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175353&o=json
            external_identifier: CBDB:175353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xxc7DCtQnYhrZ9EqyutFrV
        subject_person_id: p_F8jwsMqHnXUjYuiyHvkyxB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_imNFgtJiA3MzB3n9pEh5NS
          claim_id: c_xxc7DCtQnYhrZ9EqyutFrV
          source_id: s_G8uuvxXaSE9cZcRA9qW88w
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G8uuvxXaSE9cZcRA9qW88w
            source_type: api_record
            title: 维基数据：王瑶（Q45654752）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654752
            external_identifier: Q45654752
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QpnwZQ4wGrXERvLCnk13pZ
        subject_person_id: p_F8jwsMqHnXUjYuiyHvkyxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hg6JLWi16W4FQrnDQGxSTy
          claim_id: c_QpnwZQ4wGrXERvLCnk13pZ
          source_id: s_N84VTJwDB5wZrY57mNdoXm
          stance: supports
          locator: Q45654752
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ywroK89avwu3QZqFapBpXD
          claim_id: c_QpnwZQ4wGrXERvLCnk13pZ
          source_id: s_G8uuvxXaSE9cZcRA9qW88w
          stance: supports
          locator: Q45654752
          quotation: null
          interpretation_note: null
          source:
            id: s_G8uuvxXaSE9cZcRA9qW88w
            source_type: api_record
            title: 维基数据：王瑶（Q45654752）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654752
            external_identifier: Q45654752
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VG6WP8s7frX7G7BmrtY2eF
        subject_person_id: p_55jrV83n918oL71cYM575F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F8jwsMqHnXUjYuiyHvkyxB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WjLNcYjRucNa6EiEobWwyv
          claim_id: c_VG6WP8s7frX7G7BmrtY2eF
          source_id: s_T8raVJHSnhnJXS5b9KKQrU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T8raVJHSnhnJXS5b9KKQrU
            source_type: api_record
            title: 维基数据：王崇礼（Q45654694）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654694
            external_identifier: Q45654694
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_bnwJGb3mLLe81GKJfkuuLp
          claim_id: c_VG6WP8s7frX7G7BmrtY2eF
          source_id: s_KquKmZ9tNa8t83PfHDu3wU
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KquKmZ9tNa8t83PfHDu3wU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王崇禮（175352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175352&o=json
            external_identifier: CBDB:175352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.827Z
            metadata_json: null
        - id: cs_Q7eGEGwkzvBCKEV7Hh4CQe
          claim_id: c_VG6WP8s7frX7G7BmrtY2eF
          source_id: s_G8uuvxXaSE9cZcRA9qW88w
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G8uuvxXaSE9cZcRA9qW88w
            source_type: api_record
            title: 维基数据：王瑶（Q45654752）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654752
            external_identifier: Q45654752
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_4GZbaJQSZWsoXgwitv8RXx
          claim_id: c_VG6WP8s7frX7G7BmrtY2eF
          source_id: s_N84VTJwDB5wZrY57mNdoXm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_N84VTJwDB5wZrY57mNdoXm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瑤（175353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175353&o=json
            external_identifier: CBDB:175353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.055Z
            metadata_json: null
      object_person:
        id: p_55jrV83n918oL71cYM575F
        status: active
        display_name: 王崇礼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑶（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任果毅。中国历代人物传记资料库（CBDB）以人物编号 175353 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王瑶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_55jrV83n918oL71cYM575F | 王崇礼 | accepted |

## 外部来源

- [维基数据：王崇礼（Q45654694）](https://www.wikidata.org/wiki/Q45654694)
- [维基数据：王瑶（Q45654752）](https://www.wikidata.org/wiki/Q45654752)
- [CBDB 中国历代人物传记资料库：王崇禮（175352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175352&o=json)
- [CBDB 中国历代人物传记资料库：王瑤（175353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175353&o=json)
