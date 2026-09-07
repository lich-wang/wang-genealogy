---
schema: wang-person/v1
id: p_W3TYwPsJcNdkSLnrS78DKt
status: active
merged_into: null
display_name: 贵华
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SwLcv7NmaJNKntX_GlICng
        subject_person_id: p_W3TYwPsJcNdkSLnrS78DKt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 贵华，史料所见人物。本项目依据《魏宣武帝》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4AeIpIzF4SYBUvN-b0CZo0
          claim_id: c_SwLcv7NmaJNKntX_GlICng
          source_id: s_74ENaM6ExwYpxMH6HFSvZx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_74ENaM6ExwYpxMH6HFSvZx
            source_type: website
            title: 中文维基百科：魏宣武帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:22.908Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDdpxnY5dRZxHNBxt8jZnp
        subject_person_id: p_W3TYwPsJcNdkSLnrS78DKt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 贵华
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tALN9mKFqMKk6jrTbyfqPD
          claim_id: c_uDdpxnY5dRZxHNBxt8jZnp
          source_id: s_74ENaM6ExwYpxMH6HFSvZx
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
  spouses:
    - claim:
        id: c_YFowpYpRz2UZAHAi75gRXP
        subject_person_id: p_W3TYwPsJcNdkSLnrS78DKt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QkFCB2d6QGEP2d7Gub2Sjp
          claim_id: c_YFowpYpRz2UZAHAi75gRXP
          source_id: s_qYuN3LhXcPKPvwUFmpcdZz
          stance: supports
          locator: 条文：贵华夫人
          quotation: 王普賢，贵华夫人，南齐尚书左仆射、使持节、镇北大将军、雍州刺史王奂孙女，北魏侍中、司空、昌国宣简公王肃之女
          interpretation_note: null
          source:
            id: s_qYuN3LhXcPKPvwUFmpcdZz
            source_type: website
            title: 中文维基百科：魏宣武帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.202Z
            metadata_json: null
        - id: cs_dJYtXdD54e9cVHgqrJSYbY
          claim_id: c_YFowpYpRz2UZAHAi75gRXP
          source_id: s_fHDPR3M26tZuHJKis5X4HK
          stance: supports
          locator: 条文：贵华夫人
          quotation: 王普賢，贵华夫人，南齐尚书左仆射、使持节、镇北大将军、雍州刺史王奂孙女，北魏侍中、司空、昌国宣简公王肃之女
          interpretation_note: null
          source:
            id: s_fHDPR3M26tZuHJKis5X4HK
            source_type: website
            title: 中文维基百科：魏宣武帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:39.826Z
            metadata_json: null
        - id: cs_j59VVDEPzMoN1QFJvpVy6B
          claim_id: c_YFowpYpRz2UZAHAi75gRXP
          source_id: s_fwNYRrPtAn77f69P4qS3K4
          stance: supports
          locator: 条文：贵华夫人
          quotation: 王普賢，贵华夫人，南齐尚书左仆射、使持节、镇北大将军、雍州刺史王奂孙女，北魏侍中、司空、昌国宣简公王肃之女
          interpretation_note: null
          source:
            id: s_fwNYRrPtAn77f69P4qS3K4
            source_type: website
            title: 中文维基百科：魏宣武帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:25.988Z
            metadata_json: null
        - id: cs_P7PiBT2YA33G2FCagEWngf
          claim_id: c_YFowpYpRz2UZAHAi75gRXP
          source_id: s_B8pzyanKo9Guv2Jok7BrEG
          stance: supports
          locator: 条文：贵华夫人
          quotation: 王普賢，贵华夫人，南齐尚书左仆射、使持节、镇北大将军、雍州刺史王奂孙女，北魏侍中、司空、昌国宣简公王肃之女
          interpretation_note: null
          source:
            id: s_B8pzyanKo9Guv2Jok7BrEG
            source_type: website
            title: 中文维基百科：魏宣武帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:35.181Z
            metadata_json: null
      object_person:
        id: p_zbEw8wMsAwfof6ZyxdBds4
        status: active
        display_name: 王普賢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 贵华

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 贵华，史料所见人物。本项目依据《魏宣武帝》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 贵华 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zbEw8wMsAwfof6ZyxdBds4 | 王普賢 | accepted |

## 外部来源

- [中文维基百科：魏宣武帝](https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D)
