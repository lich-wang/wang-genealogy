---
schema: wang-person/v1
id: p_b6us2Pa8Vc64FEi5UvkZtX
status: active
merged_into: null
display_name: 王遵式
cbdb_id: 119717
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JaaT7KjCoxDLh3PvXkDL9g
        subject_person_id: p_b6us2Pa8Vc64FEi5UvkZtX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵式，史料所见人物。本项目依据《中国历代人物传记资料库：王遵式（CBDB 119717）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_OMceCL4WQ58f6me_E3FKsp
          claim_id: c_JaaT7KjCoxDLh3PvXkDL9g
          source_id: s_feHAnoBBybdUhJzdeWSzZz
          stance: supports
          locator: CBDB:119717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_feHAnoBBybdUhJzdeWSzZz
            source_type: api_record
            title: 中国历代人物传记资料库：王遵式（CBDB 119717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119717&o=json
            external_identifier: CBDB:119717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbsHGbMUmMy2LkR6VZDDiW
        subject_person_id: p_b6us2Pa8Vc64FEi5UvkZtX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iPYYhHBu793WNT9g8zpr9a
          claim_id: c_cbsHGbMUmMy2LkR6VZDDiW
          source_id: s_feHAnoBBybdUhJzdeWSzZz
          stance: supports
          locator: CBDB:119717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OdzPN7RQZ1lk34y5QmHpwS
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6us2Pa8Vc64FEi5UvkZtX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_798hnyDGgdd66-y8Bbyl6C
          claim_id: c_OdzPN7RQZ1lk34y5QmHpwS
          source_id: s_feHAnoBBybdUhJzdeWSzZz
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_feHAnoBBybdUhJzdeWSzZz
            source_type: api_record
            title: 中国历代人物传记资料库：王遵式（CBDB 119717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119717&o=json
            external_identifier: CBDB:119717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vwcVcqrGAsMahMr49PPDye
        status: active
        display_name: 王繼英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵式，史料所见人物。本项目依据《中国历代人物传记资料库：王遵式（CBDB 119717）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王遵式 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vwcVcqrGAsMahMr49PPDye | 王繼英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵式（CBDB 119717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119717&o=json)
