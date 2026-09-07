---
schema: wang-person/v1
id: p_tFafGGg2Bryo6xR8iQuVK6
status: active
merged_into: null
display_name: 王揆
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HXG8WmpHUPqkw3pRqotWU8
        subject_person_id: p_tFafGGg2Bryo6xR8iQuVK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揆，史料所见人物。本项目依据《王原祁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ukqbe5NgSY34ARLhuvf5Nl
          claim_id: c_HXG8WmpHUPqkw3pRqotWU8
          source_id: s_CYaVYyvyyTJgaFWuqikaUQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CYaVYyvyyTJgaFWuqikaUQ
            source_type: website
            title: 中文维基百科：王原祁
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9F%E7%A5%81
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:15.964Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4GLdN86zHjz6pbyBktZ9sa
        subject_person_id: p_tFafGGg2Bryo6xR8iQuVK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揆
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tQ5yBtzQ2PiDXsVnQJmYNy
          claim_id: c_4GLdN86zHjz6pbyBktZ9sa
          source_id: s_CYaVYyvyyTJgaFWuqikaUQ
          stance: supports
          locator: Q16923068
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wivK2MQqSBtoPe7ArfVkS9
        subject_person_id: p_Xs7SSNKR6whA118xZvjxN2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tFafGGg2Bryo6xR8iQuVK6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GMfL3MMHMrsEGnymj63F4r
          claim_id: c_wivK2MQqSBtoPe7ArfVkS9
          source_id: s_sPuUHWc7vLo56hWTAtKo4M
          stance: supports
          locator: 作品说明
          quotation: 王时敏之子王揆……王揆之子王原祁。
          interpretation_note: null
          source:
            id: s_sPuUHWc7vLo56hWTAtKo4M
            source_type: website
            title: 故宫博物院：王揆等书札册
            creator: null
            publisher: 故宫博物院
            published_at_text: null
            canonical_url: https://www.dpm.org.cn/collection/paint/232539.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:15:03.449Z
            metadata_json: null
      object_person:
        id: p_Xs7SSNKR6whA118xZvjxN2
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  children:
    - claim:
        id: c_6bVvFgeM1PE4J26jCzUAWF
        subject_person_id: p_tFafGGg2Bryo6xR8iQuVK6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LaXypaHtM8UXoQABSPkXKu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mNtCURN2XiH5Nfj5oYWVgr
          claim_id: c_6bVvFgeM1PE4J26jCzUAWF
          source_id: s_CYaVYyvyyTJgaFWuqikaUQ
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王時敏之孫。王揆之子。康熙九年（1670年）進士。
          interpretation_note: null
          source:
            id: s_CYaVYyvyyTJgaFWuqikaUQ
            source_type: website
            title: 中文维基百科：王原祁
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9F%E7%A5%81
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:15.964Z
            metadata_json: null
      object_person:
        id: p_LaXypaHtM8UXoQABSPkXKu
        status: active
        display_name: 王原祁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王揆，史料所见人物。本项目依据《王原祁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王揆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |
| children | p_LaXypaHtM8UXoQABSPkXKu | 王原祁 | accepted |

## 外部来源

- [故宫博物院：王揆等书札册](https://www.dpm.org.cn/collection/paint/232539.html)
- [中文维基百科：王原祁](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9F%E7%A5%81)
