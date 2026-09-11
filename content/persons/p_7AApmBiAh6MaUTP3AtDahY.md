---
schema: wang-person/v1
id: p_7AApmBiAh6MaUTP3AtDahY
status: active
merged_into: null
display_name: 王承祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xeTCHzvPHzfCCNhUwU4r3
        subject_person_id: p_7AApmBiAh6MaUTP3AtDahY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m5P4WDGhf1onNgF9iEoodM
          claim_id: c_8xeTCHzvPHzfCCNhUwU4r3
          source_id: s_C7H1vYZG8Le77L9ebwJ6m3
          stance: supports
          locator: CBDB:264043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264043）
          source: &a1
            id: s_C7H1vYZG8Le77L9ebwJ6m3
            source_type: api_record
            title: 中国历代人物传记资料库：王承祚（CBDB 264043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264043&o=json
            external_identifier: CBDB:264043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s2fyAngP4hL7KvBhUK5Ama
        subject_person_id: p_7AApmBiAh6MaUTP3AtDahY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祚，明人物。弘治六年進士，籍贯三原，曾任義官。（中国历代人物传记资料库 CBDB 264043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7alcwUbfUwBwK6pNKz_Kw4
          claim_id: c_s2fyAngP4hL7KvBhUK5Ama
          source_id: s_C7H1vYZG8Le77L9ebwJ6m3
          stance: supports
          locator: CBDB:264043
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

# 王承祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祚 | accepted |
| bio.summary | 王承祚，明人物。弘治六年進士，籍贯三原，曾任義官。（中国历代人物传记资料库 CBDB 264043） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承祚（CBDB 264043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264043&o=json)
