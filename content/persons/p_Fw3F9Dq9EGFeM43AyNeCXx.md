---
schema: wang-person/v1
id: p_Fw3F9Dq9EGFeM43AyNeCXx
status: active
merged_into: null
display_name: 王式魯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YUKUnRXcC2McgfYEe4cJgk
        subject_person_id: p_Fw3F9Dq9EGFeM43AyNeCXx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ceT7xzGgK4u9GMr174tU6
          claim_id: c_YUKUnRXcC2McgfYEe4cJgk
          source_id: s_fHgCTc26j9vVoe4Y5wDHWv
          stance: supports
          locator: CBDB:637610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637610）
          source: &a1
            id: s_fHgCTc26j9vVoe4Y5wDHWv
            source_type: api_record
            title: 中国历代人物传记资料库：王式魯（CBDB 637610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637610&o=json
            external_identifier: CBDB:637610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eTfPX4UgrukSVGrBwCgXcv
        subject_person_id: p_Fw3F9Dq9EGFeM43AyNeCXx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式魯，清人物。籍贯撫州府，曾任訓導。（中国历代人物传记资料库 CBDB 637610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_odgs1QxnOlV5ra-fEk73Vi
          claim_id: c_eTfPX4UgrukSVGrBwCgXcv
          source_id: s_fHgCTc26j9vVoe4Y5wDHWv
          stance: supports
          locator: CBDB:637610
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

# 王式魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式魯 | accepted |
| bio.summary | 王式魯，清人物。籍贯撫州府，曾任訓導。（中国历代人物传记资料库 CBDB 637610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式魯（CBDB 637610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637610&o=json)
