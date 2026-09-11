---
schema: wang-person/v1
id: p_PC2c7ahzdsQHdNTCQqVdqt
status: active
merged_into: null
display_name: 王祖詒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9jWVL2sWjhBKkQ3KH4yTbZ
        subject_person_id: p_PC2c7ahzdsQHdNTCQqVdqt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖詒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YmfiMvmsBF9w3V2PgeZJQa
          claim_id: c_9jWVL2sWjhBKkQ3KH4yTbZ
          source_id: s_b7Ljw5scfxY3SAmUs8Tvro
          stance: supports
          locator: CBDB:639584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639584）
          source: &a1
            id: s_b7Ljw5scfxY3SAmUs8Tvro
            source_type: api_record
            title: 中国历代人物传记资料库：王祖詒（CBDB 639584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639584&o=json
            external_identifier: CBDB:639584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SpV7T9XcBSthewTD9ENQVU
        subject_person_id: p_PC2c7ahzdsQHdNTCQqVdqt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖詒，清人物。籍贯濱州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gwy1T2IJFB6cyNlte7fRMS
          claim_id: c_SpV7T9XcBSthewTD9ENQVU
          source_id: s_b7Ljw5scfxY3SAmUs8Tvro
          stance: supports
          locator: CBDB:639584
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

# 王祖詒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖詒 | accepted |
| bio.summary | 王祖詒，清人物。籍贯濱州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖詒（CBDB 639584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639584&o=json)
