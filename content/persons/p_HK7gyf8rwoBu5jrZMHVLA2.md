---
schema: wang-person/v1
id: p_HK7gyf8rwoBu5jrZMHVLA2
status: active
merged_into: null
display_name: 刘骏
cbdb_id: 339538
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_60Hd-B5HHX4ricu68-vjxH
        subject_person_id: p_HK7gyf8rwoBu5jrZMHVLA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘骏，南朝刘宋皇帝。维基数据以独立条目 Q718246 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7-sNaCStyhwz7IFtpc-Gqs
          claim_id: c_60Hd-B5HHX4ricu68-vjxH
          source_id: s_PvCDPYVCQ6L9MgANojw1g5
          stance: supports
          locator: Q718246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_PvCDPYVCQ6L9MgANojw1g5
            source_type: api_record
            title: 维基数据：刘骏（Q718246）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718246
            external_identifier: Q718246
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:07.307Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AE%8B%E5%AD%9D%E6%AD%A6%E5%B8%9D
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pfmqUrDBZVAyBUwruGSHMh
        subject_person_id: p_HK7gyf8rwoBu5jrZMHVLA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘骏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fg3PPqxLnfPLrisRwm9GZB
          claim_id: c_pfmqUrDBZVAyBUwruGSHMh
          source_id: s_PvCDPYVCQ6L9MgANojw1g5
          stance: supports
          locator: Q718246
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iTwZA2DC6nvXMQy4xkKMjD
          claim_id: c_pfmqUrDBZVAyBUwruGSHMh
          source_id: s_L1DgSj2KsKQTfzY3JTdM13
          stance: supports
          locator: Q718246
          quotation: null
          interpretation_note: null
          source:
            id: s_L1DgSj2KsKQTfzY3JTdM13
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉駿（339538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339538&o=json
            external_identifier: CBDB:339538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:07.474Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aNh6tAP6Pdyx5gCJLwJ3Lo
        subject_person_id: p_HK7gyf8rwoBu5jrZMHVLA2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u5zWSj2L39xyxZe5TyLFsc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_CRzroWix5hNtzWCjZKoNds
          claim_id: c_aNh6tAP6Pdyx5gCJLwJ3Lo
          source_id: s_YRYMwgJ6QtZSPkp4fgTBqi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_YRYMwgJ6QtZSPkp4fgTBqi
            source_type: api_record
            title: 维基数据：王宪嫄（Q1059974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1059974
            external_identifier: Q1059974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:54.673Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
        - id: cs_Su8QjHc1XfrF3dvXKM2PVw
          claim_id: c_aNh6tAP6Pdyx5gCJLwJ3Lo
          source_id: s_PvCDPYVCQ6L9MgANojw1g5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_PvCDPYVCQ6L9MgANojw1g5
            source_type: api_record
            title: 维基数据：刘骏（Q718246）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718246
            external_identifier: Q718246
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:07.307Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AE%8B%E5%AD%9D%E6%AD%A6%E5%B8%9D
        - id: cs_e1CT7GmVNw5EbtW6xT1Eie
          claim_id: c_aNh6tAP6Pdyx5gCJLwJ3Lo
          source_id: s_BtS4aXeLZhGxqVd9UA2akY
          stance: supports
          locator: 条文：信息框 夫
          quotation: 宋孝武帝劉駿
          interpretation_note: null
          source:
            id: s_BtS4aXeLZhGxqVd9UA2akY
            source_type: website
            title: 中文维基百科：王憲嫄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:06.094Z
            metadata_json: null
        - id: cs_1LAn55zUy3EezXFgNFAWMM
          claim_id: c_aNh6tAP6Pdyx5gCJLwJ3Lo
          source_id: s_wqn3DQjfDivK4aTBg3XDpn
          stance: supports
          locator: 条文：信息框 夫
          quotation: 宋孝武帝劉駿
          interpretation_note: null
          source:
            id: s_wqn3DQjfDivK4aTBg3XDpn
            source_type: website
            title: 中文维基百科：王憲嫄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:22.835Z
            metadata_json: null
      object_person:
        id: p_u5zWSj2L39xyxZe5TyLFsc
        status: active
        display_name: 王宪嫄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘骏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘骏，南朝刘宋皇帝。维基数据以独立条目 Q718246 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 刘骏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_u5zWSj2L39xyxZe5TyLFsc | 王宪嫄 | accepted |

## 外部来源

- [维基数据：刘骏（Q718246）](https://www.wikidata.org/wiki/Q718246)
- [维基数据：王宪嫄（Q1059974）](https://www.wikidata.org/wiki/Q1059974)
- [中文维基百科：王憲嫄](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84)
- [CBDB 中国历代人物传记资料库：劉駿（339538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339538&o=json)
