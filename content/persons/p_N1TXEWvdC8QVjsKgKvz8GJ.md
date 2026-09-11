---
schema: wang-person/v1
id: p_N1TXEWvdC8QVjsKgKvz8GJ
status: active
merged_into: null
display_name: 王廷俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfaU2412rEc6Tw8AMVMaFr
        subject_person_id: p_N1TXEWvdC8QVjsKgKvz8GJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gb79SEwijwaKGpJnztjB8M
          claim_id: c_JfaU2412rEc6Tw8AMVMaFr
          source_id: s_iw4TfK28TaBF1qQJSZSgP3
          stance: supports
          locator: CBDB:218710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218710）
          source: &a1
            id: s_iw4TfK28TaBF1qQJSZSgP3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷俊（CBDB 218710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json
            external_identifier: CBDB:218710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pEFNcTSKPqrCj41ovv4umY
        subject_person_id: p_N1TXEWvdC8QVjsKgKvz8GJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊，明人物。萬曆八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 218710）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TOPzsRV89UzZLEM3hJqZow
          claim_id: c_pEFNcTSKPqrCj41ovv4umY
          source_id: s_iw4TfK28TaBF1qQJSZSgP3
          stance: supports
          locator: CBDB:218710
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

# 王廷俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷俊 | accepted |
| bio.summary | 王廷俊，明人物。萬曆八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 218710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷俊（CBDB 218710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json)
