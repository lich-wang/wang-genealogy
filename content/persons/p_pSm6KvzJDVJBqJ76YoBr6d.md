---
schema: wang-person/v1
id: p_pSm6KvzJDVJBqJ76YoBr6d
status: active
merged_into: null
display_name: 王植三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46YAB79FFHgaFNw6ZxX9AW
        subject_person_id: p_pSm6KvzJDVJBqJ76YoBr6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wEhWMThR8f45o2PPCkWPYS
          claim_id: c_46YAB79FFHgaFNw6ZxX9AW
          source_id: s_E5EZ7nBPWRfEdW53hGzwLH
          stance: supports
          locator: CBDB:638742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638742）
          source: &a1
            id: s_E5EZ7nBPWRfEdW53hGzwLH
            source_type: api_record
            title: 中国历代人物传记资料库：王植三（CBDB 638742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638742&o=json
            external_identifier: CBDB:638742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_31Wm6eQ4P3tJ9fL8HQzNig
        subject_person_id: p_pSm6KvzJDVJBqJ76YoBr6d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植三，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aptyaeSbGKTflzJU1TbdrC
          claim_id: c_31Wm6eQ4P3tJ9fL8HQzNig
          source_id: s_E5EZ7nBPWRfEdW53hGzwLH
          stance: supports
          locator: CBDB:638742
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

# 王植三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植三 | accepted |
| bio.summary | 王植三，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王植三（CBDB 638742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638742&o=json)
