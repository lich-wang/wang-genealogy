---
schema: wang-person/v1
id: p_SV36PD7ei2iRE7XKeRtdD7
status: active
merged_into: null
display_name: 王洄
cbdb_id: 190804
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ktm9DxvjWqp9Mud6LYaPey
        subject_person_id: p_SV36PD7ei2iRE7XKeRtdD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洄（卒于858年），史料所见人物。本项目依据《中国历代人物传记资料库：王洄（CBDB 190804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_acZwmadVc1seDyV8g3l_HS
          claim_id: c_Ktm9DxvjWqp9Mud6LYaPey
          source_id: s_TY8zY83SzdHrpvrqws41B8
          stance: supports
          locator: CBDB:190804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TY8zY83SzdHrpvrqws41B8
            source_type: api_record
            title: 中国历代人物传记资料库：王洄（CBDB 190804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190804&o=json
            external_identifier: CBDB:190804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T6HYjRUuuuPZUXMvxfEfF6
        subject_person_id: p_SV36PD7ei2iRE7XKeRtdD7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0858-01-01
            latest: 0858-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FTdQC56wBpTuYCDKL1NVBR
          claim_id: c_T6HYjRUuuuPZUXMvxfEfF6
          source_id: s_TY8zY83SzdHrpvrqws41B8
          stance: supports
          locator: CBDB:190804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 858
          source:
            id: s_TY8zY83SzdHrpvrqws41B8
            source_type: api_record
            title: 中国历代人物传记资料库：王洄（CBDB 190804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190804&o=json
            external_identifier: CBDB:190804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qK9HxWd8mNP6bjYhG6Dhqn
        subject_person_id: p_SV36PD7ei2iRE7XKeRtdD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zJpwPpnDS7X1H9VvkuzzgD
          claim_id: c_qK9HxWd8mNP6bjYhG6Dhqn
          source_id: s_TY8zY83SzdHrpvrqws41B8
          stance: supports
          locator: CBDB:190804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 858
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_io4Q7qJheW0pnJOI2q6UUE
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SV36PD7ei2iRE7XKeRtdD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p21b7BZFxnSmGjvlhuQ6A-
          claim_id: c_io4Q7qJheW0pnJOI2q6UUE
          source_id: s_TY8zY83SzdHrpvrqws41B8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TY8zY83SzdHrpvrqws41B8
            source_type: api_record
            title: 中国历代人物传记资料库：王洄（CBDB 190804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190804&o=json
            external_identifier: CBDB:190804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洄（卒于858年），史料所见人物。本项目依据《中国历代人物传记资料库：王洄（CBDB 190804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 858年 | accepted |
| name.primary | 王洄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洄（CBDB 190804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190804&o=json)
