---
schema: wang-person/v1
id: p_jCmvSEJEzMCfHNSXJ1XAo8
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MmFdNnqn2G126jL2myJsmQ
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjBzvavJUGZD7ZQFC33eqy
          claim_id: c_MmFdNnqn2G126jL2myJsmQ
          source_id: s_b7whMWbo8eNVBQ9US1KaTE
          stance: supports
          locator: CBDB:241290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241290）
          source: &a1
            id: s_b7whMWbo8eNVBQ9US1KaTE
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 241290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241290&o=json
            external_identifier: CBDB:241290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oz5Nx1EpqtspvWJVnqL6RC
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y2k2Vbe7z9BiMTRvAXvqRB
          claim_id: c_oz5Nx1EpqtspvWJVnqL6RC
          source_id: s_b7whMWbo8eNVBQ9US1KaTE
          stance: supports
          locator: CBDB:241290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cOwKuq6W0WwhKtKfk7yGWY
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xK3ZItgeV1VR6MgMnx-RPK
          claim_id: c_cOwKuq6W0WwhKtKfk7yGWY
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6M4qEeJfDYH98dZB9CiF5G
            source_type: api_record
            title: 中国历代人物传记资料库：王豪（CBDB 208164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json
            external_identifier: CBDB:208164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CwH6PHR1XzMwocJ8ZwHSPP
        status: active
        display_name: 王豪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CwH6PHR1XzMwocJ8ZwHSPP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豪（CBDB 208164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json)
- [中国历代人物传记资料库：王寧（CBDB 241290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241290&o=json)
