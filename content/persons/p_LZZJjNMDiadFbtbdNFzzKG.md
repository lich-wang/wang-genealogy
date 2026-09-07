---
schema: wang-person/v1
id: p_LZZJjNMDiadFbtbdNFzzKG
status: active
merged_into: null
display_name: 王骏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pYATlJINxyYjZ0fEBUU-ad
        subject_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王骏，史料所见人物。本项目依据《王骏 (御史大夫)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xqpOCB1QXd1XNENav0o4pO
          claim_id: c_pYATlJINxyYjZ0fEBUU-ad
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9vBGx2cnBUUDqPkJBeA9DA
            source_type: website
            title: 中文维基百科：王骏 (御史大夫)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.339Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqX7TP8gcYFVvUKyLWbHXB
        subject_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王骏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K85xffSFfc9Xdcu5fKP6Kt
          claim_id: c_vqX7TP8gcYFVvUKyLWbHXB
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: Q11573248
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8mgGx6G4TBLdRDr1KP1LnS
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LCKk3QSTg58L9KwqADJRb7
          claim_id: c_8mgGx6G4TBLdRDr1KP1LnS
          source_id: s_PvzWhoXSrqZGm1exKsjTq2
          stance: supports
          locator: 条文：家族（次子）
          quotation: 次子：王駿
          interpretation_note: null
          source:
            id: s_PvzWhoXSrqZGm1exKsjTq2
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T08:03:26.102Z
            metadata_json: null
        - id: cs_JzkUBC2NPB9Ay88MjEFULW
          claim_id: c_8mgGx6G4TBLdRDr1KP1LnS
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生駿，字偉山，御史大夫。
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
        id: p_7BBNW636PfzcwJta8vrVg1
        status: active
        display_name: 王吉
        merged_into_person_id: null
  children:
    - claim:
        id: c_RQhupNuvZxd4NsLdM5KcC8
        subject_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ricGPFTHgWCmveAcXLYrue
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tKMUi3QrtVgwtCqS2PofJz
          claim_id: c_RQhupNuvZxd4NsLdM5KcC8
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: 条文：条文识读（次子）
          quotation: 次子：王游，儿媳：□氏
          interpretation_note: null
          source:
            id: s_9vBGx2cnBUUDqPkJBeA9DA
            source_type: website
            title: 中文维基百科：王骏 (御史大夫)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.339Z
            metadata_json: null
        - id: cs_J13ofquShhhumax6mRmo4f
          claim_id: c_RQhupNuvZxd4NsLdM5KcC8
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：崇、游。
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
        id: p_ricGPFTHgWCmveAcXLYrue
        status: active
        display_name: 王游
        merged_into_person_id: null
    - claim:
        id: c_cdmT7TAPqzeQn3a6i9xd6P
        subject_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FHcGrr7tWenPE3iVi61oWP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ipiuzMbkY8ujFUuDR3RS9
          claim_id: c_cdmT7TAPqzeQn3a6i9xd6P
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条文：之子
          quotation: 王吉之孙，御史大夫王骏之子
          interpretation_note: null
          source:
            id: s_ktMX1QyHh2pkBTaKFeZWEk
            source_type: website
            title: 中文维基百科：王崇 (扶平侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:39.989Z
            metadata_json: null
        - id: cs_S773v4xaxEPozFSN7p6Vx7
          claim_id: c_cdmT7TAPqzeQn3a6i9xd6P
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: 条文：长子
          quotation: 长子：王崇（中毒而亡），儿媳：解□
          interpretation_note: null
          source:
            id: s_9vBGx2cnBUUDqPkJBeA9DA
            source_type: website
            title: 中文维基百科：王骏 (御史大夫)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.339Z
            metadata_json: null
        - id: cs_TPpZUcT3EEqXkM3pU31FQ8
          claim_id: c_cdmT7TAPqzeQn3a6i9xd6P
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：生
          quotation: 二子：崇、游。
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
        id: p_FHcGrr7tWenPE3iVi61oWP
        status: active
        display_name: 王崇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王骏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王骏，史料所见人物。本项目依据《王骏 (御史大夫)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王骏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7BBNW636PfzcwJta8vrVg1 | 王吉 | accepted |
| children | p_ricGPFTHgWCmveAcXLYrue | 王游 | accepted |
| children | p_FHcGrr7tWenPE3iVi61oWP | 王崇 | accepted |

## 外部来源

- [中文维基百科：王崇 (扶平侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF))
- [中文维基百科：王吉 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89))
- [中文维基百科：王骏 (御史大夫)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
