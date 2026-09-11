---
schema: wang-person/v1
id: p_x3NximbHYaR1GpVAdf8uUY
status: active
merged_into: null
display_name: 王仲薿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FkFh9zbudXNN1A6sqkDm7J
        subject_person_id: p_x3NximbHYaR1GpVAdf8uUY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲薿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yKdM9VKEK1HpgCKbZK4fHN
          claim_id: c_FkFh9zbudXNN1A6sqkDm7J
          source_id: s_ei5hFLp9Ww29FeXPy7vunL
          stance: supports
          locator: CBDB:97791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97791）
          source: &a1
            id: s_ei5hFLp9Ww29FeXPy7vunL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲薿（CBDB 97791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97791&o=json
            external_identifier: CBDB:97791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kXN4JSiK2EFUs36yi3gxWP
        subject_person_id: p_x3NximbHYaR1GpVAdf8uUY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲薿，宋人物。曾任朝議大夫、中大夫、顯謨閣待制。（中国历代人物传记资料库 CBDB 97791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SZQzwbhHE0xa5WQrFMggUQ
          claim_id: c_kXN4JSiK2EFUs36yi3gxWP
          source_id: s_ei5hFLp9Ww29FeXPy7vunL
          stance: supports
          locator: CBDB:97791
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

# 王仲薿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲薿 | accepted |
| bio.summary | 王仲薿，宋人物。曾任朝議大夫、中大夫、顯謨閣待制。（中国历代人物传记资料库 CBDB 97791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲薿（CBDB 97791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97791&o=json)
