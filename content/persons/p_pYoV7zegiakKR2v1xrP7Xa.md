---
schema: wang-person/v1
id: p_pYoV7zegiakKR2v1xrP7Xa
status: active
merged_into: null
display_name: 王梅仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LewTYtB47NXdETwRbFLUba
        subject_person_id: p_pYoV7zegiakKR2v1xrP7Xa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rar9L2v9Nxar1dPoMvvtXF
          claim_id: c_LewTYtB47NXdETwRbFLUba
          source_id: s_TG7VC9hDd8AcpZPWpaeJw4
          stance: supports
          locator: CBDB:566440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566440）
          source: &a1
            id: s_TG7VC9hDd8AcpZPWpaeJw4
            source_type: api_record
            title: 中国历代人物传记资料库：王梅仙（CBDB 566440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566440&o=json
            external_identifier: CBDB:566440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6EXRw6fK2vEM32XrQXMYVo
        subject_person_id: p_pYoV7zegiakKR2v1xrP7Xa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅仙，明人物。籍贯北直隸。（中国历代人物传记资料库 CBDB 566440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l6N102gXq5Xo_3SeSXPVLa
          claim_id: c_6EXRw6fK2vEM32XrQXMYVo
          source_id: s_TG7VC9hDd8AcpZPWpaeJw4
          stance: supports
          locator: CBDB:566440
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

# 王梅仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梅仙 | accepted |
| bio.summary | 王梅仙，明人物。籍贯北直隸。（中国历代人物传记资料库 CBDB 566440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梅仙（CBDB 566440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566440&o=json)
