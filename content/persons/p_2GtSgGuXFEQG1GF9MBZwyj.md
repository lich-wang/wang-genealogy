---
schema: wang-person/v1
id: p_2GtSgGuXFEQG1GF9MBZwyj
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lppp3-WKVWJDogAkis8in4
        subject_person_id: p_2GtSgGuXFEQG1GF9MBZwyj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，史料所见人物。本项目依据《水母网：王懿荣家世》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-McX1sZVm0x681KZAsNh48
          claim_id: c_Lppp3-WKVWJDogAkis8in4
          source_id: s_af9sNti4THHVbgxUGisAP8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_af9sNti4THHVbgxUGisAP8
            source_type: website
            title: 水母网：王懿荣家世
            creator: null
            publisher: 水母网
            published_at_text: null
            canonical_url: https://u.shm.com.cn/2017-09/07/content_4650012.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.142Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZCJ4JSG62dGnDqtpNHGoj
        subject_person_id: p_2GtSgGuXFEQG1GF9MBZwyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4a7vN7tq5NJuD7ubn1w7WL
          claim_id: c_BZCJ4JSG62dGnDqtpNHGoj
          source_id: s_af9sNti4THHVbgxUGisAP8
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AQpGJNQ1x8mrDhHMXhu2A2
        subject_person_id: p_2GtSgGuXFEQG1GF9MBZwyj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6KA6PbTFvMN9Zgm4Uuxm11
          claim_id: c_AQpGJNQ1x8mrDhHMXhu2A2
          source_id: s_af9sNti4THHVbgxUGisAP8
          stance: supports
          locator: 家世段
          quotation: 明初他的始祖王忠（官至登宁盐课大使），居住福山以来。
          interpretation_note: null
          source:
            id: s_af9sNti4THHVbgxUGisAP8
            source_type: website
            title: 水母网：王懿荣家世
            creator: null
            publisher: 水母网
            published_at_text: null
            canonical_url: https://u.shm.com.cn/2017-09/07/content_4650012.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.142Z
            metadata_json: null
      object_person:
        id: p_cM7Evu4QQJ7HxaU4v97UQW
        status: active
        display_name: 王懿荣
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠，史料所见人物。本项目依据《水母网：王懿荣家世》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cM7Evu4QQJ7HxaU4v97UQW | 王懿荣 | accepted |

## 外部来源

- [水母网：王懿荣家世](https://u.shm.com.cn/2017-09/07/content_4650012.html)
