---
schema: wang-person/v1
id: p_6MQPx8e4P1H3EwxJMHr8JX
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9tUQm8dXxmn8wYRKFQ9K88
        subject_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，西汉外戚。维基数据以独立条目 Q26209995 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lAlemhlYH6URW2XZqBMVzp
          claim_id: c_9tUQm8dXxmn8wYRKFQ9K88
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: Q26209995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_337zUeqX45LANm5HofBhTS
            source_type: api_record
            title: 维基数据：王仁（Q26209995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209995
            external_identifier: Q26209995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81_(%E8%A5%BF%E6%B1%89)
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_45YMKNXxAVMMsG9gbY5Vnn
        subject_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 西汉
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D8KBK9MmN9SC6T6CTgopNn
          claim_id: c_45YMKNXxAVMMsG9gbY5Vnn
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：西汉外戚
          source:
            id: s_337zUeqX45LANm5HofBhTS
            source_type: api_record
            title: 维基数据：王仁（Q26209995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209995
            external_identifier: Q26209995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81_(%E8%A5%BF%E6%B1%89)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pC4dEsTUq9gnJFgZ2pGzG
        subject_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n66C33yowRGg1MiLMYjX1c
          claim_id: c_9pC4dEsTUq9gnJFgZ2pGzG
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: Q26209995
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YXC5hHCKontAjd85Sjt1QH
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_W4KjVk7orNCp3PiArX818g
          claim_id: c_YXC5hHCKontAjd85Sjt1QH
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3PdNBCgo98QJFJBc4fy4Z5
            source_type: api_record
            title: 维基数据：王谭（Q1969370）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1969370
            external_identifier: Q1969370
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:40.086Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%AD
        - id: cs_cWbZd4GvuZaMCePZQMAPG3
          claim_id: c_YXC5hHCKontAjd85Sjt1QH
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_337zUeqX45LANm5HofBhTS
            source_type: api_record
            title: 维基数据：王仁（Q26209995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209995
            external_identifier: Q26209995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_A3jqrz5MCP94kKUqSaDLU1
        status: active
        display_name: 王谭
        merged_into_person_id: null
  children:
    - claim:
        id: c_uo4SpHCwXXrq5Q4rEwYp5z
        subject_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N2DicW23Hfs8faLrNtQ5S9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4ZUweLoRZUXBn6R6hMCWL7
          claim_id: c_uo4SpHCwXXrq5Q4rEwYp5z
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_337zUeqX45LANm5HofBhTS
            source_type: api_record
            title: 维基数据：王仁（Q26209995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209995
            external_identifier: Q26209995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81_(%E8%A5%BF%E6%B1%89)
        - id: cs_K99dNXG8ihxMCFsoDxrwTt
          claim_id: c_uo4SpHCwXXrq5Q4rEwYp5z
          source_id: s_9GVd88iH3GHws5qYFtqMdL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9GVd88iH3GHws5qYFtqMdL
            source_type: api_record
            title: 维基数据：王磐（Q26210004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210004
            external_identifier: Q26210004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:33.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89)
        - id: cs_PwFmg7YwjHv14wMt8iAW95
          claim_id: c_uo4SpHCwXXrq5Q4rEwYp5z
          source_id: s_bgwb6ehZ8tYqVinrjPs82V
          stance: supports
          locator: 条文：之子/之女
          quotation: 王磐{{BD|？||46年|}}，字子石，东汉人，王莽三叔平阿侯王譚之孙，王仁之子，马援的侄婿
          interpretation_note: null
          source:
            id: s_bgwb6ehZ8tYqVinrjPs82V
            source_type: website
            title: 中文维基百科：王磐 (东汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:55.251Z
            metadata_json: null
        - id: cs_oBUZFp8fx3ebifb9d2JPGE
          claim_id: c_uo4SpHCwXXrq5Q4rEwYp5z
          source_id: s_zkDmcJ2At43jAgGHa7hkni
          stance: supports
          locator: 条文：之子/之女
          quotation: 王磐，字子石，东汉人，王莽三叔平阿侯王譚之孙，王仁之子，马援的侄婿
          interpretation_note: null
          source:
            id: s_zkDmcJ2At43jAgGHa7hkni
            source_type: website
            title: 中文维基百科：王磐 (东汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:45.998Z
            metadata_json: null
      object_person:
        id: p_N2DicW23Hfs8faLrNtQ5S9
        status: active
        display_name: 王磐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁，西汉外戚。维基数据以独立条目 Q26209995 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| historical.period | 西汉 | accepted |
| name.primary | 王仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3jqrz5MCP94kKUqSaDLU1 | 王谭 | accepted |
| children | p_N2DicW23Hfs8faLrNtQ5S9 | 王磐 | accepted |

## 外部来源

- [维基数据：王磐（Q26210004）](https://www.wikidata.org/wiki/Q26210004)
- [维基数据：王仁（Q26209995）](https://www.wikidata.org/wiki/Q26209995)
- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [中文维基百科：王磐 (东汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89))
