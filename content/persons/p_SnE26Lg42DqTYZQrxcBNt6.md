---
schema: wang-person/v1
id: p_SnE26Lg42DqTYZQrxcBNt6
status: active
merged_into: null
display_name: 王鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AyPuFPScFsgv2Cna9cyfLu
        subject_person_id: p_SnE26Lg42DqTYZQrxcBNt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N4PiSXxSf3j8xeGYcMGpGm
          claim_id: c_AyPuFPScFsgv2Cna9cyfLu
          source_id: s_CK7vN37Q8NCGPj7yeBFghd
          stance: supports
          locator: CBDB:454520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454520）
          source: &a1
            id: s_CK7vN37Q8NCGPj7yeBFghd
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 454520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454520&o=json
            external_identifier: CBDB:454520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QFSQvofXCyHyP6FoFsFP7B
        subject_person_id: p_SnE26Lg42DqTYZQrxcBNt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 454520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lB7u73BvPYhP5c7QgjyAbF
          claim_id: c_QFSQvofXCyHyP6FoFsFP7B
          source_id: s_CK7vN37Q8NCGPj7yeBFghd
          stance: supports
          locator: CBDB:454520
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

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | 王鵬，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 454520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 454520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454520&o=json)
