---
schema: wang-person/v1
id: p_8UXR55oiLypfyrC2us4hnw
status: active
merged_into: null
display_name: 王如綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BUjTAQh99iDKwxiX4MpSEE
        subject_person_id: p_8UXR55oiLypfyrC2us4hnw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42a4MrhgkFe8cKCyXAUduj
          claim_id: c_BUjTAQh99iDKwxiX4MpSEE
          source_id: s_ouDEq2K2d4Rw1SVjH6hksY
          stance: supports
          locator: CBDB:226076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226076）
          source: &a1
            id: s_ouDEq2K2d4Rw1SVjH6hksY
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 226076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json
            external_identifier: CBDB:226076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLUo4Woh4ExHd83J82D96p
        subject_person_id: p_8UXR55oiLypfyrC2us4hnw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如綸，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226076）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EAs9NESgVzkwllBFb0z5sU
          claim_id: c_yLUo4Woh4ExHd83J82D96p
          source_id: s_ouDEq2K2d4Rw1SVjH6hksY
          stance: supports
          locator: CBDB:226076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g8rKa8l0P13QGpr9tA9RUC
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8UXR55oiLypfyrC2us4hnw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M848AlhT4AXzCoXtr7UI7-
          claim_id: c_g8rKa8l0P13QGpr9tA9RUC
          source_id: s_tIo3ANSx-oILAN0VYUriCF
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如綸 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如綸 之父／母。
          source:
            id: s_tIo3ANSx-oILAN0VYUriCF
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 226076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json
            external_identifier: CBDB:226076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F5hazwzcVncNtpZFL7kuXD
        status: active
        display_name: 王端昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xBNMci3iIXBLP-cWHRJIWg
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8UXR55oiLypfyrC2us4hnw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQGhtmtFkEFj6QjIamHjLy
          claim_id: c_xBNMci3iIXBLP-cWHRJIWg
          source_id: s_tIo3ANSx-oILAN0VYUriCF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tIo3ANSx-oILAN0VYUriCF
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 226076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json
            external_identifier: CBDB:226076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
---

# 王如綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如綸 | accepted |
| bio.summary | 王如綸，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F5hazwzcVncNtpZFL7kuXD | 王端昌 | accepted |
| other | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如綸（CBDB 226076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json)
