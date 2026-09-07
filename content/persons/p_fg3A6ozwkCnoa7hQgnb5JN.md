---
schema: wang-person/v1
id: p_fg3A6ozwkCnoa7hQgnb5JN
status: active
merged_into: null
display_name: 王志善
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4k7a8Fg1anyBSKn07S3y1L
        subject_person_id: p_fg3A6ozwkCnoa7hQgnb5JN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善，史料所见人物。本项目依据《王賓 (成化丙戌進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_OSChmKtzo4RvB4rPxBBybi
          claim_id: c_4k7a8Fg1anyBSKn07S3y1L
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_daYMrLKb1LDZcWisDGA8Fd
        subject_person_id: p_fg3A6ozwkCnoa7hQgnb5JN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oxAWSxkUAC76LeVcxw4XL7
          claim_id: c_daYMrLKb1LDZcWisDGA8Fd
          source_id: s_2F98dM1oBn675do3vNM5Du
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
        id: c_ivaku7eY8TT8pjYq2TLQ58
        subject_person_id: p_fg3A6ozwkCnoa7hQgnb5JN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1nJvH4EkiC15h85bvN9ZyX
          claim_id: c_ivaku7eY8TT8pjYq2TLQ58
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王志善，字克复，别号松坡，
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_ZX3i8KeYu9huaG29oAKyPV
        status: active
        display_name: 王賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志善，史料所见人物。本项目依据《王賓 (成化丙戌進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王志善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZX3i8KeYu9huaG29oAKyPV | 王賓 | accepted |

## 外部来源

- [中文维基百科：王賓 (成化丙戌進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB))
