---
schema: wang-person/v1
id: p_FzgfDPRDFNG9mU5e4Tb2d4
status: active
merged_into: null
display_name: 王元臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VskJ11KaKH6f3UeEAbGsf
        subject_person_id: p_FzgfDPRDFNG9mU5e4Tb2d4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wB8cLwXjZK15CUUCNYK3Kw
          claim_id: c_6VskJ11KaKH6f3UeEAbGsf
          source_id: s_WG6Ku1ybH9RyDrXaCA3Q76
          stance: supports
          locator: CBDB:341801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341801）
          source: &a1
            id: s_WG6Ku1ybH9RyDrXaCA3Q76
            source_type: api_record
            title: 中国历代人物传记资料库：王元臣（CBDB 341801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341801&o=json
            external_identifier: CBDB:341801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ipM2YpEsC6RFsdo4K5bizK
        subject_person_id: p_FzgfDPRDFNG9mU5e4Tb2d4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元臣，清人物。明清進士進士，籍贯青浦，入仕進士，曾任縣丞、訓導。（中国历代人物传记资料库 CBDB 341801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nfHvfuh9gEUTfsVy8Cm0uI
          claim_id: c_ipM2YpEsC6RFsdo4K5bizK
          source_id: s_WG6Ku1ybH9RyDrXaCA3Q76
          stance: supports
          locator: CBDB:341801
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

# 王元臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元臣 | accepted |
| bio.summary | 王元臣，清人物。明清進士進士，籍贯青浦，入仕進士，曾任縣丞、訓導。（中国历代人物传记资料库 CBDB 341801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元臣（CBDB 341801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341801&o=json)
