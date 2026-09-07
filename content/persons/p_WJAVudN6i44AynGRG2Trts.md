---
schema: wang-person/v1
id: p_WJAVudN6i44AynGRG2Trts
status: active
merged_into: null
display_name: 王操之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8q4s2QCHIOPOzMyHREJ6B
        subject_person_id: p_WJAVudN6i44AynGRG2Trts
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王操之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_I3BtPaQgyLAmOV1LB_PSYc
          claim_id: c_v8q4s2QCHIOPOzMyHREJ6B
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
        id: c_2DxUxQnc8nkwHFfUu1XRwT
        subject_person_id: p_WJAVudN6i44AynGRG2Trts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王操之
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j3STN3K6KLeQe4eug9pbKA
          claim_id: c_2DxUxQnc8nkwHFfUu1XRwT
          source_id: s_ZsTJaM2TuXEioWT91BQiEp
          stance: supports
          locator: Q110109538
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eNnoFT9kqCktAhd18PCZyD
        subject_person_id: p_CDzewbvc57C3MHsFxzq2nG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WJAVudN6i44AynGRG2Trts
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7e1dJ1xkD7BX8Dx27DMNRq
          claim_id: c_eNnoFT9kqCktAhd18PCZyD
          source_id: s_gpBGTn4QVgA3DggBymgxcG
          stance: supports
          locator: 卷八十·羲之子操之
          quotation: 羲之子 操之……操之字子重，歷侍中、尚書、豫章太守。
          interpretation_note: null
          source:
            id: s_gpBGTn4QVgA3DggBymgxcG
            source_type: book
            title: 中文维基文库：晉書/卷080
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7080
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:52.156Z
            metadata_json: null
        - id: cs_gDsHJY7kgc8ea9bSRBC2UP
          claim_id: c_eNnoFT9kqCktAhd18PCZyD
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

# 王操之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王操之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王操之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CDzewbvc57C3MHsFxzq2nG | 王羲之 | accepted |

## 外部来源

- [山东地情档案：《琅邪王氏文化志·王羲之》](https://shandong-chorography.org/database/bg/section/12/article/102/)
- [中文维基百科：郗璿](https://zh.wikipedia.org/wiki/%E9%83%97%E7%92%BF)
- [中文维基文库：晉書/卷080](https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7080)
