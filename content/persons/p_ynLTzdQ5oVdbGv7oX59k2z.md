---
schema: wang-person/v1
id: p_ynLTzdQ5oVdbGv7oX59k2z
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DA7A3FeNnsTvG2Z5K64Qne
        subject_person_id: p_ynLTzdQ5oVdbGv7oX59k2z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pvrY8LJEUN6YY5QQCv7CsD
          claim_id: c_DA7A3FeNnsTvG2Z5K64Qne
          source_id: s_NRcxpozzmaHiTUHdiXaFau
          stance: supports
          locator: CBDB:262294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262294）
          source: &a1
            id: s_NRcxpozzmaHiTUHdiXaFau
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 262294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262294&o=json
            external_identifier: CBDB:262294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YxhFsMQ6cin6guJcr8zv1o
        subject_person_id: p_ynLTzdQ5oVdbGv7oX59k2z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。弘治三年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 262294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__MVQ17z_jDk365LzkHs7vI
          claim_id: c_YxhFsMQ6cin6guJcr8zv1o
          source_id: s_NRcxpozzmaHiTUHdiXaFau
          stance: supports
          locator: CBDB:262294
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。弘治三年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 262294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 262294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262294&o=json)
