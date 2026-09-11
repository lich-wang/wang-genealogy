---
schema: wang-person/v1
id: p_URk2BrLDKqiyhHZQPHt91g
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HNHcwKrCGws14uK5BTBiA4
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L3EGBp1gipMqQNa2vsz3Nj
          claim_id: c_HNHcwKrCGws14uK5BTBiA4
          source_id: s_Vc6cNcWdaXraSupbQx5sXp
          stance: supports
          locator: CBDB:265668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265668）
          source: &a1
            id: s_Vc6cNcWdaXraSupbQx5sXp
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 265668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265668&o=json
            external_identifier: CBDB:265668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8PmEmPP97nwhDDRJubcges
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265668）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zv3ECvzCPrIv7CwVmpe1Wp
          claim_id: c_8PmEmPP97nwhDDRJubcges
          source_id: s_Vc6cNcWdaXraSupbQx5sXp
          stance: supports
          locator: CBDB:265668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EWZvwX3aecOPL1E4sXJzzi
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6yqU9aBKMuAfGbUZvUkQx
          claim_id: c_EWZvwX3aecOPL1E4sXJzzi
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265668） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 265668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265668&o=json)
- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
