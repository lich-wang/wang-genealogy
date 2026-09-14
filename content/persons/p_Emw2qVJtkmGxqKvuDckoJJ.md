---
schema: wang-person/v1
id: p_Emw2qVJtkmGxqKvuDckoJJ
status: active
merged_into: null
display_name: 王天錄
cbdb_id: 35521
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MLoVpeeCKaGTeLhucRmFvW
        subject_person_id: p_Emw2qVJtkmGxqKvuDckoJJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錄，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_f-njgjazl3_CLataeuy_Xs
          claim_id: c_MLoVpeeCKaGTeLhucRmFvW
          source_id: s_oD6BGdd8EEk1NfBGdXJn1L
          stance: supports
          locator: CBDB:35521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oD6BGdd8EEk1NfBGdXJn1L
            source_type: api_record
            title: 中国历代人物传记资料库：王天錄（CBDB 35521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35521&o=json
            external_identifier: CBDB:35521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4QaLMtHEMs7ft83ekbqf6
        subject_person_id: p_Emw2qVJtkmGxqKvuDckoJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_upFN2BWy8MFuoAiFB9Yb7S
          claim_id: c_Z4QaLMtHEMs7ft83ekbqf6
          source_id: s_oD6BGdd8EEk1NfBGdXJn1L
          stance: supports
          locator: CBDB:35521
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UD68iVyIegSX0lSeLfdsID
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Emw2qVJtkmGxqKvuDckoJJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_0uPoCffbE19Ymqo0YnC2Q4
          claim_id: c_UD68iVyIegSX0lSeLfdsID
          source_id: s_r2-av8NK2RflYmLoYF0LfM
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35516）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_r2-av8NK2RflYmLoYF0LfM
            source_type: api_record
            title: 中国历代人物传记资料库：王天錄（CBDB 35521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35521&o=json
            external_identifier: CBDB:35521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天錄，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35521） | accepted |
| name.primary | 王天錄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天錄（CBDB 35521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35521&o=json)
