---
schema: wang-person/v1
id: p_bPZKnxp2HexKh3HJLbRwVw
status: active
merged_into: null
display_name: 王业耀
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CGNGMBBGbesrCS4WWZwvF
        subject_person_id: p_bPZKnxp2HexKh3HJLbRwVw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业耀，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qJFU1XLuv7gRcJ31SwgxDC
          claim_id: c_7CGNGMBBGbesrCS4WWZwvF
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4gJ1FEN8n4ZQXVUwFkVG66
        subject_person_id: p_bPZKnxp2HexKh3HJLbRwVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业耀
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pPSCKG6k9otTk7FP8Nc1Rx
          claim_id: c_4gJ1FEN8n4ZQXVUwFkVG66
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
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
        id: c_yu3zM6JxgwQgFD22XiNj6o
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bPZKnxp2HexKh3HJLbRwVw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r8ZxAxbByRPy1s3CsruV5s
          claim_id: c_yu3zM6JxgwQgFD22XiNj6o
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王先通 → 王业耀
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_acKqaubEQQzaaYDjdFQ4eL
        status: active
        display_name: 王先通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王业耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王业耀，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王业耀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_acKqaubEQQzaaYDjdFQ4eL | 王先通 | accepted |

## 外部来源

- [中文维基百科：余姚王氏](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F)
