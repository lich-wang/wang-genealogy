---
schema: wang-person/v1
id: p_HJdq2A1PrFHoA8LwF5gwmE
status: active
merged_into: null
display_name: 王葵基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K12s6cpps84qu8nF1UFMmM
        subject_person_id: p_HJdq2A1PrFHoA8LwF5gwmE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fAZ6X6B9YMbJ5ksMTBME8e
          claim_id: c_K12s6cpps84qu8nF1UFMmM
          source_id: s_75o6vHkQ8ihoCM4iV7NQNV
          stance: supports
          locator: CBDB:640140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640140）
          source: &a1
            id: s_75o6vHkQ8ihoCM4iV7NQNV
            source_type: api_record
            title: 中国历代人物传记资料库：王葵基（CBDB 640140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640140&o=json
            external_identifier: CBDB:640140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pAPxktUpj8M779gF1vAQKY
        subject_person_id: p_HJdq2A1PrFHoA8LwF5gwmE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKrzoz1h2g2DTXYiizTEm9
          claim_id: c_pAPxktUpj8M779gF1vAQKY
          source_id: s_75o6vHkQ8ihoCM4iV7NQNV
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

# 王葵基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵基 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葵基（CBDB 640140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640140&o=json)
