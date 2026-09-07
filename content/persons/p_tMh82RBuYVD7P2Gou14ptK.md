---
schema: wang-person/v1
id: p_tMh82RBuYVD7P2Gou14ptK
status: active
merged_into: null
display_name: 王涣之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ED-ZESimI-tJFxxbmLWzA6
        subject_person_id: p_tMh82RBuYVD7P2Gou14ptK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3ely3i5alzMZ3Up_vcwija
          claim_id: c_ED-ZESimI-tJFxxbmLWzA6
          source_id: s_ZsTJaM2TuXEioWT91BQiEp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZsTJaM2TuXEioWT91BQiEp
            source_type: website
            title: 中文维基百科：郗璿
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%83%97%E7%92%BF
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:21.051Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_w5Cdkutfnmo2y1tBSQnpMp
        subject_person_id: p_tMh82RBuYVD7P2Gou14ptK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣之
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5AWE1SJhB6ReXsKAQoDobw
          claim_id: c_w5Cdkutfnmo2y1tBSQnpMp
          source_id: s_ZsTJaM2TuXEioWT91BQiEp
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
        id: c_KvTwNHajNbnAUgm5RT3KxN
        subject_person_id: p_CDzewbvc57C3MHsFxzq2nG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tMh82RBuYVD7P2Gou14ptK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LU9Aq4nT1gQEi7g23JEfLE
          claim_id: c_KvTwNHajNbnAUgm5RT3KxN
          source_id: s_rSLEZBeju7xqmzfSNtMzEY
          stance: supports
          locator: 王羲之条·家庭
          quotation: 他有7个儿子，即玄之、凝之、涣之、肃之、徽之、操之、献之。
          interpretation_note: null
          source:
            id: s_rSLEZBeju7xqmzfSNtMzEY
            source_type: gazetteer
            title: 山东地情档案：《琅邪王氏文化志·王羲之》
            creator: 《琅邪王氏文化志》编纂机构
            publisher: 山东地情档案
            published_at_text: null
            canonical_url: https://shandong-chorography.org/database/bg/section/12/article/102/
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-08-31T10:37:52.298Z
            metadata_json: null
      object_person:
        id: p_CDzewbvc57C3MHsFxzq2nG
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涣之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王涣之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王涣之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CDzewbvc57C3MHsFxzq2nG | 王羲之 | accepted |

## 外部来源

- [山东地情档案：《琅邪王氏文化志·王羲之》](https://shandong-chorography.org/database/bg/section/12/article/102/)
- [中文维基百科：郗璿](https://zh.wikipedia.org/wiki/%E9%83%97%E7%92%BF)
