---
schema: wang-person/v1
id: p_UwoRvdQuimEZrNV1w1EKNt
status: active
merged_into: null
display_name: 王宗仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yKqDyMg9WYDu3vFjvnH3J4
        subject_person_id: p_UwoRvdQuimEZrNV1w1EKNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4KXcseRi9z5nCuMrkcM1ZM
          claim_id: c_yKqDyMg9WYDu3vFjvnH3J4
          source_id: s_UAZimPETw4wGS5NkiJgJe4
          stance: supports
          locator: CBDB:551111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551111）
          source: &a1
            id: s_UAZimPETw4wGS5NkiJgJe4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗仁（CBDB 551111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551111&o=json
            external_identifier: CBDB:551111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ymUpqyHEVuoBQvDe5KMxqf
        subject_person_id: p_UwoRvdQuimEZrNV1w1EKNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗仁，明人物。籍贯延平府，曾任知縣。（中国历代人物传记资料库 CBDB 551111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fbhFLo0QSE9lbVR0tfP_m9
          claim_id: c_ymUpqyHEVuoBQvDe5KMxqf
          source_id: s_UAZimPETw4wGS5NkiJgJe4
          stance: supports
          locator: CBDB:551111
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

# 王宗仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗仁 | accepted |
| bio.summary | 王宗仁，明人物。籍贯延平府，曾任知縣。（中国历代人物传记资料库 CBDB 551111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗仁（CBDB 551111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551111&o=json)
