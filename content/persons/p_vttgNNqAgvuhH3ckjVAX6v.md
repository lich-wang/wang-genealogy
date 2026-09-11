---
schema: wang-person/v1
id: p_vttgNNqAgvuhH3ckjVAX6v
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hvPD8hDvv5pAZ6uPafVZah
        subject_person_id: p_vttgNNqAgvuhH3ckjVAX6v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCWErbbiQK7e6HBHzipuDD
          claim_id: c_hvPD8hDvv5pAZ6uPafVZah
          source_id: s_1wUQ3zkRLASx59cynw1dDe
          stance: supports
          locator: CBDB:29210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29210）
          source: &a1
            id: s_1wUQ3zkRLASx59cynw1dDe
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 29210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29210&o=json
            external_identifier: CBDB:29210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bbcQa8AjX1nZmsFu1A7wDP
        subject_person_id: p_vttgNNqAgvuhH3ckjVAX6v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wO7v-0k_k5Krfl_z2K8Bi0
          claim_id: c_bbcQa8AjX1nZmsFu1A7wDP
          source_id: s_1wUQ3zkRLASx59cynw1dDe
          stance: supports
          locator: CBDB:29210
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | 王楫，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 29210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29210&o=json)
