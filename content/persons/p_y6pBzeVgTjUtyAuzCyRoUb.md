---
schema: wang-person/v1
id: p_y6pBzeVgTjUtyAuzCyRoUb
status: active
merged_into: null
display_name: 王思聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XBKSjZvQg7yf6zPQGQWBF6
        subject_person_id: p_y6pBzeVgTjUtyAuzCyRoUb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UE9d9qR8g7zLWpco2WAsNA
          claim_id: c_XBKSjZvQg7yf6zPQGQWBF6
          source_id: s_XPMGUTjbidiL62DjbqoHem
          stance: supports
          locator: CBDB:322905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322905）
          source: &a1
            id: s_XPMGUTjbidiL62DjbqoHem
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 322905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json
            external_identifier: CBDB:322905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bam5HgbdWAcE7SgkKQ5qew
        subject_person_id: p_y6pBzeVgTjUtyAuzCyRoUb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322905）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JnFcTaCQSf9GN6B6hIBDRC
          claim_id: c_Bam5HgbdWAcE7SgkKQ5qew
          source_id: s_XPMGUTjbidiL62DjbqoHem
          stance: supports
          locator: CBDB:322905
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

# 王思聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思聰 | accepted |
| bio.summary | 王思聰，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322905） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思聰（CBDB 322905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json)
