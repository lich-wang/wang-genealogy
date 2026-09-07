---
schema: wang-person/v1
id: p_dwq9QFUznBqpuUBRDrnuss
status: active
merged_into: null
display_name: 王同皎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uFX919CVYJxYZBpExVnG_J
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同皎：王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市）人，祖籍琅邪郡临沂县（今山东省临沂市）。唐玄宗的驸马。 王繇是光禄卿王同皎的儿子。王同皎娶唐中宗之女定安公主，王同皎刺杀武三思不成，被杀。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ssdz9JfZLDLbH9K0pZL1ot
          claim_id: c_uFX919CVYJxYZBpExVnG_J
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 导言
          quotation: 王同皎：王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市
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
        id: c_ezK7honMSQZuxouePWg9q4
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同皎
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MUzwaMQHbf95ET5HacRJ3t
          claim_id: c_ezK7honMSQZuxouePWg9q4
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: Q15954826
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9Bud1e6e4TGjXXpqGdS6di
        subject_person_id: p_fwt9kwJ4jXAH58RdzMfMBB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_dwq9QFUznBqpuUBRDrnuss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qSwMJAeuDLDo97LPT3xZMY
          claim_id: c_9Bud1e6e4TGjXXpqGdS6di
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王知道 → 王同皎
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
        id: p_fwt9kwJ4jXAH58RdzMfMBB
        status: active
        display_name: 王知道
        merged_into_person_id: null
  children:
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
        id: p_PcarY3s2HbN5X2amcQ3Lxq
        status: active
        display_name: 王繇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HSAaQRz2HHnihtit7Z9ktT
        subject_person_id: p_137XffjHafbGG6h3WRHoS3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dwq9QFUznBqpuUBRDrnuss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5cq6fWCHoPfLxsN4aWjQj
          claim_id: c_HSAaQRz2HHnihtit7Z9ktT
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 先祖官仕江左，南陈驸马都尉王宽曾孙。
          interpretation_note: null
          source:
            id: s_DMNAAKjp9e4Wa5XuwGoHb7
            source_type: website
            title: 中文维基百科：王同皎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.440Z
            metadata_json: null
      object_person:
        id: p_137XffjHafbGG6h3WRHoS3
        status: active
        display_name: 王宽 (南朝)
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_Us5S6CGArwxjFAePmEeQBr
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZjDkUXMDybm3uW2xoWv9Lw
          claim_id: c_Us5S6CGArwxjFAePmEeQBr
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
          stance: supports
          locator: 条文：条文识读（孙子）
          quotation: 王谅，鸿胪少卿，袭琅琊郡公。有子王润、王鄂
          interpretation_note: null
          source:
            id: s_DMNAAKjp9e4Wa5XuwGoHb7
            source_type: website
            title: 中文维基百科：王同皎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.440Z
            metadata_json: null
      object_person:
        id: p_CfFFmjDCq3B8ZTxR4JnWx6
        status: active
        display_name: 王谅
        merged_into_person_id: null
    - claim:
        id: c_gZUa6hCRRBC4i1V8UmbNW6
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Q7ijosDJHPrGXxuuUQNQS
          claim_id: c_gZUa6hCRRBC4i1V8UmbNW6
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: 王𨙸墓志
          quotation: 曾祖同皎……祖繇……父訓，累授光禄卿。
          interpretation_note: null
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
  other: []
---

# 王同皎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同皎：王繇（?—?），又作王瑶，唐代相州安阳县（今河南省安阳市）人，祖籍琅邪郡临沂县（今山东省临沂市）。唐玄宗的驸马。 王繇是光禄卿王同皎的儿子。王同皎娶唐中宗之女定安公主，王同皎刺杀武三思不成，被杀。 | accepted |
| name.primary | 王同皎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fwt9kwJ4jXAH58RdzMfMBB | 王知道 | accepted |
| children | p_PcarY3s2HbN5X2amcQ3Lxq | 王繇 | accepted |
| ancestors | p_137XffjHafbGG6h3WRHoS3 | 王宽 (南朝) | accepted |
| descendants | p_CfFFmjDCq3B8ZTxR4JnWx6 | 王谅 | accepted |
| descendants | p_W5F2zhrVkWpemEv2YFcCyM | 王训 | accepted |

## 外部来源

- [《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志](https://pdf.fengshui86.com/wzpdf/3307627.pdf)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王同皎](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E)
- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
