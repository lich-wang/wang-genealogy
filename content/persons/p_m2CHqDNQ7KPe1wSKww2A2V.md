---
schema: wang-person/v1
id: p_m2CHqDNQ7KPe1wSKww2A2V
status: active
merged_into: null
display_name: 王守泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMR8BYGB45L7avwJ1PYq8R
        subject_person_id: p_m2CHqDNQ7KPe1wSKww2A2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_51PjXmxrM24ZvRKicyhN8c
          claim_id: c_NMR8BYGB45L7avwJ1PYq8R
          source_id: s_AP57ApPUdj79qiXXLpvBrR
          stance: supports
          locator: CBDB:526905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526905）
          source: &a1
            id: s_AP57ApPUdj79qiXXLpvBrR
            source_type: api_record
            title: 中国历代人物传记资料库：王守泰（CBDB 526905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526905&o=json
            external_identifier: CBDB:526905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5PidRmzZRktxfHh2dDWDU
        subject_person_id: p_m2CHqDNQ7KPe1wSKww2A2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守泰，史料所见人物。本项目依据《中国历代人物传记资料库：王守泰（CBDB 526905）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aW6Qa2qClKtRkR6sDhu7mE
          claim_id: c_M5PidRmzZRktxfHh2dDWDU
          source_id: s_AP57ApPUdj79qiXXLpvBrR
          stance: supports
          locator: CBDB:526905
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
  ancestors:
    - claim:
        id: c_EoGkk4yKPFBA4rnjIxjti1
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m2CHqDNQ7KPe1wSKww2A2V
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_euVvGkW0iAELmWZTs13Qfz
          claim_id: c_EoGkk4yKPFBA4rnjIxjti1
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守泰 | accepted |
| bio.summary | 王守泰，史料所见人物。本项目依据《中国历代人物传记资料库：王守泰（CBDB 526905）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守泰（CBDB 526905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526905&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
