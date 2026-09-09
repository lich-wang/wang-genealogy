---
schema: wang-person/v1
id: p_59qd4DvuG6vMPLpafFKNop
status: active
merged_into: null
display_name: 王履古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mHu9dA385LPU9g3qTXL9tW
        subject_person_id: p_59qd4DvuG6vMPLpafFKNop
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q1RHCLocAPH1AgrW5L7q4h
          claim_id: c_mHu9dA385LPU9g3qTXL9tW
          source_id: s_e5tN1giDC4sPkhb8m1iDmQ
          stance: supports
          locator: CBDB:532083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532083）
          source: &a1
            id: s_e5tN1giDC4sPkhb8m1iDmQ
            source_type: api_record
            title: 中国历代人物传记资料库：王履古（CBDB 532083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532083&o=json
            external_identifier: CBDB:532083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TcuETRDxEUzZFQMDUvwNGM
        subject_person_id: p_59qd4DvuG6vMPLpafFKNop
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s3bx2ZX5HiHgKWPKNejNgJ
          claim_id: c_TcuETRDxEUzZFQMDUvwNGM
          source_id: s_e5tN1giDC4sPkhb8m1iDmQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王履古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履古 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履古（CBDB 532083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532083&o=json)
