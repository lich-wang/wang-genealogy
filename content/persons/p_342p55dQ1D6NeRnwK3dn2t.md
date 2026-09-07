---
schema: wang-person/v1
id: p_342p55dQ1D6NeRnwK3dn2t
status: active
merged_into: null
display_name: 王承
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0cHwIlivziCrzX2rsUGfZr
        subject_person_id: p_342p55dQ1D6NeRnwK3dn2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承，史料所见人物。本项目依据《中文维基文库：《梁书》卷四十一》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iT4Q8CuQgLp0ivTgMYvQ79
          claim_id: c_0cHwIlivziCrzX2rsUGfZr
          source_id: s_8LTWKKntYNPK94hBz6b43z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8LTWKKntYNPK94hBz6b43z
            source_type: book
            title: 中文维基文库：《梁书》卷四十一
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L1DNTUtDYZ2C7PS3tzL1Pr
        subject_person_id: p_342p55dQ1D6NeRnwK3dn2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oyLGKT9uz7rV9XW2X13G6p
          claim_id: c_L1DNTUtDYZ2C7PS3tzL1Pr
          source_id: s_8LTWKKntYNPK94hBz6b43z
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
        id: c_RnMvb9xPAHAGgMrMqXaU6k
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_342p55dQ1D6NeRnwK3dn2t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gKHCF4tDqaNNWkEQwhx6M2
          claim_id: c_RnMvb9xPAHAGgMrMqXaU6k
          source_id: s_8LTWKKntYNPK94hBz6b43z
          stance: supports
          locator: 王承传
          quotation: 王承字安期，僕射暕子。
          interpretation_note: null
          source:
            id: s_8LTWKKntYNPK94hBz6b43z
            source_type: book
            title: 中文维基文库：《梁书》卷四十一
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_1PVoebznd6BJv1usnGBu3r
        status: active
        display_name: 王暕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GDD1GHxVEN7koLBorWxgFg
        subject_person_id: p_ke9yjosuiX8LZiiCh781g5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_342p55dQ1D6NeRnwK3dn2t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xurcFzhBAd5bece6k79a8F
          claim_id: c_GDD1GHxVEN7koLBorWxgFg
          source_id: s_8LTWKKntYNPK94hBz6b43z
          stance: supports
          locator: 王承传
          quotation: 承祖儉及父暕嘗為此職，三世為國師。
          interpretation_note: null
          source:
            id: s_8LTWKKntYNPK94hBz6b43z
            source_type: book
            title: 中文维基文库：《梁书》卷四十一
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_ke9yjosuiX8LZiiCh781g5
        status: active
        display_name: 王俭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承，史料所见人物。本项目依据《中文维基文库：《梁书》卷四十一》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王承 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1PVoebznd6BJv1usnGBu3r | 王暕 | accepted |
| ancestors | p_ke9yjosuiX8LZiiCh781g5 | 王俭 | accepted |

## 外部来源

- [中文维基文库：《梁书》卷四十一](https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741)
