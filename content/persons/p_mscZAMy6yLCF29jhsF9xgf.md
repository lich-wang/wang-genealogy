---
schema: wang-person/v1
id: p_mscZAMy6yLCF29jhsF9xgf
status: active
merged_into: null
display_name: 雍氏
revision: 1
cbdb_id: 150998
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tItjvVapgsn_dxUWXtbvd4
        subject_person_id: p_mscZAMy6yLCF29jhsF9xgf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 雍氏，史料所见人物。本项目依据《中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GoFouxtPcsGScSZP1OlWCR
          claim_id: c_tItjvVapgsn_dxUWXtbvd4
          source_id: s_H-MkJ1dZ-B-P_tWUsm7I6t
          stance: supports
          locator: CBDB:150998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_H-MkJ1dZ-B-P_tWUsm7I6t
            source_type: api_record
            title: 中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150998&o=json
            external_identifier: CBDB:150998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nikhUPmIdSh_GbsHEfGwlK
        subject_person_id: p_mscZAMy6yLCF29jhsF9xgf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 雍氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbcj0TeUovrcerDjc3Wmv3
          claim_id: c_nikhUPmIdSh_GbsHEfGwlK
          source_id: s_H-MkJ1dZ-B-P_tWUsm7I6t
          stance: supports
          locator: CBDB:150998
          quotation: null
          interpretation_note: CBDB 明确记录的王天配偶
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
        id: c_oQUQeFwQaLHCltSx7iGpwc
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mscZAMy6yLCF29jhsF9xgf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xz1ehuinT1hTlgWZTadMcy
          claim_id: c_oQUQeFwQaLHCltSx7iGpwc
          source_id: s_H-MkJ1dZ-B-P_tWUsm7I6t
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2pUFp58kQxZiv37UYSDcqB
        status: active
        display_name: 王天
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 雍氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 雍氏，史料所见人物。本项目依据《中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 雍氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2pUFp58kQxZiv37UYSDcqB | 王天 | accepted |

## 外部来源

- [中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150998&o=json)
