---
schema: wang-person/v1
id: p_JA6yjHBfoqrVos8HrvMmQA
status: active
merged_into: null
display_name: 王元龜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5YyLk2Kos8Svzeprv47fX
        subject_person_id: p_JA6yjHBfoqrVos8HrvMmQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元龜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9uAmd9AGWNQPfbYyMS61N4
          claim_id: c_N5YyLk2Kos8Svzeprv47fX
          source_id: s_rag2gaf7EtvEswwbQnTeXs
          stance: supports
          locator: CBDB:546577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546577）
          source: &a1
            id: s_rag2gaf7EtvEswwbQnTeXs
            source_type: api_record
            title: 中国历代人物传记资料库：王元龜（CBDB 546577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546577&o=json
            external_identifier: CBDB:546577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zZjnoqQvLkmY9N36xe5m19
        subject_person_id: p_JA6yjHBfoqrVos8HrvMmQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元龜，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 546577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cNhaMi94cKLyRrlORM8VVD
          claim_id: c_zZjnoqQvLkmY9N36xe5m19
          source_id: s_rag2gaf7EtvEswwbQnTeXs
          stance: supports
          locator: CBDB:546577
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

# 王元龜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元龜 | accepted |
| bio.summary | 王元龜，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 546577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元龜（CBDB 546577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546577&o=json)
