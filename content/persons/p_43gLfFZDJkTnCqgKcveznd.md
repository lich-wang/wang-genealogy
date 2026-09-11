---
schema: wang-person/v1
id: p_43gLfFZDJkTnCqgKcveznd
status: active
merged_into: null
display_name: 王思聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZYjmSHE3v1RNRz3Gr4adXU
        subject_person_id: p_43gLfFZDJkTnCqgKcveznd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K5XEmAGcsHsnaXNJDNTS29
          claim_id: c_ZYjmSHE3v1RNRz3Gr4adXU
          source_id: s_uiL8am7FxFBgaY6RgtctGY
          stance: supports
          locator: CBDB:222818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222818）
          source: &a1
            id: s_uiL8am7FxFBgaY6RgtctGY
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 222818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json
            external_identifier: CBDB:222818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cvhTDENAJE5Hw4uJVQ6gjD
        subject_person_id: p_43gLfFZDJkTnCqgKcveznd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰，明人物。萬曆十一年進士，籍贯金壇，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222818）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SRepWNwqFCoVne9xR8tDp7
          claim_id: c_cvhTDENAJE5Hw4uJVQ6gjD
          source_id: s_uiL8am7FxFBgaY6RgtctGY
          stance: supports
          locator: CBDB:222818
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

# 王思聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思聰 | accepted |
| bio.summary | 王思聰，明人物。萬曆十一年進士，籍贯金壇，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思聰（CBDB 222818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json)
