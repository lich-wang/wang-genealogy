---
schema: wang-person/v1
id: p_re1QgWikPTnADVgJp3f6iv
status: active
merged_into: null
display_name: 王際珻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2XTmqF73Lb1MkTSpjHAAct
        subject_person_id: p_re1QgWikPTnADVgJp3f6iv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際珻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mmcrJiGBnkZ49dLHtqA4vr
          claim_id: c_2XTmqF73Lb1MkTSpjHAAct
          source_id: s_vphL79LJ92HvpFV6LrgdND
          stance: supports
          locator: CBDB:640792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640792）
          source: &a1
            id: s_vphL79LJ92HvpFV6LrgdND
            source_type: api_record
            title: 中国历代人物传记资料库：王際珻（CBDB 640792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640792&o=json
            external_identifier: CBDB:640792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xp9hKVEeLhQFMiwVRiDtJr
        subject_person_id: p_re1QgWikPTnADVgJp3f6iv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王際珻，清人物。籍贯邛州直隸州直轄地方，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640792）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zbMUQ1HD2nKQOREw9XqAcS
          claim_id: c_xp9hKVEeLhQFMiwVRiDtJr
          source_id: s_vphL79LJ92HvpFV6LrgdND
          stance: supports
          locator: CBDB:640792
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

# 王際珻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際珻 | accepted |
| bio.summary | 王際珻，清人物。籍贯邛州直隸州直轄地方，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640792） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際珻（CBDB 640792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640792&o=json)
