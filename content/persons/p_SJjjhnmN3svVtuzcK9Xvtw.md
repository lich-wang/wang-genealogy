---
schema: wang-person/v1
id: p_SJjjhnmN3svVtuzcK9Xvtw
status: active
merged_into: null
display_name: 王維熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdxiCMr7FFDq6JL4veLt4Z
        subject_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k8KJn5JLfHNvEU9B479dJf
          claim_id: c_fdxiCMr7FFDq6JL4veLt4Z
          source_id: s_7Hav2vEbZQvwrTycCtdiUP
          stance: supports
          locator: CBDB:309659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309659）
          source: &a1
            id: s_7Hav2vEbZQvwrTycCtdiUP
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xkjuvEhAH18NdyMpUJ9ei
        subject_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309659）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CwOck2RyDd6wQHJjQtBD4L
          claim_id: c_4xkjuvEhAH18NdyMpUJ9ei
          source_id: s_7Hav2vEbZQvwrTycCtdiUP
          stance: supports
          locator: CBDB:309659
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

# 王維熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維熊 | accepted |
| bio.summary | 王維熊，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309659） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維熊（CBDB 309659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json)
