---
schema: wang-person/v1
id: p_ejuMKzxJLn842AdCqaWKEa
status: active
merged_into: null
display_name: 王廷貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s6LHnPCTAqfnpCnbWDjTHM
        subject_person_id: p_ejuMKzxJLn842AdCqaWKEa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtfeJQeaAbD1zd8J6RHFA5
          claim_id: c_s6LHnPCTAqfnpCnbWDjTHM
          source_id: s_ooN5oDzqAUU2RY3YU9E2AE
          stance: supports
          locator: CBDB:637564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637564）
          source: &a1
            id: s_ooN5oDzqAUU2RY3YU9E2AE
            source_type: api_record
            title: 中国历代人物传记资料库：王廷貴（CBDB 637564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637564&o=json
            external_identifier: CBDB:637564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vdfJpQh3jqsYPAWB8VhQGt
        subject_person_id: p_ejuMKzxJLn842AdCqaWKEa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷貴，清人物。籍贯山西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cuAAa1n8D-CBZBrqMqW1R9
          claim_id: c_vdfJpQh3jqsYPAWB8VhQGt
          source_id: s_ooN5oDzqAUU2RY3YU9E2AE
          stance: supports
          locator: CBDB:637564
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王廷貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷貴 | accepted |
| bio.summary | 王廷貴，清人物。籍贯山西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷貴（CBDB 637564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637564&o=json)
