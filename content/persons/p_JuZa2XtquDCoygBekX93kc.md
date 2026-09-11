---
schema: wang-person/v1
id: p_JuZa2XtquDCoygBekX93kc
status: active
merged_into: null
display_name: 王壽禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ALRHMHsyPHzLAwYtdh2tL
        subject_person_id: p_JuZa2XtquDCoygBekX93kc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vZbcPiLGpnnykFSzQpAn7v
          claim_id: c_9ALRHMHsyPHzLAwYtdh2tL
          source_id: s_ejmguAhsyayWSHsf6NWSKB
          stance: supports
          locator: CBDB:636847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636847）
          source: &a1
            id: s_ejmguAhsyayWSHsf6NWSKB
            source_type: api_record
            title: 中国历代人物传记资料库：王壽禧（CBDB 636847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636847&o=json
            external_identifier: CBDB:636847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nYZxoJBoC8DwERVoJw3w3G
        subject_person_id: p_JuZa2XtquDCoygBekX93kc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽禧，清人物。籍贯福州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e4Xzee6_tns4795xb9BTPI
          claim_id: c_nYZxoJBoC8DwERVoJw3w3G
          source_id: s_ejmguAhsyayWSHsf6NWSKB
          stance: supports
          locator: CBDB:636847
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

# 王壽禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽禧 | accepted |
| bio.summary | 王壽禧，清人物。籍贯福州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽禧（CBDB 636847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636847&o=json)
