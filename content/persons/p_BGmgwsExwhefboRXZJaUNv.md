---
schema: wang-person/v1
id: p_BGmgwsExwhefboRXZJaUNv
status: active
merged_into: null
display_name: 王先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CWNPayVjp79j8BT7MN3Kb
        subject_person_id: p_BGmgwsExwhefboRXZJaUNv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rjn8iMmfdF6Pw8yHRtD4Hz
          claim_id: c_6CWNPayVjp79j8BT7MN3Kb
          source_id: s_i6Fc4fJcgMe1moX5WWc2Xh
          stance: supports
          locator: CBDB:506725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506725）
          source: &a1
            id: s_i6Fc4fJcgMe1moX5WWc2Xh
            source_type: api_record
            title: 中国历代人物传记资料库：王先（CBDB 506725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506725&o=json
            external_identifier: CBDB:506725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S81CeCHF6Bsv12QR5adMpm
        subject_person_id: p_BGmgwsExwhefboRXZJaUNv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 506725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5UO_rivqAkNh2U_N96e0QD
          claim_id: c_S81CeCHF6Bsv12QR5adMpm
          source_id: s_i6Fc4fJcgMe1moX5WWc2Xh
          stance: supports
          locator: CBDB:506725
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

# 王先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先 | accepted |
| bio.summary | 王先，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 506725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先（CBDB 506725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506725&o=json)
