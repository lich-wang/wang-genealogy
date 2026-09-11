---
schema: wang-person/v1
id: p_xJbQYa7ZPk6H1udQo1p5bw
status: active
merged_into: null
display_name: 王景亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBWDjKV3SyqwTHb93ijD72
        subject_person_id: p_xJbQYa7ZPk6H1udQo1p5bw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nz4MYd1nvMK6BcGcAdBBtM
          claim_id: c_HBWDjKV3SyqwTHb93ijD72
          source_id: s_6n54GhrSbRcuDaSo232TeQ
          stance: supports
          locator: CBDB:343486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343486）
          source: &a1
            id: s_6n54GhrSbRcuDaSo232TeQ
            source_type: api_record
            title: 中国历代人物传记资料库：王景亮（CBDB 343486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343486&o=json
            external_identifier: CBDB:343486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K2KGPgG4DYmQQRq95Bx37c
        subject_person_id: p_xJbQYa7ZPk6H1udQo1p5bw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景亮，明人物。明清進士進士，籍贯吳江，入仕進士，曾任知州、太僕寺少卿、中書舍人。（中国历代人物传记资料库 CBDB 343486）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GJiRzcaI0VAOpCxKO8CdWN
          claim_id: c_K2KGPgG4DYmQQRq95Bx37c
          source_id: s_6n54GhrSbRcuDaSo232TeQ
          stance: supports
          locator: CBDB:343486
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

# 王景亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景亮 | accepted |
| bio.summary | 王景亮，明人物。明清進士進士，籍贯吳江，入仕進士，曾任知州、太僕寺少卿、中書舍人。（中国历代人物传记资料库 CBDB 343486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景亮（CBDB 343486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343486&o=json)
