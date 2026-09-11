---
schema: wang-person/v1
id: p_PpV1Ms5y8YuJ1UJgsEz1qT
status: active
merged_into: null
display_name: 王舜舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57yYxpZ2EU22518LHH5ZnZ
        subject_person_id: p_PpV1Ms5y8YuJ1UJgsEz1qT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UyQZRzPCfHqoqykwb79cQ8
          claim_id: c_57yYxpZ2EU22518LHH5ZnZ
          source_id: s_nMaLrUJr91bnDuSNQL4jDK
          stance: supports
          locator: CBDB:7382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7382）
          source: &a1
            id: s_nMaLrUJr91bnDuSNQL4jDK
            source_type: api_record
            title: 中国历代人物传记资料库：王舜舉（CBDB 7382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7382&o=json
            external_identifier: CBDB:7382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yr6hxJVsS5MAL6hMUQi8HU
        subject_person_id: p_PpV1Ms5y8YuJ1UJgsEz1qT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜舉，宋人物。籍贯祁門，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 7382）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mq-7NAFI-aHGHn16mrz5cm
          claim_id: c_Yr6hxJVsS5MAL6hMUQi8HU
          source_id: s_nMaLrUJr91bnDuSNQL4jDK
          stance: supports
          locator: CBDB:7382
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

# 王舜舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜舉 | accepted |
| bio.summary | 王舜舉，宋人物。籍贯祁門，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 7382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜舉（CBDB 7382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7382&o=json)
