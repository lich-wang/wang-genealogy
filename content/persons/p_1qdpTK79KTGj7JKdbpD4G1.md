---
schema: wang-person/v1
id: p_1qdpTK79KTGj7JKdbpD4G1
status: active
merged_into: null
display_name: 王某一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wG3jgKh9yrZny58LBe5UcV
        subject_person_id: p_1qdpTK79KTGj7JKdbpD4G1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uJBcMy24LAZiMaMcQR2qeP
          claim_id: c_wG3jgKh9yrZny58LBe5UcV
          source_id: s_afM5LCHRQQutFxA3yU8VaK
          stance: supports
          locator: CBDB:383300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383300）
          source: &a1
            id: s_afM5LCHRQQutFxA3yU8VaK
            source_type: api_record
            title: 中国历代人物传记资料库：王某一（CBDB 383300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383300&o=json
            external_identifier: CBDB:383300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GHW4tEEYZCu1b3LHqVPK4h
        subject_person_id: p_1qdpTK79KTGj7JKdbpD4G1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某一，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383300）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_90-8GQRl9_X3bWg-LunsSi
          claim_id: c_GHW4tEEYZCu1b3LHqVPK4h
          source_id: s_afM5LCHRQQutFxA3yU8VaK
          stance: supports
          locator: CBDB:383300
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

# 王某一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王某一 | accepted |
| bio.summary | 王某一，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某一（CBDB 383300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383300&o=json)
