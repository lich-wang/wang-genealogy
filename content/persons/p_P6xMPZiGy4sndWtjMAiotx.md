---
schema: wang-person/v1
id: p_P6xMPZiGy4sndWtjMAiotx
status: active
merged_into: null
display_name: 劉華
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QAki9Ocpl456efKE8Yesj
        subject_person_id: p_P6xMPZiGy4sndWtjMAiotx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉華：明惠皇后（896年—930年），本名劉華，字德秀，封州贺水县人。原为南漢清遠公主，后成为為閩太祖次子王延鈞的元配夫人，930年逝世。閩惠宗登基後追封為皇后，閩康宗的母親。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ARqfEfk_RscHv-YEzW5lnV
          claim_id: c_1QAki9Ocpl456efKE8Yesj
          source_id: s_UwFwyl6_y8o3ZKTgzb1FY8
          stance: supports
          locator: 导言
          quotation: 劉華：明惠皇后（896年—930年），本名劉華，字德秀，封州贺水
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_UwFwyl6_y8o3ZKTgzb1FY8
            source_type: website
            title: 中文维基百科：明惠皇后 (閩)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%98%8E%E6%83%A0%E7%9A%87%E5%90%8E_(%E9%96%A9)
            external_identifier: Q4432984
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yp4JrudHKEo2ZteGrifdhX
        subject_person_id: p_P6xMPZiGy4sndWtjMAiotx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCcvVK5uJ53MC93yJKYgKJ
          claim_id: c_Yp4JrudHKEo2ZteGrifdhX
          source_id: s_cCuGTSS3q83j7UqiyMhuGd
          stance: supports
          locator: Q4432984
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_cCuGTSS3q83j7UqiyMhuGd
            source_type: api_record
            title: 维基数据：劉華（Q4432984）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4432984
            external_identifier: Q4432984
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%98%8E%E6%83%A0%E7%9A%87%E5%90%8E_(%E9%96%A9)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2JNQs4BDwXs1rReBB47zDW
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_P6xMPZiGy4sndWtjMAiotx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vw7vF8gt87gjrv3H6UiTQ
          claim_id: c_2JNQs4BDwXs1rReBB47zDW
          source_id: s_cCuGTSS3q83j7UqiyMhuGd
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_7BiNFcJWBFqRkB35AE3xmu
          claim_id: c_2JNQs4BDwXs1rReBB47zDW
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉華：明惠皇后（896年—930年），本名劉華，字德秀，封州贺水县人。原为南漢清遠公主，后成为為閩太祖次子王延鈞的元配夫人，930年逝世。閩惠宗登基後追封為皇后，閩康宗的母親。 | accepted |
| name.primary | 劉華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：劉華（Q4432984）](https://www.wikidata.org/wiki/Q4432984)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
- [中文维基百科：明惠皇后 (閩)](https://zh.wikipedia.org/wiki/%E6%98%8E%E6%83%A0%E7%9A%87%E5%90%8E_(%E9%96%A9))
