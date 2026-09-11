---
schema: wang-person/v1
id: p_KBknKa5FUH6bVFjEGk8tJP
status: active
merged_into: null
display_name: 王仕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9HBjhA8xiWhCPWdSUB2p1
        subject_person_id: p_KBknKa5FUH6bVFjEGk8tJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sCm8VHVNnzu1CYE4ssUCmr
          claim_id: c_J9HBjhA8xiWhCPWdSUB2p1
          source_id: s_C67DxVjgnQz1PZNuKqCKs3
          stance: supports
          locator: CBDB:38680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38680）
          source: &a1
            id: s_C67DxVjgnQz1PZNuKqCKs3
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 38680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38680&o=json
            external_identifier: CBDB:38680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3gr7FwgAGQRXshXqVnvHC4
        subject_person_id: p_KBknKa5FUH6bVFjEGk8tJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑，曾任縣令。（中国历代人物传记资料库 CBDB 38680）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YwYhmxSMl44BVCfj4nj9dL
          claim_id: c_3gr7FwgAGQRXshXqVnvHC4
          source_id: s_C67DxVjgnQz1PZNuKqCKs3
          stance: supports
          locator: CBDB:38680
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

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑，曾任縣令。（中国历代人物传记资料库 CBDB 38680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 38680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38680&o=json)
