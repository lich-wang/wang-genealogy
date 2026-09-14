---
schema: wang-person/v1
id: p_dRe15voEEJZFKaomCMV1Cw
status: active
merged_into: null
display_name: 王大作
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KFyC24Nw6BcXLXUPBxKLaX
        subject_person_id: p_dRe15voEEJZFKaomCMV1Cw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大作
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_33Tyrh7EazGBELABXEnb59
          claim_id: c_KFyC24Nw6BcXLXUPBxKLaX
          source_id: s_YrFykesQ8gGdsg1meqzr1u
          stance: supports
          locator: CBDB:283879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283879）
          source: &a1
            id: s_YrFykesQ8gGdsg1meqzr1u
            source_type: api_record
            title: 中国历代人物传记资料库：王大作（CBDB 283879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283879&o=json
            external_identifier: CBDB:283879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y2WLzvz3vg7mDTFKa7h9B6
        subject_person_id: p_dRe15voEEJZFKaomCMV1Cw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大作，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GNvfvxpC0NDqtXLtxdlco_
          claim_id: c_Y2WLzvz3vg7mDTFKa7h9B6
          source_id: s_YrFykesQ8gGdsg1meqzr1u
          stance: supports
          locator: CBDB:283879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0bSVPtH9sUK2VdoN2-ntzP
        subject_person_id: p_e5Sidd4uLDXKV7G8RopKVW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRe15voEEJZFKaomCMV1Cw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ygGx-6gf9gwJD0r3fTnZh
          claim_id: c_0bSVPtH9sUK2VdoN2-ntzP
          source_id: s_8b4_xKiHAmoKvHDCbABRJI
          stance: supports
          locator: CBDB：兄弟 王大化（202118）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王大作 与 王大化 为同胞（CBDB 记「兄」），王大化 之父／母即 王大作 之父／母。
          source:
            id: s_8b4_xKiHAmoKvHDCbABRJI
            source_type: api_record
            title: 中国历代人物传记资料库：王大作（CBDB 283879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283879&o=json
            external_identifier: CBDB:283879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e5Sidd4uLDXKV7G8RopKVW
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_byhR8gIPfKGvzcYHgt7Sa5
        subject_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dRe15voEEJZFKaomCMV1Cw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ljuT6ibr9UA79AzqOKMNLp
          claim_id: c_byhR8gIPfKGvzcYHgt7Sa5
          source_id: s_8b4_xKiHAmoKvHDCbABRJI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202118 王大化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8b4_xKiHAmoKvHDCbABRJI
            source_type: api_record
            title: 中国历代人物传记资料库：王大作（CBDB 283879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283879&o=json
            external_identifier: CBDB:283879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7H3TPU2nfHoiknXCZ9JVid
        status: active
        display_name: 王大化
        merged_into_person_id: null
---

# 王大作

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大作 | accepted |
| bio.summary | 王大作，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e5Sidd4uLDXKV7G8RopKVW | 王睿 | accepted |
| other | p_7H3TPU2nfHoiknXCZ9JVid | 王大化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大作（CBDB 283879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283879&o=json)
