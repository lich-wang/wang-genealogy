---
schema: wang-person/v1
id: p_jnXatZdH5LDv2DNn2PU5Tw
status: active
merged_into: null
display_name: 王诵
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lq5tFC_aTZGaphIPgwFCiu
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诵，史料所见人物。本项目依据《王衮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gKAsu2fbuJ4B-lRONAnU9v
          claim_id: c_Lq5tFC_aTZGaphIPgwFCiu
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_snRH9ynhPFA8zdbVMbYxN6
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诵
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q9n2wjDNFQYy2rGxZprTNa
          claim_id: c_snRH9ynhPFA8zdbVMbYxN6
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（儿子）
          quotation: 南梁侍中、中书令、护军将军、大將軍王诵的儿子
          interpretation_note: 南梁王诵的世系被误挂到北魏同名人物。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qefCwcFWnUbj6SfYXk7Fwm
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d6KPTXtrPsNw7Q2eBd29LR
          claim_id: c_qefCwcFWnUbj6SfYXk7Fwm
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王穉 → 王诵
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
        id: p_M2tXQe2FSQ532ZvGY6jPvZ
        status: active
        display_name: 王穉
        merged_into_person_id: null
  children:
    - claim:
        id: c_Umd3PxE5m5djDF1iKxCuRs
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_u92nRcsyU6Vi8eXXB56EK8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dpdr6Y8aLnSrioTFanBQb4
          claim_id: c_Umd3PxE5m5djDF1iKxCuRs
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王诵 → 王儁康
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
        id: p_u92nRcsyU6Vi8eXXB56EK8
        status: active
        display_name: 王儁康
        merged_into_person_id: null
    - claim:
        id: c_bWZAu1duf8EcfkPmyjYhHu
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tspKny23JfzAPq93EuM1CW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4JJZQo3k3xzaYt4dDtLKGf
          claim_id: c_bWZAu1duf8EcfkPmyjYhHu
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王诵 → 王孝康
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
        id: p_tspKny23JfzAPq93EuM1CW
        status: active
        display_name: 王孝康
        merged_into_person_id: null
    - claim:
        id: c_AiYeLz3ft72QXdaUtSYtnK
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GcJPiXoPEhfx49YfnqWCK9
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系图
          quotation: 王诵 → 王衮
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
        - id: cs_kR72XQXK5MH13nLPm2anTu
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（儿子）
          quotation: 南梁侍中、中书令、护军将军、大將軍王诵的儿子
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_tAfEUhzxmZg4MbXBipSDMK
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 南梁侍中、中书令、护军将军、大将军王诵的儿子。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_PGJAWHxYxJtx3aVz4EvhUR
        status: active
        display_name: 王衮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王诵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诵，史料所见人物。本项目依据《王衮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王诵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M2tXQe2FSQ532ZvGY6jPvZ | 王穉 | accepted |
| children | p_u92nRcsyU6Vi8eXXB56EK8 | 王儁康 | accepted |
| children | p_tspKny23JfzAPq93EuM1CW | 王孝康 | accepted |
| children | p_PGJAWHxYxJtx3aVz4EvhUR | 王衮 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王衮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE)
