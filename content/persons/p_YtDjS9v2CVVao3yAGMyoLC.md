---
schema: wang-person/v1
id: p_YtDjS9v2CVVao3yAGMyoLC
status: active
merged_into: null
display_name: 王衰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xx8H4wFALLZBhvkNjUdfBT
        subject_person_id: p_YtDjS9v2CVVao3yAGMyoLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ioq1i1GFaXqdA6XxyMRP9c
          claim_id: c_xx8H4wFALLZBhvkNjUdfBT
          source_id: s_FfPLkjrV5A8Be3gwet9hvf
          stance: supports
          locator: CBDB:532813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532813）
          source: &a1
            id: s_FfPLkjrV5A8Be3gwet9hvf
            source_type: api_record
            title: 中国历代人物传记资料库：王衰（CBDB 532813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532813&o=json
            external_identifier: CBDB:532813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9AZ5G7BpAyBE8C6VotLVfW
        subject_person_id: p_YtDjS9v2CVVao3yAGMyoLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衰，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 532813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dcIpEVtiQvo6tF9GV9YnY_
          claim_id: c_9AZ5G7BpAyBE8C6VotLVfW
          source_id: s_FfPLkjrV5A8Be3gwet9hvf
          stance: supports
          locator: CBDB:532813
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

# 王衰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衰 | accepted |
| bio.summary | 王衰，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 532813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衰（CBDB 532813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532813&o=json)
