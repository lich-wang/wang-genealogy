---
schema: wang-person/v1
id: p_JiT1wiVX2foyvUEAzYXTvj
status: active
merged_into: null
display_name: 王伍拾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RBaYQ8mJvB3eNok135k5iK
        subject_person_id: p_JiT1wiVX2foyvUEAzYXTvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍拾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1vB7iKK1K1ZiW6XrPRsVU
          claim_id: c_RBaYQ8mJvB3eNok135k5iK
          source_id: s_vK9jzPnmVu9pzW8NKEHHR4
          stance: supports
          locator: CBDB:635969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635969）
          source: &a1
            id: s_vK9jzPnmVu9pzW8NKEHHR4
            source_type: api_record
            title: 中国历代人物传记资料库：王伍拾（CBDB 635969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635969&o=json
            external_identifier: CBDB:635969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKYhW1jB9yxZFJ3T74KBYZ
        subject_person_id: p_JiT1wiVX2foyvUEAzYXTvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍拾，清人物。籍贯奉天府，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 635969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b7a6oB6FoO_TC0R6sjzbEM
          claim_id: c_sKYhW1jB9yxZFJ3T74KBYZ
          source_id: s_vK9jzPnmVu9pzW8NKEHHR4
          stance: supports
          locator: CBDB:635969
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

# 王伍拾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伍拾 | accepted |
| bio.summary | 王伍拾，清人物。籍贯奉天府，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 635969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伍拾（CBDB 635969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635969&o=json)
