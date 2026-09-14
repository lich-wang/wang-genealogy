---
schema: wang-person/v1
id: p_6QRXoU8XkLikTVxrEb5Vjz
status: active
merged_into: null
display_name: 王收
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LcWfscvYKfSJZkwQfsAPpR
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mmszTWHsViF5jEW43qMDHB
          claim_id: c_LcWfscvYKfSJZkwQfsAPpR
          source_id: s_T5N3atNoGhL7PiV5R3mAhx
          stance: supports
          locator: CBDB:247215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247215）
          source: &a1
            id: s_T5N3atNoGhL7PiV5R3mAhx
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qkfriiHw1frK5hNAYi85Y
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAG0ruxZ_GuZqjl8YbaeBG
          claim_id: c_3qkfriiHw1frK5hNAYi85Y
          source_id: s_T5N3atNoGhL7PiV5R3mAhx
          stance: supports
          locator: CBDB:247215
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jhEmw2ZQtpOCcr_a9HJSpy
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EmY0ylRAuNcXEV7495E75
          claim_id: c_jhEmw2ZQtpOCcr_a9HJSpy
          source_id: s_iyDo-qpWL-uQpwHoeX76gb
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王收 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王收 之父／母。
          source:
            id: s_iyDo-qpWL-uQpwHoeX76gb
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PASiCHQs3ZcH2e9PXEScwH
        status: active
        display_name: 王效
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CW3Gx3TKwAj0vVEUtpkCdn
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WtGFyVop5ic7OooAHw8sF
          claim_id: c_CW3Gx3TKwAj0vVEUtpkCdn
          source_id: s_iyDo-qpWL-uQpwHoeX76gb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iyDo-qpWL-uQpwHoeX76gb
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
---

# 王收

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王收 | accepted |
| bio.summary | 王收，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| other | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王收（CBDB 247215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json)
