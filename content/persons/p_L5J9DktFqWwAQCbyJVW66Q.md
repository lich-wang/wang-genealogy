---
schema: wang-person/v1
id: p_L5J9DktFqWwAQCbyJVW66Q
status: active
merged_into: null
display_name: 王宗蕃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B3YRHhUCtNJMnwYi2wRFyC
        subject_person_id: p_L5J9DktFqWwAQCbyJVW66Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AzEZ9zttEJox8UGx2ymQww
          claim_id: c_B3YRHhUCtNJMnwYi2wRFyC
          source_id: s_DtmuxCw4hCJbtFrX6fukZo
          stance: supports
          locator: CBDB:226568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226568）
          source: &a1
            id: s_DtmuxCw4hCJbtFrX6fukZo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蕃（CBDB 226568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json
            external_identifier: CBDB:226568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HznHX5bWabcwKZnDDfUHFG
        subject_person_id: p_L5J9DktFqWwAQCbyJVW66Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蕃，明人物。萬曆丙戌科進士進士，籍贯京山，入仕廩生。（中国历代人物传记资料库 CBDB 226568）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fYZJ8F4VGn68DwDaGxvem2
          claim_id: c_HznHX5bWabcwKZnDDfUHFG
          source_id: s_DtmuxCw4hCJbtFrX6fukZo
          stance: supports
          locator: CBDB:226568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W5_yNddgxSjio6E9DIXuRX
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L5J9DktFqWwAQCbyJVW66Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-h9YInKJVrGZ7VDGULkxzA
          claim_id: c_W5_yNddgxSjio6E9DIXuRX
          source_id: s__0zPGGN_SlNatcPOAVl1cw
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗蕃 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗蕃 之父／母。
          source:
            id: s__0zPGGN_SlNatcPOAVl1cw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蕃（CBDB 226568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json
            external_identifier: CBDB:226568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UljATl3hT0Ypgef1yWsPsk
        subject_person_id: p_L5J9DktFqWwAQCbyJVW66Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YcgZGHB8b41JUksSD6hCbG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oxCqrGiDakPMuFZWl9X7E
          claim_id: c_UljATl3hT0Ypgef1yWsPsk
          source_id: s__0zPGGN_SlNatcPOAVl1cw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207031 王宗蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__0zPGGN_SlNatcPOAVl1cw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蕃（CBDB 226568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json
            external_identifier: CBDB:226568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
---

# 王宗蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗蕃 | accepted |
| bio.summary | 王宗蕃，明人物。萬曆丙戌科進士進士，籍贯京山，入仕廩生。（中国历代人物传记资料库 CBDB 226568） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |
| other | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗蕃（CBDB 226568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json)
