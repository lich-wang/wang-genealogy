---
schema: wang-person/v1
id: p_gXAAygEUDixJCtwBnHQQ1f
status: active
merged_into: null
display_name: 王滿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MYxB8M3zwxaEJQyK5u6dKK
        subject_person_id: p_gXAAygEUDixJCtwBnHQQ1f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8tLC7VwyMAKUvkGBL8Kq8
          claim_id: c_MYxB8M3zwxaEJQyK5u6dKK
          source_id: s_vzDaeceFfLJjGgjzdBy1Fa
          stance: supports
          locator: CBDB:250484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250484）
          source: &a1
            id: s_vzDaeceFfLJjGgjzdBy1Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 250484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250484&o=json
            external_identifier: CBDB:250484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WivfssBMW7vMgL6m2VUo4x
        subject_person_id: p_gXAAygEUDixJCtwBnHQQ1f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8bvUG0feOKXq99bnSWU_zj
          claim_id: c_WivfssBMW7vMgL6m2VUo4x
          source_id: s_vzDaeceFfLJjGgjzdBy1Fa
          stance: supports
          locator: CBDB:250484
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

# 王滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滿 | accepted |
| bio.summary | 王滿，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滿（CBDB 250484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250484&o=json)
