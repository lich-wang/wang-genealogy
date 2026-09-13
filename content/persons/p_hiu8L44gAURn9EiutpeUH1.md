---
schema: wang-person/v1
id: p_hiu8L44gAURn9EiutpeUH1
status: active
merged_into: null
display_name: 王聯璧
cbdb_id: 72041
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YqtNyjMeLLsEnu6WJe3GXi
        subject_person_id: p_hiu8L44gAURn9EiutpeUH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯璧（生于1848年），史料所见人物。本项目依据《中国历代人物传记资料库：王聯璧（CBDB 72041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zEUePQOYh1Yc_UvYaLK-fo
          claim_id: c_YqtNyjMeLLsEnu6WJe3GXi
          source_id: s_b1XTx5iZdRKx6pZVEA24x3
          stance: supports
          locator: CBDB:72041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_b1XTx5iZdRKx6pZVEA24x3
            source_type: api_record
            title: 中国历代人物传记资料库：王聯璧（CBDB 72041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72041&o=json
            external_identifier: CBDB:72041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vr5ZNoUvGW8kKjnQSMNEcj
        subject_person_id: p_hiu8L44gAURn9EiutpeUH1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1848-01-01
            latest: 1848-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vBFwt6JyEcwR3CyRjP4WYR
          claim_id: c_Vr5ZNoUvGW8kKjnQSMNEcj
          source_id: s_b1XTx5iZdRKx6pZVEA24x3
          stance: supports
          locator: CBDB:72041
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1848
          source:
            id: s_b1XTx5iZdRKx6pZVEA24x3
            source_type: api_record
            title: 中国历代人物传记资料库：王聯璧（CBDB 72041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72041&o=json
            external_identifier: CBDB:72041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3yq3Wj9ov2huuj2XeqF7zG
        subject_person_id: p_hiu8L44gAURn9EiutpeUH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Fes2wHLNjVBPwukb6jc7QF
          claim_id: c_3yq3Wj9ov2huuj2XeqF7zG
          source_id: s_b1XTx5iZdRKx6pZVEA24x3
          stance: supports
          locator: CBDB:72041
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1848
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

# 王聯璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聯璧（生于1848年），史料所见人物。本项目依据《中国历代人物传记资料库：王聯璧（CBDB 72041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1848年 | accepted |
| name.primary | 王聯璧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聯璧（CBDB 72041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72041&o=json)
