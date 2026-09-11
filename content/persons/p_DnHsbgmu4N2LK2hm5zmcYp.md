---
schema: wang-person/v1
id: p_DnHsbgmu4N2LK2hm5zmcYp
status: active
merged_into: null
display_name: 王緒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5jKE6Ckq2nZHQGiMx4zYXg
        subject_person_id: p_DnHsbgmu4N2LK2hm5zmcYp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d8oDwKhxVKaDeUwW2bvGJ2
          claim_id: c_5jKE6Ckq2nZHQGiMx4zYXg
          source_id: s_pKcvMqkb2QEkTk8fkQT313
          stance: supports
          locator: CBDB:225980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225980）
          source: &a1
            id: s_pKcvMqkb2QEkTk8fkQT313
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 225980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225980&o=json
            external_identifier: CBDB:225980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5pfXVcc2toHDXQJMmdRCnG
        subject_person_id: p_DnHsbgmu4N2LK2hm5zmcYp
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
        - id: cs_CRaKCHCM6C1uDwhR7CMb93
          claim_id: c_5pfXVcc2toHDXQJMmdRCnG
          source_id: s_pKcvMqkb2QEkTk8fkQT313
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
        id: c_0jTvMfz63RMN9iuD1LNetf
        subject_person_id: p_DnHsbgmu4N2LK2hm5zmcYp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0Oujf5pSHznWjZ2WrIO93
          claim_id: c_0jTvMfz63RMN9iuD1LNetf
          source_id: s_pKcvMqkb2QEkTk8fkQT313
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YS93bFMg2tXSWdgNRCjryF
        status: active
        display_name: 王宗彝
        merged_into_person_id: null
  other: []
---

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YS93bFMg2tXSWdgNRCjryF | 王宗彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緒（CBDB 225980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225980&o=json)
