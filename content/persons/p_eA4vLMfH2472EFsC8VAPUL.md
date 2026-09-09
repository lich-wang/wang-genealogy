---
schema: wang-person/v1
id: p_eA4vLMfH2472EFsC8VAPUL
status: active
merged_into: null
display_name: 王贇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mFBbSN597xNc6N225tJEqV
        subject_person_id: p_eA4vLMfH2472EFsC8VAPUL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BEYLeDpVYuzBZrrgdC6sc
          claim_id: c_mFBbSN597xNc6N225tJEqV
          source_id: s_JDRrZdXe6pF19wFTYjs5W8
          stance: supports
          locator: CBDB:454863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454863）
          source: &a1
            id: s_JDRrZdXe6pF19wFTYjs5W8
            source_type: api_record
            title: 中国历代人物传记资料库：王贇（CBDB 454863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454863&o=json
            external_identifier: CBDB:454863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3pS27ts25WwHR78c7zEgcK
        subject_person_id: p_eA4vLMfH2472EFsC8VAPUL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BX9EXmLBytJKy4pmzmkLpu
          claim_id: c_3pS27ts25WwHR78c7zEgcK
          source_id: s_JDRrZdXe6pF19wFTYjs5W8
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

# 王贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贇（CBDB 454863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454863&o=json)
