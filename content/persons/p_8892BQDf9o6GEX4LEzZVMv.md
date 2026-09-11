---
schema: wang-person/v1
id: p_8892BQDf9o6GEX4LEzZVMv
status: active
merged_into: null
display_name: 王易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9SVmbF3CUT1RGunHEs9Gn
        subject_person_id: p_8892BQDf9o6GEX4LEzZVMv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W1N9NGHMGkyQUFAtP75GLC
          claim_id: c_C9SVmbF3CUT1RGunHEs9Gn
          source_id: s_eNUSDgPa49G4u1PFtSJZ2x
          stance: supports
          locator: CBDB:39458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39458）
          source: &a1
            id: s_eNUSDgPa49G4u1PFtSJZ2x
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 39458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39458&o=json
            external_identifier: CBDB:39458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_beFbhNABDZB2KuBN7NY4cv
        subject_person_id: p_8892BQDf9o6GEX4LEzZVMv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1004年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YeZxy5CjCd7kM8tDn3V73Q
          claim_id: c_beFbhNABDZB2KuBN7NY4cv
          source_id: s_eNUSDgPa49G4u1PFtSJZ2x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tAdkN2ck7dgHc1DCzjLGPH
        subject_person_id: p_8892BQDf9o6GEX4LEzZVMv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1081年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f94LUhU9St6VoMPxEkxZ3k
          claim_id: c_tAdkN2ck7dgHc1DCzjLGPH
          source_id: s_eNUSDgPa49G4u1PFtSJZ2x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9s97FaJt9PDJ9sH4KDxDYv
        subject_person_id: p_8892BQDf9o6GEX4LEzZVMv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易（1004年—1081年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任兵馬都監、皇城使、司天監冬官正。（中国历代人物传记资料库 CBDB 39458）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KnQ0ZoRbQf1iJTtXfZZTc1
          claim_id: c_9s97FaJt9PDJ9sH4KDxDYv
          source_id: s_eNUSDgPa49G4u1PFtSJZ2x
          stance: supports
          locator: CBDB:39458
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

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| birth.date | 1004年 | accepted |
| death.date | 1081年 | accepted |
| bio.summary | 王易（1004年—1081年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任兵馬都監、皇城使、司天監冬官正。（中国历代人物传记资料库 CBDB 39458） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王易（CBDB 39458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39458&o=json)
