---
schema: wang-person/v1
id: p_X3LNHWAG23NDh4ungCzw48
status: active
merged_into: null
display_name: 王晉成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nyz1rQik5GQcASarsDV7Qi
        subject_person_id: p_X3LNHWAG23NDh4ungCzw48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pgq26Lf6vUBQFy6LE4x6bv
          claim_id: c_nyz1rQik5GQcASarsDV7Qi
          source_id: s_rtCe9bEMUwjNWEhUnxisaz
          stance: supports
          locator: CBDB:638455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638455）
          source: &a1
            id: s_rtCe9bEMUwjNWEhUnxisaz
            source_type: api_record
            title: 中国历代人物传记资料库：王晉成（CBDB 638455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638455&o=json
            external_identifier: CBDB:638455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tec9XZQrNWJEKtBJc5dERK
        subject_person_id: p_X3LNHWAG23NDh4ungCzw48
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉成，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1W_EBxQqG_3FyR_woFMeE1
          claim_id: c_Tec9XZQrNWJEKtBJc5dERK
          source_id: s_rtCe9bEMUwjNWEhUnxisaz
          stance: supports
          locator: CBDB:638455
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

# 王晉成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉成 | accepted |
| bio.summary | 王晉成，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉成（CBDB 638455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638455&o=json)
