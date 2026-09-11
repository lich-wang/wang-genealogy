---
schema: wang-person/v1
id: p_EMDAK329RE29m5FXAz8zkL
status: active
merged_into: null
display_name: 王樑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZEpy9FSruywLGT9qXE4eZ
        subject_person_id: p_EMDAK329RE29m5FXAz8zkL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k69fagJXhosot5J8NCMvQ2
          claim_id: c_KZEpy9FSruywLGT9qXE4eZ
          source_id: s_FrdAEcXGCBy7269jhE5uR2
          stance: supports
          locator: CBDB:510465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510465）
          source: &a1
            id: s_FrdAEcXGCBy7269jhE5uR2
            source_type: api_record
            title: 中国历代人物传记资料库：王樑（CBDB 510465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510465&o=json
            external_identifier: CBDB:510465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNqgYaU5u4htyYzNa7a8J9
        subject_person_id: p_EMDAK329RE29m5FXAz8zkL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王樑，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任按察使。（中国历代人物传记资料库 CBDB 510465）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m3HuEkGOGmcb0NYbSuk4NB
          claim_id: c_GNqgYaU5u4htyYzNa7a8J9
          source_id: s_FrdAEcXGCBy7269jhE5uR2
          stance: supports
          locator: CBDB:510465
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

# 王樑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樑 | accepted |
| bio.summary | 王樑，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任按察使。（中国历代人物传记资料库 CBDB 510465） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樑（CBDB 510465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510465&o=json)
