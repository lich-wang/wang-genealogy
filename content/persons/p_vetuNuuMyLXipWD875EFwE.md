---
schema: wang-person/v1
id: p_vetuNuuMyLXipWD875EFwE
status: active
merged_into: null
display_name: 王孺
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ROS1aTwCKSpuuH3F1qs9J
        subject_person_id: p_vetuNuuMyLXipWD875EFwE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孺：王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）人。南朝宋官員，太保王弘弟王孺之子。王微為人多才多藝，但不喜為官，父親死後就屢辭除授。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_IdV0kwa30TwtH_bCm9x4lT
          claim_id: c_4ROS1aTwCKSpuuH3F1qs9J
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: 导言
          quotation: 王孺：王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_H6ckSqhCWBtg29oWyzKaf9
            source_type: website
            title: 中文维基百科：王微 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2VR78dkQXczLbg8eaPPZd5
        subject_person_id: p_vetuNuuMyLXipWD875EFwE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孺
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hSGMcZSPZwXsndPm9N5f7r
          claim_id: c_2VR78dkQXczLbg8eaPPZd5
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dapT1zvjvVBhdbi5fYFFJQ
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vetuNuuMyLXipWD875EFwE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o61zxNiuqpUE19VtHG3E59
          claim_id: c_dapT1zvjvVBhdbi5fYFFJQ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王孺
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
        - id: cs_QfdY72fEG8VgZn2McBj2Aw
          claim_id: c_dapT1zvjvVBhdbi5fYFFJQ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王孺
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
        - id: cs_2qf9PWKZsv4AXLbTE5Srqe
          claim_id: c_dapT1zvjvVBhdbi5fYFFJQ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 五子：弘、虞、柳、孺、曇首。
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
        id: p_ojGchAZHmRHY7mAfMcQCu4
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children:
    - claim:
        id: c_MQw83LptYjmi96cuP9okDP
        subject_person_id: p_vetuNuuMyLXipWD875EFwE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KdoK3CBpfrJgEAPZB6ng8S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eWv2sg57HmeAwyzV5tF6FD
          claim_id: c_MQw83LptYjmi96cuP9okDP
          source_id: s_H6ckSqhCWBtg29oWyzKaf9
          stance: supports
          locator: 条文：之子/之女
          quotation: 南朝宋官員，太保王弘弟王孺之子
          interpretation_note: null
          source:
            id: s_H6ckSqhCWBtg29oWyzKaf9
            source_type: website
            title: 中文维基百科：王微 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_KdoK3CBpfrJgEAPZB6ng8S
        status: active
        display_name: 王微
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孺：王微（415年—453年），字景玄，琅邪臨沂（今山東臨沂）人。南朝宋官員，太保王弘弟王孺之子。王微為人多才多藝，但不喜為官，父親死後就屢辭除授。 | accepted |
| name.primary | 王孺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |
| children | p_KdoK3CBpfrJgEAPZB6ng8S | 王微 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王微 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%AE_(%E5%88%98%E5%AE%8B))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
