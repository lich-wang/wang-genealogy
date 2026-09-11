---
schema: wang-person/v1
id: p_sLapyACEMy6qokZ2Zd8EyF
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBKvSbxEHyoAyp6XqYsuJp
        subject_person_id: p_sLapyACEMy6qokZ2Zd8EyF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M34pRQZSCRELe6TQ4FXx92
          claim_id: c_gBKvSbxEHyoAyp6XqYsuJp
          source_id: s_iNKetKApV3zNUSe8L2n68N
          stance: supports
          locator: CBDB:265491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265491）
          source: &a1
            id: s_iNKetKApV3zNUSe8L2n68N
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 265491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265491&o=json
            external_identifier: CBDB:265491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QD6WB4Kj2pQjQV5CTWXFr2
        subject_person_id: p_sLapyACEMy6qokZ2Zd8EyF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yn5X-X5ierx70fIo8owybJ
          claim_id: c_QD6WB4Kj2pQjQV5CTWXFr2
          source_id: s_iNKetKApV3zNUSe8L2n68N
          stance: supports
          locator: CBDB:265491
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
          source:
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
      object_person:
        id: p_BoCYzTvdQ3E7NnYNTgV14j
        status: active
        display_name: 王廷
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BoCYzTvdQ3E7NnYNTgV14j | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 265491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265491&o=json)
- [中国历代人物传记资料库：王廷（CBDB 126552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126552&o=json)
