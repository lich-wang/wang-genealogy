---
schema: wang-person/v1
id: p_87WDkZhrCiC33owHQzHh3G
status: active
merged_into: null
display_name: 王文徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BvJuPz6DggsGB3HL4B2zBB
        subject_person_id: p_87WDkZhrCiC33owHQzHh3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C14sVyf7LD8JD6431oZ7vW
          claim_id: c_BvJuPz6DggsGB3HL4B2zBB
          source_id: s_jBrTFPuF7zAe7v2k4keYaX
          stance: supports
          locator: CBDB:476359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476359）
          source: &a1
            id: s_jBrTFPuF7zAe7v2k4keYaX
            source_type: api_record
            title: 中国历代人物传记资料库：王文徵（CBDB 476359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476359&o=json
            external_identifier: CBDB:476359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVs1XLXZDDvVq5bxFuPmD4
        subject_person_id: p_87WDkZhrCiC33owHQzHh3G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文徵，清人物。入仕進士。（中国历代人物传记资料库 CBDB 476359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E_yE6iuEoyoXqiP9v5RtSt
          claim_id: c_RVs1XLXZDDvVq5bxFuPmD4
          source_id: s_jBrTFPuF7zAe7v2k4keYaX
          stance: supports
          locator: CBDB:476359
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

# 王文徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文徵 | accepted |
| bio.summary | 王文徵，清人物。入仕進士。（中国历代人物传记资料库 CBDB 476359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文徵（CBDB 476359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476359&o=json)
