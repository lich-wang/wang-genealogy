---
schema: wang-person/v1
id: p_UkPp61zPoKXswTkME5j3Ce
status: active
merged_into: null
display_name: 王如堯
cbdb_id: 226069
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iv4YPZD1kHkzYL8HX2RCSF
        subject_person_id: p_UkPp61zPoKXswTkME5j3Ce
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堯，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226069）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HwS1724XE47LXoa2Y1rYmV
          claim_id: c_iv4YPZD1kHkzYL8HX2RCSF
          source_id: s_2TLKNJjWFwRACfEMt7S2YB
          stance: supports
          locator: CBDB:226069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2TLKNJjWFwRACfEMt7S2YB
            source_type: api_record
            title: 中国历代人物传记资料库：王如堯（CBDB 226069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json
            external_identifier: CBDB:226069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8n5NF7ymZSrm6vYY5LebHA
        subject_person_id: p_UkPp61zPoKXswTkME5j3Ce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4wezQsGBCFougGjLtSdNRX
          claim_id: c_8n5NF7ymZSrm6vYY5LebHA
          source_id: s_2TLKNJjWFwRACfEMt7S2YB
          stance: supports
          locator: CBDB:226069
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nEajGnSJJlFYO04v4d_u51
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UkPp61zPoKXswTkME5j3Ce
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kODxNyop8JxLndgmujJ7eD
          claim_id: c_nEajGnSJJlFYO04v4d_u51
          source_id: s_OYgoguSPH1T7QD2GIzzLUN
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如堯 与 王如堅 为同胞（CBDB 记「弟」），王如堅 之父／母即 王如堯 之父／母。
          source:
            id: s_OYgoguSPH1T7QD2GIzzLUN
            source_type: api_record
            title: 中国历代人物传记资料库：王如堯（CBDB 226069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json
            external_identifier: CBDB:226069
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
        id: c_bJw4DVGLnxadByM7vKJqDr
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UkPp61zPoKXswTkME5j3Ce
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ly4vPZXxxYTiT_bDkB428b
          claim_id: c_bJw4DVGLnxadByM7vKJqDr
          source_id: s_OYgoguSPH1T7QD2GIzzLUN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OYgoguSPH1T7QD2GIzzLUN
            source_type: api_record
            title: 中国历代人物传记资料库：王如堯（CBDB 226069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json
            external_identifier: CBDB:226069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
---

# 王如堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如堯，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226069） | accepted |
| name.primary | 王如堯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F5hazwzcVncNtpZFL7kuXD | 王端昌 | accepted |
| other | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如堯（CBDB 226069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json)
