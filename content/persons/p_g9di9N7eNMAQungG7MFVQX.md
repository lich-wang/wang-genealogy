---
schema: wang-person/v1
id: p_g9di9N7eNMAQungG7MFVQX
status: active
merged_into: null
display_name: 王叔本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKx4Z7USP3Ye2AjFLHcqLq
        subject_person_id: p_g9di9N7eNMAQungG7MFVQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c5dsfyH6aB8G6j8zRveDa3
          claim_id: c_QKx4Z7USP3Ye2AjFLHcqLq
          source_id: s_r49YJADgNBCPc8LydZFAiH
          stance: supports
          locator: CBDB:328622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328622）
          source: &a1
            id: s_r49YJADgNBCPc8LydZFAiH
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DsszZPfSLDyCBLG6RzV13H
        subject_person_id: p_g9di9N7eNMAQungG7MFVQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王叔本，明人物。嘉靖四十一年進士，籍贯永嘉，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 328622）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FdHL9PSCcvpiWEXUUrUUBO
          claim_id: c_DsszZPfSLDyCBLG6RzV13H
          source_id: s_r49YJADgNBCPc8LydZFAiH
          stance: supports
          locator: CBDB:328622
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

# 王叔本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔本 | accepted |
| bio.summary | 王叔本，明人物。嘉靖四十一年進士，籍贯永嘉，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 328622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔本（CBDB 328622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json)
