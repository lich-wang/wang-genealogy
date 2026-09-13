---
schema: wang-person/v1
id: p_stsoJtBAHPqnvUWGLuiKgX
status: active
merged_into: null
display_name: 王晢
cbdb_id: 37956
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_27LXTaj7D1XQstu8uEh58o
        subject_person_id: p_stsoJtBAHPqnvUWGLuiKgX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晢，宋人物。籍贯太原府，曾任集賢院校理、兵部郎中、尚書省兵部兵部司郎中。（中国历代人物传记资料库 CBDB 37956）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G-gQNFai6f0WrpwMYFJkPg
          claim_id: c_27LXTaj7D1XQstu8uEh58o
          source_id: s_ktKo2mtXC3kQnqNFFATcK4
          stance: supports
          locator: CBDB:37956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ktKo2mtXC3kQnqNFFATcK4
            source_type: api_record
            title: 中国历代人物传记资料库：王晢（CBDB 37956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37956&o=json
            external_identifier: CBDB:37956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDrme1tjX9D3upR64T3jLr
        subject_person_id: p_stsoJtBAHPqnvUWGLuiKgX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LJEGkcZ75KsPw3HU8V87Wr
          claim_id: c_iDrme1tjX9D3upR64T3jLr
          source_id: s_ktKo2mtXC3kQnqNFFATcK4
          stance: supports
          locator: CBDB:37956
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王晢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晢，宋人物。籍贯太原府，曾任集賢院校理、兵部郎中、尚書省兵部兵部司郎中。（中国历代人物传记资料库 CBDB 37956） | accepted |
| name.primary | 王晢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晢（CBDB 37956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37956&o=json)
