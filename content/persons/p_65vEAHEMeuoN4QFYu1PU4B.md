---
schema: wang-person/v1
id: p_65vEAHEMeuoN4QFYu1PU4B
status: active
merged_into: null
display_name: 王誠之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MY1NtDwXiWwqYjZoHB3i6Q
        subject_person_id: p_65vEAHEMeuoN4QFYu1PU4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_reXed5NzDqezEyKMgqXV2b
          claim_id: c_MY1NtDwXiWwqYjZoHB3i6Q
          source_id: s_f4B3M9fTmLGPeqWrCPHYGN
          stance: supports
          locator: CBDB:685186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685186）
          source: &a1
            id: s_f4B3M9fTmLGPeqWrCPHYGN
            source_type: api_record
            title: 中国历代人物传记资料库：王誠之（CBDB 685186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685186&o=json
            external_identifier: CBDB:685186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2gkd5sLSnqHVdavGJh6HB
        subject_person_id: p_65vEAHEMeuoN4QFYu1PU4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠之，宋人物。籍贯諸暨，入仕進士。（中国历代人物传记资料库 CBDB 685186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r4OEbMfV1Os6EXC3y8m5Qa
          claim_id: c_U2gkd5sLSnqHVdavGJh6HB
          source_id: s_f4B3M9fTmLGPeqWrCPHYGN
          stance: supports
          locator: CBDB:685186
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

# 王誠之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠之 | accepted |
| bio.summary | 王誠之，宋人物。籍贯諸暨，入仕進士。（中国历代人物传记资料库 CBDB 685186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誠之（CBDB 685186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685186&o=json)
