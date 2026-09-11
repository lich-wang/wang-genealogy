---
schema: wang-person/v1
id: p_xQC9jeba1Ur5RLxK29JG6g
status: active
merged_into: null
display_name: 王韋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1mpQaAwqAxcS9BdSYjC5U
        subject_person_id: p_xQC9jeba1Ur5RLxK29JG6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x2u1C6greSe8UgCFirx3bF
          claim_id: c_r1mpQaAwqAxcS9BdSYjC5U
          source_id: s_FKBUFcBhJL7MdC36Waiy3S
          stance: supports
          locator: CBDB:126599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126599）
          source: &a1
            id: s_FKBUFcBhJL7MdC36Waiy3S
            source_type: api_record
            title: 中国历代人物传记资料库：王韋（CBDB 126599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126599&o=json
            external_identifier: CBDB:126599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dV3SQyxVfBPEyo6oKHDN3A
        subject_person_id: p_xQC9jeba1Ur5RLxK29JG6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韋，明人物。明清進士進士，籍贯江浦，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126599）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T1nv2tlrLyf9erfOevC_-e
          claim_id: c_dV3SQyxVfBPEyo6oKHDN3A
          source_id: s_FKBUFcBhJL7MdC36Waiy3S
          stance: supports
          locator: CBDB:126599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_K9IqhLuw48GQh5fvtcLblV
        subject_person_id: p_Ah3g4yrYYDCrzpBtMYJGQQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xQC9jeba1Ur5RLxK29JG6g
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0L_MQKejsDkZJDnx-dEVE
          claim_id: c_K9IqhLuw48GQh5fvtcLblV
          source_id: s_x9sPPspfnjVpTK8kYG9EC4
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x9sPPspfnjVpTK8kYG9EC4
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 274516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274516&o=json
            external_identifier: CBDB:274516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ah3g4yrYYDCrzpBtMYJGQQ
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王韋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韋 | accepted |
| bio.summary | 王韋，明人物。明清進士進士，籍贯江浦，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Ah3g4yrYYDCrzpBtMYJGQQ | 王嗣宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 274516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274516&o=json)
- [中国历代人物传记资料库：王韋（CBDB 126599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126599&o=json)
