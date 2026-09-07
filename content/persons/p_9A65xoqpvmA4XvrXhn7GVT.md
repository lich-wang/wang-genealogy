---
schema: wang-person/v1
id: p_9A65xoqpvmA4XvrXhn7GVT
status: active
merged_into: null
display_name: 王正黼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1f9OXuKvI8a39E1hip6bt-
        subject_person_id: p_9A65xoqpvmA4XvrXhn7GVT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正黼（1890年9月17日—1951年7月3日）字子文，号儒冠。浙江奉化人。中国矿业先驱，采矿事业家。北洋大学和清华大学的早期学生之一。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oArhOw_r0J6ExE9k2ZBJKD
          claim_id: c_1f9OXuKvI8a39E1hip6bt-
          source_id: s_8RhsKkMsEngkzFNEgMD2HD
          stance: supports
          locator: 导言
          quotation: 王正黼（1890年9月17日—1951年7月3日）字子文，号儒冠
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_8RhsKkMsEngkzFNEgMD2HD
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6VagwN3DXFsonhcgCWWxEF
        subject_person_id: p_9A65xoqpvmA4XvrXhn7GVT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1951年7月3日
            calendar_note: null
            earliest: 1951-07-03
            latest: 1951-07-03
            precision: day
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SKQsrQhw35XNynpRyfmKXy
          claim_id: c_6VagwN3DXFsonhcgCWWxEF
          source_id: s_8RhsKkMsEngkzFNEgMD2HD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mUebFXFdLAB3u8CZUS55aZ
        subject_person_id: p_9A65xoqpvmA4XvrXhn7GVT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正黼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sGDQWPRkRapve2PfVv9Meq
          claim_id: c_mUebFXFdLAB3u8CZUS55aZ
          source_id: s_8RhsKkMsEngkzFNEgMD2HD
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_8RhsKkMsEngkzFNEgMD2HD
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1u6HaRHGHD1yHMwXMtaqkq
        subject_person_id: p_zwYmoVozb1FTnG2BUx9Nkq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9A65xoqpvmA4XvrXhn7GVT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JkD6tiac4rAuG4dEoGysYi
          claim_id: c_1u6HaRHGHD1yHMwXMtaqkq
          source_id: s_8RhsKkMsEngkzFNEgMD2HD
          stance: supports
          locator: 生平
          quotation: 王正黼……父王际唐。
          interpretation_note: null
          source:
            id: s_8RhsKkMsEngkzFNEgMD2HD
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person:
        id: p_zwYmoVozb1FTnG2BUx9Nkq
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZwXhcCTQc5kQDwqFFW6Umj
        subject_person_id: p_9A65xoqpvmA4XvrXhn7GVT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bMAaT9wKa564tghxc5sJFm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2xdH9hVvRC91Cn2ALHkLab
          claim_id: c_ZwXhcCTQc5kQDwqFFW6Umj
          source_id: s_Bi1skRiC1c1PdcLwNiFjJz
          stance: supports
          locator: 生平
          quotation: 民国矿业巨头王正黼三子。
          interpretation_note: null
          source:
            id: s_Bi1skRiC1c1PdcLwNiFjJz
            source_type: website
            title: 中文维基百科：王恭立
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%AB%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person:
        id: p_bMAaT9wKa564tghxc5sJFm
        status: active
        display_name: 王恭立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正黼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正黼（1890年9月17日—1951年7月3日）字子文，号儒冠。浙江奉化人。中国矿业先驱，采矿事业家。北洋大学和清华大学的早期学生之一。 | accepted |
| death.date | 1951年7月3日 | accepted |
| name.primary | 王正黼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zwYmoVozb1FTnG2BUx9Nkq | 王际唐 | accepted |
| children | p_bMAaT9wKa564tghxc5sJFm | 王恭立 | accepted |

## 外部来源

- [中文维基百科：王恭立](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%AB%8B)
- [中文维基百科：王正黼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC)
