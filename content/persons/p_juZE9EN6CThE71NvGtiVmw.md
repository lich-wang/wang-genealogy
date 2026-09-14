---
schema: wang-person/v1
id: p_juZE9EN6CThE71NvGtiVmw
status: active
merged_into: null
display_name: 王垍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QgQ6jthwvDfAZkcPv51sra
        subject_person_id: p_juZE9EN6CThE71NvGtiVmw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idj9f2GQXc91aUWF3q5dMH
          claim_id: c_QgQ6jthwvDfAZkcPv51sra
          source_id: s_NbjfQaGrY17P2au5zMpn65
          stance: supports
          locator: CBDB:225732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225732）
          source: &a1
            id: s_NbjfQaGrY17P2au5zMpn65
            source_type: api_record
            title: 中国历代人物传记资料库：王垍（CBDB 225732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225732&o=json
            external_identifier: CBDB:225732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JbhR41FeP9958vxvEMTcBc
        subject_person_id: p_juZE9EN6CThE71NvGtiVmw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垍，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225732）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V8JE_o59KdZWLKBjfwVfG5
          claim_id: c_JbhR41FeP9958vxvEMTcBc
          source_id: s_NbjfQaGrY17P2au5zMpn65
          stance: supports
          locator: CBDB:225732
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_7mmFEyZWywonqa5VSZtBkH
        status: active
        display_name: 王宗靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Yq0nfgDF8N1a4SZ2A0gfu0
        subject_person_id: p_juZE9EN6CThE71NvGtiVmw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVi-nXDOChG6plSyxTc5Fv
          claim_id: c_Yq0nfgDF8N1a4SZ2A0gfu0
          source_id: s_oY2dAd8djfVHxKFd6isZ1Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206978 王堦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
---

# 王垍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垍 | accepted |
| bio.summary | 王垍，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225732） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7mmFEyZWywonqa5VSZtBkH | 王宗靖 | accepted |
| other | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垍（CBDB 225732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225732&o=json)
