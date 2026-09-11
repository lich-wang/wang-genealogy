---
schema: wang-person/v1
id: p_DAPJj8q3SQjEDt47n5TbKJ
status: active
merged_into: null
display_name: 王重三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Av751sPf9S8Y8RKPcfC3jt
        subject_person_id: p_DAPJj8q3SQjEDt47n5TbKJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1SWucsJ5cHLXD5jig49Rra
          claim_id: c_Av751sPf9S8Y8RKPcfC3jt
          source_id: s_XcW3q6fvLVZVhxCRvFfqxy
          stance: supports
          locator: CBDB:640493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640493）
          source: &a1
            id: s_XcW3q6fvLVZVhxCRvFfqxy
            source_type: api_record
            title: 中国历代人物传记资料库：王重三（CBDB 640493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640493&o=json
            external_identifier: CBDB:640493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RhC127AZbiV7PzGjJ3v4Qg
        subject_person_id: p_DAPJj8q3SQjEDt47n5TbKJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王重三，清人物。籍贯思南府直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640493）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZImcVaPJY9sIMMAFnOL__b
          claim_id: c_RhC127AZbiV7PzGjJ3v4Qg
          source_id: s_XcW3q6fvLVZVhxCRvFfqxy
          stance: supports
          locator: CBDB:640493
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

# 王重三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重三 | accepted |
| bio.summary | 王重三，清人物。籍贯思南府直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重三（CBDB 640493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640493&o=json)
