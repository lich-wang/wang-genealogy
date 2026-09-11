---
schema: wang-person/v1
id: p_wMVfyCLqy9dE7qvuBJu9CN
status: active
merged_into: null
display_name: 王瑀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcKmmPZFaNDpKWK79tdBeK
        subject_person_id: p_wMVfyCLqy9dE7qvuBJu9CN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5gNdzapUFE6rWFcvCKCkPr
          claim_id: c_qcKmmPZFaNDpKWK79tdBeK
          source_id: s_biZQNR78bEFR8ceHEaxD1s
          stance: supports
          locator: CBDB:211132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211132）
          source: &a1
            id: s_biZQNR78bEFR8ceHEaxD1s
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 211132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211132&o=json
            external_identifier: CBDB:211132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DV5Bzkdmv95L2tpMogpG72
        subject_person_id: p_wMVfyCLqy9dE7qvuBJu9CN
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
        - id: cs_SVsEhowmR1qL3WBYCK7mE9
          claim_id: c_DV5Bzkdmv95L2tpMogpG72
          source_id: s_biZQNR78bEFR8ceHEaxD1s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9a6n6tkBrfPHmnamv40MKE
        subject_person_id: p_wMVfyCLqy9dE7qvuBJu9CN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kheZVIq-ysHsmzzxfHke0x
          claim_id: c_9a6n6tkBrfPHmnamv40MKE
          source_id: s_NickpJSGq9egFCMg3aTP6S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NickpJSGq9egFCMg3aTP6S
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 211133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211133&o=json
            external_identifier: CBDB:211133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tBLAnfK4dS8P5LR1P2RqS9
        status: active
        display_name: 王詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_tVoPpRApu6x2WriDhS2xUg
        subject_person_id: p_wMVfyCLqy9dE7qvuBJu9CN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p8gGucjyUFFpgR8TDqRh_z
          claim_id: c_tVoPpRApu6x2WriDhS2xUg
          source_id: s_biZQNR78bEFR8ceHEaxD1s
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百一十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DoWNVNC6JZBAasWbqdoiCX
        status: active
        display_name: 王祖嫡
        merged_into_person_id: null
  other: []
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tBLAnfK4dS8P5LR1P2RqS9 | 王詔 | accepted |
| descendants | p_DoWNVNC6JZBAasWbqdoiCX | 王祖嫡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 211132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211132&o=json)
- [中国历代人物传记资料库：王詔（CBDB 211133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211133&o=json)
