---
schema: wang-person/v1
id: p_gr6qNDSogvFfNNz2L1sNwJ
status: active
merged_into: null
display_name: 王昚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dphDcs4NWEMYS3QeSsMYOV
        subject_person_id: p_gr6qNDSogvFfNNz2L1sNwJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昚（?—?），字元恭，琅邪郡临沂县（今山东省临沂市）人，南朝陳、隋朝官员，王僧虔玄孙，王筠之孙，南陳黄門侍郎王祥之子，王胄之兄。 王昚博学多识。少年时在江左有盛名。在南陈时，王昚历任太子洗马、中舍人。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dH88bzO3URzLQUKNQZojH8
          claim_id: c_dphDcs4NWEMYS3QeSsMYOV
          source_id: s_DnXj8zLkmFGYuA1EtVuqC1
          stance: supports
          locator: 导言
          quotation: 王昚（?—?），字元恭，琅邪郡临沂县（今山东省临沂市）人，南朝陳
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fofop6qF1KeyP75mY1TX3p
        subject_person_id: p_gr6qNDSogvFfNNz2L1sNwJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昚
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NaqmfeJxinWGUNLEfaW7f9
          claim_id: c_fofop6qF1KeyP75mY1TX3p
          source_id: s_DnXj8zLkmFGYuA1EtVuqC1
          stance: supports
          locator: Q73515569
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_XcVHBrRWCBfd6CdL4Zw9p7
        status: active
        display_name: 王祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
        id: p_ApPtvCCNtKJL2K4yt7EBWn
        status: active
        display_name: 王僧虔
        merged_into_person_id: null
    - claim:
        id: c_6nCS96XwipC7jzD9ZVR7Yg
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
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
        - id: cs_GwcuXcen8VrKo1tYQqWnDN
          claim_id: c_6nCS96XwipC7jzD9ZVR7Yg
          source_id: s_DnXj8zLkmFGYuA1EtVuqC1
          stance: supports
          locator: 条文：条文识读（孙）（2世）
          quotation: 王筠之孙
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
        id: p_XMjNEYPhE1uYhd3QLBRmJD
        status: active
        display_name: 王筠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昚（?—?），字元恭，琅邪郡临沂县（今山东省临沂市）人，南朝陳、隋朝官员，王僧虔玄孙，王筠之孙，南陳黄門侍郎王祥之子，王胄之兄。 王昚博学多识。少年时在江左有盛名。在南陈时，王昚历任太子洗马、中舍人。 | accepted |
| name.primary | 王昚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XcVHBrRWCBfd6CdL4Zw9p7 | 王祥 | accepted |
| ancestors | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |
| ancestors | p_XMjNEYPhE1uYhd3QLBRmJD | 王筠 | accepted |

## 外部来源

- [中文维基百科：王昚](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%9A)
- [中文维基文库：《隋书》卷七十六](https://zh.wikisource.org/zh-hant/%E9%9A%8B%E6%9B%B8/%E5%8D%B776)
