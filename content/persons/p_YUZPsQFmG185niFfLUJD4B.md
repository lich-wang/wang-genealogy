---
schema: wang-person/v1
id: p_YUZPsQFmG185niFfLUJD4B
status: active
merged_into: null
display_name: 王武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5B2yyhPHRfojP6eRAp6SQD
        subject_person_id: p_YUZPsQFmG185niFfLUJD4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K7b97Uzje6AXJauC21QYhU
          claim_id: c_5B2yyhPHRfojP6eRAp6SQD
          source_id: s_9ZuFvTDB1fqg4bKVfLDqy1
          stance: supports
          locator: CBDB:100698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100698）
          source: &a1
            id: s_9ZuFvTDB1fqg4bKVfLDqy1
            source_type: api_record
            title: 中国历代人物传记资料库：王武（CBDB 100698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100698&o=json
            external_identifier: CBDB:100698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZ4ymu8dzrbCcJJzDEcpeZ
        subject_person_id: p_YUZPsQFmG185niFfLUJD4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武，元人物。籍贯藍田，曾任大宗正府員外郎、監察御史。（中国历代人物传记资料库 CBDB 100698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nHeYl-So1yrvgdt67TJgSO
          claim_id: c_tZ4ymu8dzrbCcJJzDEcpeZ
          source_id: s_9ZuFvTDB1fqg4bKVfLDqy1
          stance: supports
          locator: CBDB:100698
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

# 王武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王武 | accepted |
| bio.summary | 王武，元人物。籍贯藍田，曾任大宗正府員外郎、監察御史。（中国历代人物传记资料库 CBDB 100698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王武（CBDB 100698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100698&o=json)
