---
schema: wang-person/v1
id: p_bBJYBZQAKAakS4jYmadJ8x
status: active
merged_into: null
display_name: 王雲生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GaZ3HDV7DdwB7xkfqTFqFr
        subject_person_id: p_bBJYBZQAKAakS4jYmadJ8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3YZJKFQW1bb8iQvrVoiAXq
          claim_id: c_GaZ3HDV7DdwB7xkfqTFqFr
          source_id: s_wA1gFp24XACtdpkMiq3dBB
          stance: supports
          locator: CBDB:158612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158612）
          source: &a1
            id: s_wA1gFp24XACtdpkMiq3dBB
            source_type: api_record
            title: 中国历代人物传记资料库：王雲生（CBDB 158612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158612&o=json
            external_identifier: CBDB:158612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E57MzDpfEMZ7pFyszCXQJg
        subject_person_id: p_bBJYBZQAKAakS4jYmadJ8x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲生，史料所见人物。本项目依据《中国历代人物传记资料库：王雲生（CBDB 158612）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j8cc3hIQ3uvwhgmz05PQlj
          claim_id: c_E57MzDpfEMZ7pFyszCXQJg
          source_id: s_wA1gFp24XACtdpkMiq3dBB
          stance: supports
          locator: CBDB:158612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王雲生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲生 | accepted |
| bio.summary | 王雲生，史料所见人物。本项目依据《中国历代人物传记资料库：王雲生（CBDB 158612）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲生（CBDB 158612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158612&o=json)
