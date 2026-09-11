---
schema: wang-person/v1
id: p_8t9xmnzq9p5dLGFbgLji6W
status: active
merged_into: null
display_name: 王天祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NNTC6FeGg7XWZZmHWaxKSX
        subject_person_id: p_8t9xmnzq9p5dLGFbgLji6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BW2vpUtUUsRfbPfni6bBK
          claim_id: c_NNTC6FeGg7XWZZmHWaxKSX
          source_id: s_Lvjzc9CCMiBrC9ntDz5VaM
          stance: supports
          locator: CBDB:492343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492343）
          source: &a1
            id: s_Lvjzc9CCMiBrC9ntDz5VaM
            source_type: api_record
            title: 中国历代人物传记资料库：王天祺（CBDB 492343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492343&o=json
            external_identifier: CBDB:492343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7VbceJQkEABbLaVo3AmQ1w
        subject_person_id: p_8t9xmnzq9p5dLGFbgLji6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天祺，清人物。曾任典史。（中国历代人物传记资料库 CBDB 492343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ycc1q0tLSUw06Qj0Z0sEwN
          claim_id: c_7VbceJQkEABbLaVo3AmQ1w
          source_id: s_Lvjzc9CCMiBrC9ntDz5VaM
          stance: supports
          locator: CBDB:492343
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

# 王天祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天祺 | accepted |
| bio.summary | 王天祺，清人物。曾任典史。（中国历代人物传记资料库 CBDB 492343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天祺（CBDB 492343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492343&o=json)
