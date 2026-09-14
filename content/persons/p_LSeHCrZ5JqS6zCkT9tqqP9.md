---
schema: wang-person/v1
id: p_LSeHCrZ5JqS6zCkT9tqqP9
status: active
merged_into: null
display_name: 王柳
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N-cvMNPzXHsClmmzM0ufZv
        subject_person_id: p_LSeHCrZ5JqS6zCkT9tqqP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柳，南朝宋琅邪臨沂人，太保王弘之子，官至光祿大夫，封東亭侯。為梁王瞻之祖父（《梁書·卷二十一·王瞻傳》：祖柳，光祿大夫、東亭侯）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DetS7J1iB-yOPbf2TC2dGN
          claim_id: c_N-cvMNPzXHsClmmzM0ufZv
          source_id: s_pJHknmxulQ2kM2gw6Rx5bt
          stance: supports
          locator: 梁書/卷21·王柳
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_pJHknmxulQ2kM2gw6Rx5bt
            source_type: website
            title: 维基文库：梁書/卷21·王柳
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/梁書/卷21
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rE6ntF68eXQGhDuQLiR5aT
        subject_person_id: p_LSeHCrZ5JqS6zCkT9tqqP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柳
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JUyxWNkkQMEWstFQqdptyv
          claim_id: c_rE6ntF68eXQGhDuQLiR5aT
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1Qyomf2js28daBWX27S6ix
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LSeHCrZ5JqS6zCkT9tqqP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mwzgcsMiq6L9ZCHhVZYgKP
          claim_id: c_1Qyomf2js28daBWX27S6ix
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_N5i66dL8bTpSgUJ32bjjoa
        subject_person_id: p_LSeHCrZ5JqS6zCkT9tqqP9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rvrPx4SBmB7G663buP8VfK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TqyjYvE9Z7bH5mD4RbtLrQ
          claim_id: c_N5i66dL8bTpSgUJ32bjjoa
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王柳是劉宋光祿大夫、東亭侯
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person:
        id: p_rvrPx4SBmB7G663buP8VfK
        status: active
        display_name: 王瞻
        merged_into_person_id: null
  other: []
---

# 王柳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王柳，南朝宋琅邪臨沂人，太保王弘之子，官至光祿大夫，封東亭侯。為梁王瞻之祖父（《梁書·卷二十一·王瞻傳》：祖柳，光祿大夫、東亭侯）。 | accepted |
| name.primary | 王柳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |
| descendants | p_rvrPx4SBmB7G663buP8VfK | 王瞻 | accepted |

## 外部来源

- [维基文库：梁書/卷21·王柳](https://zh.wikisource.org/wiki/梁書/卷21)
- [中文维基百科：王瞻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
