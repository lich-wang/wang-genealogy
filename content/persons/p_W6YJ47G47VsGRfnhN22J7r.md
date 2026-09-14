---
schema: wang-person/v1
id: p_W6YJ47G47VsGRfnhN22J7r
status: active
merged_into: null
display_name: 王橋
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UOH9jXAbWZdOpDaWHL8Tuo
        subject_person_id: p_W6YJ47G47VsGRfnhN22J7r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋，字法生，北魏太原晉陽人，善解天文卜筮，涼州平後入京，官終侍御中散。為王叡之父（《魏書·卷九十三·王叡傳》：父橋，字法生，解天文卜筮）。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Z2fbjPRudVX9bBT3Nqs3D
          claim_id: c_UOH9jXAbWZdOpDaWHL8Tuo
          source_id: s_8UztPHDaA6rMGW7Ru0HX8x
          stance: supports
          locator: 魏書/卷93·王橋
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_8UztPHDaA6rMGW7Ru0HX8x
            source_type: website
            title: 维基文库：魏書/卷93·王橋
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/魏書/卷93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJH5SHBerHFhaxDWxWZiqw
        subject_person_id: p_W6YJ47G47VsGRfnhN22J7r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sqGBeg18JDL8w4DJMeGPx6
          claim_id: c_zJH5SHBerHFhaxDWxWZiqw
          source_id: s_6MwB28jFPqGjpKm46DBiBV
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_6MwB28jFPqGjpKm46DBiBV
            source_type: book
            title: 中文维基文库：魏書/卷93
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8%2F%E5%8D%B793
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BEibE3vz53XeyJ1JBKL51H
        subject_person_id: p_W6YJ47G47VsGRfnhN22J7r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HrMwh5Yd87pb8qM6kLTXmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Lfv8odk85qHeKugPCK8HFV
          claim_id: c_BEibE3vz53XeyJ1JBKL51H
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 橋，字法生，侍御史、贈武威定王。生叡，封中山王
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
        - id: cs_MuMjgADhnpYseNn7kDP7ZL
          claim_id: c_BEibE3vz53XeyJ1JBKL51H
          source_id: s_6MwB28jFPqGjpKm46DBiBV
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父橋，字法生，解天文卜筮。涼州平，入京，家貧，以術自給。歷仕終於侍御中散。
          interpretation_note: null
          source:
            id: s_6MwB28jFPqGjpKm46DBiBV
            source_type: book
            title: 中文维基文库：魏書/卷93
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8%2F%E5%8D%B793
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
        - id: cs_o1dVUjyr5oWV3FDNZTK1hr
          claim_id: c_BEibE3vz53XeyJ1JBKL51H
          source_id: s_ESGASAMhBUE5wZNjVoTs8S
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父橋，字法生
          interpretation_note: null
          source:
            id: s_ESGASAMhBUE5wZNjVoTs8S
            source_type: book
            title: 中文维基文库：魏書/卷93
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8%2F%E5%8D%B793
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:04.994Z
            metadata_json: null
      object_person:
        id: p_HrMwh5Yd87pb8qM6kLTXmL
        status: active
        display_name: 王叡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q6P9uNGqCjT8VJCNeg7AAH
        subject_person_id: p_TMbspU2CRRspGVCtfDPakV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W6YJ47G47VsGRfnhN22J7r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m75GbzaV6NT2EKfqsLuKxS
          claim_id: c_Q6P9uNGqCjT8VJCNeg7AAH
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（五世孫）（5世）
          quotation: 涼州參軍王軌子孫因居武威姑臧。五世孫橋
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
        id: p_TMbspU2CRRspGVCtfDPakV
        status: active
        display_name: 王軌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王橋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王橋，字法生，北魏太原晉陽人，善解天文卜筮，涼州平後入京，官終侍御中散。為王叡之父（《魏書·卷九十三·王叡傳》：父橋，字法生，解天文卜筮）。 | accepted |
| name.primary | 王橋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HrMwh5Yd87pb8qM6kLTXmL | 王叡 | accepted |
| ancestors | p_TMbspU2CRRspGVCtfDPakV | 王軌 | accepted |

## 外部来源

- [维基文库：魏書/卷93·王橋](https://zh.wikisource.org/wiki/魏書/卷93)
- [中文维基文库：魏書/卷93](https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8%2F%E5%8D%B793)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
