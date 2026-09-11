---
schema: wang-person/v1
id: p_uUJPU1zQRi3DAsgSa7zacb
status: active
merged_into: null
display_name: 王佑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dkYY7N5snnkGsFVocX5XYt
        subject_person_id: p_uUJPU1zQRi3DAsgSa7zacb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UXACefKgeC82MqpCT2wwuL
          claim_id: c_dkYY7N5snnkGsFVocX5XYt
          source_id: s_HtmfKcaR2gJCfGPWHP9r7a
          stance: supports
          locator: CBDB:210427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210427）
          source: &a1
            id: s_HtmfKcaR2gJCfGPWHP9r7a
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 210427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210427&o=json
            external_identifier: CBDB:210427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7j2v5TbFYwPTS7utPkphfe
        subject_person_id: p_uUJPU1zQRi3DAsgSa7zacb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。隆慶五年進士，曾任知府。（中国历代人物传记资料库 CBDB 210427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fb-6lbjAyl_Li9FBxaV2GN
          claim_id: c_7j2v5TbFYwPTS7utPkphfe
          source_id: s_HtmfKcaR2gJCfGPWHP9r7a
          stance: supports
          locator: CBDB:210427
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
  descendants:
    - claim:
        id: c_AqkzjlK3J8O5ny0OIRc3H-
        subject_person_id: p_uUJPU1zQRi3DAsgSa7zacb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TNy0Uo2_2Ka3CWxTCc2hXV
          claim_id: c_AqkzjlK3J8O5ny0OIRc3H-
          source_id: s_HtmfKcaR2gJCfGPWHP9r7a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
  other: []
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。隆慶五年進士，曾任知府。（中国历代人物传记资料库 CBDB 210427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 210427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210427&o=json)
