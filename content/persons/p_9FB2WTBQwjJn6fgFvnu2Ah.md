---
schema: wang-person/v1
id: p_9FB2WTBQwjJn6fgFvnu2Ah
status: active
merged_into: null
display_name: 王緯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3yv2i754XuYjtxKiBMQrLP
        subject_person_id: p_9FB2WTBQwjJn6fgFvnu2Ah
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PbXC6c8X1qoVR3Ro2D1vaS
          claim_id: c_3yv2i754XuYjtxKiBMQrLP
          source_id: s_QDSQ6CpMG3YXpFdiu5jYM6
          stance: supports
          locator: CBDB:325693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325693）
          source: &a1
            id: s_QDSQ6CpMG3YXpFdiu5jYM6
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 325693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325693&o=json
            external_identifier: CBDB:325693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xAS5tijKBcitKD8t2PCzCg
        subject_person_id: p_9FB2WTBQwjJn6fgFvnu2Ah
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯，明人物。嘉靖三十八年進士，籍贯定遠，曾任知縣。（中国历代人物传记资料库 CBDB 325693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5AlQnl-PezVNkW6tJNfk4h
          claim_id: c_xAS5tijKBcitKD8t2PCzCg
          source_id: s_QDSQ6CpMG3YXpFdiu5jYM6
          stance: supports
          locator: CBDB:325693
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

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| bio.summary | 王緯，明人物。嘉靖三十八年進士，籍贯定遠，曾任知縣。（中国历代人物传记资料库 CBDB 325693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緯（CBDB 325693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325693&o=json)
