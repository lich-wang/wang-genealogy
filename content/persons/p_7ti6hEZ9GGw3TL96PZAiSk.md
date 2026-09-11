---
schema: wang-person/v1
id: p_7ti6hEZ9GGw3TL96PZAiSk
status: active
merged_into: null
display_name: 王遜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZyp77CRF3VkFhmpXK6qCi
        subject_person_id: p_7ti6hEZ9GGw3TL96PZAiSk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HL24HR7EmRQfrG5NrvSXPS
          claim_id: c_FZyp77CRF3VkFhmpXK6qCi
          source_id: s_wMAsNvjYtEHDPX9qHBEjH6
          stance: supports
          locator: CBDB:322399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322399）
          source: &a1
            id: s_wMAsNvjYtEHDPX9qHBEjH6
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 322399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322399&o=json
            external_identifier: CBDB:322399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MJacEZ6bwfNKKLNdJidzpH
        subject_person_id: p_7ti6hEZ9GGw3TL96PZAiSk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜，明人物。宣德五年進士，籍贯崑山，曾任監察御史。（中国历代人物传记资料库 CBDB 322399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2t4Gy9mOHj1A-Bfz35HxNT
          claim_id: c_MJacEZ6bwfNKKLNdJidzpH
          source_id: s_wMAsNvjYtEHDPX9qHBEjH6
          stance: supports
          locator: CBDB:322399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1WnX0JcFNk3hHxrN0p0Nzh
        subject_person_id: p_7ti6hEZ9GGw3TL96PZAiSk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsWbSCUX_INJsx45CITIFI
          claim_id: c_1WnX0JcFNk3hHxrN0p0Nzh
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YpAKSrU9qwMyHtJCQL4Hfc
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json
            external_identifier: CBDB:67669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2aMd4JjZAnRDvAWGEDvPYQ
        status: active
        display_name: 王復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | 王遜，明人物。宣德五年進士，籍贯崑山，曾任監察御史。（中国历代人物传记资料库 CBDB 322399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2aMd4JjZAnRDvAWGEDvPYQ | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 67669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json)
- [中国历代人物传记资料库：王遜（CBDB 322399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322399&o=json)
