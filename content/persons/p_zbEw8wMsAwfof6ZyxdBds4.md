---
schema: wang-person/v1
id: p_zbEw8wMsAwfof6ZyxdBds4
status: active
merged_into: null
display_name: 王普賢
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQRiJcrVo5NZWvqYBS6aDH
        subject_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普賢（487年—513年），史料所见人物。本项目依据《王普賢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_H0zWrpHcTTOwZEjZy-ue_t
          claim_id: c_fQRiJcrVo5NZWvqYBS6aDH
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: Q8253706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_y72MdCJzHubm4UpckBYqW5
            source_type: api_record
            title: 维基数据：王普賢（Q8253706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253706
            external_identifier: Q8253706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:38.755Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4P3wDaE35aEDJffCFEFwdE
        subject_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 487年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0487-01-01
            latest: 0487-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zEAGLKq3J5Yv3LNTxB7xJ1
          claim_id: c_4P3wDaE35aEDJffCFEFwdE
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y72MdCJzHubm4UpckBYqW5
            source_type: api_record
            title: 维基数据：王普賢（Q8253706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253706
            external_identifier: Q8253706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:38.755Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kmiBkJ98F9BvoMpu7j8e8Y
        subject_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 513年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0513-01-01
            latest: 0513-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eavd1YmeAAPqehMDEXjTgR
          claim_id: c_kmiBkJ98F9BvoMpu7j8e8Y
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y72MdCJzHubm4UpckBYqW5
            source_type: api_record
            title: 维基数据：王普賢（Q8253706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253706
            external_identifier: Q8253706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:38.755Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rAK6Twfkenj82MGZF7qy3
        subject_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FAtMM61C1v97RRx4vPrwq9
          claim_id: c_7rAK6Twfkenj82MGZF7qy3
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: Q8253706
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C99H7Q41j1jrg1aXV2YATH
        subject_person_id: p_5AMv9WBqacZuT86WkDC25v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QoPcY72YH9C38rURe8Yiu1
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_fpGHJUb9sFa3Lu1QgrjA68
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fpGHJUb9sFa3Lu1QgrjA68
            source_type: api_record
            title: 维基数据：王肃（Q4273020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4273020
            external_identifier: Q4273020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:44.689Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%83_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_df3SQVDSKpyAW2qSwv6MqK
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y72MdCJzHubm4UpckBYqW5
            source_type: api_record
            title: 维基数据：王普賢（Q8253706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253706
            external_identifier: Q8253706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:38.755Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
        - id: cs_yufT49vwojxMxmWoJo5BWK
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_AQ5iNRwAJE2wYkpAgYEKx4
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王肅和前妻謝氏的長女
          interpretation_note: null
          source:
            id: s_AQ5iNRwAJE2wYkpAgYEKx4
            source_type: website
            title: 中文维基百科：王普賢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:40.561Z
            metadata_json: null
        - id: cs_FuQ1Htq9C1a7uHZsCoAziU
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王肃 → 王普贤
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_EEdEvitQBKUfJ5Z8Mr96ZT
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王肃 → 王普贤
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_KgQQb5AsYoCj5E76ujJNwG
          claim_id: c_C99H7Q41j1jrg1aXV2YATH
          source_id: s_FuMZwY8DkXDZ5bw2Z3ANNQ
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王肅和前妻謝氏的長女
          interpretation_note: null
          source:
            id: s_FuMZwY8DkXDZ5bw2Z3ANNQ
            source_type: website
            title: 中文维基百科：王普賢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:49.491Z
            metadata_json: null
      object_person:
        id: p_5AMv9WBqacZuT86WkDC25v
        status: active
        display_name: 王肃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JY8f82ZP57vRgrojb1XEik
        subject_person_id: p_A9tNhYCCVGhvJbUKghAoD9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zbEw8wMsAwfof6ZyxdBds4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_GbLJdDgK75Q6ShvNykQBtw
          claim_id: c_JY8f82ZP57vRgrojb1XEik
          source_id: s_y72MdCJzHubm4UpckBYqW5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_y72MdCJzHubm4UpckBYqW5
            source_type: api_record
            title: 维基数据：王普賢（Q8253706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253706
            external_identifier: Q8253706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:38.755Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
        - id: cs_UvD1TgQWMCeU8ihmiX9ow8
          claim_id: c_JY8f82ZP57vRgrojb1XEik
          source_id: s_m3qmgZmFGnmtsCLwwtjVxX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_m3qmgZmFGnmtsCLwwtjVxX
            source_type: api_record
            title: 维基数据：北魏宣武帝（Q1194968）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1194968
            external_identifier: Q1194968
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:14.677Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D
        - id: cs_jQdGYyJ4b773Ss7AgBqstR
          claim_id: c_JY8f82ZP57vRgrojb1XEik
          source_id: s_AQ5iNRwAJE2wYkpAgYEKx4
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 北魏宣武帝元恪贵华夫人
          interpretation_note: null
          source:
            id: s_AQ5iNRwAJE2wYkpAgYEKx4
            source_type: website
            title: 中文维基百科：王普賢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:40.561Z
            metadata_json: null
      object_person:
        id: p_A9tNhYCCVGhvJbUKghAoD9
        status: active
        display_name: 元恪
        merged_into_person_id: null
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
        id: p_W3TYwPsJcNdkSLnrS78DKt
        status: active
        display_name: 贵华
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王普賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王普賢（487年—513年），史料所见人物。本项目依据《王普賢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 487年 | accepted |
| death.date | 513年 | accepted |
| name.primary | 王普賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5AMv9WBqacZuT86WkDC25v | 王肃 | accepted |
| spouses | p_A9tNhYCCVGhvJbUKghAoD9 | 元恪 | accepted |
| spouses | p_W3TYwPsJcNdkSLnrS78DKt | 贵华 | accepted |

## 外部来源

- [维基数据：北魏宣武帝（Q1194968）](https://www.wikidata.org/wiki/Q1194968)
- [维基数据：王普賢（Q8253706）](https://www.wikidata.org/wiki/Q8253706)
- [维基数据：王肃（Q4273020）](https://www.wikidata.org/wiki/Q4273020)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王普賢](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AE%E8%B3%A2)
- [中文维基百科：魏宣武帝](https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%AE%A3%E6%AD%A6%E5%B8%9D)
