---
schema: wang-person/v1
id: p_o4rBe4Cfm54YjAjH6AoJ4J
status: active
merged_into: null
display_name: 王晏平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iVTnGgs1CTWyjxkGAn1JHx
        subject_person_id: p_o4rBe4Cfm54YjAjH6AoJ4J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xZNVHdz2vw58mtMFCnLiV3
          claim_id: c_iVTnGgs1CTWyjxkGAn1JHx
          source_id: s_cBZdDPk38pdM4ZjQTLoUqb
          stance: supports
          locator: CBDB:378073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378073）
          source: &a1
            id: s_cBZdDPk38pdM4ZjQTLoUqb
            source_type: api_record
            title: 中国历代人物传记资料库：王晏平（CBDB 378073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378073&o=json
            external_identifier: CBDB:378073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z1vZKwPGMUE8jTKHbYnFBX
        subject_person_id: p_o4rBe4Cfm54YjAjH6AoJ4J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏平，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2c1nTJYlvtNGahcBNoUwB
          claim_id: c_Z1vZKwPGMUE8jTKHbYnFBX
          source_id: s_cBZdDPk38pdM4ZjQTLoUqb
          stance: supports
          locator: CBDB:378073
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

# 王晏平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏平 | accepted |
| bio.summary | 王晏平，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏平（CBDB 378073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378073&o=json)
