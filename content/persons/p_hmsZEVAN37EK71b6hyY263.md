---
schema: wang-person/v1
id: p_hmsZEVAN37EK71b6hyY263
status: active
merged_into: null
display_name: 王慶霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vv4VmqYAEswNA3G4M4x7ee
        subject_person_id: p_hmsZEVAN37EK71b6hyY263
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6avkdFyd5g6679D22MV6yX
          claim_id: c_Vv4VmqYAEswNA3G4M4x7ee
          source_id: s_ddbHxB9h4od4f6oTuv6DVt
          stance: supports
          locator: CBDB:121160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121160）
          source: &a1
            id: s_ddbHxB9h4od4f6oTuv6DVt
            source_type: api_record
            title: 中国历代人物传记资料库：王慶霖（CBDB 121160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121160&o=json
            external_identifier: CBDB:121160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A812wReuyN6cRR8X85e5Ei
        subject_person_id: p_hmsZEVAN37EK71b6hyY263
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶霖，史料所见人物。本项目依据《中国历代人物传记资料库：王慶霖（CBDB 121160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L_JeEYSdgOaB_Jm0XiQ9aa
          claim_id: c_A812wReuyN6cRR8X85e5Ei
          source_id: s_ddbHxB9h4od4f6oTuv6DVt
          stance: supports
          locator: CBDB:121160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶霖 | accepted |
| bio.summary | 王慶霖，史料所见人物。本项目依据《中国历代人物传记资料库：王慶霖（CBDB 121160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶霖（CBDB 121160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121160&o=json)
