---
schema: wang-person/v1
id: p_U8fdrFj4dVFL2uf2xmXoLK
status: active
merged_into: null
display_name: 王慧龍
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQUyOtQbJWrYOe08Edysr9
        subject_person_id: p_U8fdrFj4dVFL2uf2xmXoLK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧龍，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0XnuGDAkX8B2LGEQpo6h_8
          claim_id: c_bQUyOtQbJWrYOe08Edysr9
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
  - predicate: name.primary
    recommended:
      claim:
        id: c_dDy3TeiKYD1Q7QZq7eUvQV
        subject_person_id: p_U8fdrFj4dVFL2uf2xmXoLK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧龍
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nY4PDCVTRo6ADgathVDnyA
          claim_id: c_dDy3TeiKYD1Q7QZq7eUvQV
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q14994487
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kvXL5gWygKn3dKhPpHPvp5
        subject_person_id: p_V3ckafsQzHkyBukJRd6n5v
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_U8fdrFj4dVFL2uf2xmXoLK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGsJHFEXNAH5Xh4J9FP1yr
          claim_id: c_kvXL5gWygKn3dKhPpHPvp5
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 緝，散騎侍郎。生慧龍，後魏寧南將軍、長社穆侯。
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
        id: p_V3ckafsQzHkyBukJRd6n5v
        status: active
        display_name: 王緝
        merged_into_person_id: null
  children:
    - claim:
        id: c_QsvndT3Di9HGUPc73m4tbp
        subject_person_id: p_U8fdrFj4dVFL2uf2xmXoLK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hYY48CpTcE9XGPS8SVM5re
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5rt6JqqgBFAPJ9p2vJE4AN
          claim_id: c_QsvndT3Di9HGUPc73m4tbp
          source_id: s_ia7UywJVEB9bkmTJ93pz7K
          stance: supports
          locator: 条文：条文识读（獨子）
          quotation: 王宝兴（？－？），太原郡晋阳县（今山西省太原市）人，北魏使持节、宁南将军、武牢镇都副将、长社穆侯王慧龍獨子，北魏官員。
          interpretation_note: null
          source:
            id: s_ia7UywJVEB9bkmTJ93pz7K
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:31.288Z
            metadata_json: null
        - id: cs_TtnzDCcRH9QfcGYM6ieH6L
          claim_id: c_QsvndT3Di9HGUPc73m4tbp
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 慧龍，後魏寧南將軍、長社穆侯。生寶興，龍驤將軍。
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
        id: p_hYY48CpTcE9XGPS8SVM5re
        status: active
        display_name: 王宝兴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慧龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慧龍，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王慧龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V3ckafsQzHkyBukJRd6n5v | 王緝 | accepted |
| children | p_hYY48CpTcE9XGPS8SVM5re | 王宝兴 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
