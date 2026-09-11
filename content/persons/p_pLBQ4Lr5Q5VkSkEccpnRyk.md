---
schema: wang-person/v1
id: p_pLBQ4Lr5Q5VkSkEccpnRyk
status: active
merged_into: null
display_name: 王叡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKwXbUJRNa6cwmV5u3xCR8
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ESzVEZAv71LvPm3gT6c4fz
          claim_id: c_gKwXbUJRNa6cwmV5u3xCR8
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: CBDB:142667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142667）
          source: &a1
            id: s_ntk53u5XLSBffeHe5eAWSP
            source_type: api_record
            title: 中国历代人物传记资料库：王叡（CBDB 142667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json
            external_identifier: CBDB:142667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_owDV1MaqbgfqC5okSAxsum
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nE358T4qBrFfKrk4yMKywp
          claim_id: c_owDV1MaqbgfqC5okSAxsum
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U41Y66DoACDo2xSjFkaQg7
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFSBijKCToUCF2trML7FTB
          claim_id: c_U41Y66DoACDo2xSjFkaQg7
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T6C6pW5ETzML5BPdSgshhQ
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叡（617年—678年），唐人物。籍贯伊闕。（中国历代人物传记资料库 CBDB 142667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xPDlwDRaMWOIf9M7I5ZVrL
          claim_id: c_T6C6pW5ETzML5BPdSgshhQ
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: CBDB:142667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xZvpOR3zM09ce3GpJYCYcB
        subject_person_id: p_SKrX6A3YZp1GxrUFanBwYL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zmruA2xHKLRt77V-PptVP-
          claim_id: c_xZvpOR3zM09ce3GpJYCYcB
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yifeng12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SKrX6A3YZp1GxrUFanBwYL
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children:
    - claim:
        id: c_FKqgkvnx4EiEQdj_AjieiU
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zJ1Pzko9B5NNeaFihXANes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4m6ewkyBuB2XtsBov24ZZT
          claim_id: c_FKqgkvnx4EiEQdj_AjieiU
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yifeng12：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zJ1Pzko9B5NNeaFihXANes
        status: active
        display_name: 王客僧
        merged_into_person_id: null
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
| name.primary | 王叡 | accepted |
| birth.date | 617年 | accepted |
| death.date | 678年 | accepted |
| bio.summary | 王叡（617年—678年），唐人物。籍贯伊闕。（中国历代人物传记资料库 CBDB 142667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SKrX6A3YZp1GxrUFanBwYL | 王憲 | accepted |
| children | p_zJ1Pzko9B5NNeaFihXANes | 王客僧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叡（CBDB 142667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json)
