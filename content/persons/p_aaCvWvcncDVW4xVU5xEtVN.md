---
schema: wang-person/v1
id: p_aaCvWvcncDVW4xVU5xEtVN
status: active
merged_into: null
display_name: 王淑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkSMAotjitXCyLoU9jV2oB
        subject_person_id: p_aaCvWvcncDVW4xVU5xEtVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQwijoLhbgYrgdQ2QE3aHU
          claim_id: c_KkSMAotjitXCyLoU9jV2oB
          source_id: s_GQvHEvyoXsUAV3ok7CdC75
          stance: supports
          locator: CBDB:323023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323023）
          source: &a1
            id: s_GQvHEvyoXsUAV3ok7CdC75
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 323023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json
            external_identifier: CBDB:323023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFJszjA6qHqpGvE8q3ZoN7
        subject_person_id: p_aaCvWvcncDVW4xVU5xEtVN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑，明人物。嘉靖三十八年進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 323023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yOSAbG6SmF2_7d1viDE1jh
          claim_id: c_KFJszjA6qHqpGvE8q3ZoN7
          source_id: s_GQvHEvyoXsUAV3ok7CdC75
          stance: supports
          locator: CBDB:323023
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5V5W90UKN_SUxbHviE2szU
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aaCvWvcncDVW4xVU5xEtVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2hx8ebkm9WZ1WmwsVb-Xq
          claim_id: c_5V5W90UKN_SUxbHviE2szU
          source_id: s_6y0DQ-Rx3EoFwKceiz6gtb
          stance: supports
          locator: CBDB：兄弟 王湜（204714）之父／母 王諫
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑 与 王湜 为同胞（CBDB 记「弟」），王湜 之父／母即 王淑 之父／母。
          source:
            id: s_6y0DQ-Rx3EoFwKceiz6gtb
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 323023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json
            external_identifier: CBDB:323023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i7TE8GAQBDSARQziXA9bL1
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tANVnlbpdy9x3BvPfiGSp5
        subject_person_id: p_aaCvWvcncDVW4xVU5xEtVN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKXg018HQSkVzLb-TkW2sc
          claim_id: c_tANVnlbpdy9x3BvPfiGSp5
          source_id: s_6y0DQ-Rx3EoFwKceiz6gtb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204714 王湜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6y0DQ-Rx3EoFwKceiz6gtb
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 323023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json
            external_identifier: CBDB:323023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wAFqCzpuCN66ZSxVPcW8sQ
        status: active
        display_name: 王湜
        merged_into_person_id: null
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| bio.summary | 王淑，明人物。嘉靖三十八年進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 323023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i7TE8GAQBDSARQziXA9bL1 | 王諫 | accepted |
| other | p_wAFqCzpuCN66ZSxVPcW8sQ | 王湜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 323023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json)
