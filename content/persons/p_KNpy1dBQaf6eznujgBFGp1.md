---
schema: wang-person/v1
id: p_KNpy1dBQaf6eznujgBFGp1
status: active
merged_into: null
display_name: 王眉寿
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SmMEgE2ulTX2Cr39OA5Fo7
        subject_person_id: p_KNpy1dBQaf6eznujgBFGp1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眉寿（1848年—1921年），史料所见人物。本项目依据《王眉寿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Yp_HXZVlW0jNQkr-M-pDz
          claim_id: c_SmMEgE2ulTX2Cr39OA5Fo7
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: Q98060447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t6xVLCsnVoi86dLUgexiVZ
        subject_person_id: p_KNpy1dBQaf6eznujgBFGp1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1848-01-01
            latest: 1848-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LnKurvQYAQ2fNRGxuX7PAk
          claim_id: c_t6xVLCsnVoi86dLUgexiVZ
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4kouJcM9GCMd5KyRHPYW9d
        subject_person_id: p_KNpy1dBQaf6eznujgBFGp1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1921年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1921-01-01
            latest: 1921-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AML9TH6QBKu5EGrJssAFQG
          claim_id: c_4kouJcM9GCMd5KyRHPYW9d
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NEzR1uCVJXEhHu1Dd3BARN
        subject_person_id: p_KNpy1dBQaf6eznujgBFGp1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眉寿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zQ1DxGRfT3A87FmNcy7tGh
          claim_id: c_NEzR1uCVJXEhHu1Dd3BARN
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: Q98060447
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vN6d9gF7YMveZmD6jR4Hjw
        subject_person_id: p_Gxn2LqhXD3zS4kUs2t7knD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KNpy1dBQaf6eznujgBFGp1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7UmLSCLYWBXRMzxg9pt4c8
          claim_id: c_vN6d9gF7YMveZmD6jR4Hjw
          source_id: s_zmvPF7Ln648m64pMJqo1rR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zmvPF7Ln648m64pMJqo1rR
            source_type: api_record
            title: 维基数据：王傳燦（Q98060612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98060612
            external_identifier: Q98060612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
        - id: cs_NsFmbd2xLs9eQQ5TsGujdB
          claim_id: c_vN6d9gF7YMveZmD6jR4Hjw
          source_id: s_2G65yhFbbVuC4y4MG5AR3s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_Gxn2LqhXD3zS4kUs2t7knD
        status: active
        display_name: 王傳燦
        merged_into_person_id: null
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
          source: *a1
        - id: cs_Q13b2qM6PQrZGMKH7RSLSt
          claim_id: c_jGuuWXGmxQp2iiVPXN76ZP
          source_id: s_XY2F4YXRNVHzWd4PeSw5S3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
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
      object_person:
        id: p_9hx7hNoEHGJpUAxJbhWXoH
        status: active
        display_name: 陈宝琛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王眉寿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王眉寿（1848年—1921年），史料所见人物。本项目依据《王眉寿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1848年 | accepted |
| death.date | 1921年 | accepted |
| name.primary | 王眉寿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Gxn2LqhXD3zS4kUs2t7knD | 王傳燦 | accepted |
| spouses | p_9hx7hNoEHGJpUAxJbhWXoH | 陈宝琛 | accepted |

## 外部来源

- [维基数据：陈宝琛（Q701792）](https://www.wikidata.org/wiki/Q701792)
- [维基数据：王傳燦（Q98060612）](https://www.wikidata.org/wiki/Q98060612)
- [维基数据：王眉寿（Q98060447）](https://www.wikidata.org/wiki/Q98060447)
