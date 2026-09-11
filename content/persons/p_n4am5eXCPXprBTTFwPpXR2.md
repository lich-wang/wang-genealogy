---
schema: wang-person/v1
id: p_n4am5eXCPXprBTTFwPpXR2
status: active
merged_into: null
display_name: 王士昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zLWL5Co52cCL1bB2o6i2yj
        subject_person_id: p_n4am5eXCPXprBTTFwPpXR2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g9s5VZ4cuDAcwBk8yZMAQu
          claim_id: c_zLWL5Co52cCL1bB2o6i2yj
          source_id: s_F2TExDH6byFs132sLJdMmi
          stance: supports
          locator: CBDB:126443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126443）
          source: &a1
            id: s_F2TExDH6byFs132sLJdMmi
            source_type: api_record
            title: 中国历代人物传记资料库：王士昌（CBDB 126443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126443&o=json
            external_identifier: CBDB:126443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3JC4Dnq1DRvjs9FSkwV6Dc
        subject_person_id: p_n4am5eXCPXprBTTFwPpXR2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士昌，明人物。籍贯寧州。（中国历代人物传记资料库 CBDB 126443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2O14TD8zFEbTQ5GbDt2zlX
          claim_id: c_3JC4Dnq1DRvjs9FSkwV6Dc
          source_id: s_F2TExDH6byFs132sLJdMmi
          stance: supports
          locator: CBDB:126443
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

# 王士昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士昌 | accepted |
| bio.summary | 王士昌，明人物。籍贯寧州。（中国历代人物传记资料库 CBDB 126443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士昌（CBDB 126443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126443&o=json)
