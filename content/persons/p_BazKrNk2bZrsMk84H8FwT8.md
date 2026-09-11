---
schema: wang-person/v1
id: p_BazKrNk2bZrsMk84H8FwT8
status: active
merged_into: null
display_name: 王標
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s23DL5bkEiAJPDWHaSUpMm
        subject_person_id: p_BazKrNk2bZrsMk84H8FwT8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQiLAi2CVTRFN5MHzQdcb5
          claim_id: c_s23DL5bkEiAJPDWHaSUpMm
          source_id: s_seEcJ8mb13QXa99zPPLU85
          stance: supports
          locator: CBDB:376494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376494）
          source: &a1
            id: s_seEcJ8mb13QXa99zPPLU85
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 376494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376494&o=json
            external_identifier: CBDB:376494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_paD6FmbZwsiHp3pJM1GB5q
        subject_person_id: p_BazKrNk2bZrsMk84H8FwT8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標，唐人物。曾任司農卿。（中国历代人物传记资料库 CBDB 376494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0EkAEq6SjrY3UuvwIcsL9D
          claim_id: c_paD6FmbZwsiHp3pJM1GB5q
          source_id: s_seEcJ8mb13QXa99zPPLU85
          stance: supports
          locator: CBDB:376494
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

# 王標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王標 | accepted |
| bio.summary | 王標，唐人物。曾任司農卿。（中国历代人物传记资料库 CBDB 376494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 376494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376494&o=json)
