---
schema: wang-person/v1
id: p_qiu44kepNERt2LuwqMDYRz
status: active
merged_into: null
display_name: 王瓛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJRySJK9behQWLZr14GkUm
        subject_person_id: p_qiu44kepNERt2LuwqMDYRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VrgpxF8gyhgTMb7CTSv1Vw
          claim_id: c_iJRySJK9behQWLZr14GkUm
          source_id: s_k4SBCoGQfKPHWbeBGo7D7p
          stance: supports
          locator: CBDB:479549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479549）
          source: &a1
            id: s_k4SBCoGQfKPHWbeBGo7D7p
            source_type: api_record
            title: 中国历代人物传记资料库：王瓛（CBDB 479549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479549&o=json
            external_identifier: CBDB:479549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xxARhFXDK6xjBY8D4Hh95J
        subject_person_id: p_qiu44kepNERt2LuwqMDYRz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛，元人物。曾任肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 479549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AtxvjH2-vdzbVc_5yXSosn
          claim_id: c_xxARhFXDK6xjBY8D4Hh95J
          source_id: s_k4SBCoGQfKPHWbeBGo7D7p
          stance: supports
          locator: CBDB:479549
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

# 王瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓛 | accepted |
| bio.summary | 王瓛，元人物。曾任肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 479549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓛（CBDB 479549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479549&o=json)
