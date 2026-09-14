---
schema: wang-person/v1
id: p_FXmHfz5GmcJktJPe9NMK9x
status: active
merged_into: null
display_name: 王崇典
cbdb_id: 302979
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pjD4ikWZ5UQsoTZN3E78x5
        subject_person_id: p_FXmHfz5GmcJktJPe9NMK9x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇典，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IvdX28OokBumqqPeSTb-K5
          claim_id: c_pjD4ikWZ5UQsoTZN3E78x5
          source_id: s_NWosv6XcANmEK7mi2K8amc
          stance: supports
          locator: CBDB:302979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NWosv6XcANmEK7mi2K8amc
            source_type: api_record
            title: 中国历代人物传记资料库：王崇典（CBDB 302979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json
            external_identifier: CBDB:302979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QdBtF2mzAJ3SWhg2SJSG34
        subject_person_id: p_FXmHfz5GmcJktJPe9NMK9x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e1wqwqAYycuobJqNQoEpJ3
          claim_id: c_QdBtF2mzAJ3SWhg2SJSG34
          source_id: s_NWosv6XcANmEK7mi2K8amc
          stance: supports
          locator: CBDB:302979
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NAo0w3WIFAT3he-5cc8BsC
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_FXmHfz5GmcJktJPe9NMK9x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ay208p9mC-wHchx2i98R6p
          claim_id: c_NAo0w3WIFAT3he-5cc8BsC
          source_id: s_AQLySqJYErgyEyYj_MIsF0
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇典 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇典 之父／母。
          source:
            id: s_AQLySqJYErgyEyYj_MIsF0
            source_type: api_record
            title: 中国历代人物传记资料库：王崇典（CBDB 302979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json
            external_identifier: CBDB:302979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YCdG7XtqNcYaExuN76xqKv
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9uhp9YdY4kcc7a28Za7eRM
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FXmHfz5GmcJktJPe9NMK9x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0PnkBZnxKJDVQzxQe5UCP
          claim_id: c_9uhp9YdY4kcc7a28Za7eRM
          source_id: s_AQLySqJYErgyEyYj_MIsF0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124981 王崇古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AQLySqJYErgyEyYj_MIsF0
            source_type: api_record
            title: 中国历代人物传记资料库：王崇典（CBDB 302979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json
            external_identifier: CBDB:302979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
---

# 王崇典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇典，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302979） | accepted |
| name.primary | 王崇典 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YCdG7XtqNcYaExuN76xqKv | 王瑶 | accepted |
| other | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇典（CBDB 302979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json)
