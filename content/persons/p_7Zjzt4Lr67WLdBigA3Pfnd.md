---
schema: wang-person/v1
id: p_7Zjzt4Lr67WLdBigA3Pfnd
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aUB7H4S7UiYoUi3sdCMGkL
        subject_person_id: p_7Zjzt4Lr67WLdBigA3Pfnd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VCHqH3QiDNXFdELQxvC616
          claim_id: c_aUB7H4S7UiYoUi3sdCMGkL
          source_id: s_F5kP9xFcHDLLS1opUTukE4
          stance: supports
          locator: CBDB:239891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239891）
          source: &a1
            id: s_F5kP9xFcHDLLS1opUTukE4
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 239891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239891&o=json
            external_identifier: CBDB:239891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_shDpvjUjnmz6CoTxGEPEzN
        subject_person_id: p_7Zjzt4Lr67WLdBigA3Pfnd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239891）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qkXuPyNWc8kac6kPDYsPDX
          claim_id: c_shDpvjUjnmz6CoTxGEPEzN
          source_id: s_F5kP9xFcHDLLS1opUTukE4
          stance: supports
          locator: CBDB:239891
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239891） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 239891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239891&o=json)
