---
schema: wang-person/v1
id: p_f8Dz19UMq9yD6cPqrH91Jc
status: active
merged_into: null
display_name: 王世官
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTtKzZBGo1mptKt2j2cy5w
        subject_person_id: p_f8Dz19UMq9yD6cPqrH91Jc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世官，史料所见人物。本项目依据《《福音与当代中国》第13期：王有光家族》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_K2Z9Xn5MoD7m7mMcMe44JX
          claim_id: c_dTtKzZBGo1mptKt2j2cy5w
          source_id: s_8rw8kM9c1h7TufH4D8hF53
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8rw8kM9c1h7TufH4D8hF53
            source_type: website
            title: 《福音与当代中国》第13期：王有光家族
            creator: null
            publisher: 福音与当代中国
            published_at_text: null
            canonical_url: https://gospelchina.cn/upload/portal/20211031/6b4d7f37c4d2998de0f01a603eade8d6.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:56.332Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ztnqn8Z8Br5kNH69UNJu5
        subject_person_id: p_f8Dz19UMq9yD6cPqrH91Jc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世官
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jGibc2PN1aycLnUZ249mSf
          claim_id: c_8Ztnqn8Z8Br5kNH69UNJu5
          source_id: s_8rw8kM9c1h7TufH4D8hF53
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xpYY7Ue7NaD47v5wdXPXsZ
        subject_person_id: p_f8Dz19UMq9yD6cPqrH91Jc
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zwYmoVozb1FTnG2BUx9Nkq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sk3rcBeXEPGd4AWhm86kvJ
          claim_id: c_xpYY7Ue7NaD47v5wdXPXsZ
          source_id: s_J5KKrxjYZA9bdiBpjRJLwf
          stance: supports
          locator: 生平
          quotation: 父王世官，母蔡氏……王世官早逝，蔡氏独立抚养二子一女，送王际唐入宁波城中义塾上学。
          interpretation_note: 页面同时明确王际唐后来以教名王有光行世。
          source:
            id: s_J5KKrxjYZA9bdiBpjRJLwf
            source_type: website
            title: 中文维基百科：王有光（英国传教士）
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%85%89_(%E8%8B%B1%E5%9C%8B%E5%82%B3%E6%95%99%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:06:09.978Z
            metadata_json: null
      object_person:
        id: p_zwYmoVozb1FTnG2BUx9Nkq
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世官，史料所见人物。本项目依据《《福音与当代中国》第13期：王有光家族》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王世官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zwYmoVozb1FTnG2BUx9Nkq | 王际唐 | accepted |

## 外部来源

- [《福音与当代中国》第13期：王有光家族](https://gospelchina.cn/upload/portal/20211031/6b4d7f37c4d2998de0f01a603eade8d6.pdf)
- [中文维基百科：王有光（英国传教士）](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%85%89_(%E8%8B%B1%E5%9C%8B%E5%82%B3%E6%95%99%E5%A3%AB))
