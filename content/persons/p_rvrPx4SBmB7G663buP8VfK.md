---
schema: wang-person/v1
id: p_rvrPx4SBmB7G663buP8VfK
status: active
merged_into: null
display_name: 王瞻
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3bXlHj3ATb9maVQdvheC3b
        subject_person_id: p_rvrPx4SBmB7G663buP8VfK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞻：王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子。 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Idsd5SUPnPH-UfH9ako6db
          claim_id: c_3bXlHj3ATb9maVQdvheC3b
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 导言
          quotation: 王瞻：王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjSPz54Ddg1whcWmaA8GD9
        subject_person_id: p_rvrPx4SBmB7G663buP8VfK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞻
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JPNbr9nEGe4DNnerCAGDHK
          claim_id: c_FjSPz54Ddg1whcWmaA8GD9
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: Q11573182
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MhtNTMbHMNPiSZ7cu1d5dB
        subject_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rvrPx4SBmB7G663buP8VfK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XB7L26eGsBLyD9jgDZHJrR
          claim_id: c_MhtNTMbHMNPiSZ7cu1d5dB
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父親王猷曾擔任廷尉卿、侍中、光祿大夫
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
        - id: cs_owMeahFiuFRx9y5Vem2pL8
          claim_id: c_MhtNTMbHMNPiSZ7cu1d5dB
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 条文：子
          quotation: 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样
          interpretation_note: null
          source:
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_UKCPmXtCJMiV3Cvg9Yu32M
        status: active
        display_name: 王猷
        merged_into_person_id: null
  children:
    - claim:
        id: c_5rHMPtffVbtuRMNuu4drvo
        subject_person_id: p_rvrPx4SBmB7G663buP8VfK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MHt51a5yBPKUVmZ5LNogHt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nPL4oGxk1jRvYPaerA9e1P
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 兒子王長玄，任著作佐郎
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
        - id: cs_FZJrUo7N3nRHJM99ZaorG6
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王瞻 → 王长玄
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_iVQEvzDXD8qEwwwU7MEu9j
          claim_id: c_5rHMPtffVbtuRMNuu4drvo
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王瞻 → 王长玄
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_MHt51a5yBPKUVmZ5LNogHt
        status: active
        display_name: 王長玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_N5i66dL8bTpSgUJ32bjjoa
        subject_person_id: p_LSeHCrZ5JqS6zCkT9tqqP9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rvrPx4SBmB7G663buP8VfK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TqyjYvE9Z7bH5mD4RbtLrQ
          claim_id: c_N5i66dL8bTpSgUJ32bjjoa
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王柳是劉宋光祿大夫、東亭侯
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
      object_person:
        id: p_LSeHCrZ5JqS6zCkT9tqqP9
        status: active
        display_name: 王柳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瞻：王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子。 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样。 | accepted |
| name.primary | 王瞻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKCPmXtCJMiV3Cvg9Yu32M | 王猷 | accepted |
| children | p_MHt51a5yBPKUVmZ5LNogHt | 王長玄 | accepted |
| ancestors | p_LSeHCrZ5JqS6zCkT9tqqP9 | 王柳 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王猷 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B))
- [中文维基百科：王瞻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB)
