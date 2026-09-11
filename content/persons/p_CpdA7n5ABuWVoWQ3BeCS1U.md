---
schema: wang-person/v1
id: p_CpdA7n5ABuWVoWQ3BeCS1U
status: active
merged_into: null
display_name: 王蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mygpFNTU7JCbZZJm5KhsUL
        subject_person_id: p_CpdA7n5ABuWVoWQ3BeCS1U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LR5hM86ZGTZr7k2S2xwfNf
          claim_id: c_mygpFNTU7JCbZZJm5KhsUL
          source_id: s_WfFv8ctyfCFrNWfhmdPLVz
          stance: supports
          locator: CBDB:266941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266941）
          source: &a1
            id: s_WfFv8ctyfCFrNWfhmdPLVz
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 266941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266941&o=json
            external_identifier: CBDB:266941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zr7bDRvHPcyotP1nP48XKv
        subject_person_id: p_CpdA7n5ABuWVoWQ3BeCS1U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭，明人物。弘治九年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 266941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U85ZbyhTMgaeacBMe8oBB-
          claim_id: c_Zr7bDRvHPcyotP1nP48XKv
          source_id: s_WfFv8ctyfCFrNWfhmdPLVz
          stance: supports
          locator: CBDB:266941
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

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | 王蘭，明人物。弘治九年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 266941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 266941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266941&o=json)
