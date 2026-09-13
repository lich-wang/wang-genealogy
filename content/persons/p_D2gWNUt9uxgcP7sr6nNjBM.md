---
schema: wang-person/v1
id: p_D2gWNUt9uxgcP7sr6nNjBM
status: active
merged_into: null
display_name: 王復政
cbdb_id: 256274
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZNciYscCiJpLEt8PThPsqq
        subject_person_id: p_D2gWNUt9uxgcP7sr6nNjBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復政，明人物。成化十七年進士，籍贯翼城，曾任義官。（中国历代人物传记资料库 CBDB 256274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1mB5dRLG3D_ozg0fNBjNic
          claim_id: c_ZNciYscCiJpLEt8PThPsqq
          source_id: s_n22x7JtC1vW94wJ9hDPBRB
          stance: supports
          locator: CBDB:256274
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n22x7JtC1vW94wJ9hDPBRB
            source_type: api_record
            title: 中国历代人物传记资料库：王復政（CBDB 256274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256274&o=json
            external_identifier: CBDB:256274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4uKM6gTmXrP4715heyYaA
        subject_person_id: p_D2gWNUt9uxgcP7sr6nNjBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6jnuCdqLmWBoVEERNi2hG3
          claim_id: c_Z4uKM6gTmXrP4715heyYaA
          source_id: s_n22x7JtC1vW94wJ9hDPBRB
          stance: supports
          locator: CBDB:256274
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vXIfYme1Mzvxl3WUt_NElv
        subject_person_id: p_D2gWNUt9uxgcP7sr6nNjBM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvdmSx7y1RT3v8rhxNtASs
          claim_id: c_vXIfYme1Mzvxl3WUt_NElv
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第七十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WaYus5bsYAt5fbzyJEdfbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 126647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json
            external_identifier: CBDB:126647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c3HeRQ2gB1HgRTMUsUmrLf
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王復政，明人物。成化十七年進士，籍贯翼城，曾任義官。（中国历代人物传记资料库 CBDB 256274） | accepted |
| name.primary | 王復政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_c3HeRQ2gB1HgRTMUsUmrLf | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復政（CBDB 256274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256274&o=json)
- [中国历代人物传记资料库：王泰（CBDB 126647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json)
