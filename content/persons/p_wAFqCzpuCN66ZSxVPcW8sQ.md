---
schema: wang-person/v1
id: p_wAFqCzpuCN66ZSxVPcW8sQ
status: active
merged_into: null
display_name: 王湜
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7H6d6JEo8s7reqXnCugMo
        subject_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KN4f3uvAPXNtRTK2ugfTo3
          claim_id: c_E7H6d6JEo8s7reqXnCugMo
          source_id: s_Ery5iUzdMTDcw8wsC9LSKN
          stance: supports
          locator: CBDB:204714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204714）
          source: &a1
            id: s_Ery5iUzdMTDcw8wsC9LSKN
            source_type: api_record
            title: 中国历代人物传记资料库：王湜（CBDB 204714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204714&o=json
            external_identifier: CBDB:204714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7PtQC1YFZph2o66N32BD4T
        subject_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjJTPNS7QVhC1ShGq5iQkS
          claim_id: c_7PtQC1YFZph2o66N32BD4T
          source_id: s_Ery5iUzdMTDcw8wsC9LSKN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wE5LieUcxqCfjP2EUjoXeB
        subject_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜（生于1529年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WJpVC-J2FMqjixl7ZFMyri
          claim_id: c_wE5LieUcxqCfjP2EUjoXeB
          source_id: s_Ery5iUzdMTDcw8wsC9LSKN
          stance: supports
          locator: CBDB:204714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mLoa4k6Uw8j5CgrGbLUw0j
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pkfb2u17me7OsM83vlz_PK
          claim_id: c_mLoa4k6Uw8j5CgrGbLUw0j
          source_id: s_aox8CeEa13PocPCwG6L5pc
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aox8CeEa13PocPCwG6L5pc
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 323018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323018&o=json
            external_identifier: CBDB:323018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i7TE8GAQBDSARQziXA9bL1
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_86CyETiZS5ETeirlpRRgp7
        subject_person_id: p_42i6rg5dKgeiFrYCq2a9DQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oGN2DWMouTdDWN50EiEJOO
          claim_id: c_86CyETiZS5ETeirlpRRgp7
          source_id: s_NFZjVDqJ9CcFqRychcgG9D
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NFZjVDqJ9CcFqRychcgG9D
            source_type: api_record
            title: 中国历代人物传记资料库：王允壽（CBDB 323016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323016&o=json
            external_identifier: CBDB:323016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_42i6rg5dKgeiFrYCq2a9DQ
        status: active
        display_name: 王允壽
        merged_into_person_id: null
    - claim:
        id: c_sN8IbKmVGrqTiT3Z1sr-ao
        subject_person_id: p_EbApBXkRihCybB7ywSQD8z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXNiuUSIzFyytoYX796FlG
          claim_id: c_sN8IbKmVGrqTiT3Z1sr-ao
          source_id: s_nWLHm7YKRKkFT1t8wd9azh
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nWLHm7YKRKkFT1t8wd9azh
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 323017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323017&o=json
            external_identifier: CBDB:323017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EbApBXkRihCybB7ywSQD8z
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王湜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湜 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | 王湜（生于1529年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i7TE8GAQBDSARQziXA9bL1 | 王諫 | accepted |
| ancestors | p_42i6rg5dKgeiFrYCq2a9DQ | 王允壽 | accepted |
| ancestors | p_EbApBXkRihCybB7ywSQD8z | 王朝卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 323017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323017&o=json)
- [中国历代人物传记资料库：王諫（CBDB 323018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323018&o=json)
- [中国历代人物传记资料库：王湜（CBDB 204714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204714&o=json)
- [中国历代人物传记资料库：王允壽（CBDB 323016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323016&o=json)
