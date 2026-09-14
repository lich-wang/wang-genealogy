---
schema: wang-person/v1
id: p_Md1MCAZk3mnCGp6jR6fcHA
status: active
merged_into: null
display_name: 王慶遠
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AAs4PBxlHZsevwiGPDgUwh
        subject_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遠，北魏京兆霸城人，太尉王羆之子，弱冠以功臣子拜直閤將軍，後官至龍驤將軍、直閣（《周書·卷十八·王羆傳》：子慶遠，弱冠以功臣子拜直閤將軍）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gsQNN_Ka7dRzN83wQSEzlR
          claim_id: c_AAs4PBxlHZsevwiGPDgUwh
          source_id: s_loLTrrrXtpuzx5wlknCX-L
          stance: supports
          locator: 周書/卷18·王慶遠
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_loLTrrrXtpuzx5wlknCX-L
            source_type: website
            title: 维基文库：周書/卷18·王慶遠
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/周書/卷18
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:19:12.294Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Deo9A2jyJ2Af7Xu9vBRn67
        subject_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ozSXg6tgix5YTMfjeeaRUb
          claim_id: c_Deo9A2jyJ2Af7Xu9vBRn67
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZUdE5PELTXpbHCLF734x47
            source_type: book
            title: 中文维基文库：《周书》卷十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:48.433Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZHXyFFwHkCVm69HfZ9FASs
        subject_person_id: p_DdBVMCJjBs6QFtXUf2AenG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RbgYhc8sE4wan8KwRKy1DV
          claim_id: c_ZHXyFFwHkCVm69HfZ9FASs
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: 卷十八·王羆传
          quotation: 子慶遠弱冠以功臣子拜直閤將軍，先羆卒。
          interpretation_note: null
          source:
            id: s_ZUdE5PELTXpbHCLF734x47
            source_type: book
            title: 中文维基文库：《周书》卷十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:48.433Z
            metadata_json: null
      object_person:
        id: p_DdBVMCJjBs6QFtXUf2AenG
        status: active
        display_name: 王羆
        merged_into_person_id: null
  children:
    - claim:
        id: c_q2mZfh5AMYjcRpB14C19Jo
        subject_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9CG3gWpgLGGG1zMPVLy77H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z28bGN1cXiSoH2SGGSdPHe
          claim_id: c_q2mZfh5AMYjcRpB14C19Jo
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: 卷十八·王羆传
          quotation: 孫述嗣，述字長述……述幼喪父，為羆所鞠養。
          interpretation_note: null
          source:
            id: s_ZUdE5PELTXpbHCLF734x47
            source_type: book
            title: 中文维基文库：《周书》卷十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:48.433Z
            metadata_json: null
      object_person:
        id: p_9CG3gWpgLGGG1zMPVLy77H
        status: active
        display_name: 王述
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慶遠，北魏京兆霸城人，太尉王羆之子，弱冠以功臣子拜直閤將軍，後官至龍驤將軍、直閣（《周書·卷十八·王羆傳》：子慶遠，弱冠以功臣子拜直閤將軍）。 | accepted |
| name.primary | 王慶遠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DdBVMCJjBs6QFtXUf2AenG | 王羆 | accepted |
| children | p_9CG3gWpgLGGG1zMPVLy77H | 王述 | accepted |

## 外部来源

- [维基文库：周書/卷18·王慶遠](https://zh.wikisource.org/wiki/周書/卷18)
- [中文维基文库：《周书》卷十八](https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718)
