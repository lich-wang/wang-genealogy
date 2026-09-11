---
schema: wang-person/v1
id: p_EV2pnaXPvrCMT9fUdRZ2JY
status: active
merged_into: null
display_name: 王世潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BsmDSJBGAsdpUzn8Pwq9Pd
        subject_person_id: p_EV2pnaXPvrCMT9fUdRZ2JY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xAznHEr5xRwAw1pAqRD6Az
          claim_id: c_BsmDSJBGAsdpUzn8Pwq9Pd
          source_id: s_4JexpiHN3uGo5r71niZDGm
          stance: supports
          locator: CBDB:635692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635692）
          source: &a1
            id: s_4JexpiHN3uGo5r71niZDGm
            source_type: api_record
            title: 中国历代人物传记资料库：王世潤（CBDB 635692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635692&o=json
            external_identifier: CBDB:635692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQcMBahGw5H6ywXkmQdwJy
        subject_person_id: p_EV2pnaXPvrCMT9fUdRZ2JY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王世潤，清人物。籍贯永州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635692）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bt56Rqkt7nqQMsn49Q_FXf
          claim_id: c_VQcMBahGw5H6ywXkmQdwJy
          source_id: s_4JexpiHN3uGo5r71niZDGm
          stance: supports
          locator: CBDB:635692
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

# 王世潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世潤 | accepted |
| bio.summary | 王世潤，清人物。籍贯永州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635692） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世潤（CBDB 635692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635692&o=json)
