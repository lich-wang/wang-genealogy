---
schema: wang-person/v1
id: p_qB9xcQWbVThZycD7zo1hiz
status: active
merged_into: null
display_name: 王三錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KzcdhHzPdm5yMaEwEmGrRb
        subject_person_id: p_qB9xcQWbVThZycD7zo1hiz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VHtgF1dpaqRBA1KzYCuQ2H
          claim_id: c_KzcdhHzPdm5yMaEwEmGrRb
          source_id: s_LV6DuCZGc7fTjzboPGe61A
          stance: supports
          locator: CBDB:688581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688581）
          source: &a1
            id: s_LV6DuCZGc7fTjzboPGe61A
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 688581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688581&o=json
            external_identifier: CBDB:688581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L63xgTU3iWFArUnr6kS9Jm
        subject_person_id: p_qB9xcQWbVThZycD7zo1hiz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，宋人物。籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 688581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9oQuN2RyDqOU5Z389uoTD4
          claim_id: c_L63xgTU3iWFArUnr6kS9Jm
          source_id: s_LV6DuCZGc7fTjzboPGe61A
          stance: supports
          locator: CBDB:688581
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

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，宋人物。籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 688581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 688581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688581&o=json)
