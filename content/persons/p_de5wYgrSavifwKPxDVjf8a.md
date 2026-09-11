---
schema: wang-person/v1
id: p_de5wYgrSavifwKPxDVjf8a
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLyDNL4vN1V1TvQtmoBC1a
        subject_person_id: p_de5wYgrSavifwKPxDVjf8a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rimdp4SLbE4f4z83KBM3Kj
          claim_id: c_uLyDNL4vN1V1TvQtmoBC1a
          source_id: s_nao1A4dG9NtDqP5YkjDyn1
          stance: supports
          locator: CBDB:343926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343926）
          source: &a1
            id: s_nao1A4dG9NtDqP5YkjDyn1
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 343926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343926&o=json
            external_identifier: CBDB:343926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o3CG4nJQ733fnKFjy1iEys
        subject_person_id: p_de5wYgrSavifwKPxDVjf8a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂，清人物。明清進士進士，籍贯大荔，入仕進士。（中国历代人物传记资料库 CBDB 343926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0pVQBxfZlwUFr1LS1Tt5t
          claim_id: c_o3CG4nJQ733fnKFjy1iEys
          source_id: s_nao1A4dG9NtDqP5YkjDyn1
          stance: supports
          locator: CBDB:343926
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| bio.summary | 王恂，清人物。明清進士進士，籍贯大荔，入仕進士。（中国历代人物传记资料库 CBDB 343926） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 343926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343926&o=json)
