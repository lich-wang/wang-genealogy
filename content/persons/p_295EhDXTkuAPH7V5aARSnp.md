---
schema: wang-person/v1
id: p_295EhDXTkuAPH7V5aARSnp
status: active
merged_into: null
display_name: 王深
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WhfzHWfZkOZoZex2ZosY0c
        subject_person_id: p_295EhDXTkuAPH7V5aARSnp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，字道冲，三國魏太原晉陽人，王昶之子、王渾之弟，官至冀州刺史（《三國志·卷二十七·王昶傳》：其子渾字玄冲，深字道冲）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rfJjYCVtiuWPxPxx3K2jxc
          claim_id: c_WhfzHWfZkOZoZex2ZosY0c
          source_id: s_C-9WtiyqUJ1O1zND60bFmD
          stance: supports
          locator: 三國志/卷27·王深
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_C-9WtiyqUJ1O1zND60bFmD
            source_type: website
            title: 维基文库：三國志/卷27·王深
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/三國志/卷27
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:19:12.294Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_czFDZ1RSoWHmMrV3gbBvGX
        subject_person_id: p_295EhDXTkuAPH7V5aARSnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PY2wj6yDnHFZ3KCjzcFxDP
          claim_id: c_czFDZ1RSoWHmMrV3gbBvGX
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YVKaLVqwq5QYLabNiGJHZs
        subject_person_id: p_187AYgxe91pYGDLoSMKqcX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_295EhDXTkuAPH7V5aARSnp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NbodB487AhyQm5astC6QYH
          claim_id: c_YVKaLVqwq5QYLabNiGJHZs
          source_id: s_KPLVeykgk8KR5R36JgM5EU
          stance: supports
          locator: 卷二十七·王昶传
          quotation: 其子渾字玄沖，深字道沖。
          interpretation_note: null
          source:
            id: s_KPLVeykgk8KR5R36JgM5EU
            source_type: book
            title: 中文维基文库：三國志/卷27
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B727
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:43.325Z
            metadata_json: null
      object_person:
        id: p_187AYgxe91pYGDLoSMKqcX
        status: active
        display_name: 王昶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王深，字道冲，三國魏太原晉陽人，王昶之子、王渾之弟，官至冀州刺史（《三國志·卷二十七·王昶傳》：其子渾字玄冲，深字道冲）。 | accepted |
| name.primary | 王深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_187AYgxe91pYGDLoSMKqcX | 王昶 | accepted |

## 外部来源

- [维基文库：三國志/卷27·王深](https://zh.wikisource.org/wiki/三國志/卷27)
- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：三國志/卷27](https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B727)
