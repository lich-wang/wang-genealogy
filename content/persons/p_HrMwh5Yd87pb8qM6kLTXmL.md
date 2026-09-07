---
schema: wang-person/v1
id: p_HrMwh5Yd87pb8qM6kLTXmL
status: active
merged_into: null
display_name: 王叡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J0GilNfKPSnjb0TBVxI2y4
        subject_person_id: p_HrMwh5Yd87pb8qM6kLTXmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叡，史料所见人物。本项目依据《中文维基文库：魏書/卷93》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cjWu1zT3pF4MB_mEzjoZZn
          claim_id: c_J0GilNfKPSnjb0TBVxI2y4
          source_id: s_6MwB28jFPqGjpKm46DBiBV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6wGKYXHyEEU6yBkHkBx97
        subject_person_id: p_HrMwh5Yd87pb8qM6kLTXmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叡
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ef8k2KvCWp5X1MaQnvBc9C
          claim_id: c_J6wGKYXHyEEU6yBkHkBx97
          source_id: s_6MwB28jFPqGjpKm46DBiBV
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父橋，字法生，解天文卜筮。涼州平，入京，家貧，以術自給。歷仕終於侍御中散。
          interpretation_note: 库内原有的「王叡」记录身份来自维基数据 Q8012902，即东汉王仁之子、荆州刺史王叡。北魏中山王王叡（字洛诚，父王橋字法生）是另一人：《魏書》卷九十三「父橋，字法生，解天文卜筮」，《新唐書·宰相世系表》「橋，字法生，侍御史、贈武威定王。生叡，封中山王」。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_W6YJ47G47VsGRfnhN22J7r
        status: active
        display_name: 王橋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叡，史料所见人物。本项目依据《中文维基文库：魏書/卷93》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王叡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W6YJ47G47VsGRfnhN22J7r | 王橋 | accepted |

## 外部来源

- [中文维基文库：魏書/卷93](https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8%2F%E5%8D%B793)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
