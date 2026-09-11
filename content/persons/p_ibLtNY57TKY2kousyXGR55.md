---
schema: wang-person/v1
id: p_ibLtNY57TKY2kousyXGR55
status: active
merged_into: null
display_name: 王澤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7UK6vdbHfQnGKRrDH4EGRB
        subject_person_id: p_ibLtNY57TKY2kousyXGR55
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHrj7L8v5bTQXyjo8WHEgV
          claim_id: c_7UK6vdbHfQnGKRrDH4EGRB
          source_id: s_FACr6CgMXX6SVsV4jjiZ8h
          stance: supports
          locator: CBDB:134176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134176）
          source: &a1
            id: s_FACr6CgMXX6SVsV4jjiZ8h
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 134176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json
            external_identifier: CBDB:134176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qCq8aBCPN2Z1B2Gqqo92iE
        subject_person_id: p_ibLtNY57TKY2kousyXGR55
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3WHyNnc90XnEsUtHrn9l-I
          claim_id: c_qCq8aBCPN2Z1B2Gqqo92iE
          source_id: s_FACr6CgMXX6SVsV4jjiZ8h
          stance: supports
          locator: CBDB:134176
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
  ancestors:
    - claim:
        id: c_AQyysKJNy3r7vg29Mg9SiK
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ibLtNY57TKY2kousyXGR55
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHcUxMe1Fq8Z_W1HeKazoA
          claim_id: c_AQyysKJNy3r7vg29Mg9SiK
          source_id: s_FACr6CgMXX6SVsV4jjiZ8h
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 134176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json)
