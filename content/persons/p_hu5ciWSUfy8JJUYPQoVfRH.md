---
schema: wang-person/v1
id: p_hu5ciWSUfy8JJUYPQoVfRH
status: active
merged_into: null
display_name: 王曄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1DWAKNAgRAvbmun9B3N1k
        subject_person_id: p_hu5ciWSUfy8JJUYPQoVfRH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄（？—？），是中国新朝皇帝王莽的女儿。她的生母为王莽的妾增秩。王莽的妾室增秩、怀能、开明，和增秩的儿子王匡、女儿王晔，怀能的儿子王兴，开明的女儿王捷，都留在了新都国。地皇二年（21年），孝睦皇后和三子王安先后去世，王莽假托王安上表，请求这些弟弟妹妹到京城常安受封。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wIXupb0RuXbCW6oKAKMVSN
          claim_id: c_w1DWAKNAgRAvbmun9B3N1k
          source_id: s_dXioZUZOzg2ICQQyEEtmyT
          stance: supports
          locator: 导言
          quotation: 王曄（？—？），是中国新朝皇帝王莽的女儿。她的生母为王莽的妾增秩
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_dXioZUZOzg2ICQQyEEtmyT
            source_type: website
            title: 中文维基百科：王曄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%84
            external_identifier: Q16603521
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4Hqr5b3fL5znnUkVxeqXM
        subject_person_id: p_hu5ciWSUfy8JJUYPQoVfRH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1ivYw29YXEMX8JDR4XwR9y
          claim_id: c_P4Hqr5b3fL5znnUkVxeqXM
          source_id: s_AgtDvenVMdLWoCbznfDVjH
          stance: supports
          locator: Q16603521
          quotation: null
          interpretation_note: null
          source:
            id: s_AgtDvenVMdLWoCbznfDVjH
            source_type: api_record
            title: 維基數據：王曄（Q16603521）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603521
            external_identifier: Q16603521
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:46.239Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%84
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V7sv4sTXMe5WoXnASuQqX7
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hu5ciWSUfy8JJUYPQoVfRH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_j6SBNGrH2enraH4g5Ry2J4
          claim_id: c_V7sv4sTXMe5WoXnASuQqX7
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_eQyyARmfybPqCEAYQyLHd7
          claim_id: c_V7sv4sTXMe5WoXnASuQqX7
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_y5nsX5tA43RLimG4hwhNNM
          claim_id: c_V7sv4sTXMe5WoXnASuQqX7
          source_id: s_AgtDvenVMdLWoCbznfDVjH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AgtDvenVMdLWoCbznfDVjH
            source_type: api_record
            title: 維基數據：王曄（Q16603521）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603521
            external_identifier: Q16603521
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:46.239Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%84
        - id: cs_zxT6DDmyBSnHfXcYzkCtzT
          claim_id: c_V7sv4sTXMe5WoXnASuQqX7
          source_id: s_QYwPh6HSapaVZHgQTTKyDd
          stance: supports
          locator: 条文：之子/之女
          quotation: 王曄（{{bd|？||？|}}），是中国新朝皇帝王莽的女儿
          interpretation_note: null
          source:
            id: s_QYwPh6HSapaVZHgQTTKyDd
            source_type: website
            title: 中文维基百科：王曄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:28.072Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曄（？—？），是中国新朝皇帝王莽的女儿。她的生母为王莽的妾增秩。王莽的妾室增秩、怀能、开明，和增秩的儿子王匡、女儿王晔，怀能的儿子王兴，开明的女儿王捷，都留在了新都国。地皇二年（21年），孝睦皇后和三子王安先后去世，王莽假托王安上表，请求这些弟弟妹妹到京城常安受封。 | accepted |
| name.primary | 王曄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [維基數據：王曄（Q16603521）](https://www.wikidata.org/wiki/Q16603521)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
- [中文维基百科：王曄](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%84)
