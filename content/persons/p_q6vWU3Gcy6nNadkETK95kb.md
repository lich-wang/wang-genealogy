---
schema: wang-person/v1
id: p_q6vWU3Gcy6nNadkETK95kb
status: active
merged_into: null
display_name: 王女宗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mSjLzIFxAC8o1GyqgblwGB
        subject_person_id: p_q6vWU3Gcy6nNadkETK95kb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王女宗（？—？），名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_OiTQKMK7MHLgnx8qsZ_8Fo
          claim_id: c_mSjLzIFxAC8o1GyqgblwGB
          source_id: s_jLhXay6APfZ78twjCveq5L
          stance: supports
          locator: 导言
          quotation: 王女宗（？—？），名不详，字女宗，琅邪临沂（今山东省临沂市）人，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_jLhXay6APfZ78twjCveq5L
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: Q16905970
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DAKrPLVkwBcuN8wi8AAVhi
        subject_person_id: p_q6vWU3Gcy6nNadkETK95kb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王女宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xGXzNniEVFJFNjCHC4xkXx
          claim_id: c_DAKrPLVkwBcuN8wi8AAVhi
          source_id: s_uMYzG4L5LQN4Snn9xwf1Vu
          stance: supports
          locator: Q16905970
          quotation: null
          interpretation_note: null
          source:
            id: s_uMYzG4L5LQN4Snn9xwf1Vu
            source_type: api_record
            title: 维基数据：王女宗（Q16905970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905970
            external_identifier: Q16905970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:58.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c2pAoHej5uzgyTbN4nHo6W
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6vWU3Gcy6nNadkETK95kb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_awxGPLwP5snLAVgf5zqJyw
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
        - id: cs_YjT32RXxts196jbH8SMSks
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_uMYzG4L5LQN4Snn9xwf1Vu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uMYzG4L5LQN4Snn9xwf1Vu
            source_type: api_record
            title: 维基数据：王女宗（Q16905970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905970
            external_identifier: Q16905970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:58.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
        - id: cs_JL1i29HP2amzCwKQhnp1dP
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_1oz3SJ2gCJ92Wj1D89aqxL
          stance: supports
          locator: 条文：之子/之女
          quotation: 王女宗（{{bd|？||？||}}），名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人
          interpretation_note: null
          source:
            id: s_1oz3SJ2gCJ92Wj1D89aqxL
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
        - id: cs_NxvvzE3PwvW5QTNU3Yakua
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王女宗
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
        - id: cs_UJppooAV46MAyC2Q5C7V1R
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王女宗
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
        - id: cs_EHPWUexnhVHhggUnhA4iEr
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_yzts9m1YUrffNpS67AKYU9
          stance: supports
          locator: 条文：之子/之女
          quotation: 王女宗，名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人
          interpretation_note: null
          source:
            id: s_yzts9m1YUrffNpS67AKYU9
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:10.102Z
            metadata_json: null
      object_person:
        id: p_H7xedNgXo2vDg7amAnfbo9
        status: active
        display_name: 王恬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VB89tE1Pq5ySChSd2yQ7RL
        subject_person_id: p_cJmyujpmVE1ADv427CfxXL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q6vWU3Gcy6nNadkETK95kb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ee7yuu7ktLEpQnusF8wV4A
          claim_id: c_VB89tE1Pq5ySChSd2yQ7RL
          source_id: s_1oz3SJ2gCJ92Wj1D89aqxL
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 桓冲的夫人
          interpretation_note: null
          source:
            id: s_1oz3SJ2gCJ92Wj1D89aqxL
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
        - id: cs_CpufAETJqo5XNte6G8E3xy
          claim_id: c_VB89tE1Pq5ySChSd2yQ7RL
          source_id: s_yzts9m1YUrffNpS67AKYU9
          stance: supports
          locator: 条文：条文识读（夫人）
          quotation: 桓冲的夫人
          interpretation_note: null
          source:
            id: s_yzts9m1YUrffNpS67AKYU9
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:10.102Z
            metadata_json: null
      object_person:
        id: p_cJmyujpmVE1ADv427CfxXL
        status: active
        display_name: 桓冲
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RqeEWmAvePAuAwrmKsHCRG
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q6vWU3Gcy6nNadkETK95kb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxi2KFNua5aoR2WqHX6fgz
          claim_id: c_RqeEWmAvePAuAwrmKsHCRG
          source_id: s_1oz3SJ2gCJ92Wj1D89aqxL
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王导的孙女
          interpretation_note: null
          source:
            id: s_1oz3SJ2gCJ92Wj1D89aqxL
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
        - id: cs_D9s7rxz1tKdYJoQMApp31W
          claim_id: c_RqeEWmAvePAuAwrmKsHCRG
          source_id: s_yzts9m1YUrffNpS67AKYU9
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 王导的孙女
          interpretation_note: null
          source:
            id: s_yzts9m1YUrffNpS67AKYU9
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:10.102Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王女宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王女宗（？—？），名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人。 | accepted |
| name.primary | 王女宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7xedNgXo2vDg7amAnfbo9 | 王恬 | accepted |
| spouses | p_cJmyujpmVE1ADv427CfxXL | 桓冲 | accepted |
| ancestors | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |

## 外部来源

- [维基数据：王女宗（Q16905970）](https://www.wikidata.org/wiki/Q16905970)
- [維基數據：王恬（Q15927256）](https://www.wikidata.org/wiki/Q15927256)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王女宗](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97)
