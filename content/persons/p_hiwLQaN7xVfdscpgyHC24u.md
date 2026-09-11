---
schema: wang-person/v1
id: p_hiwLQaN7xVfdscpgyHC24u
status: active
merged_into: null
display_name: 王遇彩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vzKts4BdQPL58fuW4DJnb
        subject_person_id: p_hiwLQaN7xVfdscpgyHC24u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇彩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LuSxPP2PgjE13qqs2pWNEP
          claim_id: c_9vzKts4BdQPL58fuW4DJnb
          source_id: s_wDKP1hEQQEpQJ8tP8SG1x2
          stance: supports
          locator: CBDB:640433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640433）
          source: &a1
            id: s_wDKP1hEQQEpQJ8tP8SG1x2
            source_type: api_record
            title: 中国历代人物传记资料库：王遇彩（CBDB 640433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640433&o=json
            external_identifier: CBDB:640433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xi2RRp1nbDWJzkgtMmDD4q
        subject_person_id: p_hiwLQaN7xVfdscpgyHC24u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇彩，清人物。籍贯萬泉，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640433）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3LW8-QkEyMBPrRcB1-tkBH
          claim_id: c_xi2RRp1nbDWJzkgtMmDD4q
          source_id: s_wDKP1hEQQEpQJ8tP8SG1x2
          stance: supports
          locator: CBDB:640433
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

# 王遇彩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇彩 | accepted |
| bio.summary | 王遇彩，清人物。籍贯萬泉，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇彩（CBDB 640433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640433&o=json)
