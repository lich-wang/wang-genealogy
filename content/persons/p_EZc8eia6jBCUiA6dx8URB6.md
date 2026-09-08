---
schema: wang-person/v1
id: p_EZc8eia6jBCUiA6dx8URB6
status: active
merged_into: null
display_name: 王承
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U68D44lBWX3Swi1vB-J7P8
        subject_person_id: p_EZc8eia6jBCUiA6dx8URB6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承（?—?），字安期，琅邪郡臨沂县人，南朝梁官员。 尚书仆射王暕之子。七岁通《周易》，选补国子生。十五岁，射策及第，授秘书郎。历任太子舍人、南康王文学、邵陵王友、太子中舍人。普通四年（523年）、父亲去世，辞職服喪。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A0__2wvz5uOxOytXe_LN6A
          claim_id: c_U68D44lBWX3Swi1vB-J7P8
          source_id: s_rpWygGEdG2HNsbmwmC7uyf
          stance: supports
          locator: 导言
          quotation: 王承（?—?），字安期，琅邪郡臨沂县人，南朝梁官员。 尚书仆射王
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_rpWygGEdG2HNsbmwmC7uyf
            source_type: website
            title: 中文维基百科：王承 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF_(%E5%8D%97%E6%A2%81)
            external_identifier: Q28691175
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KFAXkCVCZygMumU6pBUWNW
        subject_person_id: p_EZc8eia6jBCUiA6dx8URB6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L3hY8qWjB8vQnfqzUdphcy
          claim_id: c_KFAXkCVCZygMumU6pBUWNW
          source_id: s_AHywmRLgm8NC6kyHUp2cqf
          stance: supports
          locator: Q28691175
          quotation: null
          interpretation_note: null
          source:
            id: s_AHywmRLgm8NC6kyHUp2cqf
            source_type: api_record
            title: 维基数据：王承（Q28691175）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28691175
            external_identifier: Q28691175
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF_(%E5%8D%97%E6%A2%81)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gUCYUuGskWUWKfwf5kp4Nm
        subject_person_id: p_LChbCBLeq9EqBGmzWw9UvF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EZc8eia6jBCUiA6dx8URB6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BEZpc5n2wGpeJ96ex6L6tm
          claim_id: c_gUCYUuGskWUWKfwf5kp4Nm
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 湛，字處沖，汝南內史。生承，字安期，鎮東府從事中郎、藍田縣侯。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
        - id: cs_4gUFC814p2GCBn7piJAELR
          claim_id: c_gUCYUuGskWUWKfwf5kp4Nm
          source_id: s_ADr4kXZskn3NqTtSxjwC4b
          stance: supports
          locator: 卷七十五·王湛传
          quotation: 湛少仕……元康五年卒，年四十七。子承嗣。
          interpretation_note: null
          source:
            id: s_ADr4kXZskn3NqTtSxjwC4b
            source_type: book
            title: 中文维基文库：晉書/卷075
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:49.107Z
            metadata_json: null
      object_person:
        id: p_LChbCBLeq9EqBGmzWw9UvF
        status: active
        display_name: 王湛
        merged_into_person_id: null
    - claim:
        id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EZc8eia6jBCUiA6dx8URB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqfPBBBMezLhz4TjAVTKre
          claim_id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
        - id: cs_tJLw6xWQRQ673raQKXe6E7
          claim_id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
          source_id: s_rpWygGEdG2HNsbmwmC7uyf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_1PVoebznd6BJv1usnGBu3r
        status: active
        display_name: 王暕
        merged_into_person_id: null
  children:
    - claim:
        id: c_kVfC1Rt6qBKqGoJwFLxdn7
        subject_person_id: p_EZc8eia6jBCUiA6dx8URB6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vQ9yMNREp7heDRfM21DYGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zxof4f33RGPoR1jRaLq9fp
          claim_id: c_kVfC1Rt6qBKqGoJwFLxdn7
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 承，字安期，鎮東府從事中郎、藍田縣侯。生述，字懷祖，尚書令、藍田簡侯。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_vQ9yMNREp7heDRfM21DYGw
        status: active
        display_name: 王述
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承（?—?），字安期，琅邪郡臨沂县人，南朝梁官员。 尚书仆射王暕之子。七岁通《周易》，选补国子生。十五岁，射策及第，授秘书郎。历任太子舍人、南康王文学、邵陵王友、太子中舍人。普通四年（523年）、父亲去世，辞職服喪。 | accepted |
| name.primary | 王承 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LChbCBLeq9EqBGmzWw9UvF | 王湛 | accepted |
| parents | p_1PVoebznd6BJv1usnGBu3r | 王暕 | accepted |
| children | p_vQ9yMNREp7heDRfM21DYGw | 王述 | accepted |

## 外部来源

- [维基数据：王承（Q28691175）](https://www.wikidata.org/wiki/Q28691175)
- [维基数据：王暕（Q11572875）](https://www.wikidata.org/wiki/Q11572875)
- [中文维基百科：王承 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF_(%E5%8D%97%E6%A2%81))
- [中文维基文库：晉書/卷075](https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
