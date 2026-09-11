---
schema: wang-person/v1
id: p_pFZUPrRGkWz3ZKkAy6iiJP
status: active
merged_into: null
display_name: 王觀彪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A6RRxF2qYf9q5j2PSFRsHo
        subject_person_id: p_pFZUPrRGkWz3ZKkAy6iiJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7vx5Be9Fw7g37ALzD1Ec9
          claim_id: c_A6RRxF2qYf9q5j2PSFRsHo
          source_id: s_JAHse7KcD8oi3ABLNeSvwA
          stance: supports
          locator: CBDB:640248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640248）
          source: &a1
            id: s_JAHse7KcD8oi3ABLNeSvwA
            source_type: api_record
            title: 中国历代人物传记资料库：王觀彪（CBDB 640248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640248&o=json
            external_identifier: CBDB:640248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RKELSSTBf5U27G7pPuZkWj
        subject_person_id: p_pFZUPrRGkWz3ZKkAy6iiJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀彪，清人物。籍贯大興，曾任經歷。（中国历代人物传记资料库 CBDB 640248）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zZpkHJApuiofW8o6TgLd5S
          claim_id: c_RKELSSTBf5U27G7pPuZkWj
          source_id: s_JAHse7KcD8oi3ABLNeSvwA
          stance: supports
          locator: CBDB:640248
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

# 王觀彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀彪 | accepted |
| bio.summary | 王觀彪，清人物。籍贯大興，曾任經歷。（中国历代人物传记资料库 CBDB 640248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀彪（CBDB 640248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640248&o=json)
