---
schema: wang-person/v1
id: p_EMGFDrQWSrsdf9fKwcrHhY
status: active
merged_into: null
display_name: 王朝聘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gF4AipDMsZKfwKaC2FdGQ7
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘，史料所见人物。本项目依据《王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_N_eQcc8T6K-h0GzTUohg0h
          claim_id: c_gF4AipDMsZKfwKaC2FdGQ7
          source_id: s_97SW7k8NBhNb8bzsxF1kJn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_97SW7k8NBhNb8bzsxF1kJn
            source_type: website
            title: 中文维基百科：王夫之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:21.051Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i938yA84Ag6p3YcZsWdi4w
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fVRQmcaiGBovzpDhL6Xn1S
          claim_id: c_i938yA84Ag6p3YcZsWdi4w
          source_id: s_97SW7k8NBhNb8bzsxF1kJn
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
        id: c_LUNv7bNez3ow6GcJdhA8hQ
        subject_person_id: p_ynrdJL96UEftzCv4zvyn42
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2B3MtDg2Xidp7kej4X21BE
          claim_id: c_LUNv7bNez3ow6GcJdhA8hQ
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: 王氏家世段
          quotation: 王夫之祖父王惟敬和父亲王朝聘。
          interpretation_note: null
          source:
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person:
        id: p_ynrdJL96UEftzCv4zvyn42
        status: active
        display_name: 王惟敬
        merged_into_person_id: null
  children:
    - claim:
        id: c_HtvMLH6Xjq2FftpL2iiZM7
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vLvDV5P2y7vDwkpQ8mjYAY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D26rCPMcP8yup9aEqBA8AX
          claim_id: c_HtvMLH6Xjq2FftpL2iiZM7
          source_id: s_JtnErgqpF52vB1FRM8Siqq
          stance: supports
          locator: 孝是万字之本
          quotation: 王夫之的父亲王朝聘是地方名流。
          interpretation_note: null
          source:
            id: s_JtnErgqpF52vB1FRM8Siqq
            source_type: website
            title: 和田地区纪委监委：王夫之的齐家之教
            creator: 刘绪义
            publisher: 和田地区纪委监委
            published_at_text: null
            canonical_url: https://www.htlz.gov.cn/liansjj40/269.jhtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.244Z
            metadata_json: null
      object_person:
        id: p_vLvDV5P2y7vDwkpQ8mjYAY
        status: active
        display_name: 王夫之
        merged_into_person_id: null
    - claim:
        id: c_LmvJVMCAN3Nc2vsQB5Jp4m
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_J9VBeV9JQRCWCx3PUoFzss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bnqRnZhLCDJ7GYGyjPLeEB
          claim_id: c_LmvJVMCAN3Nc2vsQB5Jp4m
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: 王介之条
          quotation: 王介之字石子，號石崖，朝聘長子。
          interpretation_note: null
          source:
            id: s_2C1EnjYcnvYEmWWS49t4WC
            source_type: gazetteer
            title: 《湖南通志》卷一百六十七
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_J9VBeV9JQRCWCx3PUoFzss
        status: active
        display_name: 王介之
        merged_into_person_id: null
    - claim:
        id: c_1ECTkcg6tPP8mnn5vEu9oA
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zoSgw4qxk3VqkJm598hYn6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z63Me52M75NFEtSrmLf6wX
          claim_id: c_1ECTkcg6tPP8mnn5vEu9oA
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: 王参之条
          quotation: 王参之，朝聘仲子。
          interpretation_note: null
          source:
            id: s_2C1EnjYcnvYEmWWS49t4WC
            source_type: gazetteer
            title: 《湖南通志》卷一百六十七
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_zoSgw4qxk3VqkJm598hYn6
        status: active
        display_name: 王参之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝聘，史料所见人物。本项目依据《王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王朝聘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynrdJL96UEftzCv4zvyn42 | 王惟敬 | accepted |
| children | p_vLvDV5P2y7vDwkpQ8mjYAY | 王夫之 | accepted |
| children | p_J9VBeV9JQRCWCx3PUoFzss | 王介之 | accepted |
| children | p_zoSgw4qxk3VqkJm598hYn6 | 王参之 | accepted |

## 外部来源

- [《湖南通志》卷一百六十七](https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki)
- [和田地区纪委监委：王夫之的齐家之教](https://www.htlz.gov.cn/liansjj40/269.jhtml)
- [湖南日报：王夫之故居寻根](https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml)
- [中文维基百科：王夫之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%B9%8B)
