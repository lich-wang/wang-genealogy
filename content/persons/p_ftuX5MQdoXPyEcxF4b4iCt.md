---
schema: wang-person/v1
id: p_ftuX5MQdoXPyEcxF4b4iCt
status: active
merged_into: null
display_name: 馬氏
revision: 1
cbdb_id: 530908
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kzQxLTeT_SM9B3cqnkBQ29
        subject_person_id: p_ftuX5MQdoXPyEcxF4b4iCt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬氏，史料所见人物。本项目依据《中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WeDtO2BNnAgMhP-TNgoY1y
          claim_id: c_kzQxLTeT_SM9B3cqnkBQ29
          source_id: s_WcR-mvwzQE99kdqTddY_rK
          stance: supports
          locator: CBDB:530908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WcR-mvwzQE99kdqTddY_rK
            source_type: api_record
            title: 中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530908&o=json
            external_identifier: CBDB:530908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqHORshM9LpamB1UohWBZr
        subject_person_id: p_ftuX5MQdoXPyEcxF4b4iCt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFMAwWlHbFr8ReRbxE-ERF
          claim_id: c_aqHORshM9LpamB1UohWBZr
          source_id: s_WcR-mvwzQE99kdqTddY_rK
          stance: supports
          locator: CBDB:530908
          quotation: null
          interpretation_note: CBDB 明确记录的王錦配偶
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
        id: c_IZc2nXxLZQO-5O3BZD0z5K
        subject_person_id: p_KTF8TNqVhiVNBbLepsymBT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ftuX5MQdoXPyEcxF4b4iCt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tW2iLXOoMBdGwtbisMBuRu
          claim_id: c_IZc2nXxLZQO-5O3BZD0z5K
          source_id: s_WcR-mvwzQE99kdqTddY_rK
          stance: supports
          locator: 武功縣後志，lgid=1045879：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KTF8TNqVhiVNBbLepsymBT
        status: active
        display_name: 王錦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馬氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 馬氏，史料所见人物。本项目依据《中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 馬氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KTF8TNqVhiVNBbLepsymBT | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530908&o=json)
