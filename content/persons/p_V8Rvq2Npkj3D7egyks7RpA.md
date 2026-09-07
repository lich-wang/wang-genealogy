---
schema: wang-person/v1
id: p_V8Rvq2Npkj3D7egyks7RpA
status: active
merged_into: null
display_name: 王賁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__T48EiIPF-O5RiXJXVLqFg
        subject_person_id: p_V8Rvq2Npkj3D7egyks7RpA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1Tl6DlmFlBysnDGG8xr0a
          claim_id: c__T48EiIPF-O5RiXJXVLqFg
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SL8XBST2opV6bE3uZQvV3K
        subject_person_id: p_V8Rvq2Npkj3D7egyks7RpA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nns2894YNVHp1ggQKmNUHn
          claim_id: c_SL8XBST2opV6bE3uZQvV3K
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·宰相世系表·王氏
          quotation: 八世孫錯，為魏將軍。生賁，為中大夫。賁生渝，為上將軍。
          interpretation_note: 《新唐書·宰相世系表》王氏一节内有两个王賁：魏將軍王錯之子、中大夫，上將軍王渝之父（本记录）；以及秦大將軍王翦之子、字典、武陵侯（既有记录 p_hsA2s6GjFfW84AomhJn2jd）。前者在后者之上七代，此前被按名字合成一人。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fsNfjKaYvYv8q5RDyQMqZ8
        subject_person_id: p_stdr5CvvuDGfDZfLP8Esf3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V8Rvq2Npkj3D7egyks7RpA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sqt7BtY5YGnzzq3KLbTMpU
          claim_id: c_fsNfjKaYvYv8q5RDyQMqZ8
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 八世孫錯，為魏將軍。生賁，為中大夫。
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
        id: p_stdr5CvvuDGfDZfLP8Esf3
        status: active
        display_name: 王错
        merged_into_person_id: null
  children:
    - claim:
        id: c_o4dLKbh27iXojPjEj4o2Z2
        subject_person_id: p_V8Rvq2Npkj3D7egyks7RpA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_o6NvJByLPPnPEvspkP9iwH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nmGDZVfDNZ4zuY41kJj5g5
          claim_id: c_o4dLKbh27iXojPjEj4o2Z2
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 賁生渝，為上將軍。
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
        id: p_o6NvJByLPPnPEvspkP9iwH
        status: active
        display_name: 王渝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賁，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王賁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_stdr5CvvuDGfDZfLP8Esf3 | 王错 | accepted |
| children | p_o6NvJByLPPnPEvspkP9iwH | 王渝 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
