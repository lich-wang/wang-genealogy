---
schema: wang-person/v1
id: p_Lku2uNWZQ412aQLguMSwSV
status: active
merged_into: null
display_name: 王樹屏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g86Vvo43gbbJ13v5FNYPF1
        subject_person_id: p_Lku2uNWZQ412aQLguMSwSV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mejd3Kp9Ch87z7ENng28Nm
          claim_id: c_g86Vvo43gbbJ13v5FNYPF1
          source_id: s_VDNKfeQhccYMWhdzWpVjMx
          stance: supports
          locator: CBDB:638845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638845）
          source: &a1
            id: s_VDNKfeQhccYMWhdzWpVjMx
            source_type: api_record
            title: 中国历代人物传记资料库：王樹屏（CBDB 638845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638845&o=json
            external_identifier: CBDB:638845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cKcuWuCLujThB86WwfPpAE
        subject_person_id: p_Lku2uNWZQ412aQLguMSwSV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹屏，清人物。籍贯永平府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9fu_6L516_Bu2PC2HqgYhL
          claim_id: c_cKcuWuCLujThB86WwfPpAE
          source_id: s_VDNKfeQhccYMWhdzWpVjMx
          stance: supports
          locator: CBDB:638845
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

# 王樹屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹屏 | accepted |
| bio.summary | 王樹屏，清人物。籍贯永平府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638845） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹屏（CBDB 638845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638845&o=json)
