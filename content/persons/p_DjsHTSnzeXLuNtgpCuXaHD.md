---
schema: wang-person/v1
id: p_DjsHTSnzeXLuNtgpCuXaHD
status: active
merged_into: null
display_name: 王國寶
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wsCnBMW-0exM9Kho68P20d
        subject_person_id: p_DjsHTSnzeXLuNtgpCuXaHD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寶，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ORME2bUj0lNMKQVH_lzjB-
          claim_id: c_wsCnBMW-0exM9Kho68P20d
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wDGbh17B6BH3U36oHhZBJQ
        subject_person_id: p_DjsHTSnzeXLuNtgpCuXaHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寶
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cf47pNpE8Uj2HmH7Ni8xvP
          claim_id: c_wDGbh17B6BH3U36oHhZBJQ
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q11572947
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D5daG9W74hFk57TSpdWzuK
        subject_person_id: p_5kkzDYeEhQBGa4ykA43hYy
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DjsHTSnzeXLuNtgpCuXaHD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WJicjaJ4sskWCJYryH9mND
          claim_id: c_D5daG9W74hFk57TSpdWzuK
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 王國寶，王坦之三子
          interpretation_note: null
          source:
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
        - id: cs_ZvhqyBhNHeoUMMyvnmABr6
          claim_id: c_D5daG9W74hFk57TSpdWzuK
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 王國寶，王坦之三子
          interpretation_note: null
          source:
            id: s_JhD7vPo5vXGiRknBGxUfHD
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:01.555Z
            metadata_json: null
        - id: cs_SXoN3wrQXjTnL38TpMwpK2
          claim_id: c_D5daG9W74hFk57TSpdWzuK
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 王國寶，王坦之三子
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
        - id: cs_Bf3bnHcQ2Lk197Wbk8DDeg
          claim_id: c_D5daG9W74hFk57TSpdWzuK
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 王國寶，王坦之三子
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
        - id: cs_d1ZZqLzn7UjaFJopwdCLEB
          claim_id: c_D5daG9W74hFk57TSpdWzuK
          source_id: s_ia7UywJVEB9bkmTJ93pz7K
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 王國寶，王坦之三子，與會稽王司馬道子專權，官至尚書左僕射。後被王恭討伐，被司馬道子殺害。
          interpretation_note: null
          source:
            id: s_ia7UywJVEB9bkmTJ93pz7K
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:31.288Z
            metadata_json: null
      object_person:
        id: p_5kkzDYeEhQBGa4ykA43hYy
        status: active
        display_name: 王坦之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國寶，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王國寶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5kkzDYeEhQBGa4ykA43hYy | 王坦之 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
