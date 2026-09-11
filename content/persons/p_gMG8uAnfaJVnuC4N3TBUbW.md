---
schema: wang-person/v1
id: p_gMG8uAnfaJVnuC4N3TBUbW
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8VWcKNiQEiaSuK25SLcgv
        subject_person_id: p_gMG8uAnfaJVnuC4N3TBUbW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKF7fdPhXEW9SEEAz2BtfD
          claim_id: c_B8VWcKNiQEiaSuK25SLcgv
          source_id: s_7kHQ9jaHbmYcgCzAS8jxVd
          stance: supports
          locator: CBDB:212029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212029）
          source: &a1
            id: s_7kHQ9jaHbmYcgCzAS8jxVd
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 212029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json
            external_identifier: CBDB:212029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7fpdgohQ1S2BgL3JCUHRyR
        subject_person_id: p_gMG8uAnfaJVnuC4N3TBUbW
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
        - id: cs_bZVKyAarbrysdfzz9UQHGg
          claim_id: c_7fpdgohQ1S2BgL3JCUHRyR
          source_id: s_7kHQ9jaHbmYcgCzAS8jxVd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_crLz9NQC06QQ4qQ1ZpkI_p
        subject_person_id: p_gMG8uAnfaJVnuC4N3TBUbW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jebTgmfmi1GGEiYuI1H5oy
          claim_id: c_crLz9NQC06QQ4qQ1ZpkI_p
          source_id: s_7kHQ9jaHbmYcgCzAS8jxVd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 212029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json)
