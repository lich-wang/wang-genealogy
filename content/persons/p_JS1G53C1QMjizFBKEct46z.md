---
schema: wang-person/v1
id: p_JS1G53C1QMjizFBKEct46z
status: active
merged_into: null
display_name: 王樂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NjLNu2fcLXhpje4hkNBQP
        subject_person_id: p_JS1G53C1QMjizFBKEct46z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wa9WFqoLWtD7D6q4DSpELg
          claim_id: c_8NjLNu2fcLXhpje4hkNBQP
          source_id: s_9TRnZ4nAHK5CzysnFtjWss
          stance: supports
          locator: CBDB:261826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261826）
          source: &a1
            id: s_9TRnZ4nAHK5CzysnFtjWss
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 261826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json
            external_identifier: CBDB:261826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFFfavvVcq76mZxNht1aTJ
        subject_person_id: p_JS1G53C1QMjizFBKEct46z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uHUqKIanSW858vWWYwT2q5
          claim_id: c_BFFfavvVcq76mZxNht1aTJ
          source_id: s_9TRnZ4nAHK5CzysnFtjWss
          stance: supports
          locator: CBDB:261826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gLNwQVnVNDg-Byp-FNPLfI
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JS1G53C1QMjizFBKEct46z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1G5givqvSQCutFzFqB-kRS
          claim_id: c_gLNwQVnVNDg-Byp-FNPLfI
          source_id: s_l2dt9k1hX48LV7LshWqnDZ
          stance: supports
          locator: CBDB：兄弟 王经（200712）之父／母 王理
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂 与 王经 为同胞（CBDB 记「弟」），王经 之父／母即 王樂 之父／母。
          source:
            id: s_l2dt9k1hX48LV7LshWqnDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 261826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json
            external_identifier: CBDB:261826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_reuJ3Gy5K3tzEUt9VByf69
        status: active
        display_name: 王理
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QjazoVSH9lRizTmi_OgjoK
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JS1G53C1QMjizFBKEct46z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1hsm-F53j0XzwBuPwwxJn
          claim_id: c_QjazoVSH9lRizTmi_OgjoK
          source_id: s_l2dt9k1hX48LV7LshWqnDZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200712 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l2dt9k1hX48LV7LshWqnDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 261826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json
            external_identifier: CBDB:261826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
---

# 王樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂 | accepted |
| bio.summary | 王樂，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_reuJ3Gy5K3tzEUt9VByf69 | 王理 | accepted |
| other | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂（CBDB 261826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261826&o=json)
