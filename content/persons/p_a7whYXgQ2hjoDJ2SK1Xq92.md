---
schema: wang-person/v1
id: p_a7whYXgQ2hjoDJ2SK1Xq92
status: active
merged_into: null
display_name: 王可久
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2W3KwFovBbxZCYsFvoRcB
        subject_person_id: p_a7whYXgQ2hjoDJ2SK1Xq92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可久
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YoJcwa11GGbNcjvnrJZm7Q
          claim_id: c_Y2W3KwFovBbxZCYsFvoRcB
          source_id: s_pnSPSsJEjcQa9UcRMAE8Wv
          stance: supports
          locator: CBDB:318956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318956）
          source: &a1
            id: s_pnSPSsJEjcQa9UcRMAE8Wv
            source_type: api_record
            title: 中国历代人物传记资料库：王可久（CBDB 318956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318956&o=json
            external_identifier: CBDB:318956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Py453nTyB8AUQZmMJm9Lpn
        subject_person_id: p_a7whYXgQ2hjoDJ2SK1Xq92
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可久，明人物。嘉靖三十二年進士，籍贯來安。（中国历代人物传记资料库 CBDB 318956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t7wmBQvVRluJ4UoWJ3cl3T
          claim_id: c_Py453nTyB8AUQZmMJm9Lpn
          source_id: s_pnSPSsJEjcQa9UcRMAE8Wv
          stance: supports
          locator: CBDB:318956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lEkwht__L2ukuGmDyHkTIQ
        subject_person_id: p_iSit69r8tHsmyFhZtJvQCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a7whYXgQ2hjoDJ2SK1Xq92
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SwTCi37JehqC0FeXDxm4R1
          claim_id: c_lEkwht__L2ukuGmDyHkTIQ
          source_id: s_c27UCGeQocRjOP8OZZJ-Mc
          stance: supports
          locator: CBDB：兄弟 王可立（204430）之父／母 王徽
          quotation: null
          interpretation_note: 由兄弟关系推断：王可久 与 王可立 为同胞（CBDB 记「弟」），王可立 之父／母即 王可久 之父／母。
          source:
            id: s_c27UCGeQocRjOP8OZZJ-Mc
            source_type: api_record
            title: 中国历代人物传记资料库：王可久（CBDB 318956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318956&o=json
            external_identifier: CBDB:318956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iSit69r8tHsmyFhZtJvQCM
        status: active
        display_name: 王徽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3S5w8i2ugfyCPiUTS0bc25
        subject_person_id: p_KwmWMeiQjGEdzbLEyCiVBf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_a7whYXgQ2hjoDJ2SK1Xq92
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lXMYOncY05OqfdUrZY_W0v
          claim_id: c_3S5w8i2ugfyCPiUTS0bc25
          source_id: s_c27UCGeQocRjOP8OZZJ-Mc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204430 王可立）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c27UCGeQocRjOP8OZZJ-Mc
            source_type: api_record
            title: 中国历代人物传记资料库：王可久（CBDB 318956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318956&o=json
            external_identifier: CBDB:318956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KwmWMeiQjGEdzbLEyCiVBf
        status: active
        display_name: 王可立
        merged_into_person_id: null
---

# 王可久

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可久 | accepted |
| bio.summary | 王可久，明人物。嘉靖三十二年進士，籍贯來安。（中国历代人物传记资料库 CBDB 318956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iSit69r8tHsmyFhZtJvQCM | 王徽 | accepted |
| other | p_KwmWMeiQjGEdzbLEyCiVBf | 王可立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可久（CBDB 318956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318956&o=json)
