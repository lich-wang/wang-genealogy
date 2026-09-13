---
schema: wang-person/v1
id: p_2SPbMq35G8ocJgxHXsAm94
status: active
merged_into: null
display_name: 王氏
cbdb_id: 5380
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s32EsgfZNW6gWtTNg3QLdR
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（1017年—1038年），宋人物。籍贯洛陽，入仕封贈。（中国历代人物传记资料库 CBDB 5380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wfapDsB6SphOsTcVRsU36S
          claim_id: c_s32EsgfZNW6gWtTNg3QLdR
          source_id: s_PuAJWu4MNmrZ2JcmfKcT3W
          stance: supports
          locator: CBDB:5380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PuAJWu4MNmrZ2JcmfKcT3W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5380&o=json
            external_identifier: CBDB:5380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.755Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3hsAwqDRN5FNa3EStdbfNk
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1017年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1017-01-01
            latest: 1017-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KggsJoATyYMEMZdxNWLicr
          claim_id: c_3hsAwqDRN5FNa3EStdbfNk
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TFt1iKpr1WP5SnuqPvEY9j
            source_type: api_record
            title: 维基数据：王氏（Q45364876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364876
            external_identifier: Q45364876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_w6UyCGG7U9XvCkATBKDkEQ
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1038-01-01
            latest: 1038-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_18f6BK2khuy99EEyq6s6Cs
          claim_id: c_w6UyCGG7U9XvCkATBKDkEQ
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TFt1iKpr1WP5SnuqPvEY9j
            source_type: api_record
            title: 维基数据：王氏（Q45364876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364876
            external_identifier: Q45364876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DPMACe1dL67bu3M1cDSh5C
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JEUCL2UJEq1nNtkTLALook
          claim_id: c_DPMACe1dL67bu3M1cDSh5C
          source_id: s_PuAJWu4MNmrZ2JcmfKcT3W
          stance: supports
          locator: Q45364876
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_fJhLPeg5D413XmCv5KrNbe
          claim_id: c_DPMACe1dL67bu3M1cDSh5C
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: Q45364876
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_TFt1iKpr1WP5SnuqPvEY9j
            source_type: api_record
            title: 维基数据：王氏（Q45364876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364876
            external_identifier: Q45364876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MzCGJjmHxL8tUbZfPXAZve
        subject_person_id: p_kx3JCi5hvZyKiyizeGH3KR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2SPbMq35G8ocJgxHXsAm94
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZefbA1GDm6LEHtosYvfwTB
          claim_id: c_MzCGJjmHxL8tUbZfPXAZve
          source_id: s_4HGMEUcFHtcMF3FVZ8ZQR8
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_4HGMEUcFHtcMF3FVZ8ZQR8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王曙（1877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json
            external_identifier: CBDB:1877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:11.437Z
            metadata_json: null
        - id: cs_hnS7R61QipKYwhDN3MxnD1
          claim_id: c_MzCGJjmHxL8tUbZfPXAZve
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TFt1iKpr1WP5SnuqPvEY9j
            source_type: api_record
            title: 维基数据：王氏（Q45364876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364876
            external_identifier: Q45364876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_pChdPrifM6YVKWVgAA39A5
          claim_id: c_MzCGJjmHxL8tUbZfPXAZve
          source_id: s_E6YyEwWUZy7TTGcceDG4SQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E6YyEwWUZy7TTGcceDG4SQ
            source_type: api_record
            title: 维基数据：王曙（Q16077251）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077251
            external_identifier: Q16077251
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:52.064Z
            metadata_json: null
      object_person:
        id: p_kx3JCi5hvZyKiyizeGH3KR
        status: active
        display_name: 王曙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LFuEGw4N76WNPe877DcMdf
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VznNhNftb8GA3GdAusTs7m
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_nAZ67V77oY4g2Gi6iJ2EPx
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_uT7rQc9RE3KNJYZUmJEYXj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_uT7rQc9RE3KNJYZUmJEYXj
            source_type: api_record
            title: 维基数据：陈安石（Q45354659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45354659
            external_identifier: Q45354659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E5%AE%89%E7%9F%B3
        - id: cs_xcrExGu21KGaAu9ojufiS7
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_PuAJWu4MNmrZ2JcmfKcT3W
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_aPt93kSHDUyNC8ZF6JTLpf
        status: active
        display_name: 陈安石
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏（1017年—1038年），宋人物。籍贯洛陽，入仕封贈。（中国历代人物传记资料库 CBDB 5380） | accepted |
| birth.date | 1017年 | accepted |
| death.date | 1038年 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kx3JCi5hvZyKiyizeGH3KR | 王曙 | accepted |
| spouses | p_aPt93kSHDUyNC8ZF6JTLpf | 陈安石 | accepted |

## 外部来源

- [维基数据：陈安石（Q45354659）](https://www.wikidata.org/wiki/Q45354659)
- [维基数据：王氏（Q45364876）](https://www.wikidata.org/wiki/Q45364876)
- [维基数据：王曙（Q16077251）](https://www.wikidata.org/wiki/Q16077251)
- [CBDB 中国历代人物传记资料库：王氏（5380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5380&o=json)
- [CBDB 中国历代人物传记资料库：王曙（1877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json)
