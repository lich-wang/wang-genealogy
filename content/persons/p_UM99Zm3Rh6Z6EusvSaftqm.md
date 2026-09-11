---
schema: wang-person/v1
id: p_UM99Zm3Rh6Z6EusvSaftqm
status: active
merged_into: null
display_name: 王晟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_auVjZxr9GAQhSagWhDmEUe
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMYPVDF9MJ2JcBEHT1k53B
          claim_id: c_auVjZxr9GAQhSagWhDmEUe
          source_id: s_9kHJjVHDUgWPFXxqUXzSDX
          stance: supports
          locator: CBDB:264629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264629）
          source: &a1
            id: s_9kHJjVHDUgWPFXxqUXzSDX
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 264629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264629&o=json
            external_identifier: CBDB:264629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oYSZvLCtX7tcs6bvjSXLF
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟，明人物。弘治六年進士，籍贯無錫，曾任遞運所大使。（中国历代人物传记资料库 CBDB 264629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4CuHo5gmXbU2cUSeUn6TPd
          claim_id: c_3oYSZvLCtX7tcs6bvjSXLF
          source_id: s_9kHJjVHDUgWPFXxqUXzSDX
          stance: supports
          locator: CBDB:264629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3e2V5N3-jz-0gwNzeMQmaR
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTZkNfzwFVzWVUFyA-1Tao
          claim_id: c_3e2V5N3-jz-0gwNzeMQmaR
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVwkG4e4H3d4chjvn3BAU2
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 200921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json
            external_identifier: CBDB:200921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | 王晟，明人物。弘治六年進士，籍贯無錫，曾任遞運所大使。（中国历代人物传记资料库 CBDB 264629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 264629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264629&o=json)
- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
