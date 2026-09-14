---
schema: wang-person/v1
id: p_gbG7ApcEri2g2HbS3ANnzm
status: active
merged_into: null
display_name: 王聰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eG29yCPX953ktN4EpSoyQE
        subject_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p29B4Z7nG4FM5dYvJHu39S
          claim_id: c_eG29yCPX953ktN4EpSoyQE
          source_id: s_iBbxjufT1X6mwQgfbKZuyQ
          stance: supports
          locator: CBDB:245241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245241）
          source: &a1
            id: s_iBbxjufT1X6mwQgfbKZuyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hEBFvW1SZAyTe2mVoR41ci
        subject_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AMA_td1_v1NOTAarYU1O_a
          claim_id: c_hEBFvW1SZAyTe2mVoR41ci
          source_id: s_iBbxjufT1X6mwQgfbKZuyQ
          stance: supports
          locator: CBDB:245241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y7zEgrAJe7MnXngYK2Rm5N
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXH2goAASqhOe5D3g7T9Ee
          claim_id: c_Y7zEgrAJe7MnXngYK2Rm5N
          source_id: s_zCRWTX-8wt1jh5h7jsmjzh
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王智 为同胞（CBDB 记「兄」），王智 之父／母即 王聰 之父／母。
          source:
            id: s_zCRWTX-8wt1jh5h7jsmjzh
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qmh6ExHEGb6N6NWE8gC5i
        status: active
        display_name: 王昭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pq4NLVgeoc10b3Tyw9GLoM
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_99Sjq3sQ0SI1usSptz68fY
          claim_id: c_pq4NLVgeoc10b3Tyw9GLoM
          source_id: s_zCRWTX-8wt1jh5h7jsmjzh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zCRWTX-8wt1jh5h7jsmjzh
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YA1G7T5veW43cswnoFX8Ym
        status: active
        display_name: 王智
        merged_into_person_id: null
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qmh6ExHEGb6N6NWE8gC5i | 王昭 | accepted |
| other | p_YA1G7T5veW43cswnoFX8Ym | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 245241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json)
