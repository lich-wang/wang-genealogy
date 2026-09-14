---
schema: wang-person/v1
id: p_Bzj2a8hKNQx4JMEGjEBMNh
status: active
merged_into: null
display_name: 王仲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEXSePfxK2bCQVJFj9urQg
        subject_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oTFRGBiBfD6Bprkj8ZHkG5
          claim_id: c_xEXSePfxK2bCQVJFj9urQg
          source_id: s_FwArVRFxzYH243nR5EmKBs
          stance: supports
          locator: CBDB:304733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304733）
          source: &a1
            id: s_FwArVRFxzYH243nR5EmKBs
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 304733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json
            external_identifier: CBDB:304733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y2xa8ywGYDVRCWW1uizX5p
        subject_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Njs5cuWs8gOzRFeeJLVk4
          claim_id: c_Y2xa8ywGYDVRCWW1uizX5p
          source_id: s_FwArVRFxzYH243nR5EmKBs
          stance: supports
          locator: CBDB:304733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0nRe3RZYsRFxLfJ1S6zr4i
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVv5P34pBnFHcgHT_0dNmb
          claim_id: c_0nRe3RZYsRFxLfJ1S6zr4i
          source_id: s_jxFV9atsVLJ6yzI3y4PcjL
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王仲 之父／母。
          source:
            id: s_jxFV9atsVLJ6yzI3y4PcjL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 304733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json
            external_identifier: CBDB:304733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXBcYgVQiVxBH61v91xXQ
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NBoRWmCgWHPTzlgaYq2dmX
        subject_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Os-pvW1P62t6jsQJrMB4v
          claim_id: c_NBoRWmCgWHPTzlgaYq2dmX
          source_id: s_jxFV9atsVLJ6yzI3y4PcjL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jxFV9atsVLJ6yzI3y4PcjL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 304733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json
            external_identifier: CBDB:304733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6vCWYnkMUoH1H52LSJS5y
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲 | accepted |
| bio.summary | 王仲，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vXBcYgVQiVxBH61v91xXQ | 王廉 | accepted |
| other | p_Z6vCWYnkMUoH1H52LSJS5y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲（CBDB 304733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json)
