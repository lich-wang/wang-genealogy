---
schema: wang-person/v1
id: p_MS2BC7Md2q6hnAWb9KKCiV
status: active
merged_into: null
display_name: 王旻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o88mAqswXT5pGK1yTXC5H7
        subject_person_id: p_MS2BC7Md2q6hnAWb9KKCiV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hB9Dh2mnB7sokxFD8MPGmU
          claim_id: c_o88mAqswXT5pGK1yTXC5H7
          source_id: s_ZtaybJGVyCsBDwkZCDJku9
          stance: supports
          locator: CBDB:267254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267254）
          source: &a1
            id: s_ZtaybJGVyCsBDwkZCDJku9
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 267254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267254&o=json
            external_identifier: CBDB:267254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j716tBbP2pC6J1DXXznHyq
        subject_person_id: p_MS2BC7Md2q6hnAWb9KKCiV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7H83KCbizhddvRdMpPMmGA
          claim_id: c_j716tBbP2pC6J1DXXznHyq
          source_id: s_ZtaybJGVyCsBDwkZCDJku9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_f9TSY1DMmebSgWXRdih_OI
        subject_person_id: p_MS2BC7Md2q6hnAWb9KKCiV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxbkEugNCAMlrk1pukDOIf
          claim_id: c_f9TSY1DMmebSgWXRdih_OI
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dRUGmqCaBFkV5AhXHe7EWi
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 201113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json
            external_identifier: CBDB:201113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C41sWozjac1HZPEX2SGUgJ
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
  other: []
---

# 王旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_C41sWozjac1HZPEX2SGUgJ | 王朝佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝佐（CBDB 201113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json)
- [中国历代人物传记资料库：王旻（CBDB 267254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267254&o=json)
