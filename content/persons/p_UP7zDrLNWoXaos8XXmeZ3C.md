---
schema: wang-person/v1
id: p_UP7zDrLNWoXaos8XXmeZ3C
status: active
merged_into: null
display_name: 王仕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9v1F8BBkRdNWiKi8iQBxo8
        subject_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6LZ8TiVzbG5Qu2CueYt1mx
          claim_id: c_9v1F8BBkRdNWiKi8iQBxo8
          source_id: s_PXRwBKePCgzUCJeG12EiEx
          stance: supports
          locator: CBDB:275667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275667）
          source: &a1
            id: s_PXRwBKePCgzUCJeG12EiEx
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEg5pwy7yKasqD41CCf6yw
        subject_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R9RLwOWtaaCw1JC9mBBKB4
          claim_id: c_vEg5pwy7yKasqD41CCf6yw
          source_id: s_PXRwBKePCgzUCJeG12EiEx
          stance: supports
          locator: CBDB:275667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aTnytWarrjbOLupFD0jCPu
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQrGAQ4lgb4N0l8Z_cUcZK
          claim_id: c_aTnytWarrjbOLupFD0jCPu
          source_id: s_gBv0JKC6fEkH7mrn4aRQ08
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王偉 为同胞（CBDB 记「兄」），王偉 之父／母即 王仕 之父／母。
          source:
            id: s_gBv0JKC6fEkH7mrn4aRQ08
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ax45r2gqCk3bG46hzyK38p
        status: active
        display_name: 王璣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qBJZjDmY2lTGzSNXXrrUwp
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GfDk5YhMc6p9CoqoREdk8Y
          claim_id: c_qBJZjDmY2lTGzSNXXrrUwp
          source_id: s_gBv0JKC6fEkH7mrn4aRQ08
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gBv0JKC6fEkH7mrn4aRQ08
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LvB1BmafWakeZPFiqa6trK
        status: active
        display_name: 王偉
        merged_into_person_id: null
---

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ax45r2gqCk3bG46hzyK38p | 王璣 | accepted |
| other | p_LvB1BmafWakeZPFiqa6trK | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 275667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json)
