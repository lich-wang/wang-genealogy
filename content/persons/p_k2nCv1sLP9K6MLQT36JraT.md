---
schema: wang-person/v1
id: p_k2nCv1sLP9K6MLQT36JraT
status: active
merged_into: null
display_name: 王金映
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZM5vYq85CTiDw5eb2nUEq5
        subject_person_id: p_k2nCv1sLP9K6MLQT36JraT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金映
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_548NCANwiFen5juCGh2FCo
          claim_id: c_ZM5vYq85CTiDw5eb2nUEq5
          source_id: s_kYtBQvwC2kmAfrdk71eKVV
          stance: supports
          locator: CBDB:71781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71781）
          source: &a1
            id: s_kYtBQvwC2kmAfrdk71eKVV
            source_type: api_record
            title: 中国历代人物传记资料库：王金映（CBDB 71781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71781&o=json
            external_identifier: CBDB:71781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YpLP9p5gU9wjPzkdYku7YG
        subject_person_id: p_k2nCv1sLP9K6MLQT36JraT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLKUsHjtcV82WTZp9DYDLo
          claim_id: c_YpLP9p5gU9wjPzkdYku7YG
          source_id: s_kYtBQvwC2kmAfrdk71eKVV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_witv8AJ9bELgLn9J4hnxbN
        subject_person_id: p_k2nCv1sLP9K6MLQT36JraT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金映（生于1841年），清人物。籍贯長沙。（中国历代人物传记资料库 CBDB 71781）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vfvfzQP4BA0DlsgOpCc6ow
          claim_id: c_witv8AJ9bELgLn9J4hnxbN
          source_id: s_kYtBQvwC2kmAfrdk71eKVV
          stance: supports
          locator: CBDB:71781
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

# 王金映

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金映 | accepted |
| birth.date | 1841年 | accepted |
| bio.summary | 王金映（生于1841年），清人物。籍贯長沙。（中国历代人物传记资料库 CBDB 71781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金映（CBDB 71781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71781&o=json)
