---
schema: wang-person/v1
id: p_Pmst9sDnARAD4KrAUMx2Lv
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRmHzyPbNcs7XBxm6b6fF7
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_shr4sAxi4UyMMECDAPLiwp
          claim_id: c_GRmHzyPbNcs7XBxm6b6fF7
          source_id: s_7xPuk7gLDzFFxKCLUpKUha
          stance: supports
          locator: CBDB:262529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262529）
          source: &a1
            id: s_7xPuk7gLDzFFxKCLUpKUha
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 262529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262529&o=json
            external_identifier: CBDB:262529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BDcWw3mDaGXh6yGtN35XCK
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
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
        - id: cs_CF9zHxyh9uQKosa4tvg1H2
          claim_id: c_BDcWw3mDaGXh6yGtN35XCK
          source_id: s_7xPuk7gLDzFFxKCLUpKUha
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
        id: c_tpqJuEvA7cMoI8c08O-pIF
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCICaIweCvPwU2akGMr_U4
          claim_id: c_tpqJuEvA7cMoI8c08O-pIF
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kN8iEAqCCxG1zVN98HVyBr
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 67991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json
            external_identifier: CBDB:67991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7SVdDrTGrqKd7fHd7JZ1J7
        status: active
        display_name: 王璟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7SVdDrTGrqKd7fHd7JZ1J7 | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 67991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json)
- [中国历代人物传记资料库：王英（CBDB 262529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262529&o=json)
