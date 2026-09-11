---
schema: wang-person/v1
id: p_H3UvjGJ8a743XYTRkg3vEK
status: active
merged_into: null
display_name: 文氏
revision: 1
cbdb_id: 123147
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tuwa045YJug9n015v-rcHz
        subject_person_id: p_H3UvjGJ8a743XYTRkg3vEK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 文氏，史料所见人物。本项目依据《中国历代人物传记资料库：文氏(王子美妻)（CBDB 123147）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a0SqzqkUJh0WoKEHHDrjNs
          claim_id: c_Tuwa045YJug9n015v-rcHz
          source_id: s_gq6b8Fdtrw1fP686i5EpVi
          stance: supports
          locator: CBDB:123147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gq6b8Fdtrw1fP686i5EpVi
            source_type: api_record
            title: 中国历代人物传记资料库：文氏(王子美妻)（CBDB 123147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123147&o=json
            external_identifier: CBDB:123147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rvnzFXvM21U72NKIGI0Bmu
        subject_person_id: p_H3UvjGJ8a743XYTRkg3vEK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 文氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mri7KCSkA5Vt3IrKUecreg
          claim_id: c_rvnzFXvM21U72NKIGI0Bmu
          source_id: s_gq6b8Fdtrw1fP686i5EpVi
          stance: supports
          locator: CBDB:123147
          quotation: null
          interpretation_note: CBDB 明确记录的王子美配偶
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
        id: c_EAumQM_Y2kc56t0GdcxtwU
        subject_person_id: p_B3DCasoKhTkTKRRxYe4M21
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H3UvjGJ8a743XYTRkg3vEK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0iK99jdocQLVdZDIeSd8O
          claim_id: c_EAumQM_Y2kc56t0GdcxtwU
          source_id: s_gq6b8Fdtrw1fP686i5EpVi
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5081：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B3DCasoKhTkTKRRxYe4M21
        status: active
        display_name: 王子美
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 文氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 文氏，史料所见人物。本项目依据《中国历代人物传记资料库：文氏(王子美妻)（CBDB 123147）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 文氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_B3DCasoKhTkTKRRxYe4M21 | 王子美 | accepted |

## 外部来源

- [中国历代人物传记资料库：文氏(王子美妻)（CBDB 123147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123147&o=json)
