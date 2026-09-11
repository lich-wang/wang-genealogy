---
schema: wang-person/v1
id: p_zrMNnLjbYgN1JPcMG42SRm
status: active
merged_into: null
display_name: 王溉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7WAJNKu8EfSCD1Bjtipxt
        subject_person_id: p_zrMNnLjbYgN1JPcMG42SRm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nmQg6aTgqZEmbh6atECnp2
          claim_id: c_Z7WAJNKu8EfSCD1Bjtipxt
          source_id: s_gNYNfYQ2u3tH2zR26XeKDn
          stance: supports
          locator: CBDB:687290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687290）
          source: &a1
            id: s_gNYNfYQ2u3tH2zR26XeKDn
            source_type: api_record
            title: 中国历代人物传记资料库：王溉（CBDB 687290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687290&o=json
            external_identifier: CBDB:687290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t2kxN395FkcWz3s9K6NP2F
        subject_person_id: p_zrMNnLjbYgN1JPcMG42SRm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉，宋人物。籍贯鄠縣，入仕明經。（中国历代人物传记资料库 CBDB 687290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rV3UcjsuHAFPtLoZt8ojs_
          claim_id: c_t2kxN395FkcWz3s9K6NP2F
          source_id: s_gNYNfYQ2u3tH2zR26XeKDn
          stance: supports
          locator: CBDB:687290
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

# 王溉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溉 | accepted |
| bio.summary | 王溉，宋人物。籍贯鄠縣，入仕明經。（中国历代人物传记资料库 CBDB 687290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溉（CBDB 687290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687290&o=json)
