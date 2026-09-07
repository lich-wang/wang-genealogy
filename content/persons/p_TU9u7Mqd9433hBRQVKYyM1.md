---
schema: wang-person/v1
id: p_TU9u7Mqd9433hBRQVKYyM1
status: active
merged_into: null
display_name: 王孝縉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EGvlNg76KjznDMME3rkR2b
        subject_person_id: p_TU9u7Mqd9433hBRQVKYyM1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝縉（生于1882年），史料所见人物。本项目依据《王孝縉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GeGwVoRpfnZZj3y5gLKVXg
          claim_id: c_EGvlNg76KjznDMME3rkR2b
          source_id: s_JhHgZGV41uR81xzyHNnYFE
          stance: supports
          locator: Q98068112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JhHgZGV41uR81xzyHNnYFE
            source_type: api_record
            title: 维基数据：王孝縉（Q98068112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98068112
            external_identifier: Q98068112
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uHNXKy8hwFC669frW7H9SF
        subject_person_id: p_TU9u7Mqd9433hBRQVKYyM1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1882年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1882-01-01
            latest: 1882-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JT8ehBQhhDYmPDa1qtC1AB
          claim_id: c_uHNXKy8hwFC669frW7H9SF
          source_id: s_JhHgZGV41uR81xzyHNnYFE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r3rFv2k6z1FL9FZUqDVCXh
        subject_person_id: p_TU9u7Mqd9433hBRQVKYyM1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gb9aGHW25zKNi6YoKjU85F
          claim_id: c_r3rFv2k6z1FL9FZUqDVCXh
          source_id: s_JhHgZGV41uR81xzyHNnYFE
          stance: supports
          locator: Q98068112
          quotation: null
          interpretation_note: null
          source:
            id: s_JhHgZGV41uR81xzyHNnYFE
            source_type: api_record
            title: 维基数据：王孝縉（Q98068112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98068112
            external_identifier: Q98068112
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cSLNL3pQ6vi99ddq5K1xtG
        subject_person_id: p_ggcTrtcGE4fR6SCji22GJb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_TU9u7Mqd9433hBRQVKYyM1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gpJCwE4u7jb4hA2FuuefwF
          claim_id: c_cSLNL3pQ6vi99ddq5K1xtG
          source_id: s_iTF9Mt12vtuqehM1NuBXs5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iTF9Mt12vtuqehM1NuBXs5
            source_type: api_record
            title: 维基数据：王仁堪（Q15943465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15943465
            external_identifier: Q15943465
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:45.295Z
            metadata_json: null
        - id: cs_o3SqHPLDr7oxWPagDJUnLH
          claim_id: c_cSLNL3pQ6vi99ddq5K1xtG
          source_id: s_JhHgZGV41uR81xzyHNnYFE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JhHgZGV41uR81xzyHNnYFE
            source_type: api_record
            title: 维基数据：王孝縉（Q98068112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98068112
            external_identifier: Q98068112
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person:
        id: p_ggcTrtcGE4fR6SCji22GJb
        status: active
        display_name: 王仁堪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝縉（生于1882年），史料所见人物。本项目依据《王孝縉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1882年 | accepted |
| name.primary | 王孝縉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggcTrtcGE4fR6SCji22GJb | 王仁堪 | accepted |

## 外部来源

- [维基数据：王仁堪（Q15943465）](https://www.wikidata.org/wiki/Q15943465)
- [维基数据：王孝縉（Q98068112）](https://www.wikidata.org/wiki/Q98068112)
