---
schema: wang-person/v1
id: p_9Wd3Vz9LonWCxYfnfut3M7
status: active
merged_into: null
display_name: 王長發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z7WGncKytRErU12TUJG7nM
        subject_person_id: p_9Wd3Vz9LonWCxYfnfut3M7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6sxZ6dE2rGTkx7v7vrg7ZC
          claim_id: c_z7WGncKytRErU12TUJG7nM
          source_id: s_MZb4Zahy99TDBC4zpCGFQZ
          stance: supports
          locator: CBDB:640736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640736）
          source: &a1
            id: s_MZb4Zahy99TDBC4zpCGFQZ
            source_type: api_record
            title: 中国历代人物传记资料库：王長發（CBDB 640736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640736&o=json
            external_identifier: CBDB:640736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzW1Q7QX8TgFFKMwyvsVtb
        subject_person_id: p_9Wd3Vz9LonWCxYfnfut3M7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長發，清人物。籍贯湘鄉，入仕行伍，曾任遊擊。（中国历代人物传记资料库 CBDB 640736）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KjjqWQj-rV1496NpbeWWFv
          claim_id: c_FzW1Q7QX8TgFFKMwyvsVtb
          source_id: s_MZb4Zahy99TDBC4zpCGFQZ
          stance: supports
          locator: CBDB:640736
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

# 王長發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長發 | accepted |
| bio.summary | 王長發，清人物。籍贯湘鄉，入仕行伍，曾任遊擊。（中国历代人物传记资料库 CBDB 640736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長發（CBDB 640736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640736&o=json)
