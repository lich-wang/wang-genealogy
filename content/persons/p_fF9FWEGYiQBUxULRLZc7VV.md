---
schema: wang-person/v1
id: p_fF9FWEGYiQBUxULRLZc7VV
status: active
merged_into: null
display_name: 王兴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-i9qTyY5BgHE3NHqzkJsYM
        subject_person_id: p_fF9FWEGYiQBUxULRLZc7VV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴，史料所见人物。本项目依据《中文维基文库：晋书/卷043》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJBO3fqNbLx4Y4HxGOaNNQ
          claim_id: c_-i9qTyY5BgHE3NHqzkJsYM
          source_id: s_JD6UVYC1Xi1MZdmU6G54bf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JD6UVYC1Xi1MZdmU6G54bf
            source_type: book
            title: 中文维基文库：晋书/卷043
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hans/%E6%99%89%E6%9B%B8/%E5%8D%B7043
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:58.769Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tdKPQ3szn8w6NME47CJtem
        subject_person_id: p_fF9FWEGYiQBUxULRLZc7VV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bqzoKWQWFsGJUbqBE2GnMK
          claim_id: c_tdKPQ3szn8w6NME47CJtem
          source_id: s_JD6UVYC1Xi1MZdmU6G54bf
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iP7VBAJoq5ZdzS7GvrL7xn
        subject_person_id: p_TfKe1cH32mQ1z8aTR1Zbt4
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_fF9FWEGYiQBUxULRLZc7VV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mKL5m2UF3mFqhHG1WLdLZp
          claim_id: c_iP7VBAJoq5ZdzS7GvrL7xn
          source_id: s_JD6UVYC1Xi1MZdmU6G54bf
          stance: supports
          locator: 王戎传
          quotation: 有庶子兴，戎所不齿。
          interpretation_note: null
          source:
            id: s_JD6UVYC1Xi1MZdmU6G54bf
            source_type: book
            title: 中文维基文库：晋书/卷043
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hans/%E6%99%89%E6%9B%B8/%E5%8D%B7043
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:58.769Z
            metadata_json: null
      object_person:
        id: p_TfKe1cH32mQ1z8aTR1Zbt4
        status: active
        display_name: 王戎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兴，史料所见人物。本项目依据《中文维基文库：晋书/卷043》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王兴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TfKe1cH32mQ1z8aTR1Zbt4 | 王戎 | accepted |

## 外部来源

- [中文维基文库：晋书/卷043](https://zh.wikisource.org/zh-hans/%E6%99%89%E6%9B%B8/%E5%8D%B7043)
