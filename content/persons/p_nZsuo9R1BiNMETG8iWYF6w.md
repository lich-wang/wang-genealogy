---
schema: wang-person/v1
id: p_nZsuo9R1BiNMETG8iWYF6w
status: active
merged_into: null
display_name: 王喜年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rhEQfiqFYoFwZgN2WJ3RKJ
        subject_person_id: p_nZsuo9R1BiNMETG8iWYF6w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CcUb5C2yEJ3S13vPdg5y6B
          claim_id: c_rhEQfiqFYoFwZgN2WJ3RKJ
          source_id: s_KYQobSbEbxjpNbXa57GvMo
          stance: supports
          locator: CBDB:636584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636584）
          source: &a1
            id: s_KYQobSbEbxjpNbXa57GvMo
            source_type: api_record
            title: 中国历代人物传记资料库：王喜年（CBDB 636584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636584&o=json
            external_identifier: CBDB:636584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ynoCVME2VRZotDcnMy4K5r
        subject_person_id: p_nZsuo9R1BiNMETG8iWYF6w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜年，清人物。籍贯福建省，入仕進士，曾任中軍守備。（中国历代人物传记资料库 CBDB 636584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rtSIC9iUlUv_7q5tUQbmwh
          claim_id: c_ynoCVME2VRZotDcnMy4K5r
          source_id: s_KYQobSbEbxjpNbXa57GvMo
          stance: supports
          locator: CBDB:636584
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

# 王喜年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜年 | accepted |
| bio.summary | 王喜年，清人物。籍贯福建省，入仕進士，曾任中軍守備。（中国历代人物传记资料库 CBDB 636584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜年（CBDB 636584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636584&o=json)
