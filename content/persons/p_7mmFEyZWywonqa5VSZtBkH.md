---
schema: wang-person/v1
id: p_7mmFEyZWywonqa5VSZtBkH
status: active
merged_into: null
display_name: 王宗靖
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdRY1h8eHt5spHi6P5R3uZ
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FhAug4g9GA9Gsy1mtA4dR5
          claim_id: c_KdRY1h8eHt5spHi6P5R3uZ
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: CBDB:225727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225727）
          source: &a1
            id: s_w1YnkyRZphMzkRJWxURuiC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗靖（CBDB 225727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json
            external_identifier: CBDB:225727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m6CdCLDesb8YVT4dmuaHAc
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗靖，明人物。萬曆十一年進士，籍贯京山，曾任賜冠帶。（中国历代人物传记资料库 CBDB 225727）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9bdw9ZiilUtp4lxutaRPV7
          claim_id: c_m6CdCLDesb8YVT4dmuaHAc
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: CBDB:225727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2G0R0kP4oQTnHg8amLI7Cm
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QeyTyninIaSTQ-55oOaqB8
          claim_id: c_2G0R0kP4oQTnHg8amLI7Cm
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
    - claim:
        id: c_qdcDwxnc2SeUO3xqeWlM-A
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F3pzTKipyV5P634aLLbz89
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z3LICn5-PWAoX39e9VxzPs
          claim_id: c_qdcDwxnc2SeUO3xqeWlM-A
          source_id: s_bnvoemgYukXuM7a11sljhZ
          stance: supports
          locator: CBDB：兄弟 王堦（206978）之父／母 王宗靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王堵 与 王堦 为同胞（CBDB 记「兄」），王堦 之父／母即 王堵 之父／母。
          source:
            id: s_bnvoemgYukXuM7a11sljhZ
            source_type: api_record
            title: 中国历代人物传记资料库：王堵（CBDB 225731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json
            external_identifier: CBDB:225731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F3pzTKipyV5P634aLLbz89
        status: active
        display_name: 王堵
        merged_into_person_id: null
    - claim:
        id: c_9lAfCPOfTHiZZTFvdXHoUS
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5krsJMSgEXDGoYe8xH0bCe
          claim_id: c_9lAfCPOfTHiZZTFvdXHoUS
          source_id: s_rLUNBIN9AZjfPzlfI7U675
          stance: supports
          locator: CBDB：兄弟 王堦（206978）之父／母 王宗靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王堪 与 王堦 为同胞（CBDB 记「兄」），王堦 之父／母即 王堪 之父／母。
          source:
            id: s_rLUNBIN9AZjfPzlfI7U675
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 225733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json
            external_identifier: CBDB:225733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        status: active
        display_name: 王堪
        merged_into_person_id: null
    - claim:
        id: c_LJaBV44_sEZZTUjJHIMtpY
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_juZE9EN6CThE71NvGtiVmw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DD_MZccIB9XJV4hi1BfEAT
          claim_id: c_LJaBV44_sEZZTUjJHIMtpY
          source_id: s_oY2dAd8djfVHxKFd6isZ1Z
          stance: supports
          locator: CBDB：兄弟 王堦（206978）之父／母 王宗靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王垍 与 王堦 为同胞（CBDB 记「兄」），王堦 之父／母即 王垍 之父／母。
          source:
            id: s_oY2dAd8djfVHxKFd6isZ1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王垍（CBDB 225732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225732&o=json
            external_identifier: CBDB:225732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_juZE9EN6CThE71NvGtiVmw
        status: active
        display_name: 王垍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗靖 | accepted |
| bio.summary | 王宗靖，明人物。萬曆十一年進士，籍贯京山，曾任賜冠帶。（中国历代人物传记资料库 CBDB 225727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |
| children | p_F3pzTKipyV5P634aLLbz89 | 王堵 | accepted |
| children | p_Hzb8g4nvJ5yV9WDhTcHUPK | 王堪 | accepted |
| children | p_juZE9EN6CThE71NvGtiVmw | 王垍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堵（CBDB 225731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json)
- [中国历代人物传记资料库：王垍（CBDB 225732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225732&o=json)
- [中国历代人物传记资料库：王堪（CBDB 225733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json)
- [中国历代人物传记资料库：王宗靖（CBDB 225727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json)
