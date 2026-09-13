---
schema: wang-person/v1
id: p_fJ6BwD4QqhvgPod68Fnvvo
status: active
merged_into: null
display_name: 王朝貢
cbdb_id: 295497
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VpLnsCg7QLJveug58PMcG6
        subject_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝貢，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295497）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MYbV0NBVaP-DSjfSLX9NIr
          claim_id: c_VpLnsCg7QLJveug58PMcG6
          source_id: s_YYGB99Xtvy4dQSZcPkeCAu
          stance: supports
          locator: CBDB:295497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YYGB99Xtvy4dQSZcPkeCAu
            source_type: api_record
            title: 中国历代人物传记资料库：王朝貢（CBDB 295497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json
            external_identifier: CBDB:295497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMhmwKHHgUvmEutiXT2y6B
        subject_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝貢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3Z9ysMGZ2Yq7rQqTyT1AGn
          claim_id: c_sMhmwKHHgUvmEutiXT2y6B
          source_id: s_YYGB99Xtvy4dQSZcPkeCAu
          stance: supports
          locator: CBDB:295497
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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

# 王朝貢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝貢，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295497） | accepted |
| name.primary | 王朝貢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝貢（CBDB 295497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json)
