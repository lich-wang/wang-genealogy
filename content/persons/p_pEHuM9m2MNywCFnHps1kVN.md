---
schema: wang-person/v1
id: p_pEHuM9m2MNywCFnHps1kVN
status: active
merged_into: null
display_name: 王敬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x8NNTURcYbLB19jcCRm7B7
        subject_person_id: p_pEHuM9m2MNywCFnHps1kVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_36GuMpbfJkQcjNuQySghMd
          claim_id: c_x8NNTURcYbLB19jcCRm7B7
          source_id: s_wgQqqN7nj8EDdtTRHF97g2
          stance: supports
          locator: CBDB:208727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208727）
          source: &a1
            id: s_wgQqqN7nj8EDdtTRHF97g2
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 208727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json
            external_identifier: CBDB:208727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QxVuajGMUcxkQLJBp5oQup
        subject_person_id: p_pEHuM9m2MNywCFnHps1kVN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6t1-PVqIUK-geQvp1NM-tN
          claim_id: c_QxVuajGMUcxkQLJBp5oQup
          source_id: s_wgQqqN7nj8EDdtTRHF97g2
          stance: supports
          locator: CBDB:208727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZLzsXQ6C78kqTCD_aoi-LK
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pEHuM9m2MNywCFnHps1kVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NmMv_kM7GDzPShZmSSJh3E
          claim_id: c_ZLzsXQ6C78kqTCD_aoi-LK
          source_id: s_VdQpO_NL-x2c85R9XNd8-K
          stance: supports
          locator: CBDB：兄弟 王敎（126675）之父／母 王珏
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬 与 王敎 为同胞（CBDB 记「弟」），王敎 之父／母即 王敬 之父／母。
          source:
            id: s_VdQpO_NL-x2c85R9XNd8-K
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 208727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json
            external_identifier: CBDB:208727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QNP9ruUBJM2h7tcYH7jhr9
        status: active
        display_name: 王珏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tR-xnBS1i0KBTwTAbl2jT8
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pEHuM9m2MNywCFnHps1kVN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-JDRJNWsaWgo4fgaprrYDM
          claim_id: c_tR-xnBS1i0KBTwTAbl2jT8
          source_id: s_VdQpO_NL-x2c85R9XNd8-K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126675 王敎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VdQpO_NL-x2c85R9XNd8-K
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 208727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json
            external_identifier: CBDB:208727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HKCnizxAApK3fsPh2jp46Q
        status: active
        display_name: 王敎
        merged_into_person_id: null
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QNP9ruUBJM2h7tcYH7jhr9 | 王珏 | accepted |
| other | p_HKCnizxAApK3fsPh2jp46Q | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 208727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json)
