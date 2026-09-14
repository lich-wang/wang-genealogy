---
schema: wang-person/v1
id: p_7Cc66bdBJQ3sLv7aofmVb1
status: active
merged_into: null
display_name: 王慎德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MRvAFFP5kDL4W4TAkSQ8zf
        subject_person_id: p_7Cc66bdBJQ3sLv7aofmVb1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNY94P485rQpidEGSbvXKf
          claim_id: c_MRvAFFP5kDL4W4TAkSQ8zf
          source_id: s_D1P7ZikvzP1CRdbMyV5TyM
          stance: supports
          locator: CBDB:265199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265199）
          source: &a1
            id: s_D1P7ZikvzP1CRdbMyV5TyM
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 265199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json
            external_identifier: CBDB:265199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RbeLnYKZMeBHoPFzjwfhKm
        subject_person_id: p_7Cc66bdBJQ3sLv7aofmVb1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎德，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JZjr1honLuDTyhyloidbYJ
          claim_id: c_RbeLnYKZMeBHoPFzjwfhKm
          source_id: s_D1P7ZikvzP1CRdbMyV5TyM
          stance: supports
          locator: CBDB:265199
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__qj_RaghJ8dlzWOtCXHx3V
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Cc66bdBJQ3sLv7aofmVb1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1BvYMY-uN80C6eg4EL1-Z
          claim_id: c__qj_RaghJ8dlzWOtCXHx3V
          source_id: s_jYiLPDpRdUbPpbVAlfWuGN
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎德 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎德 之父／母。
          source:
            id: s_jYiLPDpRdUbPpbVAlfWuGN
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 265199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json
            external_identifier: CBDB:265199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HBetaJRtzBcDVZP83F84Xv
        status: active
        display_name: 王稷時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8CLEylE4dUM0zA4LjWN6Io
        subject_person_id: p_7Cc66bdBJQ3sLv7aofmVb1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YzgJ3k8EkhBT-0q92KMFXd
          claim_id: c_8CLEylE4dUM0zA4LjWN6Io
          source_id: s_jYiLPDpRdUbPpbVAlfWuGN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200963 王選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jYiLPDpRdUbPpbVAlfWuGN
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 265199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json
            external_identifier: CBDB:265199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
---

# 王慎德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎德 | accepted |
| bio.summary | 王慎德，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265199） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBetaJRtzBcDVZP83F84Xv | 王稷時 | accepted |
| other | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎德（CBDB 265199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json)
