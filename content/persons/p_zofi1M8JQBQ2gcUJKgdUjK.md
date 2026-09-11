---
schema: wang-person/v1
id: p_zofi1M8JQBQ2gcUJKgdUjK
status: active
merged_into: null
display_name: 王錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e4xYpFhM6TacGMe5bW2aTK
        subject_person_id: p_zofi1M8JQBQ2gcUJKgdUjK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VLVnasr1yn2AZBDCMHUzDm
          claim_id: c_e4xYpFhM6TacGMe5bW2aTK
          source_id: s_VzXK8hgQEiVdrLNpY2ghVB
          stance: supports
          locator: CBDB:473620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473620）
          source: &a1
            id: s_VzXK8hgQEiVdrLNpY2ghVB
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 473620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473620&o=json
            external_identifier: CBDB:473620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LbF6uwduPyCnUD7xJfcayr
        subject_person_id: p_zofi1M8JQBQ2gcUJKgdUjK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫，明人物。曾任都司。（中国历代人物传记资料库 CBDB 473620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4-WqyBg_6_A_-5KatG9Ch4
          claim_id: c_LbF6uwduPyCnUD7xJfcayr
          source_id: s_VzXK8hgQEiVdrLNpY2ghVB
          stance: supports
          locator: CBDB:473620
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

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | 王錫，明人物。曾任都司。（中国历代人物传记资料库 CBDB 473620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 473620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473620&o=json)
