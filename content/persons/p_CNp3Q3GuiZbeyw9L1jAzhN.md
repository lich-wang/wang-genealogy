---
schema: wang-person/v1
id: p_CNp3Q3GuiZbeyw9L1jAzhN
status: active
merged_into: null
display_name: 王世隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yEoBzkFTapuzj6ThyJBcMp
        subject_person_id: p_CNp3Q3GuiZbeyw9L1jAzhN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2f8bbnGxk3Sw1UN27qzK5D
          claim_id: c_yEoBzkFTapuzj6ThyJBcMp
          source_id: s_2GQbeBKY4E7iaYQBLz3JCY
          stance: supports
          locator: CBDB:343191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343191）
          source: &a1
            id: s_2GQbeBKY4E7iaYQBLz3JCY
            source_type: api_record
            title: 中国历代人物传记资料库：王世隆（CBDB 343191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343191&o=json
            external_identifier: CBDB:343191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EAp8D85Ltc2h5NGP3AH6gR
        subject_person_id: p_CNp3Q3GuiZbeyw9L1jAzhN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆，明人物。明清進士進士，籍贯大興，入仕進士，曾任典史。（中国历代人物传记资料库 CBDB 343191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nM0URdj4416HHEcdCsuE4C
          claim_id: c_EAp8D85Ltc2h5NGP3AH6gR
          source_id: s_2GQbeBKY4E7iaYQBLz3JCY
          stance: supports
          locator: CBDB:343191
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

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世隆 | accepted |
| bio.summary | 王世隆，明人物。明清進士進士，籍贯大興，入仕進士，曾任典史。（中国历代人物传记资料库 CBDB 343191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世隆（CBDB 343191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343191&o=json)
