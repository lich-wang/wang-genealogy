---
schema: wang-person/v1
id: p_UEDbcC98Da16FKRQBoMwdY
status: active
merged_into: null
display_name: 王一正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sbkZHqkHwVpXymxEibyTZw
        subject_person_id: p_UEDbcC98Da16FKRQBoMwdY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vytCnzdk4PXHrDoX876gea
          claim_id: c_sbkZHqkHwVpXymxEibyTZw
          source_id: s_9WU4oq8ijDKb7cTCuKo1QK
          stance: supports
          locator: CBDB:337563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337563）
          source: &a1
            id: s_9WU4oq8ijDKb7cTCuKo1QK
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 337563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json
            external_identifier: CBDB:337563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XcX8tVm1Lbyk2YtA27dfsK
        subject_person_id: p_UEDbcC98Da16FKRQBoMwdY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一正，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O7_xv8H9SRwvs_qvuH8oH5
          claim_id: c_XcX8tVm1Lbyk2YtA27dfsK
          source_id: s_9WU4oq8ijDKb7cTCuKo1QK
          stance: supports
          locator: CBDB:337563
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

# 王一正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一正 | accepted |
| bio.summary | 王一正，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一正（CBDB 337563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json)
