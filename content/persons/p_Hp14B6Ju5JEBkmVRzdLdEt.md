---
schema: wang-person/v1
id: p_Hp14B6Ju5JEBkmVRzdLdEt
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kHqcdvQUX9CxAEkRyhJxZH
        subject_person_id: p_Hp14B6Ju5JEBkmVRzdLdEt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TVeDL7PAvN3SbeeLhz5HkD
          claim_id: c_kHqcdvQUX9CxAEkRyhJxZH
          source_id: s_81ryPSDvwfeyY4C6jLsmtf
          stance: supports
          locator: CBDB:66775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66775）
          source: &a1
            id: s_81ryPSDvwfeyY4C6jLsmtf
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 66775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66775&o=json
            external_identifier: CBDB:66775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3Gsa5K95wa8KmjJ3vxJUKz
        subject_person_id: p_Hp14B6Ju5JEBkmVRzdLdEt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1382年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7P2PP4sMjm922kAw7mVno7
          claim_id: c_3Gsa5K95wa8KmjJ3vxJUKz
          source_id: s_81ryPSDvwfeyY4C6jLsmtf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tTEq7eiQ1GVLbfShTBURK5
        subject_person_id: p_Hp14B6Ju5JEBkmVRzdLdEt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JX9DDE8D879R7zA4XqgcNp
          claim_id: c_tTEq7eiQ1GVLbfShTBURK5
          source_id: s_81ryPSDvwfeyY4C6jLsmtf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qLsPj1oryeCRPcgEqLTgLY
        subject_person_id: p_Hp14B6Ju5JEBkmVRzdLdEt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜（1382年—1439年），明人物。籍贯山陽，身份为良吏;循吏，曾任都督府都督僉事、都督僉事、都指揮僉事。（中国历代人物传记资料库 CBDB 66775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C5Ug9ScWgx6kKWxhX00YaX
          claim_id: c_qLsPj1oryeCRPcgEqLTgLY
          source_id: s_81ryPSDvwfeyY4C6jLsmtf
          stance: supports
          locator: CBDB:66775
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| birth.date | 1382年 | accepted |
| death.date | 1439年 | accepted |
| bio.summary | 王瑜（1382年—1439年），明人物。籍贯山陽，身份为良吏;循吏，曾任都督府都督僉事、都督僉事、都指揮僉事。（中国历代人物传记资料库 CBDB 66775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 66775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66775&o=json)
