---
schema: wang-person/v1
id: p_2FtChk1xSouaHotUbP87sY
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GmcsKyL6PA8TE1MUcw5UvS
        subject_person_id: p_2FtChk1xSouaHotUbP87sY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JMtMan7Wxi7MjkAcHk7gc
          claim_id: c_GmcsKyL6PA8TE1MUcw5UvS
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: CBDB:208122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208122）
          source: &a1
            id: s_tQWMLNK9NgsqJftPjPjV32
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 208122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208122&o=json
            external_identifier: CBDB:208122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DsRgburMPgp99Ty1vaKWxf
        subject_person_id: p_2FtChk1xSouaHotUbP87sY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1gHQHfNfvBdUUH5eZCu82F
          claim_id: c_DsRgburMPgp99Ty1vaKWxf
          source_id: s_tQWMLNK9NgsqJftPjPjV32
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
        id: c_PKRjZP3uLmgDNxHwPaVUz3
        subject_person_id: p_2FtChk1xSouaHotUbP87sY
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
        - id: cs_MAgmv4MxuACjhLfFVBCmr5
          claim_id: c_PKRjZP3uLmgDNxHwPaVUz3
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FblVc3Dr-dMK9BuIZIgvM8
        subject_person_id: p_2uTqfNAW7muauc9J9oQHEs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FtChk1xSouaHotUbP87sY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-In5dJEpj_j0oH4xb7Gm4
          claim_id: c_FblVc3Dr-dMK9BuIZIgvM8
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2uTqfNAW7muauc9J9oQHEs
        status: active
        display_name: 王孟宜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__r6cXDLceIwCrtM1KCEUjb
        subject_person_id: p_VH94HvSK9LNwKLm3oKwP41
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2FtChk1xSouaHotUbP87sY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rqfY544Ung9s43PMm30Rd
          claim_id: c__r6cXDLceIwCrtM1KCEUjb
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VH94HvSK9LNwKLm3oKwP41
        status: active
        display_name: 王茂華
        merged_into_person_id: null
    - claim:
        id: c_OEm7vvGdFWgzBf8aySDprT
        subject_person_id: p_exfHCCQDDr69328nmnLRaH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2FtChk1xSouaHotUbP87sY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f6J1R1TLGjoZ4iWPpAzIMX
          claim_id: c_OEm7vvGdFWgzBf8aySDprT
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_exfHCCQDDr69328nmnLRaH
        status: active
        display_name: 王文誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2uTqfNAW7muauc9J9oQHEs | 王孟宜 | accepted |
| ancestors | p_VH94HvSK9LNwKLm3oKwP41 | 王茂華 | accepted |
| ancestors | p_exfHCCQDDr69328nmnLRaH | 王文誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 208122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208122&o=json)
