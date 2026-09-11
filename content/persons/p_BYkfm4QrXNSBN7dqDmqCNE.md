---
schema: wang-person/v1
id: p_BYkfm4QrXNSBN7dqDmqCNE
status: active
merged_into: null
display_name: 王清槤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TSZtEAgQkJ5796DKAMmqR8
        subject_person_id: p_BYkfm4QrXNSBN7dqDmqCNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清槤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BwfxpmtLEH5iGVNEnb1638
          claim_id: c_TSZtEAgQkJ5796DKAMmqR8
          source_id: s_D6BYiVJZtXQigYCZreCovr
          stance: supports
          locator: CBDB:639140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639140）
          source: &a1
            id: s_D6BYiVJZtXQigYCZreCovr
            source_type: api_record
            title: 中国历代人物传记资料库：王清槤（CBDB 639140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639140&o=json
            external_identifier: CBDB:639140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DLABZDn6bLhJthXrmLtrPF
        subject_person_id: p_BYkfm4QrXNSBN7dqDmqCNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王清槤，清人物。籍贯海寧州，入仕貢生: 拔貢，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 639140）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VE_t6DdL33P9iSEyebOoQW
          claim_id: c_DLABZDn6bLhJthXrmLtrPF
          source_id: s_D6BYiVJZtXQigYCZreCovr
          stance: supports
          locator: CBDB:639140
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

# 王清槤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清槤 | accepted |
| bio.summary | 王清槤，清人物。籍贯海寧州，入仕貢生: 拔貢，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 639140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清槤（CBDB 639140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639140&o=json)
