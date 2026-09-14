---
schema: wang-person/v1
id: p_aSjUnGimC5SWPWNHQXYgEV
status: active
merged_into: null
display_name: 王慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pMiAMuGGaB4oA7QQ4UKPrm
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M35zMqMUzj2qigdCo1kTrU
          claim_id: c_pMiAMuGGaB4oA7QQ4UKPrm
          source_id: s_pBCoy9qibCkZtqmHdy5v3e
          stance: supports
          locator: CBDB:294203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294203）
          source: &a1
            id: s_pBCoy9qibCkZtqmHdy5v3e
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 294203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294203&o=json
            external_identifier: CBDB:294203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6zMDWUVAsjcZoCZEta9Qz
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王慶，明人物。嘉靖十一年進士，籍贯霑化，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 294203）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UpxyIjGjiUrAwb1XgZf4Wk
          claim_id: c_p6zMDWUVAsjcZoCZEta9Qz
          source_id: s_pBCoy9qibCkZtqmHdy5v3e
          stance: supports
          locator: CBDB:294203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EM6nwwwjWpmJvds0bTm6e5
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sSZ9RILKwE1_5estX5vjsv
          claim_id: c_EM6nwwwjWpmJvds0bTm6e5
          source_id: s_pBCoy9qibCkZtqmHdy5v3e
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLhnC92rQu1PepE5sPJ3EL
        status: active
        display_name: 王弘道
        merged_into_person_id: null
    - claim:
        id: c_BfF_ffcck-WwWhcoiG-ltV
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vWyTBAhvhpS9PiXN7z5UNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b0yMJX-XiJVK5hNpQM-mve
          claim_id: c_BfF_ffcck-WwWhcoiG-ltV
          source_id: s_b6kVMWEmbuVWwe4xu1Wrjl
          stance: supports
          locator: CBDB：兄弟 王弘道（202780）之父／母 王慶
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘仁 与 王弘道 为同胞（CBDB 记「弟」），王弘道 之父／母即 王弘仁 之父／母。
          source:
            id: s_b6kVMWEmbuVWwe4xu1Wrjl
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 294206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json
            external_identifier: CBDB:294206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vWyTBAhvhpS9PiXN7z5UNb
        status: active
        display_name: 王弘仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | 王慶，明人物。嘉靖十一年進士，籍贯霑化，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 294203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sLhnC92rQu1PepE5sPJ3EL | 王弘道 | accepted |
| children | p_vWyTBAhvhpS9PiXN7z5UNb | 王弘仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘仁（CBDB 294206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json)
- [中国历代人物传记资料库：王慶（CBDB 294203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294203&o=json)
