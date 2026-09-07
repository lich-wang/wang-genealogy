---
schema: wang-person/v1
id: p_MQ8VFA69Lnhr9J6fbmXBdE
status: active
merged_into: null
display_name: 王琛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C9JtXSUY2ZKtTPmLLzE6Bp
        subject_person_id: p_MQ8VFA69Lnhr9J6fbmXBdE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，史料所见人物。本项目依据《王琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SRpR_zP_mpW17GgVj2JCeD
          claim_id: c_C9JtXSUY2ZKtTPmLLzE6Bp
          source_id: s_FXSp5GeiBGgB5csWzotisY
          stance: supports
          locator: Q22814888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FXSp5GeiBGgB5csWzotisY
            source_type: api_record
            title: 维基数据：王琛（Q22814888）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814888
            external_identifier: Q22814888
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPX5QLkBt3BDhGUsN9ovmp
        subject_person_id: p_MQ8VFA69Lnhr9J6fbmXBdE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BzcXGcXTi5V7bDm4rNMntj
          claim_id: c_KPX5QLkBt3BDhGUsN9ovmp
          source_id: s_FXSp5GeiBGgB5csWzotisY
          stance: supports
          locator: Q22814888
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JGYQBfXWJ5LXsRaeMiZ1kw
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQ8VFA69Lnhr9J6fbmXBdE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2RrSGv6eWFyL6BcM5GkmTE
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_QQM3UCTrYVwxDGuuB316p4
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_FXSp5GeiBGgB5csWzotisY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FXSp5GeiBGgB5csWzotisY
            source_type: api_record
            title: 维基数据：王琛（Q22814888）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814888
            external_identifier: Q22814888
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
        - id: cs_DtmbrSA1X3vixNNgtNvxE6
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览六子
          quotation: 王琛，王览六子，晋国子祭酒。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_pU71MstEogwKuddKAs3g8h
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
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
        id: p_FLFcPPEXByru3j5c6vxzPG
        status: active
        display_name: 王览
        merged_into_person_id: null
  children:
    - claim:
        id: c_mKpzkqH4Kz6wNZ7znM2vrg
        subject_person_id: p_MQ8VFA69Lnhr9J6fbmXBdE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e4mfTDyp78VELjMHYoU3Hw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BM1NFGnBbtBRmCiixgWtqQ
          claim_id: c_mKpzkqH4Kz6wNZ7znM2vrg
          source_id: s_YkMJdFZShLcu3n9QBaKHGR
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王览之孙，国子祭酒王琛之子，王导从弟，王彬从兄。
          interpretation_note: null
          source:
            id: s_YkMJdFZShLcu3n9QBaKHGR
            source_type: website
            title: 中文维基百科：王棱
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A3%B1
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:22:11.463Z
            metadata_json: null
        - id: cs_HQXrEcXjhoQDZd6KFmiunJ
          claim_id: c_mKpzkqH4Kz6wNZ7znM2vrg
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王棱
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_e4mfTDyp78VELjMHYoU3Hw
        status: active
        display_name: 王棱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琛，史料所见人物。本项目依据《王琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |
| children | p_e4mfTDyp78VELjMHYoU3Hw | 王棱 | accepted |

## 外部来源

- [维基数据：王琛（Q22814888）](https://www.wikidata.org/wiki/Q22814888)
- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：王棱](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A3%B1)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
