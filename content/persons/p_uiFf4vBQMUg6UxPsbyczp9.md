---
schema: wang-person/v1
id: p_uiFf4vBQMUg6UxPsbyczp9
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Sngd5KYQokcQYu3PLCc9n
        subject_person_id: p_uiFf4vBQMUg6UxPsbyczp9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pFJXDiAgwEnhmSAgkgRYwg
          claim_id: c_9Sngd5KYQokcQYu3PLCc9n
          source_id: s_qqB6s6jUfCGDfv5Pfg3jha
          stance: supports
          locator: CBDB:265498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265498）
          source: &a1
            id: s_qqB6s6jUfCGDfv5Pfg3jha
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 265498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265498&o=json
            external_identifier: CBDB:265498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cChCtG1E8sXD7KQftL7whh
        subject_person_id: p_uiFf4vBQMUg6UxPsbyczp9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，明人物。弘治六年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 265498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qfc9_phQti6MWqmWfxFH6O
          claim_id: c_cChCtG1E8sXD7KQftL7whh
          source_id: s_qqB6s6jUfCGDfv5Pfg3jha
          stance: supports
          locator: CBDB:265498
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，明人物。弘治六年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 265498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 265498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265498&o=json)
