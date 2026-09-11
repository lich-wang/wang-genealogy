---
schema: wang-person/v1
id: p_9hx7hNoEHGJpUAxJbhWXoH
status: active
merged_into: null
display_name: 陈宝琛
cbdb_id: 54950
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPEuw9tGjw49e1hTk-sU8I
        subject_person_id: p_9hx7hNoEHGJpUAxJbhWXoH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈宝琛（1848—1935），中華民國人物。明清進士進士，籍贯閩縣，入仕進士，曾任旗漢軍副都統。（中国历代人物传记资料库 CBDB 54950）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_deuMEttwX3OFcwDgTZDDHq
          claim_id: c_bPEuw9tGjw49e1hTk-sU8I
          source_id: s_Q256UN3vKt1BUZhzEH5s3q
          stance: supports
          locator: CBDB:54950
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Q256UN3vKt1BUZhzEH5s3q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳寶琛（54950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54950&o=json
            external_identifier: CBDB:54950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WmjMJN7Pm83HPwvHzTnS57
        subject_person_id: p_9hx7hNoEHGJpUAxJbhWXoH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈宝琛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PXyPv6EvbzFJPo9o9QJ3AF
          claim_id: c_WmjMJN7Pm83HPwvHzTnS57
          source_id: s_XY2F4YXRNVHzWd4PeSw5S3
          stance: supports
          locator: Q701792
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_XY2F4YXRNVHzWd4PeSw5S3
            source_type: api_record
            title: 维基数据：陈宝琛（Q701792）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q701792
            external_identifier: Q701792
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E5%AF%B6%E7%90%9B
        - id: cs_6G6JxUn34on7tWV7vQc3Un
          claim_id: c_WmjMJN7Pm83HPwvHzTnS57
          source_id: s_Q256UN3vKt1BUZhzEH5s3q
          stance: supports
          locator: CBDB:54950
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jGuuWXGmxQp2iiVPXN76ZP
        subject_person_id: p_9hx7hNoEHGJpUAxJbhWXoH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KNpy1dBQaf6eznujgBFGp1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tM7jK2X6YkgAiPDGZCQxSg
          claim_id: c_jGuuWXGmxQp2iiVPXN76ZP
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_2G65yhFbbVuC4y4MG5AR3s
            source_type: api_record
            title: 维基数据：王眉寿（Q98060447）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98060447
            external_identifier: Q98060447
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:37.127Z
            metadata_json: null
        - id: cs_Q13b2qM6PQrZGMKH7RSLSt
          claim_id: c_jGuuWXGmxQp2iiVPXN76ZP
          source_id: s_XY2F4YXRNVHzWd4PeSw5S3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_KNpy1dBQaf6eznujgBFGp1
        status: active
        display_name: 王眉寿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈宝琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈宝琛（1848—1935），中華民國人物。明清進士進士，籍贯閩縣，入仕進士，曾任旗漢軍副都統。（中国历代人物传记资料库 CBDB 54950） | accepted |
| name.primary | 陈宝琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KNpy1dBQaf6eznujgBFGp1 | 王眉寿 | accepted |

## 外部来源

- [维基数据：陈宝琛（Q701792）](https://www.wikidata.org/wiki/Q701792)
- [维基数据：王眉寿（Q98060447）](https://www.wikidata.org/wiki/Q98060447)
- [CBDB 中国历代人物传记资料库：陳寶琛（54950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54950&o=json)
