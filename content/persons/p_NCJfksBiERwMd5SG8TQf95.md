---
schema: wang-person/v1
id: p_NCJfksBiERwMd5SG8TQf95
status: active
merged_into: null
display_name: 謝氏
revision: 1
cbdb_id: 289994
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MdIdVwCawk5jl4uEe357B_
        subject_person_id: p_NCJfksBiERwMd5SG8TQf95
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 289994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11e3NcY-IQ4ITom6XFU-0v
          claim_id: c_MdIdVwCawk5jl4uEe357B_
          source_id: s_zJ4gsMvz-ZYJx76KNOClP0
          stance: supports
          locator: CBDB:289994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zJ4gsMvz-ZYJx76KNOClP0
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王崇妻)（CBDB 289994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289994&o=json
            external_identifier: CBDB:289994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__eff2EVd47yuo1-C3NI2Ut
        subject_person_id: p_NCJfksBiERwMd5SG8TQf95
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ozg3L36m3V3Pe2ByYK-tn
          claim_id: c__eff2EVd47yuo1-C3NI2Ut
          source_id: s_zJ4gsMvz-ZYJx76KNOClP0
          stance: supports
          locator: CBDB:289994
          quotation: null
          interpretation_note: CBDB 明确记录的王崇配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VPaW5eO4kkZmD3adesswE4
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NCJfksBiERwMd5SG8TQf95
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4N1fudhnP_EILF8SARc_N1
          claim_id: c_VPaW5eO4kkZmD3adesswE4
          source_id: s_zJ4gsMvz-ZYJx76KNOClP0
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        status: active
        display_name: 王崇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 謝氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 謝氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 289994） | accepted |
| name.primary | 謝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5Nsm7LtaHH2TfQdw6zv4Pu | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：謝氏(王崇妻)（CBDB 289994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289994&o=json)
