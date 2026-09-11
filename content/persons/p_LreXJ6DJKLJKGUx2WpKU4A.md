---
schema: wang-person/v1
id: p_LreXJ6DJKLJKGUx2WpKU4A
status: active
merged_into: null
display_name: 王允恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jBAvZUfPjS5DLd9J62nVLc
        subject_person_id: p_LreXJ6DJKLJKGUx2WpKU4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUtYPPh797g6YbeLzhQCWk
          claim_id: c_jBAvZUfPjS5DLd9J62nVLc
          source_id: s_d5xd6ZQSBcQ1nCcKUYVuNW
          stance: supports
          locator: CBDB:274392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274392）
          source: &a1
            id: s_d5xd6ZQSBcQ1nCcKUYVuNW
            source_type: api_record
            title: 中国历代人物传记资料库：王允恭（CBDB 274392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274392&o=json
            external_identifier: CBDB:274392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7jm3Fq2QxC72ZW3jKQJf7a
        subject_person_id: p_LreXJ6DJKLJKGUx2WpKU4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允恭，明人物。弘治十八年進士，曾任知縣。（中国历代人物传记资料库 CBDB 274392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eU-Vt80eSV98PkFDhbN3Vd
          claim_id: c_7jm3Fq2QxC72ZW3jKQJf7a
          source_id: s_d5xd6ZQSBcQ1nCcKUYVuNW
          stance: supports
          locator: CBDB:274392
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
  ancestors: []
  descendants:
    - claim:
        id: c_l7CpiJFvu1zrBLJsnktsM2
        subject_person_id: p_LreXJ6DJKLJKGUx2WpKU4A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VTZoWGHQLyQ9mnF79uy7J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFgI6kkJ3XtffWLHdsMPXo
          claim_id: c_l7CpiJFvu1zrBLJsnktsM2
          source_id: s_hBdRe6QomwSAn3Scu61c6H
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hBdRe6QomwSAn3Scu61c6H
            source_type: api_record
            title: 中国历代人物传记资料库：王敎（CBDB 201563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json
            external_identifier: CBDB:201563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VTZoWGHQLyQ9mnF79uy7J
        status: active
        display_name: 王敎
        merged_into_person_id: null
  other: []
---

# 王允恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允恭 | accepted |
| bio.summary | 王允恭，明人物。弘治十八年進士，曾任知縣。（中国历代人物传记资料库 CBDB 274392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3VTZoWGHQLyQ9mnF79uy7J | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敎（CBDB 201563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json)
- [中国历代人物传记资料库：王允恭（CBDB 274392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274392&o=json)
