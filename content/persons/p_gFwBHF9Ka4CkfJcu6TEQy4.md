---
schema: wang-person/v1
id: p_gFwBHF9Ka4CkfJcu6TEQy4
status: active
merged_into: null
display_name: 王子覺
cbdb_id: 134164
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PSZfm7B3uW7miQCqkeGTbg
        subject_person_id: p_gFwBHF9Ka4CkfJcu6TEQy4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子覺，元人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SiCcjLYp13qrx9yjFvGu1P
          claim_id: c_PSZfm7B3uW7miQCqkeGTbg
          source_id: s_i9uHZiCu6bL13psYRA27oc
          stance: supports
          locator: CBDB:134164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_i9uHZiCu6bL13psYRA27oc
            source_type: api_record
            title: 中国历代人物传记资料库：王子覺（CBDB 134164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134164&o=json
            external_identifier: CBDB:134164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpZGawx4qj1362JwPWKZx3
        subject_person_id: p_gFwBHF9Ka4CkfJcu6TEQy4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W5K2LfBh1EJVsbzx19M724
          claim_id: c_dpZGawx4qj1362JwPWKZx3
          source_id: s_i9uHZiCu6bL13psYRA27oc
          stance: supports
          locator: CBDB:134164
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vgyyM7HGAdDGx1ax-Q8PVj
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gFwBHF9Ka4CkfJcu6TEQy4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKqcy90KK49EUQWpRKocji
          claim_id: c_vgyyM7HGAdDGx1ax-Q8PVj
          source_id: s_i9uHZiCu6bL13psYRA27oc
          stance: supports
          locator: 宋濂全集，1606：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i9uHZiCu6bL13psYRA27oc
            source_type: api_record
            title: 中国历代人物传记资料库：王子覺（CBDB 134164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134164&o=json
            external_identifier: CBDB:134164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子覺，元人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134164） | accepted |
| name.primary | 王子覺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子覺（CBDB 134164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134164&o=json)
