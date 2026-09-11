---
schema: wang-person/v1
id: p_bA4iBVTQQ9G66Nyixym54r
status: active
merged_into: null
display_name: 王璐卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DnBX1MG4Yu8jracQKByh3E
        subject_person_id: p_bA4iBVTQQ9G66Nyixym54r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璐卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W2j9N8yxxUJJkvWkZLcSq3
          claim_id: c_DnBX1MG4Yu8jracQKByh3E
          source_id: s_CU2uTcSWhDcXouxAewLS7h
          stance: supports
          locator: CBDB:568797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568797）
          source: &a1
            id: s_CU2uTcSWhDcXouxAewLS7h
            source_type: api_record
            title: 中国历代人物传记资料库：王璐卿（CBDB 568797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568797&o=json
            external_identifier: CBDB:568797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ebBdmtB9qSd1qig1DbAuDW
        subject_person_id: p_bA4iBVTQQ9G66Nyixym54r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璐卿，清人物。籍贯蘇州府，身份为畫家。（中国历代人物传记资料库 CBDB 568797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EiPfxwzb5bQeFnHzafAihb
          claim_id: c_ebBdmtB9qSd1qig1DbAuDW
          source_id: s_CU2uTcSWhDcXouxAewLS7h
          stance: supports
          locator: CBDB:568797
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

# 王璐卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璐卿 | accepted |
| bio.summary | 王璐卿，清人物。籍贯蘇州府，身份为畫家。（中国历代人物传记资料库 CBDB 568797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璐卿（CBDB 568797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568797&o=json)
