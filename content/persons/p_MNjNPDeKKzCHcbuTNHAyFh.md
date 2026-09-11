---
schema: wang-person/v1
id: p_MNjNPDeKKzCHcbuTNHAyFh
status: active
merged_into: null
display_name: 王有雋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34vf3YxkxxjMiE45gF8oix
        subject_person_id: p_MNjNPDeKKzCHcbuTNHAyFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有雋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6e1W5AUEYTfcJm1PFPsuDY
          claim_id: c_34vf3YxkxxjMiE45gF8oix
          source_id: s_HXBsn6GZ1dsZVLpyrB2sD1
          stance: supports
          locator: CBDB:638605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638605）
          source: &a1
            id: s_HXBsn6GZ1dsZVLpyrB2sD1
            source_type: api_record
            title: 中国历代人物传记资料库：王有雋（CBDB 638605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638605&o=json
            external_identifier: CBDB:638605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nQT2fpQPWLH7J4nzoJa7vq
        subject_person_id: p_MNjNPDeKKzCHcbuTNHAyFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有雋，清人物。籍贯彰德府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R82c-W9jWlQdSHIVtu7pvl
          claim_id: c_nQT2fpQPWLH7J4nzoJa7vq
          source_id: s_HXBsn6GZ1dsZVLpyrB2sD1
          stance: supports
          locator: CBDB:638605
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

# 王有雋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有雋 | accepted |
| bio.summary | 王有雋，清人物。籍贯彰德府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有雋（CBDB 638605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638605&o=json)
