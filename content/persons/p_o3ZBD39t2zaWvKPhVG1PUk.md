---
schema: wang-person/v1
id: p_o3ZBD39t2zaWvKPhVG1PUk
status: active
merged_into: null
display_name: 王清秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8S9ArvHBFHbGicXtgGFwo
        subject_person_id: p_o3ZBD39t2zaWvKPhVG1PUk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EpZtQhiNAKJP6SwFFNLQrh
          claim_id: c_B8S9ArvHBFHbGicXtgGFwo
          source_id: s_D9bkrMvV8ffve3RdSsaByS
          stance: supports
          locator: CBDB:639151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639151）
          source: &a1
            id: s_D9bkrMvV8ffve3RdSsaByS
            source_type: api_record
            title: 中国历代人物传记资料库：王清秀（CBDB 639151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639151&o=json
            external_identifier: CBDB:639151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DJLhJ7bY4b5U1vb6he2iLW
        subject_person_id: p_o3ZBD39t2zaWvKPhVG1PUk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清秀，清人物。籍贯石門，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639151）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vXtONV6kJtoIyHgbpOBcK_
          claim_id: c_DJLhJ7bY4b5U1vb6he2iLW
          source_id: s_D9bkrMvV8ffve3RdSsaByS
          stance: supports
          locator: CBDB:639151
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

# 王清秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清秀 | accepted |
| bio.summary | 王清秀，清人物。籍贯石門，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清秀（CBDB 639151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639151&o=json)
