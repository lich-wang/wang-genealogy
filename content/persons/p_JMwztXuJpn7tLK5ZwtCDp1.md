---
schema: wang-person/v1
id: p_JMwztXuJpn7tLK5ZwtCDp1
status: active
merged_into: null
display_name: 王琪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EeDMDKxTE6bmwmuQ91ydTz
        subject_person_id: p_JMwztXuJpn7tLK5ZwtCDp1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NV1KVEXjjnpoK7KzMc8Q95
          claim_id: c_EeDMDKxTE6bmwmuQ91ydTz
          source_id: s_CD1jKxGV1k24LYN8fGMPQs
          stance: supports
          locator: CBDB:38419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38419）
          source: &a1
            id: s_CD1jKxGV1k24LYN8fGMPQs
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 38419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38419&o=json
            external_identifier: CBDB:38419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qUvcAMTbV1PJ7iWH2cLgky
        subject_person_id: p_JMwztXuJpn7tLK5ZwtCDp1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪，宋人物。籍贯通遠軍，曾任閤門宣贊舍人、遙郡團練使、右武大夫。（中国历代人物传记资料库 CBDB 38419）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_am4-rNb97zAqJ622Nwbl7Q
          claim_id: c_qUvcAMTbV1PJ7iWH2cLgky
          source_id: s_CD1jKxGV1k24LYN8fGMPQs
          stance: supports
          locator: CBDB:38419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uC85JQB_gz6MapndvMDHR9
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JMwztXuJpn7tLK5ZwtCDp1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gqik-ohaJCVIOs-b3t4lQl
          claim_id: c_uC85JQB_gz6MapndvMDHR9
          source_id: s_CD1jKxGV1k24LYN8fGMPQs
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琪 | accepted |
| bio.summary | 王琪，宋人物。籍贯通遠軍，曾任閤門宣贊舍人、遙郡團練使、右武大夫。（中国历代人物传记资料库 CBDB 38419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琪（CBDB 38419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38419&o=json)
