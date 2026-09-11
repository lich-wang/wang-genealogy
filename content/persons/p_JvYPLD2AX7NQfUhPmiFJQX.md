---
schema: wang-person/v1
id: p_JvYPLD2AX7NQfUhPmiFJQX
status: active
merged_into: null
display_name: 王夏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCJG4CRKkpFo5nu6L9Fc2N
        subject_person_id: p_JvYPLD2AX7NQfUhPmiFJQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JeHY9i4Ps1WKM4gmvfNUfM
          claim_id: c_eCJG4CRKkpFo5nu6L9Fc2N
          source_id: s_8RGAGN4HtLNsaiqt8fDtnx
          stance: supports
          locator: CBDB:198073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198073）
          source: &a1
            id: s_8RGAGN4HtLNsaiqt8fDtnx
            source_type: api_record
            title: 中国历代人物传记资料库：王夏（CBDB 198073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198073&o=json
            external_identifier: CBDB:198073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hfjiGBMX4KLfoxbf5jzWb7
        subject_person_id: p_JvYPLD2AX7NQfUhPmiFJQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏，明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 198073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oZV3JP2yV1Z_S1C6U_ecyd
          claim_id: c_hfjiGBMX4KLfoxbf5jzWb7
          source_id: s_8RGAGN4HtLNsaiqt8fDtnx
          stance: supports
          locator: CBDB:198073
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

# 王夏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夏 | accepted |
| bio.summary | 王夏，明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 198073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夏（CBDB 198073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198073&o=json)
