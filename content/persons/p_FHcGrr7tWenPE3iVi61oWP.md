---
schema: wang-person/v1
id: p_FHcGrr7tWenPE3iVi61oWP
status: active
merged_into: null
display_name: 王崇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__Z1xnCfVAr9CaU9NbfqnK1
        subject_person_id: p_FHcGrr7tWenPE3iVi61oWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇，史料所见人物。本项目依据《王崇 (扶平侯)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NNqACOB3LBm3PHt1iYokOn
          claim_id: c__Z1xnCfVAr9CaU9NbfqnK1
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.alias
    recommended:
      claim:
        id: c_yj9HxCRdqNzgcPEn2h3hFQ
        subject_person_id: p_FHcGrr7tWenPE3iVi61oWP
        claim_kind: property
        predicate: name.alias
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 扶平侯
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VtEmbvfY5mzwLzJrAZ4Q2x
          claim_id: c_yj9HxCRdqNzgcPEn2h3hFQ
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条目：王崇（扶平侯）
          quotation: 王崇（前1世纪—3年），西汉大臣，王吉之孙，御史大夫王骏之子。
          interpretation_note: 当前记录 p_bnnhZdLTE5438ztJGTYQ7C 的外部标识 Q16260058 对应安成侯王崇（王禁之子，前31年卒）；王骏之子、王吉之孙、3年卒的扶平侯王崇是另一位同名人物。
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kM6TuHo72P5MuYPuToPhJK
        subject_person_id: p_FHcGrr7tWenPE3iVi61oWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CpC6bcMECwDovVc1PRsUX9
          claim_id: c_kM6TuHo72P5MuYPuToPhJK
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条目：王崇（扶平侯）
          quotation: 王崇（前1世纪—3年），西汉大臣，王吉之孙，御史大夫王骏之子。
          interpretation_note: 当前记录 p_bnnhZdLTE5438ztJGTYQ7C 的外部标识 Q16260058 对应安成侯王崇（王禁之子，前31年卒）；王骏之子、王吉之孙、3年卒的扶平侯王崇是另一位同名人物。
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_LZZJjNMDiadFbtbdNFzzKG
        status: active
        display_name: 王骏
        merged_into_person_id: null
  children:
    - claim:
        id: c_Aq4GX3P5Du1PWSAs226aAt
        subject_person_id: p_FHcGrr7tWenPE3iVi61oWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jYKH3hLMaF3wpc7Nfygrpf
          claim_id: c_Aq4GX3P5Du1PWSAs226aAt
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条文：长子
          quotation: 长子：王遵
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
        - id: cs_sPCPD6isoWjD97dGq6U5ob
          claim_id: c_Aq4GX3P5Du1PWSAs226aAt
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：生
          quotation: 生遵，字伯業，後漢中大夫、義鄉侯。
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
        id: p_1FJdZ15XyXMCC5RwrJYVuD
        status: active
        display_name: 王遵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1rU43PiASFLkYz9AX42KTU
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FHcGrr7tWenPE3iVi61oWP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NzWY6FEqwGH2LZMa1n8KtE
          claim_id: c_1rU43PiASFLkYz9AX42KTU
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条文：孙（2世）
          quotation: 王吉之孙，御史大夫王骏之子。
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
      object_person:
        id: p_7BBNW636PfzcwJta8vrVg1
        status: active
        display_name: 王吉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇，史料所见人物。本项目依据《王崇 (扶平侯)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.alias | 扶平侯 | accepted |
| name.primary | 王崇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LZZJjNMDiadFbtbdNFzzKG | 王骏 | accepted |
| children | p_1FJdZ15XyXMCC5RwrJYVuD | 王遵 | accepted |
| ancestors | p_7BBNW636PfzcwJta8vrVg1 | 王吉 | accepted |

## 外部来源

- [中文维基百科：王崇 (扶平侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF))
- [中文维基百科：王骏 (御史大夫)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
