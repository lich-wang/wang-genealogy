---
schema: wang-person/v1
id: p_XcVHBrRWCBfd6CdL4Zw9p7
status: active
merged_into: null
display_name: 王祥
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SnYXU1R1r4THsGa4mBTEWB
        subject_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥，南朝梁琅邪臨沂人，梁太子詹事王筠之子、隋王胄之父，官至陳黃門侍郎（《隋書·卷七十六·王胄傳》：父祥，陳黃門侍郎）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SV86reEimNvlxgOhTM6Sdd
          claim_id: c_SnYXU1R1r4THsGa4mBTEWB
          source_id: s_trD-LkowA0de1X54D5ZVFY
          stance: supports
          locator: 隋書/卷76·王祥
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_trD-LkowA0de1X54D5ZVFY
            source_type: website
            title: 维基文库：隋書/卷76·王祥
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/隋書/卷76
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GfvpDt3gpvP6UdHjja3475
        subject_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7a2X3n4dYbr6npNzibwC2q
          claim_id: c_GfvpDt3gpvP6UdHjja3475
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王筠 → 王祥
          interpretation_note: 南陈王筠之子被误接到西晋同名人物。
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1m6e6k6N7GQ6trL8s2LDoV
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ep4btAQhXTF6VADaFd4Gj
          claim_id: c_1m6e6k6N7GQ6trL8s2LDoV
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王筠 → 王祥
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
      object_person:
        id: p_XMjNEYPhE1uYhd3QLBRmJD
        status: active
        display_name: 王筠
        merged_into_person_id: null
  children:
    - claim:
        id: c_tc2tHbcpBC126uyDZHQw8g
        subject_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_n2VhJYKthxCZqxJ3FGvsKN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6NK2d2Kpy9Uv5JudqNgU95
          claim_id: c_tc2tHbcpBC126uyDZHQw8g
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王祥 → 王胄
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
      object_person:
        id: p_n2VhJYKthxCZqxJ3FGvsKN
        status: active
        display_name: 王胄
        merged_into_person_id: null
    - claim:
        id: c_BgdAMpFRQwCQXegxbzrXG4
        subject_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gr6qNDSogvFfNNz2L1sNwJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z2fn2WxksDLQroS4dm8wDE
          claim_id: c_BgdAMpFRQwCQXegxbzrXG4
          source_id: s_kevSJmwn6aLHpHfS3N9AQM
          stance: supports
          locator: 王胄条
          quotation: 王胄……父祥，陳黃門侍郎。胄兄眘，字元恭。
          interpretation_note: 王昚（眘）与王胄为兄弟，父均为南陈王祥。
          source:
            id: s_kevSJmwn6aLHpHfS3N9AQM
            source_type: book
            title: 中文维基文库：《隋书》卷七十六
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E9%9A%8B%E6%9B%B8/%E5%8D%B776
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:15:18.894Z
            metadata_json: null
      object_person:
        id: p_gr6qNDSogvFfNNz2L1sNwJ
        status: active
        display_name: 王昚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祥，南朝梁琅邪臨沂人，梁太子詹事王筠之子、隋王胄之父，官至陳黃門侍郎（《隋書·卷七十六·王胄傳》：父祥，陳黃門侍郎）。 | accepted |
| name.primary | 王祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XMjNEYPhE1uYhd3QLBRmJD | 王筠 | accepted |
| children | p_n2VhJYKthxCZqxJ3FGvsKN | 王胄 | accepted |
| children | p_gr6qNDSogvFfNNz2L1sNwJ | 王昚 | accepted |

## 外部来源

- [维基文库：隋書/卷76·王祥](https://zh.wikisource.org/wiki/隋書/卷76)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基文库：《隋书》卷七十六](https://zh.wikisource.org/zh-hant/%E9%9A%8B%E6%9B%B8/%E5%8D%B776)
