---
schema: wang-person/v1
id: p_hH347VTdzpHFec1Sm33N8h
status: active
merged_into: null
display_name: 王挺
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1GHYNgc8PRe72XZ8hk2dgA
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CFR4N7WDCBGQaU6bMzm9A3
          claim_id: c_1GHYNgc8PRe72XZ8hk2dgA
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: CBDB:142769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142769）
          source: &a1
            id: s_x2WSNyfoKvEb7sG24AQ3U1
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 142769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142769&o=json
            external_identifier: CBDB:142769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_s8ShYCmC8PUtHnb2LXwoj8
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 609年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RTDzmrD9jam4s6R1KKxLEK
          claim_id: c_s8ShYCmC8PUtHnb2LXwoj8
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
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
        id: c_5nsDLweG54NwXq75nQJYby
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9g5FBfByrj6AMXJPF6sLsS
          claim_id: c_5nsDLweG54NwXq75nQJYby
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
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
        id: c_eBE9S5EomrqeJn8ki81uu1
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺（609年—661年），史料所见人物。本项目依据《中国历代人物传记资料库：王挺（CBDB 142769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T0Vy5D97EvoUW06OEod_Hg
          claim_id: c_eBE9S5EomrqeJn8ki81uu1
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: CBDB:142769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_deEVGPSq68jBydjU_n6z9l
        subject_person_id: p_LPTRCqyRqSnG4YGTZge7S6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hH347VTdzpHFec1Sm33N8h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nl5eYGiopxNHNivzBPbaB1
          claim_id: c_deEVGPSq68jBydjU_n6z9l
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPTRCqyRqSnG4YGTZge7S6
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children:
    - claim:
        id: c_L1X5jRCYJK2WW9j0abSQjo
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBs6gUFyJq8nY5DW5BWcpr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X8bG580w64BHxMiUFLzgnO
          claim_id: c_L1X5jRCYJK2WW9j0abSQjo
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oBs6gUFyJq8nY5DW5BWcpr
        status: active
        display_name: 王永福
        merged_into_person_id: null
    - claim:
        id: c_I_E89OiBf8qyoh3EiZVjDy
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kvxvNJ2ft593wMb5zkakEW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GPoZ1DPqimDHv5GOsdbX8v
          claim_id: c_I_E89OiBf8qyoh3EiZVjDy
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kvxvNJ2ft593wMb5zkakEW
        status: active
        display_name: 王玄嗣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KN0WVNPe8NKXWP4oQx96I_
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GnGzUmF1jWUFJy3DdsXtPj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKkftbu7D61JBD4BOKjNJh
          claim_id: c_KN0WVNPe8NKXWP4oQx96I_
          source_id: s_wkjc0X2tJP9RMpZyeAq7sU
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wkjc0X2tJP9RMpZyeAq7sU
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王挺妻)（CBDB 163048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163048&o=json
            external_identifier: CBDB:163048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GnGzUmF1jWUFJy3DdsXtPj
        status: active
        display_name: 高氏
        merged_into_person_id: null
    - claim:
        id: c_IWyrTrM699pxlW95SRD2v7
        subject_person_id: p_hH347VTdzpHFec1Sm33N8h
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_T6HbgXpyz7xUuAafget79m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YxulRFJsZE60ErXl-aiOUY
          claim_id: c_IWyrTrM699pxlW95SRD2v7
          source_id: s_k14HYzsnt7fMe61xEF3-o2
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k14HYzsnt7fMe61xEF3-o2
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王挺妻)（CBDB 163050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163050&o=json
            external_identifier: CBDB:163050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_T6HbgXpyz7xUuAafget79m
        status: active
        display_name: 宋氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王挺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王挺 | accepted |
| birth.date | 609年 | accepted |
| death.date | 661年 | accepted |
| bio.summary | 王挺（609年—661年），史料所见人物。本项目依据《中国历代人物传记资料库：王挺（CBDB 142769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LPTRCqyRqSnG4YGTZge7S6 | 王秀 | accepted |
| children | p_oBs6gUFyJq8nY5DW5BWcpr | 王永福 | accepted |
| children | p_kvxvNJ2ft593wMb5zkakEW | 王玄嗣 | accepted |
| spouses | p_GnGzUmF1jWUFJy3DdsXtPj | 高氏 | accepted |
| spouses | p_T6HbgXpyz7xUuAafget79m | 宋氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王挺妻)（CBDB 163048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163048&o=json)
- [中国历代人物传记资料库：宋氏(王挺妻)（CBDB 163050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163050&o=json)
- [中国历代人物传记资料库：王挺（CBDB 142769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142769&o=json)
