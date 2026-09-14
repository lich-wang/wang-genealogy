---
schema: wang-person/v1
id: p_iKjtYBENSFZX3Vh6H2rZba
status: active
merged_into: null
display_name: 王逢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PPAXgkVBwmjpHvQLfV4r29
        subject_person_id: p_iKjtYBENSFZX3Vh6H2rZba
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wkMbLQsE7yKiFttPYpE4kp
          claim_id: c_PPAXgkVBwmjpHvQLfV4r29
          source_id: s_Jk4RPFGCZyDdYgknKHz8oE
          stance: supports
          locator: CBDB:12052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12052）
          source: &a1
            id: s_Jk4RPFGCZyDdYgknKHz8oE
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 12052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12052&o=json
            external_identifier: CBDB:12052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ohXKsn49V6R7LkQJ1RF9P9
        subject_person_id: p_iKjtYBENSFZX3Vh6H2rZba
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢，宋人物。籍贯金壇，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 12052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aQ10POwhsW8gBJyk1ECnuv
          claim_id: c_ohXKsn49V6R7LkQJ1RF9P9
          source_id: s_Jk4RPFGCZyDdYgknKHz8oE
          stance: supports
          locator: CBDB:12052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_52GZu4d_JA_f8TdXXjrF12
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKjtYBENSFZX3Vh6H2rZba
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DUmp7oBS-jdTiitIeHeX5z
          claim_id: c_52GZu4d_JA_f8TdXXjrF12
          source_id: s_XOHQilizmaYZGo24vQMGSG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_XOHQilizmaYZGo24vQMGSG
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 12052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12052&o=json
            external_identifier: CBDB:12052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i5579JHLY2cRuS7YHKZJ5T
        status: active
        display_name: 王萬樞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢 | accepted |
| bio.summary | 王逢，宋人物。籍贯金壇，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 12052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i5579JHLY2cRuS7YHKZJ5T | 王萬樞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 12052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12052&o=json)
