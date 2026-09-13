---
schema: wang-person/v1
id: p_SSaU361PeoBqNNfDVtavP9
status: active
merged_into: null
display_name: 王大醇
cbdb_id: 19892
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANDg4qSH699CMNA9qdm8S9
        subject_person_id: p_SSaU361PeoBqNNfDVtavP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大醇，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vMismJtgHWVDg0wdZS_e4H
          claim_id: c_ANDg4qSH699CMNA9qdm8S9
          source_id: s_GDdGhqHs6Wj7jc5u4iqoPk
          stance: supports
          locator: CBDB:19892
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GDdGhqHs6Wj7jc5u4iqoPk
            source_type: api_record
            title: 中国历代人物传记资料库：王大醇（CBDB 19892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19892&o=json
            external_identifier: CBDB:19892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sz8U34d9A6QHjKi1q1W7aj
        subject_person_id: p_SSaU361PeoBqNNfDVtavP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大醇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ggmf6MWz6J4QJHjEQCavYB
          claim_id: c_Sz8U34d9A6QHjKi1q1W7aj
          source_id: s_GDdGhqHs6Wj7jc5u4iqoPk
          stance: supports
          locator: CBDB:19892
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
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

# 王大醇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大醇，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19892） | accepted |
| name.primary | 王大醇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大醇（CBDB 19892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19892&o=json)
