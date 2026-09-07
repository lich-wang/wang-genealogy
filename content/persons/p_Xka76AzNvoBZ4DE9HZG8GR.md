---
schema: wang-person/v1
id: p_Xka76AzNvoBZ4DE9HZG8GR
status: active
merged_into: null
display_name: 田安
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Z1NG8TP1xsxMuFuv2EuJH
        subject_person_id: p_Xka76AzNvoBZ4DE9HZG8GR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王姓来源传统所载妫姓王氏得姓先祖；项羽曾封其为济北王，失去王位后相传其子孙改姓王。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2n6UcDZGAq4EQA3o5F3PbL
          claim_id: c_2Z1NG8TP1xsxMuFuv2EuJH
          source_id: s_S61fZXdnDT87Mj2UYRLSRH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S61fZXdnDT87Mj2UYRLSRH
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:13.359Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZDsTLi2ASjeSL6ECNbBCHu
        subject_person_id: p_Xka76AzNvoBZ4DE9HZG8GR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田安
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X8tQRUFMYgNEbeFrPimP2R
          claim_id: c_ZDsTLi2ASjeSL6ECNbBCHu
          source_id: s_S61fZXdnDT87Mj2UYRLSRH
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_S61fZXdnDT87Mj2UYRLSRH
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:13.359Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_isz4B8pvKoZ8yAKiK4Pcza
        subject_person_id: p_Xka76AzNvoBZ4DE9HZG8GR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ftTmaf71Kwzdeaet16S991
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zYbGyKEi73uyjLxsMcvCZU
          claim_id: c_isz4B8pvKoZ8yAKiK4Pcza
          source_id: s_S61fZXdnDT87Mj2UYRLSRH
          stance: supports
          locator: 来源和演变·妫姓王氏
          quotation: 田安也随之失去了王位，子孙遂改姓王。这支王姓以北海郡、陳留郡和魏郡为郡望。魏郡王氏：新朝皇帝王莽属于这一支。
          interpretation_note: 依据来源把田安与魏郡王氏成员王莽记为代数不详的世系；不补造中间父子链，证据强度为姓氏传统而非逐代谱牒。
          source:
            id: s_S61fZXdnDT87Mj2UYRLSRH
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:13.359Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  other: []
---

# 田安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王姓来源传统所载妫姓王氏得姓先祖；项羽曾封其为济北王，失去王位后相传其子孙改姓王。 | accepted |
| name.primary | 田安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [中文维基百科：王姓](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93)
