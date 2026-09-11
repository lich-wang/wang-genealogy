---
schema: wang-person/v1
id: p_ukNKj4AWtPJcxG24migNCL
status: active
merged_into: null
display_name: 王邦瑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mu2Qp1mgGrLvrWeuztkkJY
        subject_person_id: p_ukNKj4AWtPJcxG24migNCL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cRKPP2FbTrSxFvbiL7vSAp
          claim_id: c_mu2Qp1mgGrLvrWeuztkkJY
          source_id: s_m8ZTcjAqivRy9115hbANzu
          stance: supports
          locator: CBDB:640483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640483）
          source: &a1
            id: s_m8ZTcjAqivRy9115hbANzu
            source_type: api_record
            title: 中国历代人物传记资料库：王邦瑾（CBDB 640483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640483&o=json
            external_identifier: CBDB:640483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zXPdPZp1ogLgPfe9nqqtL6
        subject_person_id: p_ukNKj4AWtPJcxG24migNCL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦瑾，清人物。籍贯南昌，入仕鄉貢舉人，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 640483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8p67yd8YsPUd3eSrMwWM8r
          claim_id: c_zXPdPZp1ogLgPfe9nqqtL6
          source_id: s_m8ZTcjAqivRy9115hbANzu
          stance: supports
          locator: CBDB:640483
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

# 王邦瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦瑾 | accepted |
| bio.summary | 王邦瑾，清人物。籍贯南昌，入仕鄉貢舉人，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 640483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦瑾（CBDB 640483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640483&o=json)
