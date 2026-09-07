---
schema: wang-person/v1
id: p_awYXwC59GjcftyuxjKjY4K
status: active
merged_into: null
display_name: 王晔之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ArHhl8axYMQg7a5lZ3cdDM
        subject_person_id: p_awYXwC59GjcftyuxjKjY4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晔之，史料所见人物。本项目依据《王晔之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_b4Q-DMG-Uiq1iv5xCjgdwR
          claim_id: c_ArHhl8axYMQg7a5lZ3cdDM
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: Q22814803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FAWJduv2uNXQWDdNSECYZ6
            source_type: api_record
            title: 维基数据：王晔之（Q22814803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814803
            external_identifier: Q22814803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TmpBzj5DzeP3EUX3WiqN1L
        subject_person_id: p_awYXwC59GjcftyuxjKjY4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晔之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CTexDUvPJGswDTGjEtnMdD
          claim_id: c_TmpBzj5DzeP3EUX3WiqN1L
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: Q22814803
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jMR2RNim46CpCpYws1pk8A
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_awYXwC59GjcftyuxjKjY4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s72rMZ7gewLghJAUn3WrEJ
          claim_id: c_jMR2RNim46CpCpYws1pk8A
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
        - id: cs_H9L3XMk6BnpE27q6FeNii4
          claim_id: c_jMR2RNim46CpCpYws1pk8A
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FAWJduv2uNXQWDdNSECYZ6
            source_type: api_record
            title: 维基数据：王晔之（Q22814803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814803
            external_identifier: Q22814803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json: null
      object_person:
        id: p_ReWCPkgDWJMMDu2Mcji449
        status: active
        display_name: 王韶之
        merged_into_person_id: null
  children:
    - claim:
        id: c_DE8vPuQPBYgdLkYP38x4Dm
        subject_person_id: p_awYXwC59GjcftyuxjKjY4K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dXN5L7KuxAbYtfG1CaAfe1
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FAWJduv2uNXQWDdNSECYZ6
            source_type: api_record
            title: 维基数据：王晔之（Q22814803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814803
            external_identifier: Q22814803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json: null
        - id: cs_bykGs8uAAwAAEuvvtr5XkS
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
        - id: cs_oksxwGkB2MZodE8TikbZ5C
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_NADmmhGEycC7YXwvegB4xw
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父親是太宰祭酒王曄之
          interpretation_note: null
          source:
            id: s_NADmmhGEycC7YXwvegB4xw
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:43.962Z
            metadata_json: null
        - id: cs_sCi9DTTRxdwLboESKfPWoH
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_8dJEFY4vCmVS6D98EX9MCr
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 祖父是吳興太守王韶之，父親是太宰祭酒王曄之
          interpretation_note: null
          source:
            id: s_8dJEFY4vCmVS6D98EX9MCr
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:49.755Z
            metadata_json: null
      object_person:
        id: p_GdYWjUMY3nn1SP6F46C7D8
        status: active
        display_name: 王宝明
        merged_into_person_id: null
    - claim:
        id: c_KA1JKgxufYv5po6NtFNULE
        subject_person_id: p_awYXwC59GjcftyuxjKjY4K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAzUQjj7EJ7T5tow68WGne
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fRhmVE58v5AVMdMY1PXbdy
          claim_id: c_KA1JKgxufYv5po6NtFNULE
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FAWJduv2uNXQWDdNSECYZ6
            source_type: api_record
            title: 维基数据：王晔之（Q22814803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814803
            external_identifier: Q22814803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json: null
        - id: cs_F1782MmGo9dqPW72n6yX9X
          claim_id: c_KA1JKgxufYv5po6NtFNULE
          source_id: s_AGGLaQsCW9kgKicuVmJfPC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AGGLaQsCW9kgKicuVmJfPC
            source_type: api_record
            title: 维基数据：王昺之（Q16906062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906062
            external_identifier: Q16906062
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:35.993Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B
        - id: cs_5GxHKnRMErSDfMXKq39U4U
          claim_id: c_KA1JKgxufYv5po6NtFNULE
          source_id: s_cs7Wn1WUvFa2ksCaaJ6Xj4
          stance: supports
          locator: 条文：之子/之女
          quotation: 王昺之（{{bd|5世紀||？||}}），琅邪临沂人，王韶之之孙，王晔之之子，王晃和文安皇后王宝明的兄弟
          interpretation_note: null
          source:
            id: s_cs7Wn1WUvFa2ksCaaJ6Xj4
            source_type: website
            title: 中文维基百科：王昺之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:22.973Z
            metadata_json: null
        - id: cs_upJ2pEEK3NhfhGgJ2EJf9k
          claim_id: c_KA1JKgxufYv5po6NtFNULE
          source_id: s_w5kxfMu4o4HCAA2Xia1MpT
          stance: supports
          locator: 条文：之子/之女
          quotation: 王昺之，琅邪临沂人，王韶之之孙，王晔之之子，王晃和文安皇后王宝明的兄弟
          interpretation_note: null
          source:
            id: s_w5kxfMu4o4HCAA2Xia1MpT
            source_type: website
            title: 中文维基百科：王昺之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:31.889Z
            metadata_json: null
      object_person:
        id: p_yAzUQjj7EJ7T5tow68WGne
        status: active
        display_name: 王昺之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晔之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晔之，史料所见人物。本项目依据《王晔之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王晔之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ReWCPkgDWJMMDu2Mcji449 | 王韶之 | accepted |
| children | p_GdYWjUMY3nn1SP6F46C7D8 | 王宝明 | accepted |
| children | p_yAzUQjj7EJ7T5tow68WGne | 王昺之 | accepted |

## 外部来源

- [维基数据：王宝明（Q699633）](https://www.wikidata.org/wiki/Q699633)
- [维基数据：王昺之（Q16906062）](https://www.wikidata.org/wiki/Q16906062)
- [维基数据：王韶之（Q5212674）](https://www.wikidata.org/wiki/Q5212674)
- [维基数据：王晔之（Q22814803）](https://www.wikidata.org/wiki/Q22814803)
- [中文维基百科：王寶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E)
- [中文维基百科：王昺之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B)
