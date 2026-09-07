---
schema: wang-person/v1
id: p_PcarY3s2HbN5X2amcQ3Lxq
status: active
merged_into: null
display_name: 王繇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1hN0rhpE90KJ0ZB8n-_rNs
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市）人，祖籍琅邪郡临沂县（今山东省临沂市）。唐玄宗的驸马。 王繇是光禄卿王同皎的儿子。王同皎娶唐中宗之女定安公主，王同皎刺杀武三思不成，被杀。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6xUnT0Imvfp05gvNJ4pzj2
          claim_id: c_1hN0rhpE90KJ0ZB8n-_rNs
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 导言
          quotation: 王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市）人，祖
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_778Wqc16DUJ9Ecm6vqCJ4P
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繇
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hht8K4AiQg1i6LJu8EdH9r
          claim_id: c_778Wqc16DUJ9Ecm6vqCJ4P
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: Q45652240
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7P8X8PJwhhJizFoUQxf94J
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zAscMAm82CQtrgeF3K27M6
          claim_id: c_7P8X8PJwhhJizFoUQxf94J
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王同皎 → 王繇
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
      object_person:
        id: p_dwq9QFUznBqpuUBRDrnuss
        status: active
        display_name: 王同皎
        merged_into_person_id: null
  children:
    - claim:
        id: c_CrttoEWzC5i2MECaPdnoRy
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ye9C6kssM3a8ECSaxfDuxz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4EzFKAkQsAZ2u3SFAKZTnv
          claim_id: c_CrttoEWzC5i2MECaPdnoRy
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王诠，银青光禄大夫、鸿胪寺卿、驸马都尉、上柱国、新太县开国公，娶肃宗第六女永和公主，追赠仆射。
          interpretation_note: null
          source:
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person:
        id: p_Ye9C6kssM3a8ECSaxfDuxz
        status: active
        display_name: 王诠
        merged_into_person_id: null
    - claim:
        id: c_79UreWb1xp855wMbyfU2P5
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JDvSPtLSJ4pv5avNZhFfY4
          claim_id: c_79UreWb1xp855wMbyfU2P5
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王谅，光禄卿、鸿胪少卿，袭琅琊郡公，娶许王李素节之孙、褒信郡王李璆之季女。
          interpretation_note: null
          source:
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person:
        id: p_CfFFmjDCq3B8ZTxR4JnWx6
        status: active
        display_name: 王谅
        merged_into_person_id: null
    - claim:
        id: c_Xub3KsTEhU81QU9FFo2YyV
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nTA6BQD9P5sfmKJGzVCdj6
          claim_id: c_Xub3KsTEhU81QU9FFo2YyV
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: 王𨙸墓志
          quotation: 曾祖同皎……祖繇……父訓，累授光禄卿。
          interpretation_note: 墓主之父王训为王繇之子。
          source:
            id: s_YEgFJu3CbFgpx2akuZ3rmK
            source_type: epitaph
            title: 《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志
            creator: null
            publisher: 公开古籍影印
            published_at_text: null
            canonical_url: https://pdf.fengshui86.com/wzpdf/3307627.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_W5F2zhrVkWpemEv2YFcCyM
        status: active
        display_name: 王训
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VJHJi36tU4DoSEh8Wn1TGr
        subject_person_id: p_ACCrqH77t4hshzZgSyRGar
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z1YfaQCCg2ipn62QW6HWvi
          claim_id: c_VJHJi36tU4DoSEh8Wn1TGr
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：妻/娶
          quotation: 定安公主再嫁韦濯、崔铣，开元二十一年（733年）二月，定安公主去世
          interpretation_note: null
          source:
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person:
        id: p_ACCrqH77t4hshzZgSyRGar
        status: active
        display_name: 韦濯
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王繇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市）人，祖籍琅邪郡临沂县（今山东省临沂市）。唐玄宗的驸马。 王繇是光禄卿王同皎的儿子。王同皎娶唐中宗之女定安公主，王同皎刺杀武三思不成，被杀。 | accepted |
| name.primary | 王繇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dwq9QFUznBqpuUBRDrnuss | 王同皎 | accepted |
| children | p_Ye9C6kssM3a8ECSaxfDuxz | 王诠 | accepted |
| children | p_CfFFmjDCq3B8ZTxR4JnWx6 | 王谅 | accepted |
| children | p_W5F2zhrVkWpemEv2YFcCyM | 王训 | accepted |
| spouses | p_ACCrqH77t4hshzZgSyRGar | 韦濯 | accepted |

## 外部来源

- [《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志](https://pdf.fengshui86.com/wzpdf/3307627.pdf)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
