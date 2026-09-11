---
schema: wang-person/v1
id: p_bGG6V77Kk9a4VMeufU9Pgq
status: active
merged_into: null
display_name: 王可相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yz5YsXEJQGB6SLKkFTEkW8
        subject_person_id: p_bGG6V77Kk9a4VMeufU9Pgq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uVBcz3X2ibyceVNuhhJtL8
          claim_id: c_Yz5YsXEJQGB6SLKkFTEkW8
          source_id: s_3MuHevpFyWSPE1VZx8iivf
          stance: supports
          locator: CBDB:414032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414032）
          source: &a1
            id: s_3MuHevpFyWSPE1VZx8iivf
            source_type: api_record
            title: 中国历代人物传记资料库：王可相（CBDB 414032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414032&o=json
            external_identifier: CBDB:414032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQfDU4q9r7ydsUKngMFTU4
        subject_person_id: p_bGG6V77Kk9a4VMeufU9Pgq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可相，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xdc2d75ETgE3aKe9MLjJgp
          claim_id: c_cQfDU4q9r7ydsUKngMFTU4
          source_id: s_3MuHevpFyWSPE1VZx8iivf
          stance: supports
          locator: CBDB:414032
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

# 王可相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可相 | accepted |
| bio.summary | 王可相，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可相（CBDB 414032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414032&o=json)
