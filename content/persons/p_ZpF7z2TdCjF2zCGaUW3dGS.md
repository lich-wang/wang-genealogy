---
schema: wang-person/v1
id: p_ZpF7z2TdCjF2zCGaUW3dGS
status: active
merged_into: null
display_name: 王正元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAL8QqaX2bxQES8GCCNeP7
        subject_person_id: p_ZpF7z2TdCjF2zCGaUW3dGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CzQV9uYhXjDMYsHRj5sV2z
          claim_id: c_rAL8QqaX2bxQES8GCCNeP7
          source_id: s_RF6TsbX34bf5o5kWVCwzWL
          stance: supports
          locator: CBDB:638886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638886）
          source: &a1
            id: s_RF6TsbX34bf5o5kWVCwzWL
            source_type: api_record
            title: 中国历代人物传记资料库：王正元（CBDB 638886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638886&o=json
            external_identifier: CBDB:638886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mkzcxptEajX2MyKx6nt54p
        subject_person_id: p_ZpF7z2TdCjF2zCGaUW3dGS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正元，清人物。籍贯洮州廳，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ICZ3ZzD86p0hn92SOqb9OJ
          claim_id: c_mkzcxptEajX2MyKx6nt54p
          source_id: s_RF6TsbX34bf5o5kWVCwzWL
          stance: supports
          locator: CBDB:638886
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

# 王正元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正元 | accepted |
| bio.summary | 王正元，清人物。籍贯洮州廳，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正元（CBDB 638886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638886&o=json)
