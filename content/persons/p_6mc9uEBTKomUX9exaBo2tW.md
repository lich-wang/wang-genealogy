---
schema: wang-person/v1
id: p_6mc9uEBTKomUX9exaBo2tW
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBRG5Xc6qPKZwWtk14MUfG
        subject_person_id: p_6mc9uEBTKomUX9exaBo2tW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2V3C64C9KGRLTgdQ4HpqCE
          claim_id: c_kBRG5Xc6qPKZwWtk14MUfG
          source_id: s_ABohP5adT3jqwRHyXPpe7o
          stance: supports
          locator: CBDB:329596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329596）
          source: &a1
            id: s_ABohP5adT3jqwRHyXPpe7o
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 329596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json
            external_identifier: CBDB:329596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EU8M2Z8f6LXmVv4zhy73Qz
        subject_person_id: p_6mc9uEBTKomUX9exaBo2tW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。嘉靖四十四年進士，籍贯無錫，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 329596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gIH5M8XaanfFUjC5yeTlI5
          claim_id: c_EU8M2Z8f6LXmVv4zhy73Qz
          source_id: s_ABohP5adT3jqwRHyXPpe7o
          stance: supports
          locator: CBDB:329596
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。嘉靖四十四年進士，籍贯無錫，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 329596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 329596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json)
