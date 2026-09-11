---
schema: wang-person/v1
id: p_2KVDRP63HeadS2GNiMepCB
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 135067
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PfgCEDV1JpWR3AnxtdTtHB
        subject_person_id: p_2KVDRP63HeadS2GNiMepCB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ic0MiLxp_NKRULAduA9yPA
          claim_id: c_PfgCEDV1JpWR3AnxtdTtHB
          source_id: s_mtvx9pDwp4uB5vWze2QuHM
          stance: supports
          locator: CBDB:135067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mtvx9pDwp4uB5vWze2QuHM
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135067&o=json
            external_identifier: CBDB:135067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ym6xqoSELt_ReCHUhWTOlB
        subject_person_id: p_2KVDRP63HeadS2GNiMepCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IyLSpuO9ZN4vtP49k4qLIG
          claim_id: c_Ym6xqoSELt_ReCHUhWTOlB
          source_id: s_mtvx9pDwp4uB5vWze2QuHM
          stance: supports
          locator: CBDB:135067
          quotation: null
          interpretation_note: CBDB 明确记录的王人鑑配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uV9jVcyXjVOIvejHupP8-E
        subject_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2KVDRP63HeadS2GNiMepCB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iRdL4zW5N9WmMSXNwoM3N
          claim_id: c_uV9jVcyXjVOIvejHupP8-E
          source_id: s_mtvx9pDwp4uB5vWze2QuHM
          stance: supports
          locator: 紹興十八年同年小錄，130：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jw3jaJXLqE5qhrMN7CYpap
        status: active
        display_name: 王人鑑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Jw3jaJXLqE5qhrMN7CYpap | 王人鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135067&o=json)
