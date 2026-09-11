---
schema: wang-person/v1
id: p_Nsc1CFnaeH6UnsV9UCBk4Z
status: active
merged_into: null
display_name: 王保奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kr3bdaEebRjtAW7Q9HHXP5
        subject_person_id: p_Nsc1CFnaeH6UnsV9UCBk4Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZRTLcAxhCwKovjPr51anup
          claim_id: c_Kr3bdaEebRjtAW7Q9HHXP5
          source_id: s_GjvgcMhDr2X8CNHx4P8tma
          stance: supports
          locator: CBDB:636048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636048）
          source: &a1
            id: s_GjvgcMhDr2X8CNHx4P8tma
            source_type: api_record
            title: 中国历代人物传记资料库：王保奎（CBDB 636048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636048&o=json
            external_identifier: CBDB:636048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LhCC8NCvazq1E2XTRoXL46
        subject_person_id: p_Nsc1CFnaeH6UnsV9UCBk4Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保奎，清人物。籍贯長山，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 636048）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EgoexbKNdEwkIc158sgcEs
          claim_id: c_LhCC8NCvazq1E2XTRoXL46
          source_id: s_GjvgcMhDr2X8CNHx4P8tma
          stance: supports
          locator: CBDB:636048
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

# 王保奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保奎 | accepted |
| bio.summary | 王保奎，清人物。籍贯長山，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 636048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保奎（CBDB 636048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636048&o=json)
