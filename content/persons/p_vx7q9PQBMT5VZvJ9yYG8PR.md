---
schema: wang-person/v1
id: p_vx7q9PQBMT5VZvJ9yYG8PR
status: active
merged_into: null
display_name: 王貞白
cbdb_id: 91990
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzS2PRbahorhCs19gqNKC8
        subject_person_id: p_vx7q9PQBMT5VZvJ9yYG8PR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞白，唐人物。籍贯永豐，身份为詩人、文人，入仕進士，曾任校書郎。（中国历代人物传记资料库 CBDB 91990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iS-2hAERlh5oXnSuPPoIfq
          claim_id: c_FzS2PRbahorhCs19gqNKC8
          source_id: s_HD6piJBrN3wxSvtmsr42w9
          stance: supports
          locator: CBDB:91990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HD6piJBrN3wxSvtmsr42w9
            source_type: api_record
            title: 中国历代人物传记资料库：王貞白（CBDB 91990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91990&o=json
            external_identifier: CBDB:91990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKGXpc3nvFPY68GosiCmzY
        subject_person_id: p_vx7q9PQBMT5VZvJ9yYG8PR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞白
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ao1HAA5PuhkttVvbBiFKAR
          claim_id: c_sKGXpc3nvFPY68GosiCmzY
          source_id: s_HD6piJBrN3wxSvtmsr42w9
          stance: supports
          locator: CBDB:91990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 唐
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

# 王貞白

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貞白，唐人物。籍贯永豐，身份为詩人、文人，入仕進士，曾任校書郎。（中国历代人物传记资料库 CBDB 91990） | accepted |
| name.primary | 王貞白 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貞白（CBDB 91990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91990&o=json)
