---
schema: wang-person/v1
id: p_Lkw4cuXcAxgoL6i5n3r1ne
status: active
merged_into: null
display_name: 王兆熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nv7TsbVRNk37fFDqHSFLrz
        subject_person_id: p_Lkw4cuXcAxgoL6i5n3r1ne
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_At9Lc82s9ZRfbxLtwT4r3F
          claim_id: c_Nv7TsbVRNk37fFDqHSFLrz
          source_id: s_Qa4CXc73uGKcpXoZYZCzaj
          stance: supports
          locator: CBDB:71601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71601）
          source: &a1
            id: s_Qa4CXc73uGKcpXoZYZCzaj
            source_type: api_record
            title: 中国历代人物传记资料库：王兆熊（CBDB 71601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71601&o=json
            external_identifier: CBDB:71601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AtfD5ZGFCyrHiVssR8rcJF
        subject_person_id: p_Lkw4cuXcAxgoL6i5n3r1ne
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r3u8cKzgZrBV7cVCSX7reJ
          claim_id: c_AtfD5ZGFCyrHiVssR8rcJF
          source_id: s_Qa4CXc73uGKcpXoZYZCzaj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6j5zWqNrwX9JWSYU21wd4
        subject_person_id: p_Lkw4cuXcAxgoL6i5n3r1ne
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆熊（生于1748年），清人物。籍贯長安。（中国历代人物传记资料库 CBDB 71601）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bZVXOPCk6jrljLqnLEyiw2
          claim_id: c_X6j5zWqNrwX9JWSYU21wd4
          source_id: s_Qa4CXc73uGKcpXoZYZCzaj
          stance: supports
          locator: CBDB:71601
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

# 王兆熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆熊 | accepted |
| birth.date | 1748年 | accepted |
| bio.summary | 王兆熊（生于1748年），清人物。籍贯長安。（中国历代人物传记资料库 CBDB 71601） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆熊（CBDB 71601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71601&o=json)
