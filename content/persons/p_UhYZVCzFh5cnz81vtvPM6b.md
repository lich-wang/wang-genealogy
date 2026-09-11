---
schema: wang-person/v1
id: p_UhYZVCzFh5cnz81vtvPM6b
status: active
merged_into: null
display_name: 王表
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ybezRtDnrB9oaSCLV6fNCN
        subject_person_id: p_UhYZVCzFh5cnz81vtvPM6b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XqgFaqbd2Ti3Vx7imJQDq
          claim_id: c_ybezRtDnrB9oaSCLV6fNCN
          source_id: s_Z96EqvtSZ1kU96Q3aTy2bv
          stance: supports
          locator: CBDB:147256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147256）
          source: &a1
            id: s_Z96EqvtSZ1kU96Q3aTy2bv
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 147256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147256&o=json
            external_identifier: CBDB:147256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vdsbky4k8kPEkGe6sfhqGK
        subject_person_id: p_UhYZVCzFh5cnz81vtvPM6b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，隋人物。籍贯芒山，曾任縣令。（中国历代人物传记资料库 CBDB 147256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2iNtJ-Pf7OFY5krai0qqZT
          claim_id: c_Vdsbky4k8kPEkGe6sfhqGK
          source_id: s_Z96EqvtSZ1kU96Q3aTy2bv
          stance: supports
          locator: CBDB:147256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8PLGTk2LNkcXp-Fo-yxRzz
        subject_person_id: p_UhYZVCzFh5cnz81vtvPM6b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWhN-m0EzfWrVSU6FYVg68
          claim_id: c_8PLGTk2LNkcXp-Fo-yxRzz
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 140：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEgQzQXGiMVanGsGCriCxG
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 139058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json
            external_identifier: CBDB:139058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kaFXcKYWcJzFn9BzKN5G5P
        status: active
        display_name: 王禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，隋人物。籍贯芒山，曾任縣令。（中国历代人物传记资料库 CBDB 147256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kaFXcKYWcJzFn9BzKN5G5P | 王禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 147256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147256&o=json)
- [中国历代人物传记资料库：王禮（CBDB 139058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json)
