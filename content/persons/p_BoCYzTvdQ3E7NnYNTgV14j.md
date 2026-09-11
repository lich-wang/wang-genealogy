---
schema: wang-person/v1
id: p_BoCYzTvdQ3E7NnYNTgV14j
status: active
merged_into: null
display_name: 王廷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jjsny81DqxLja7ARoejfgY
        subject_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6vykHJ39ELyPPiUiVKx6UP
          claim_id: c_jjsny81DqxLja7ARoejfgY
          source_id: s_MauCzGm4fdDnL9XQzCuyJV
          stance: supports
          locator: CBDB:126552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126552）
          source: &a1
            id: s_MauCzGm4fdDnL9XQzCuyJV
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 126552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126552&o=json
            external_identifier: CBDB:126552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_24HBNVSDCb7v2u8t9PdoEd
        subject_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
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
        - id: cs_eKMJZzkzrFy7fQWVN2tECX
          claim_id: c_24HBNVSDCb7v2u8t9PdoEd
          source_id: s_MauCzGm4fdDnL9XQzCuyJV
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
        id: c_mYV6YMpJs7D0BVzysvGrts
        subject_person_id: p_TDbZPwB31PQFoRWgCSDUmj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3CXMwLXab4LOhBisxMyIdV
          claim_id: c_mYV6YMpJs7D0BVzysvGrts
          source_id: s_MauCzGm4fdDnL9XQzCuyJV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TDbZPwB31PQFoRWgCSDUmj
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o0M6dS9cyAO4Mhqh3czs90
        subject_person_id: p_sLapyACEMy6qokZ2Zd8EyF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cd3lf3QNvYVqFMPgOF-V2C
          claim_id: c_o0M6dS9cyAO4Mhqh3czs90
          source_id: s_MauCzGm4fdDnL9XQzCuyJV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLapyACEMy6qokZ2Zd8EyF
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_mcFCQo56Y9Z5lIxDnSJN46
        subject_person_id: p_HLD51yxv1t466HjKkgewJZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G2wKAf7Q3OQAhxpo9er25H
          claim_id: c_mcFCQo56Y9Z5lIxDnSJN46
          source_id: s_MauCzGm4fdDnL9XQzCuyJV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HLD51yxv1t466HjKkgewJZ
        status: active
        display_name: 王璽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TDbZPwB31PQFoRWgCSDUmj | 王倫 | accepted |
| ancestors | p_sLapyACEMy6qokZ2Zd8EyF | 王俊 | accepted |
| ancestors | p_HLD51yxv1t466HjKkgewJZ | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 126552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126552&o=json)
