---
schema: wang-person/v1
id: p_Dxc59z9FF3tNApjCy5H4qw
status: active
merged_into: null
display_name: 王廷佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vNP1T6y6obxqnmHJ7ZWMDw
        subject_person_id: p_Dxc59z9FF3tNApjCy5H4qw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ovUzx3EYQQRCCjCi662J6t
          claim_id: c_vNP1T6y6obxqnmHJ7ZWMDw
          source_id: s_JW7oF9b2Co1t3f6BxYC3mP
          stance: supports
          locator: CBDB:548166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548166）
          source: &a1
            id: s_JW7oF9b2Co1t3f6BxYC3mP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷佐（CBDB 548166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548166&o=json
            external_identifier: CBDB:548166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PCFVVnqnDv3bKY6ExKLSwK
        subject_person_id: p_Dxc59z9FF3tNApjCy5H4qw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ioI-NQdJvEA7g3poXCx69
          claim_id: c_PCFVVnqnDv3bKY6ExKLSwK
          source_id: s_JW7oF9b2Co1t3f6BxYC3mP
          stance: supports
          locator: CBDB:548166
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

# 王廷佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷佐 | accepted |
| bio.summary | 王廷佐，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷佐（CBDB 548166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548166&o=json)
