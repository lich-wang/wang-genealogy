---
schema: wang-person/v1
id: p_UEAJoCh9cbzWCjuC5jvZQE
status: active
merged_into: null
display_name: 王邦寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YPrmf8znAcf7HKk5cFHwtr
        subject_person_id: p_UEAJoCh9cbzWCjuC5jvZQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tH5NoPpLVMxSLL6k3FPWE
          claim_id: c_YPrmf8znAcf7HKk5cFHwtr
          source_id: s_dtMHPQEwTQfCJ8FBHsikHM
          stance: supports
          locator: CBDB:69224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69224）
          source: &a1
            id: s_dtMHPQEwTQfCJ8FBHsikHM
            source_type: api_record
            title: 中国历代人物传记资料库：王邦寧（CBDB 69224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69224&o=json
            external_identifier: CBDB:69224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_47F7Zuo8k9rAq3Hh6gJ1K9
        subject_person_id: p_UEAJoCh9cbzWCjuC5jvZQE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6jvKZBgP5F7vQbcp99RrJ6
          claim_id: c_47F7Zuo8k9rAq3Hh6gJ1K9
          source_id: s_dtMHPQEwTQfCJ8FBHsikHM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JGrZRkpUS6DhNkd8VwU1RZ
        subject_person_id: p_UEAJoCh9cbzWCjuC5jvZQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦寧（卒于1804年），清人物。籍贯襄陽府，入仕武生員。（中国历代人物传记资料库 CBDB 69224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u-vlIhdhejQ3hDtrJu8jIx
          claim_id: c_JGrZRkpUS6DhNkd8VwU1RZ
          source_id: s_dtMHPQEwTQfCJ8FBHsikHM
          stance: supports
          locator: CBDB:69224
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

# 王邦寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦寧 | accepted |
| death.date | 1804年 | accepted |
| bio.summary | 王邦寧（卒于1804年），清人物。籍贯襄陽府，入仕武生員。（中国历代人物传记资料库 CBDB 69224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦寧（CBDB 69224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69224&o=json)
