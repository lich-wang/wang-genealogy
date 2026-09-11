---
schema: wang-person/v1
id: p_89pgH4bfbrRFrgMdLE34ne
status: active
merged_into: null
display_name: 王春膏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MEPRfjTHkMHerQKhAi2UKM
        subject_person_id: p_89pgH4bfbrRFrgMdLE34ne
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春膏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d2xEvgvMBsgxT6Hmn2ArJp
          claim_id: c_MEPRfjTHkMHerQKhAi2UKM
          source_id: s_BHk2JgxD2MN8T2SPTNzm6R
          stance: supports
          locator: CBDB:638422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638422）
          source: &a1
            id: s_BHk2JgxD2MN8T2SPTNzm6R
            source_type: api_record
            title: 中国历代人物传记资料库：王春膏（CBDB 638422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638422&o=json
            external_identifier: CBDB:638422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bm4DCGMBGYaLvMu6Vs1Sow
        subject_person_id: p_89pgH4bfbrRFrgMdLE34ne
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春膏，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638422）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GnNdRf2jT2nUJaUrakM8um
          claim_id: c_bm4DCGMBGYaLvMu6Vs1Sow
          source_id: s_BHk2JgxD2MN8T2SPTNzm6R
          stance: supports
          locator: CBDB:638422
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

# 王春膏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春膏 | accepted |
| bio.summary | 王春膏，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春膏（CBDB 638422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638422&o=json)
