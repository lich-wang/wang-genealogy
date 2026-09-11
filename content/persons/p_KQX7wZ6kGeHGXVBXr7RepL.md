---
schema: wang-person/v1
id: p_KQX7wZ6kGeHGXVBXr7RepL
status: active
merged_into: null
display_name: 王國寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2tScNHdFBgMabBCxM57Hf
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZZu6RmDw88JEsPyi4WAfjU
          claim_id: c_q2tScNHdFBgMabBCxM57Hf
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: CBDB:288735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288735）
          source: &a1
            id: s_kUVE4BP4DZUmzxjQje8RBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 288735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json
            external_identifier: CBDB:288735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FVBXmA5qJXzCCRssi6Mk53
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寧，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288735）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Scq9UY40TezgVYYblpDzDI
          claim_id: c_FVBXmA5qJXzCCRssi6Mk53
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: CBDB:288735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Q_UgkJr40FJ9RwfCnsd2B8
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivJrT3fzYVnkH-KGJXqz9l
          claim_id: c_Q_UgkJr40FJ9RwfCnsd2B8
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國寧 | accepted |
| bio.summary | 王國寧，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 288735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json)
