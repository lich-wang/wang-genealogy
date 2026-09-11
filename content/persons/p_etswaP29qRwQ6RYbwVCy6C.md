---
schema: wang-person/v1
id: p_etswaP29qRwQ6RYbwVCy6C
status: active
merged_into: null
display_name: 王九一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sDLRGNMoCVCGSMb9gtxKno
        subject_person_id: p_etswaP29qRwQ6RYbwVCy6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_453HXjukgzpvZ1Z5NzeVU5
          claim_id: c_sDLRGNMoCVCGSMb9gtxKno
          source_id: s_a5J11Ykm19benjyfuNCVZV
          stance: supports
          locator: CBDB:635830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635830）
          source: &a1
            id: s_a5J11Ykm19benjyfuNCVZV
            source_type: api_record
            title: 中国历代人物传记资料库：王九一（CBDB 635830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635830&o=json
            external_identifier: CBDB:635830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSiE6S8wsAJ6Xu9ZF85tH9
        subject_person_id: p_etswaP29qRwQ6RYbwVCy6C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九一，清人物。籍贯西安，曾任復設訓導。（中国历代人物传记资料库 CBDB 635830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hnVydIhAxlqogiQVCxMzbU
          claim_id: c_LSiE6S8wsAJ6Xu9ZF85tH9
          source_id: s_a5J11Ykm19benjyfuNCVZV
          stance: supports
          locator: CBDB:635830
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

# 王九一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九一 | accepted |
| bio.summary | 王九一，清人物。籍贯西安，曾任復設訓導。（中国历代人物传记资料库 CBDB 635830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九一（CBDB 635830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635830&o=json)
