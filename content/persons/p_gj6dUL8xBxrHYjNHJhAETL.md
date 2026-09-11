---
schema: wang-person/v1
id: p_gj6dUL8xBxrHYjNHJhAETL
status: active
merged_into: null
display_name: 王如琰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nh19mEBd4Y27qQRqjnK2VD
        subject_person_id: p_gj6dUL8xBxrHYjNHJhAETL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NPqwZe7P4MKTxdavjHcjWD
          claim_id: c_nh19mEBd4Y27qQRqjnK2VD
          source_id: s_tPN18Fjbcd7Py46tD93miu
          stance: supports
          locator: CBDB:574278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574278）
          source: &a1
            id: s_tPN18Fjbcd7Py46tD93miu
            source_type: api_record
            title: 中国历代人物传记资料库：王如琰（CBDB 574278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574278&o=json
            external_identifier: CBDB:574278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7aayDe5NfnSc6LpwoJAgm
        subject_person_id: p_gj6dUL8xBxrHYjNHJhAETL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王如琰，清人物。籍贯黃岡，入仕科舉制舉: 賢良方正科，曾任教諭。（中国历代人物传记资料库 CBDB 574278）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z9fRf8q8IqovfxLVsZaDR2
          claim_id: c_T7aayDe5NfnSc6LpwoJAgm
          source_id: s_tPN18Fjbcd7Py46tD93miu
          stance: supports
          locator: CBDB:574278
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

# 王如琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如琰 | accepted |
| bio.summary | 王如琰，清人物。籍贯黃岡，入仕科舉制舉: 賢良方正科，曾任教諭。（中国历代人物传记资料库 CBDB 574278） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如琰（CBDB 574278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574278&o=json)
