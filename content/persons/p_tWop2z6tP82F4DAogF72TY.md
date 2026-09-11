---
schema: wang-person/v1
id: p_tWop2z6tP82F4DAogF72TY
status: active
merged_into: null
display_name: 王運斗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NoExr5fJQ2BHsg7JrkMty6
        subject_person_id: p_tWop2z6tP82F4DAogF72TY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運斗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KKmhrCRzQi9JT4DWNUbBt
          claim_id: c_NoExr5fJQ2BHsg7JrkMty6
          source_id: s_PQpF54fbKPps6rzfv8N28w
          stance: supports
          locator: CBDB:640441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640441）
          source: &a1
            id: s_PQpF54fbKPps6rzfv8N28w
            source_type: api_record
            title: 中国历代人物传记资料库：王運斗（CBDB 640441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640441&o=json
            external_identifier: CBDB:640441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2o7pHCPSFSNRnEz5TjJ3Hp
        subject_person_id: p_tWop2z6tP82F4DAogF72TY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運斗，清人物。籍贯錦縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RF-aGVEDNxoU40_wzov8P2
          claim_id: c_2o7pHCPSFSNRnEz5TjJ3Hp
          source_id: s_PQpF54fbKPps6rzfv8N28w
          stance: supports
          locator: CBDB:640441
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

# 王運斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運斗 | accepted |
| bio.summary | 王運斗，清人物。籍贯錦縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運斗（CBDB 640441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640441&o=json)
