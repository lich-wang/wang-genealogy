---
schema: wang-person/v1
id: p_DAJy1o7QiCVZi4DRPdNYJE
status: active
merged_into: null
display_name: 王尊賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BHoBpHybWqztYkym7gtVQC
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QViNLLyAcsiAQK77gQy4fB
          claim_id: c_BHoBpHybWqztYkym7gtVQC
          source_id: s_6ANbt2S4fBJ8YcE3nF1tCB
          stance: supports
          locator: CBDB:285854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285854）
          source: &a1
            id: s_6ANbt2S4fBJ8YcE3nF1tCB
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UHu8g4r4F9KsRKm4GRPP9E
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Tx9N3AY0mBZnDvtR95VG2
          claim_id: c_UHu8g4r4F9KsRKm4GRPP9E
          source_id: s_6ANbt2S4fBJ8YcE3nF1tCB
          stance: supports
          locator: CBDB:285854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O0omccdkPPL1ZCKA_ewpzI
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MFZAPeiEyv7Q8Rh373UXw
          claim_id: c_O0omccdkPPL1ZCKA_ewpzI
          source_id: s_Vg0n4xNgHd9vAhhu5-FTtI
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王尊賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王尊賢 之父／母。
          source:
            id: s_Vg0n4xNgHd9vAhhu5-FTtI
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lk2W8j71Iko0gEwFuGri3y
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aB_0awt1BTqKd8y4mySsNX
          claim_id: c_lk2W8j71Iko0gEwFuGri3y
          source_id: s_Vg0n4xNgHd9vAhhu5-FTtI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Vg0n4xNgHd9vAhhu5-FTtI
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王尊賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尊賢 | accepted |
| bio.summary | 王尊賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尊賢（CBDB 285854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json)
