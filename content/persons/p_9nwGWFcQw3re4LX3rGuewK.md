---
schema: wang-person/v1
id: p_9nwGWFcQw3re4LX3rGuewK
status: active
merged_into: null
display_name: 王夢蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULDHo63GBLxgoLeNoZBQBE
        subject_person_id: p_9nwGWFcQw3re4LX3rGuewK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nN5sG5egLDYL6KLpTzbG6j
          claim_id: c_ULDHo63GBLxgoLeNoZBQBE
          source_id: s_AMGNkf52x5385ZMiqy9ui6
          stance: supports
          locator: CBDB:568775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568775）
          source: &a1
            id: s_AMGNkf52x5385ZMiqy9ui6
            source_type: api_record
            title: 中国历代人物传记资料库：王夢蘭（CBDB 568775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568775&o=json
            external_identifier: CBDB:568775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eiE1xNNhgr5yNY2hAFnn4a
        subject_person_id: p_9nwGWFcQw3re4LX3rGuewK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢蘭，清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 568775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U0zRnlrecXRbGMCIzUiShf
          claim_id: c_eiE1xNNhgr5yNY2hAFnn4a
          source_id: s_AMGNkf52x5385ZMiqy9ui6
          stance: supports
          locator: CBDB:568775
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

# 王夢蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢蘭 | accepted |
| bio.summary | 王夢蘭，清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 568775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢蘭（CBDB 568775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568775&o=json)
