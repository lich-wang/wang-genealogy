---
schema: wang-person/v1
id: p_rJ1f7ooA9jPEPSrDSvEcw5
status: active
merged_into: null
display_name: 王崇約
cbdb_id: 225808
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fwSDDntSYeXRko9te7BaM5
        subject_person_id: p_rJ1f7ooA9jPEPSrDSvEcw5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇約，明人物。萬曆丙戌科進士進士，籍贯即墨。（中国历代人物传记资料库 CBDB 225808）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0E5Eost54q-VITgoNtHcKA
          claim_id: c_fwSDDntSYeXRko9te7BaM5
          source_id: s_5mJokYPPEzrcKEZoR4Ryhd
          stance: supports
          locator: CBDB:225808
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5mJokYPPEzrcKEZoR4Ryhd
            source_type: api_record
            title: 中国历代人物传记资料库：王崇約（CBDB 225808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225808&o=json
            external_identifier: CBDB:225808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PwSH1wK2jiw7bhAAsYMWZ9
        subject_person_id: p_rJ1f7ooA9jPEPSrDSvEcw5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_icn8cJ9yfErtM4M3o58nTg
          claim_id: c_PwSH1wK2jiw7bhAAsYMWZ9
          source_id: s_5mJokYPPEzrcKEZoR4Ryhd
          stance: supports
          locator: CBDB:225808
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0RkrXujwV_3zuK1Ce7GF03
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJ1f7ooA9jPEPSrDSvEcw5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5ITGM0_KN-Jkjf8APLbka
          claim_id: c_0RkrXujwV_3zuK1Ce7GF03
          source_id: s_5mJokYPPEzrcKEZoR4Ryhd
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5mJokYPPEzrcKEZoR4Ryhd
            source_type: api_record
            title: 中国历代人物传记资料库：王崇約（CBDB 225808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225808&o=json
            external_identifier: CBDB:225808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇約，明人物。萬曆丙戌科進士進士，籍贯即墨。（中国历代人物传记资料库 CBDB 225808） | accepted |
| name.primary | 王崇約 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇約（CBDB 225808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225808&o=json)
