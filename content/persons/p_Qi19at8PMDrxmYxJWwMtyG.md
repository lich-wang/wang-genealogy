---
schema: wang-person/v1
id: p_Qi19at8PMDrxmYxJWwMtyG
status: active
merged_into: null
display_name: 王樹桂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDGs2iMaArBqySG363ACGV
        subject_person_id: p_Qi19at8PMDrxmYxJWwMtyG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F5n2sErbox36kiZVEVDm5U
          claim_id: c_DDGs2iMaArBqySG363ACGV
          source_id: s_UdHF6sZ6uSYHpRhhw99nvo
          stance: supports
          locator: CBDB:696861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696861）
          source: &a1
            id: s_UdHF6sZ6uSYHpRhhw99nvo
            source_type: api_record
            title: 中国历代人物传记资料库：王樹桂（CBDB 696861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696861&o=json
            external_identifier: CBDB:696861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NqHGkDzqQgs43G5xJGb7ew
        subject_person_id: p_Qi19at8PMDrxmYxJWwMtyG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹桂，清人物。籍贯婺源，入仕特奏名進士、特奏名諸科 、大挑，曾任鄉試分校、知縣。（中国历代人物传记资料库 CBDB 696861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wu3x6_paTQ7nl-Q1NiDtzn
          claim_id: c_NqHGkDzqQgs43G5xJGb7ew
          source_id: s_UdHF6sZ6uSYHpRhhw99nvo
          stance: supports
          locator: CBDB:696861
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2yTinsLbPz-q4UhqrJZm5e
        subject_person_id: p_Qi19at8PMDrxmYxJWwMtyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FaBysRhu4YJQNPZBE1X6B1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r2VAkJCQGFNqH5AqFCLXlG
          claim_id: c_2yTinsLbPz-q4UhqrJZm5e
          source_id: s_ETXvHF37Pt8uXCNmXW1pL7
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160869：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ETXvHF37Pt8uXCNmXW1pL7
            source_type: api_record
            title: 中国历代人物传记资料库：王程（CBDB 696864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696864&o=json
            external_identifier: CBDB:696864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FaBysRhu4YJQNPZBE1X6B1
        status: active
        display_name: 王程
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xDn7rudUcj10Y1TxMuRMLj
        subject_person_id: p_Qi19at8PMDrxmYxJWwMtyG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UP5UGFMjp7jZjLkQo114G2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Q9WYNb-0V_K5Mk-LBmgfP
          claim_id: c_xDn7rudUcj10Y1TxMuRMLj
          source_id: s_UdHF6sZ6uSYHpRhhw99nvo
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160869：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UP5UGFMjp7jZjLkQo114G2
        status: active
        display_name: 王根
        merged_into_person_id: null
  other: []
---

# 王樹桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹桂 | accepted |
| bio.summary | 王樹桂，清人物。籍贯婺源，入仕特奏名進士、特奏名諸科 、大挑，曾任鄉試分校、知縣。（中国历代人物传记资料库 CBDB 696861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FaBysRhu4YJQNPZBE1X6B1 | 王程 | accepted |
| descendants | p_UP5UGFMjp7jZjLkQo114G2 | 王根 | accepted |

## 外部来源

- [中国历代人物传记资料库：王程（CBDB 696864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696864&o=json)
- [中国历代人物传记资料库：王樹桂（CBDB 696861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696861&o=json)
