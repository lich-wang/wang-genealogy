---
schema: wang-person/v1
id: p_D4F6KQwASN4YDMUpgPFRzD
status: active
merged_into: null
display_name: 王憲成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZmGBEnvApxS9cKeMn11SJ
        subject_person_id: p_D4F6KQwASN4YDMUpgPFRzD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgPaXJ2jeTqH5DusK85wdg
          claim_id: c_1ZmGBEnvApxS9cKeMn11SJ
          source_id: s_qK9Vq1GxDYBxbS359PSP6o
          stance: supports
          locator: CBDB:342579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342579）
          source: &a1
            id: s_qK9Vq1GxDYBxbS359PSP6o
            source_type: api_record
            title: 中国历代人物传记资料库：王憲成（CBDB 342579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342579&o=json
            external_identifier: CBDB:342579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b46Qwvr2BEhN53Rww9X22K
        subject_person_id: p_D4F6KQwASN4YDMUpgPFRzD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲成，清人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 342579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iKHn03PKWPutqbI9R9HcUR
          claim_id: c_b46Qwvr2BEhN53Rww9X22K
          source_id: s_qK9Vq1GxDYBxbS359PSP6o
          stance: supports
          locator: CBDB:342579
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

# 王憲成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲成 | accepted |
| bio.summary | 王憲成，清人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 342579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲成（CBDB 342579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342579&o=json)
