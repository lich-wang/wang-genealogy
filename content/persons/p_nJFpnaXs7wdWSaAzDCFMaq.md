---
schema: wang-person/v1
id: p_nJFpnaXs7wdWSaAzDCFMaq
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DSyA4wCKC3ZqCHjJdKYQPF
        subject_person_id: p_nJFpnaXs7wdWSaAzDCFMaq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L1z7cQQPRQdRASVrHe7C5Y
          claim_id: c_DSyA4wCKC3ZqCHjJdKYQPF
          source_id: s_o7Gi5a3mDX78r65cFhK1FY
          stance: supports
          locator: CBDB:211379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211379）
          source: &a1
            id: s_o7Gi5a3mDX78r65cFhK1FY
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 211379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211379&o=json
            external_identifier: CBDB:211379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDNnyGCkzdvaypAC2UnD4m
        subject_person_id: p_nJFpnaXs7wdWSaAzDCFMaq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtY6-5rCKlLYme-M8gBDUA
          claim_id: c_XDNnyGCkzdvaypAC2UnD4m
          source_id: s_o7Gi5a3mDX78r65cFhK1FY
          stance: supports
          locator: CBDB:211379
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 211379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211379&o=json)
