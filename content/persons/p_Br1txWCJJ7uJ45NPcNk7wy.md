---
schema: wang-person/v1
id: p_Br1txWCJJ7uJ45NPcNk7wy
status: active
merged_into: null
display_name: 王韶珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_djv5N7cs9PS46Lrjb9JyDb
        subject_person_id: p_Br1txWCJJ7uJ45NPcNk7wy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q4Sd9wZqAme6GNmcsJp9uk
          claim_id: c_djv5N7cs9PS46Lrjb9JyDb
          source_id: s_zefqCGwtep72C6p69EvQur
          stance: supports
          locator: CBDB:640858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640858）
          source: &a1
            id: s_zefqCGwtep72C6p69EvQur
            source_type: api_record
            title: 中国历代人物传记资料库：王韶珣（CBDB 640858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640858&o=json
            external_identifier: CBDB:640858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dk99mEkvAoSS3cgLy4KUd4
        subject_person_id: p_Br1txWCJJ7uJ45NPcNk7wy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶珣，清人物。籍贯桂林府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BJdFp5Ds2WVbv_zBAXkYB_
          claim_id: c_Dk99mEkvAoSS3cgLy4KUd4
          source_id: s_zefqCGwtep72C6p69EvQur
          stance: supports
          locator: CBDB:640858
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

# 王韶珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶珣 | accepted |
| bio.summary | 王韶珣，清人物。籍贯桂林府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韶珣（CBDB 640858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640858&o=json)
