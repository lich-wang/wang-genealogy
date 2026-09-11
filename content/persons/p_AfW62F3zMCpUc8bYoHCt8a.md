---
schema: wang-person/v1
id: p_AfW62F3zMCpUc8bYoHCt8a
status: active
merged_into: null
display_name: 王仁行
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YX6Taoh7KyeQHVQss6aB6J
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hrt3tm8RYmuqYDBehNbzaR
          claim_id: c_YX6Taoh7KyeQHVQss6aB6J
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
          stance: supports
          locator: CBDB:142968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142968）
          source: &a1
            id: s_Q6AK9A4LpZZRFBraMQXXtb
            source_type: api_record
            title: 中国历代人物传记资料库：王仁行（CBDB 142968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json
            external_identifier: CBDB:142968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kZ9Uk5Tppu6aKE7sGecGTG
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqCqzQmu51MkazrxEQe4fC
          claim_id: c_kZ9Uk5Tppu6aKE7sGecGTG
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
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
        id: c_7vveVTLZduyDJavfyVUGEM
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 729年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCPMtt8kGA3FFNqQkxWMTQ
          claim_id: c_7vveVTLZduyDJavfyVUGEM
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
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
        id: c_Hdr7C9mA8dEDQi71sSzaV1
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁行（647年—729年），史料所见人物。本项目依据《中国历代人物传记资料库：王仁行（CBDB 142968）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t3LI-TaFWhLSCcdFHT6PHq
          claim_id: c_Hdr7C9mA8dEDQi71sSzaV1
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
          stance: supports
          locator: CBDB:142968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FN3lehsdhmpJCT8Ew-FXW2
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_78FBZC7wysqkRaewADsWxy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnfqrocajNvVf4WvSdZJBi
          claim_id: c_FN3lehsdhmpJCT8Ew-FXW2
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao23：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_78FBZC7wysqkRaewADsWxy
        status: active
        display_name: 王梵相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EsxTsgB3uqQt4jSM_ubnLd
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zHBj6bNChaj1aQDSEWPL3J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gqAt4DjkggOUy2SWLkNeVx
          claim_id: c_EsxTsgB3uqQt4jSM_ubnLd
          source_id: s_lUgyo81JKdLbKdVv5dGWnn
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao23：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lUgyo81JKdLbKdVv5dGWnn
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王仁行妻)（CBDB 164569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164569&o=json
            external_identifier: CBDB:164569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zHBj6bNChaj1aQDSEWPL3J
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仁行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁行 | accepted |
| birth.date | 647年 | accepted |
| death.date | 729年 | accepted |
| bio.summary | 王仁行（647年—729年），史料所见人物。本项目依据《中国历代人物传记资料库：王仁行（CBDB 142968）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_78FBZC7wysqkRaewADsWxy | 王梵相 | accepted |
| spouses | p_zHBj6bNChaj1aQDSEWPL3J | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王仁行妻)（CBDB 164569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164569&o=json)
- [中国历代人物传记资料库：王仁行（CBDB 142968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json)
