---
schema: wang-person/v1
id: p_wpuFNZnLqtyUBZUSZtR4bf
status: active
merged_into: null
display_name: 王琴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXUnNtZNFc8bud21PNKgjr
        subject_person_id: p_wpuFNZnLqtyUBZUSZtR4bf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f3QeE4kh7QFEUmwLEApByV
          claim_id: c_RXUnNtZNFc8bud21PNKgjr
          source_id: s_FVVX9v451hnwU5ByG6tmHp
          stance: supports
          locator: CBDB:295392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295392）
          source: &a1
            id: s_FVVX9v451hnwU5ByG6tmHp
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 295392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json
            external_identifier: CBDB:295392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fJEWHAw3jZnwZ819KNiNvF
        subject_person_id: p_wpuFNZnLqtyUBZUSZtR4bf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴，明人物。嘉靖十四年進士，籍贯任邱，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 295392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xDy7_9ksDUpGemCqAQ1Xw2
          claim_id: c_fJEWHAw3jZnwZ819KNiNvF
          source_id: s_FVVX9v451hnwU5ByG6tmHp
          stance: supports
          locator: CBDB:295392
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

# 王琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴 | accepted |
| bio.summary | 王琴，明人物。嘉靖十四年進士，籍贯任邱，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 295392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琴（CBDB 295392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json)
