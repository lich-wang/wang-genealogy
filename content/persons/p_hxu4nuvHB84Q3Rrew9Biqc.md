---
schema: wang-person/v1
id: p_hxu4nuvHB84Q3Rrew9Biqc
status: active
merged_into: null
display_name: 王陶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V8zKVs8rMRG7aVkcibjrYi
        subject_person_id: p_hxu4nuvHB84Q3Rrew9Biqc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_raR8jkbNK3Tx4fNMkpDGqm
          claim_id: c_V8zKVs8rMRG7aVkcibjrYi
          source_id: s_T7b8MPiU9DNaEfD45iZ3Y8
          stance: supports
          locator: CBDB:686360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686360）
          source: &a1
            id: s_T7b8MPiU9DNaEfD45iZ3Y8
            source_type: api_record
            title: 中国历代人物传记资料库：王陶（CBDB 686360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686360&o=json
            external_identifier: CBDB:686360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AzFD6Ei9ZwPrBpnaqbP6JB
        subject_person_id: p_hxu4nuvHB84Q3Rrew9Biqc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陶，宋人物。籍贯曲江，入仕進士。（中国历代人物传记资料库 CBDB 686360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7AoKidSGD2qzhflAUO_ZJI
          claim_id: c_AzFD6Ei9ZwPrBpnaqbP6JB
          source_id: s_T7b8MPiU9DNaEfD45iZ3Y8
          stance: supports
          locator: CBDB:686360
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

# 王陶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陶 | accepted |
| bio.summary | 王陶，宋人物。籍贯曲江，入仕進士。（中国历代人物传记资料库 CBDB 686360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陶（CBDB 686360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686360&o=json)
