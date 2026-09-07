---
schema: wang-person/v1
id: p_ApPtvCCNtKJL2K4yt7EBWn
status: active
merged_into: null
display_name: 王僧虔
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9rXBpLeivgN2junL773Q9a
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧虔（425年—485年8月5日），琅邪临沂人，历仕刘宋、南齐，是当时官员及书法家。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTazhZNQZgxG8mm98w2z8q
          claim_id: c_9rXBpLeivgN2junL773Q9a
          source_id: s_xqu4sPgwXHhJkYnDuRamN1
          stance: supports
          locator: 导言
          quotation: 刘宋和南齐时的官员、書法家
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_xqu4sPgwXHhJkYnDuRamN1
            source_type: website
            title: 中文维基百科：王僧虔
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:29:01.486Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yfLFoJf4Ajgcp65hfYtKcV
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 425年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0425-01-01
            latest: 0425-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4CMwA98ZTvQzp6XHmh7kD8
          claim_id: c_yfLFoJf4Ajgcp65hfYtKcV
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AybQJ4Sk5jicWuKCuxtetd
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧虔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aMeiymM7pUJgLE5Aqu9847
          claim_id: c_AybQJ4Sk5jicWuKCuxtetd
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: Q15942059
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W2jWHMgpeSkDYnnmbxBSev
        subject_person_id: p_Q4SbfiALT23z9i8MhGMH44
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Gz7T9CmRvmqAiLLuW4GCD9
          claim_id: c_W2jWHMgpeSkDYnnmbxBSev
          source_id: s_js8XqgiyFG5p22129YMRDm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_js8XqgiyFG5p22129YMRDm
            source_type: api_record
            title: 维基数据：王曇首（Q11573106）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573106
            external_identifier: Q11573106
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%87%E9%A6%96
        - id: cs_QBHeVicf9Tn7vFDKR8XEoE
          claim_id: c_W2jWHMgpeSkDYnnmbxBSev
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_yhUATBEse7dSJnxNJhG7Cb
          claim_id: c_W2jWHMgpeSkDYnnmbxBSev
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：僧綽、僧虔。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_Q4SbfiALT23z9i8MhGMH44
        status: active
        display_name: 王曇首
        merged_into_person_id: null
  children:
    - claim:
        id: c_3jkubSziAHZaxG6LRcXHsV
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ysBtNQExAcV6iGUXNN8dJj
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_8pNMa3GWPXoyUtQxQ551KL
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
          source_id: s_G2TuyKwTTZ1hhdUJk9S5nD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G2TuyKwTTZ1hhdUJk9S5nD
            source_type: api_record
            title: 维基数据：王彬（Q10414073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414073
            external_identifier: Q10414073
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
        - id: cs_F8en3mmV6uBry6LPW2rmiu
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
          source_id: s_yUzZ6qvKKqmYu4ysTwPvw2
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王僧虔之子
          interpretation_note: null
          source:
            id: s_yUzZ6qvKKqmYu4ysTwPvw2
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:37.187Z
            metadata_json: null
      object_person:
        id: p_cVDQYFbNAw9vrv8xn9nhfB
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_tp8kAiCGMVG95SFmgW1HiV
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLiWepWyuCmhBbQ3b2FAR9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UPqMKhiiD5bhrNcHN9e2Gs
          claim_id: c_tp8kAiCGMVG95SFmgW1HiV
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_2Pdo1uHuE7LDKhqCd74pyC
          claim_id: c_tp8kAiCGMVG95SFmgW1HiV
          source_id: s_f34Q6FnFUFtJAu5swQeD3j
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_f34Q6FnFUFtJAu5swQeD3j
            source_type: api_record
            title: 维基数据：王志（Q11573069）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573069
            external_identifier: Q11573069
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%97_(%E5%8D%97%E6%9C%9D)
      object_person:
        id: p_jLiWepWyuCmhBbQ3b2FAR9
        status: active
        display_name: 王志
        merged_into_person_id: null
    - claim:
        id: c_FCh3rAHh2BLCvMPq8HMJVx
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4KL28H32dmZ89RjQ98aCSY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VaYb9U7VmpZd5DZC4YL34g
          claim_id: c_FCh3rAHh2BLCvMPq8HMJVx
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_QyFWnVJkazTsikU7tkkjB9
          claim_id: c_FCh3rAHh2BLCvMPq8HMJVx
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
      object_person:
        id: p_4KL28H32dmZ89RjQ98aCSY
        status: active
        display_name: 王慈
        merged_into_person_id: null
    - claim:
        id: c_noeSTJ7CQzCMKoSyGqYZmo
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u9WD9GC8pjW4gy1ie17b1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GQDsiQTwTpYrabwdzixFxg
          claim_id: c_noeSTJ7CQzCMKoSyGqYZmo
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_4imApB92gy4kcWdKpixbFU
          claim_id: c_noeSTJ7CQzCMKoSyGqYZmo
          source_id: s_1MtzfTLk1G2YLDdf9eNfRy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1MtzfTLk1G2YLDdf9eNfRy
            source_type: api_record
            title: 维基数据：王楫（Q22814757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814757
            external_identifier: Q22814757
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
      object_person:
        id: p_u9WD9GC8pjW4gy1ie17b1C
        status: active
        display_name: 王楫
        merged_into_person_id: null
    - claim:
        id: c_uFybA6ZCEEBqLYh5AcctTZ
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GBxqJxU8VyzAAjKPNqvAg5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WqV47NCsgCmrtpa44Dpjia
          claim_id: c_uFybA6ZCEEBqLYh5AcctTZ
          source_id: s_Yc4Brf3FPtoDH2p7rwr13h
          stance: supports
          locator: 卷末·王僧虔诸子
          quotation: 第九子寂字子玄……初為秘書郎，卒年二十一。
          interpretation_note: null
          source:
            id: s_Yc4Brf3FPtoDH2p7rwr13h
            source_type: book
            title: 中文维基文库：《南齐书》卷三十三
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:51.112Z
            metadata_json: null
      object_person:
        id: p_GBxqJxU8VyzAAjKPNqvAg5
        status: active
        display_name: 王寂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_2Fh8L19yHHez95xV7uEr65
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gr6qNDSogvFfNNz2L1sNwJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_97kFav3829BfoThwbjEFBz
          claim_id: c_2Fh8L19yHHez95xV7uEr65
          source_id: s_DnXj8zLkmFGYuA1EtVuqC1
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王僧虔玄孙
          interpretation_note: null
          source:
            id: s_DnXj8zLkmFGYuA1EtVuqC1
            source_type: website
            title: 中文维基百科：王昚
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%9A
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.439Z
            metadata_json: null
      object_person:
        id: p_gr6qNDSogvFfNNz2L1sNwJ
        status: active
        display_name: 王昚
        merged_into_person_id: null
  other: []
---

# 王僧虔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王僧虔（425年—485年8月5日），琅邪临沂人，历仕刘宋、南齐，是当时官员及书法家。 | accepted |
| birth.date | 425年 | accepted |
| name.primary | 王僧虔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q4SbfiALT23z9i8MhGMH44 | 王曇首 | accepted |
| children | p_cVDQYFbNAw9vrv8xn9nhfB | 王彬 | accepted |
| children | p_jLiWepWyuCmhBbQ3b2FAR9 | 王志 | accepted |
| children | p_4KL28H32dmZ89RjQ98aCSY | 王慈 | accepted |
| children | p_u9WD9GC8pjW4gy1ie17b1C | 王楫 | accepted |
| children | p_GBxqJxU8VyzAAjKPNqvAg5 | 王寂 | accepted |
| descendants | p_gr6qNDSogvFfNNz2L1sNwJ | 王昚 | accepted |

## 外部来源

- [维基数据：王彬（Q10414073）](https://www.wikidata.org/wiki/Q10414073)
- [维基数据：王慈（Q11573074）](https://www.wikidata.org/wiki/Q11573074)
- [维基数据：王楫（Q22814757）](https://www.wikidata.org/wiki/Q22814757)
- [维基数据：王僧虔（Q15942059）](https://www.wikidata.org/wiki/Q15942059)
- [维基数据：王曇首（Q11573106）](https://www.wikidata.org/wiki/Q11573106)
- [维基数据：王志（Q11573069）](https://www.wikidata.org/wiki/Q11573069)
- [中文维基百科：王彬 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D))
- [中文维基百科：王僧虔](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94)
- [中文维基百科：王昚](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%9A)
- [中文维基文库：《南齐书》卷三十三](https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
