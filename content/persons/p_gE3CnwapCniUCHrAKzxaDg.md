---
schema: wang-person/v1
id: p_gE3CnwapCniUCHrAKzxaDg
status: merged
merged_into: p_9kvwNC8EwFdL41MBGhg7HG
display_name: 王獻之
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DfAdmPri6D9cX8JqkGTa3D
        subject_person_id: p_gE3CnwapCniUCHrAKzxaDg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jgavr89BaMwkW3bzMUBxiU
          claim_id: c_DfAdmPri6D9cX8JqkGTa3D
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: CBDB:135441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135441）
          source: &a1
            id: s_DMWKppxrZCxAwAhDa6vJx2
            source_type: api_record
            title: 中国历代人物传记资料库：王獻之（CBDB 135441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json
            external_identifier: CBDB:135441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjuPoFycWv3BjgiE36phoJ
        subject_person_id: p_gE3CnwapCniUCHrAKzxaDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 135441）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_upiciWLDR7dOgNp8Y0bfOk
          claim_id: c_SjuPoFycWv3BjgiE36phoJ
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: CBDB:135441
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

# 王獻之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻之 | accepted |
| bio.summary | 王獻之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 135441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻之（CBDB 135441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json)
