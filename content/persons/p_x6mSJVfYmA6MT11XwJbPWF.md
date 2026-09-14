---
schema: wang-person/v1
id: p_x6mSJVfYmA6MT11XwJbPWF
status: active
merged_into: null
display_name: 王紳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qBzLezxLjDPm7NrVauPeAe
        subject_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QdZEsA3fyWwcz2uNveDWgQ
          claim_id: c_qBzLezxLjDPm7NrVauPeAe
          source_id: s_qppkPWtkjnPsgyFEATrcMm
          stance: supports
          locator: CBDB:259211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259211）
          source: &a1
            id: s_qppkPWtkjnPsgyFEATrcMm
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 259211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json
            external_identifier: CBDB:259211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tx27eYWQekUQ2uSEh8anNa
        subject_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dwie5LMi4RYvYC2u5svR1p
          claim_id: c_Tx27eYWQekUQ2uSEh8anNa
          source_id: s_qppkPWtkjnPsgyFEATrcMm
          stance: supports
          locator: CBDB:259211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_srFOQz7eja3nw-YJ58P1P2
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KdrZbl_s1IGBF2PeO9V5A
          claim_id: c_srFOQz7eja3nw-YJ58P1P2
          source_id: s_yR3Z4H8lSg0YJwqH8XHEsP
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王紳 之父／母。
          source:
            id: s_yR3Z4H8lSg0YJwqH8XHEsP
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 259211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json
            external_identifier: CBDB:259211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o8zvgJXd9bgohC9oUj28Xv
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VWHnbsoCzwIAIwkfwH0Jhm
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gfA3ikjoGqbusbYgqa9F7
          claim_id: c_VWHnbsoCzwIAIwkfwH0Jhm
          source_id: s_yR3Z4H8lSg0YJwqH8XHEsP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yR3Z4H8lSg0YJwqH8XHEsP
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 259211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json
            external_identifier: CBDB:259211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o8zvgJXd9bgohC9oUj28Xv | 王敏 | accepted |
| other | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 259211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json)
