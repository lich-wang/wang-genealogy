---
schema: wang-person/v1
id: p_PVTE2wkp6NNzCbZ8xRM1yq
status: active
merged_into: null
display_name: 王元吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4eyagSdU63nqC8CvVj4ZSw
        subject_person_id: p_PVTE2wkp6NNzCbZ8xRM1yq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1HSbzT8nfm6y3TQUEbBvN
          claim_id: c_4eyagSdU63nqC8CvVj4ZSw
          source_id: s_uBjZiek4Qsq1S1fEs6orwN
          stance: supports
          locator: CBDB:323261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323261）
          source: &a1
            id: s_uBjZiek4Qsq1S1fEs6orwN
            source_type: api_record
            title: 中国历代人物传记资料库：王元吉（CBDB 323261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json
            external_identifier: CBDB:323261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_autj2DygiXwZg53p6R9XuB
        subject_person_id: p_PVTE2wkp6NNzCbZ8xRM1yq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元吉，明人物。嘉靖三十八年進士，籍贯山陰，入仕考上會試/貢士，曾任教諭。（中国历代人物传记资料库 CBDB 323261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fupuw579ZdJo6IXVni3Af0
          claim_id: c_autj2DygiXwZg53p6R9XuB
          source_id: s_uBjZiek4Qsq1S1fEs6orwN
          stance: supports
          locator: CBDB:323261
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

# 王元吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元吉 | accepted |
| bio.summary | 王元吉，明人物。嘉靖三十八年進士，籍贯山陰，入仕考上會試/貢士，曾任教諭。（中国历代人物传记资料库 CBDB 323261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元吉（CBDB 323261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json)
