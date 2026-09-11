---
schema: wang-person/v1
id: p_8uFBJdGZJAnDxZ2d5K6sEw
status: active
merged_into: null
display_name: 薛煕
revision: 1
cbdb_id: 55349
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iJpgHN6wpVpSqjTu4B9WJ3
        subject_person_id: p_8uFBJdGZJAnDxZ2d5K6sEw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛煕，史料所见人物。本项目依据《中国历代人物传记资料库：薛煕（CBDB 55349）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HlA3ddY9oUUD-tuKOa-Hds
          claim_id: c_iJpgHN6wpVpSqjTu4B9WJ3
          source_id: s_AFW-RxYAsB2P6tDh1-NE3a
          stance: supports
          locator: CBDB:55349
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AFW-RxYAsB2P6tDh1-NE3a
            source_type: api_record
            title: 中国历代人物传记资料库：薛煕（CBDB 55349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55349&o=json
            external_identifier: CBDB:55349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PG66xeuFpU-JzEwK8Fn_BI
        subject_person_id: p_8uFBJdGZJAnDxZ2d5K6sEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛煕
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dFytiUYTjW3ew1EFu7UOpC
          claim_id: c_PG66xeuFpU-JzEwK8Fn_BI
          source_id: s_AFW-RxYAsB2P6tDh1-NE3a
          stance: supports
          locator: CBDB:55349
          quotation: null
          interpretation_note: CBDB 明确记录的王蓀配偶
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
        id: c_tbDgmkousXslj_Lta9KbTj
        subject_person_id: p_c5jb3C1rxwPwZdJmxGJ2Pj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8uFBJdGZJAnDxZ2d5K6sEw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Pew7vIbYTY39MNSUL3KjY
          claim_id: c_tbDgmkousXslj_Lta9KbTj
          source_id: s_AFW-RxYAsB2P6tDh1-NE3a
          stance: supports
          locator: CBDB 双向互证（丈夫 薛煕）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c5jb3C1rxwPwZdJmxGJ2Pj
        status: active
        display_name: 王蓀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 薛煕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 薛煕，史料所见人物。本项目依据《中国历代人物传记资料库：薛煕（CBDB 55349）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 薛煕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_c5jb3C1rxwPwZdJmxGJ2Pj | 王蓀 | accepted |

## 外部来源

- [中国历代人物传记资料库：薛煕（CBDB 55349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55349&o=json)
