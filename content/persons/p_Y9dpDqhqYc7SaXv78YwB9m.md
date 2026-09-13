---
schema: wang-person/v1
id: p_Y9dpDqhqYc7SaXv78YwB9m
status: active
merged_into: null
display_name: 王居卿
cbdb_id: 1793
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqW7eDv5hAC7XrFGMPYZRo
        subject_person_id: p_Y9dpDqhqYc7SaXv78YwB9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居卿，宋人物。籍贯蓬萊，入仕進士，曾任都轉運使、天章閣待制、轉運副使。（中国历代人物传记资料库 CBDB 1793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Kmo2DQtskmwvyJ4CgYjsvR
          claim_id: c_xqW7eDv5hAC7XrFGMPYZRo
          source_id: s_KKHwALavPo56v3EeADGY67
          stance: supports
          locator: CBDB:1793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KKHwALavPo56v3EeADGY67
            source_type: api_record
            title: 中国历代人物传记资料库：王居卿（CBDB 1793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1793&o=json
            external_identifier: CBDB:1793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gDpDW3ptFR6GBvCBf6Nmoq
        subject_person_id: p_Y9dpDqhqYc7SaXv78YwB9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5QRdK76bwgHBP5cm58vNfk
          claim_id: c_gDpDW3ptFR6GBvCBf6Nmoq
          source_id: s_KKHwALavPo56v3EeADGY67
          stance: supports
          locator: CBDB:1793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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

# 王居卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王居卿，宋人物。籍贯蓬萊，入仕進士，曾任都轉運使、天章閣待制、轉運副使。（中国历代人物传记资料库 CBDB 1793） | accepted |
| name.primary | 王居卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居卿（CBDB 1793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1793&o=json)
