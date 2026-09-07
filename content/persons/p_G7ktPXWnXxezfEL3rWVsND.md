---
schema: wang-person/v1
id: p_G7ktPXWnXxezfEL3rWVsND
status: active
merged_into: null
display_name: 黃惠姑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yi2yUNtDZwIFE4ZqG5qGEU
        subject_person_id: p_G7ktPXWnXxezfEL3rWVsND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃惠姑：黄厥（?—?），又名黃惠姑，史称龍啟太后，泉州晉江縣镇安铺黄田（今福建省泉州市惠安縣张坂镇后边村）人。五代十国时期闽王王審知的側室夫人，閩國皇帝王延鈞的母親，工部侍郎黃訥裕的侄女，威武節度推官黃滔的族女。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_u8LbKsQOd9ovZpI6-0OumA
          claim_id: c_Yi2yUNtDZwIFE4ZqG5qGEU
          source_id: s_t8Iosw_MkbilPeWgNVhiBQ
          stance: supports
          locator: 导言
          quotation: 黃惠姑：黄厥（?—?），又名黃惠姑，史称龍啟太后，泉州晉江縣镇安
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_t8Iosw_MkbilPeWgNVhiBQ
            source_type: website
            title: 中文维基百科：黃厥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%BB%83%E5%8E%A5
            external_identifier: Q5374479
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T14:17:42.905Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AfhPwwGdXsDKr6BjgRGaEC
        subject_person_id: p_G7ktPXWnXxezfEL3rWVsND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃惠姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YBYBLx8Zy6LfdPKq2wFiJC
          claim_id: c_AfhPwwGdXsDKr6BjgRGaEC
          source_id: s_U3F84t8GWvPrqoioP6yef8
          stance: supports
          locator: Q5374479
          quotation: null
          interpretation_note: null
          source:
            id: s_U3F84t8GWvPrqoioP6yef8
            source_type: api_record
            title: 维基数据：黃惠姑（Q5374479）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374479
            external_identifier: Q5374479
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.765Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%BB%83%E5%8E%A5
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_E9txCySjeQ9V9pm6LC5DEP
        subject_person_id: p_8YMP7N65fqbbLv9pMGphFA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_G7ktPXWnXxezfEL3rWVsND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ygo4ZTRhY24eepPKiT7Wqy
          claim_id: c_E9txCySjeQ9V9pm6LC5DEP
          source_id: s_U3F84t8GWvPrqoioP6yef8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_U3F84t8GWvPrqoioP6yef8
            source_type: api_record
            title: 维基数据：黃惠姑（Q5374479）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374479
            external_identifier: Q5374479
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.765Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%BB%83%E5%8E%A5
        - id: cs_t3uQKUeWnurZNzi7G1C6XS
          claim_id: c_E9txCySjeQ9V9pm6LC5DEP
          source_id: s_BYvayLpGj9Y1h85cB71ggG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_BYvayLpGj9Y1h85cB71ggG
            source_type: api_record
            title: 维基数据：王审知（Q708354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q708354
            external_identifier: Q708354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.403Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A9%E7%9F%A5
      object_person:
        id: p_8YMP7N65fqbbLv9pMGphFA
        status: active
        display_name: 王审知
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃惠姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黃惠姑：黄厥（?—?），又名黃惠姑，史称龍啟太后，泉州晉江縣镇安铺黄田（今福建省泉州市惠安縣张坂镇后边村）人。五代十国时期闽王王審知的側室夫人，閩國皇帝王延鈞的母親，工部侍郎黃訥裕的侄女，威武節度推官黃滔的族女。 | accepted |
| name.primary | 黃惠姑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8YMP7N65fqbbLv9pMGphFA | 王审知 | accepted |

## 外部来源

- [维基数据：黃惠姑（Q5374479）](https://www.wikidata.org/wiki/Q5374479)
- [维基数据：王审知（Q708354）](https://www.wikidata.org/wiki/Q708354)
- [中文维基百科：黃厥](https://zh.wikipedia.org/wiki/%E9%BB%83%E5%8E%A5)
