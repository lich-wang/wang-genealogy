---
schema: wang-person/v1
id: p_GWBY7CNQAWrzqXLSvvUZtg
status: active
merged_into: null
display_name: 王永昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oh1twfDN3qe5sQhMvW961S
        subject_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R57g8ucd71oZR2AJoZRFNa
          claim_id: c_oh1twfDN3qe5sQhMvW961S
          source_id: s_rm7Qj71B7o2MzUsJN5ECaM
          stance: supports
          locator: CBDB:221618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221618）
          source: &a1
            id: s_rm7Qj71B7o2MzUsJN5ECaM
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 221618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json
            external_identifier: CBDB:221618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X1XcYjRWMXj83JoTkXHPK4
        subject_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌，明人物。萬曆八年進士，籍贯烏程，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 221618）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4uGpyBSlWtONi6TlMjUcB
          claim_id: c_X1XcYjRWMXj83JoTkXHPK4
          source_id: s_rm7Qj71B7o2MzUsJN5ECaM
          stance: supports
          locator: CBDB:221618
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

# 王永昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永昌 | accepted |
| bio.summary | 王永昌，明人物。萬曆八年進士，籍贯烏程，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 221618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永昌（CBDB 221618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json)
