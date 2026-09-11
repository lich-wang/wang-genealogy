---
schema: wang-person/v1
id: p_Cjmx4AnNNPpfoN7X9HhG8V
status: active
merged_into: null
display_name: 王希傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZSoekHx4UURGv1SXVFPkC
        subject_person_id: p_Cjmx4AnNNPpfoN7X9HhG8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MPZQ2xFGa5gKLzu858FF7k
          claim_id: c_iZSoekHx4UURGv1SXVFPkC
          source_id: s_63P2cL8UMXK49o27QvYEj6
          stance: supports
          locator: CBDB:637389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637389）
          source: &a1
            id: s_63P2cL8UMXK49o27QvYEj6
            source_type: api_record
            title: 中国历代人物传记资料库：王希傑（CBDB 637389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637389&o=json
            external_identifier: CBDB:637389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aHpA78MqmRyE4XrmwMbEiq
        subject_person_id: p_Cjmx4AnNNPpfoN7X9HhG8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王希傑，清人物。籍贯懷寧，入仕貢生: 拔貢，曾任學正、訓導。（中国历代人物传记资料库 CBDB 637389）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jjyGPEKgqO550xrtFDJwlH
          claim_id: c_aHpA78MqmRyE4XrmwMbEiq
          source_id: s_63P2cL8UMXK49o27QvYEj6
          stance: supports
          locator: CBDB:637389
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

# 王希傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希傑 | accepted |
| bio.summary | 王希傑，清人物。籍贯懷寧，入仕貢生: 拔貢，曾任學正、訓導。（中国历代人物传记资料库 CBDB 637389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希傑（CBDB 637389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637389&o=json)
