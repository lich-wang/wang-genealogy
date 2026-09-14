---
schema: wang-person/v1
id: p_cGCWifwUvYu628MPq75vC4
status: active
merged_into: null
display_name: 王怡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8U2MCMYHf6wchEqJxLh8xY
        subject_person_id: p_cGCWifwUvYu628MPq75vC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vbXw1fv2e2QWLfG86pNVL5
          claim_id: c_8U2MCMYHf6wchEqJxLh8xY
          source_id: s_ibpoPmrnEiv3BXRGzNYjXp
          stance: supports
          locator: CBDB:264638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264638）
          source: &a1
            id: s_ibpoPmrnEiv3BXRGzNYjXp
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 264638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json
            external_identifier: CBDB:264638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bK5465UikQoBQTxriL7Ybu
        subject_person_id: p_cGCWifwUvYu628MPq75vC4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2HfyDS0fa_2iuektc8QTWM
          claim_id: c_bK5465UikQoBQTxriL7Ybu
          source_id: s_ibpoPmrnEiv3BXRGzNYjXp
          stance: supports
          locator: CBDB:264638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dhv6S47qFhZYr5hEG89ugi
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cGCWifwUvYu628MPq75vC4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAwv2dItC8cEhKFndbfgR3
          claim_id: c_dhv6S47qFhZYr5hEG89ugi
          source_id: s_FLRA5vTHUb07mTEmuPpcXd
          stance: supports
          locator: CBDB：兄弟 王恂（200921）之父／母 王晟
          quotation: null
          interpretation_note: 由兄弟关系推断：王怡 与 王恂 为同胞（CBDB 记「兄」），王恂 之父／母即 王怡 之父／母。
          source:
            id: s_FLRA5vTHUb07mTEmuPpcXd
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 264638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json
            external_identifier: CBDB:264638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UM99Zm3Rh6Z6EusvSaftqm
        status: active
        display_name: 王晟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zjH_r1Sj2JL162QXgfsw8q
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cGCWifwUvYu628MPq75vC4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NcWaic4fuP8AYiCPdbbvdi
          claim_id: c_zjH_r1Sj2JL162QXgfsw8q
          source_id: s_FLRA5vTHUb07mTEmuPpcXd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FLRA5vTHUb07mTEmuPpcXd
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 264638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json
            external_identifier: CBDB:264638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
---

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| bio.summary | 王怡，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UM99Zm3Rh6Z6EusvSaftqm | 王晟 | accepted |
| other | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 264638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json)
