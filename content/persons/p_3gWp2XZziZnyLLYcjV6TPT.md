---
schema: wang-person/v1
id: p_3gWp2XZziZnyLLYcjV6TPT
status: active
merged_into: null
display_name: 王仲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n54cpYyDyhfUqMAqYkubFR
        subject_person_id: p_3gWp2XZziZnyLLYcjV6TPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CRvgQ6zApGfTSTkJ2w2jAp
          claim_id: c_n54cpYyDyhfUqMAqYkubFR
          source_id: s_iUoVCHWHL2VfuWY32WTggJ
          stance: supports
          locator: CBDB:312746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312746）
          source: &a1
            id: s_iUoVCHWHL2VfuWY32WTggJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 312746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json
            external_identifier: CBDB:312746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UNS9DDePxnfBW15n8eHECy
        subject_person_id: p_3gWp2XZziZnyLLYcjV6TPT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6cB6DGe7DBAjrkWAOCmdzu
          claim_id: c_UNS9DDePxnfBW15n8eHECy
          source_id: s_iUoVCHWHL2VfuWY32WTggJ
          stance: supports
          locator: CBDB:312746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hQhOmdHeKaumDCWNdE6DuQ
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gWp2XZziZnyLLYcjV6TPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqUxbDy306EUSQdrqlbSiP
          claim_id: c_hQhOmdHeKaumDCWNdE6DuQ
          source_id: s_lkDvRn_m2UO6juUH9KvTaN
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王仲 之父／母。
          source:
            id: s_lkDvRn_m2UO6juUH9KvTaN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 312746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json
            external_identifier: CBDB:312746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDiqSoKbAEPJ32n4DP82Hn
        status: active
        display_name: 王簡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fVH0jQ5e2J8zpUusdQ76Dg
        subject_person_id: p_3gWp2XZziZnyLLYcjV6TPT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hHNa7b5NntK7bPjYqWMP15
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXVhAbHDI8u4KrjQL5aigN
          claim_id: c_fVH0jQ5e2J8zpUusdQ76Dg
          source_id: s_lkDvRn_m2UO6juUH9KvTaN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203975 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lkDvRn_m2UO6juUH9KvTaN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 312746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json
            external_identifier: CBDB:312746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hHNa7b5NntK7bPjYqWMP15
        status: active
        display_name: 王价
        merged_into_person_id: null
---

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲 | accepted |
| bio.summary | 王仲，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dDiqSoKbAEPJ32n4DP82Hn | 王簡 | accepted |
| other | p_hHNa7b5NntK7bPjYqWMP15 | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲（CBDB 312746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json)
