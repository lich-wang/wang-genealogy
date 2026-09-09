---
schema: wang-person/v1
id: p_sycCtfnn14AgpkG1Ls4sa6
status: active
merged_into: null
display_name: 王綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GADPq45MrL8ABTRgufeDxy
        subject_person_id: p_sycCtfnn14AgpkG1Ls4sa6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c24UE1ZrH76YSYGEivmtwY
          claim_id: c_GADPq45MrL8ABTRgufeDxy
          source_id: s_f6L6nr1s387U3bELceERAJ
          stance: supports
          locator: CBDB:576982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576982）
          source: &a1
            id: s_f6L6nr1s387U3bELceERAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 576982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576982&o=json
            external_identifier: CBDB:576982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r343tREWuMYQBoacEBqPaB
        subject_person_id: p_sycCtfnn14AgpkG1Ls4sa6
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
        - id: cs_jk8gGrNsxGtXmDaEUU5aF4
          claim_id: c_r343tREWuMYQBoacEBqPaB
          source_id: s_f6L6nr1s387U3bELceERAJ
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

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 576982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576982&o=json)
