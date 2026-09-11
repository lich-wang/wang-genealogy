---
schema: wang-person/v1
id: p_nH62KTExGqnbE4K5s7Krue
status: active
merged_into: null
display_name: 王愨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NrN5XoyRJLU1HWYwRwP6tU
        subject_person_id: p_nH62KTExGqnbE4K5s7Krue
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wLC3u7Gyd3bJLA4pmMMeCf
          claim_id: c_NrN5XoyRJLU1HWYwRwP6tU
          source_id: s_X3btHRZ719hWGs4QYsuxzy
          stance: supports
          locator: CBDB:637919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637919）
          source: &a1
            id: s_X3btHRZ719hWGs4QYsuxzy
            source_type: api_record
            title: 中国历代人物传记资料库：王愨（CBDB 637919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637919&o=json
            external_identifier: CBDB:637919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NdvMRcNhqK6r7uZTs5emeV
        subject_person_id: p_nH62KTExGqnbE4K5s7Krue
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王愨，清人物。籍贯新陽，入仕監生: 例監(附監生)，曾任經歷。（中国历代人物传记资料库 CBDB 637919）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zvwaqqQd9aYPJBTtIMmEhl
          claim_id: c_NdvMRcNhqK6r7uZTs5emeV
          source_id: s_X3btHRZ719hWGs4QYsuxzy
          stance: supports
          locator: CBDB:637919
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

# 王愨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愨 | accepted |
| bio.summary | 王愨，清人物。籍贯新陽，入仕監生: 例監(附監生)，曾任經歷。（中国历代人物传记资料库 CBDB 637919） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愨（CBDB 637919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637919&o=json)
