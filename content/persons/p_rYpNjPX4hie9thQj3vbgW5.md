---
schema: wang-person/v1
id: p_rYpNjPX4hie9thQj3vbgW5
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kyEDQ66sQ2aQ6kvMWbvGQF
        subject_person_id: p_rYpNjPX4hie9thQj3vbgW5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u1NVRdy4RLxXmyLrfpHwHp
          claim_id: c_kyEDQ66sQ2aQ6kvMWbvGQF
          source_id: s_7Tzk1Gyuma4uVMmL3eBnN9
          stance: supports
          locator: CBDB:100706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100706）
          source: &a1
            id: s_7Tzk1Gyuma4uVMmL3eBnN9
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 100706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100706&o=json
            external_identifier: CBDB:100706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BDqbZqMmzwJ9ALv9GUCDfs
        subject_person_id: p_rYpNjPX4hie9thQj3vbgW5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，元人物。曾任等路管民提舉司達魯花赤。（中国历代人物传记资料库 CBDB 100706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hrr4qs2K0O3kuOyjyLOIli
          claim_id: c_BDqbZqMmzwJ9ALv9GUCDfs
          source_id: s_7Tzk1Gyuma4uVMmL3eBnN9
          stance: supports
          locator: CBDB:100706
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，元人物。曾任等路管民提舉司達魯花赤。（中国历代人物传记资料库 CBDB 100706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 100706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100706&o=json)
