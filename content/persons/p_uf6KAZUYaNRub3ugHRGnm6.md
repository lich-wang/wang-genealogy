---
schema: wang-person/v1
id: p_uf6KAZUYaNRub3ugHRGnm6
status: active
merged_into: null
display_name: 王平功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PAbhub5M7jxHeVxL7EeHxf
        subject_person_id: p_uf6KAZUYaNRub3ugHRGnm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aCFDKiyL2Tgp2NneRm2Bud
          claim_id: c_PAbhub5M7jxHeVxL7EeHxf
          source_id: s_3RvC1MerNwhcGH4nroU2f9
          stance: supports
          locator: CBDB:637405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637405）
          source: &a1
            id: s_3RvC1MerNwhcGH4nroU2f9
            source_type: api_record
            title: 中国历代人物传记资料库：王平功（CBDB 637405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637405&o=json
            external_identifier: CBDB:637405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m2EdnJnrxHGJfvrrx3BNiB
        subject_person_id: p_uf6KAZUYaNRub3ugHRGnm6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王平功，清人物。籍贯奉天府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637405）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dq7COUl8Q5fGvQGE_-yssv
          claim_id: c_m2EdnJnrxHGJfvrrx3BNiB
          source_id: s_3RvC1MerNwhcGH4nroU2f9
          stance: supports
          locator: CBDB:637405
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

# 王平功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平功 | accepted |
| bio.summary | 王平功，清人物。籍贯奉天府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平功（CBDB 637405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637405&o=json)
