---
schema: wang-person/v1
id: p_EanU2yYn4vz2RKu9z2UR1n
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z6ZwJ1DSMar7LK41Avh7jq
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
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
        - id: cs_As4QgYAhKQPuS2xJb7SE6F
          claim_id: c_Z6ZwJ1DSMar7LK41Avh7jq
          source_id: s_UYEW9WvvLvRRmaHcD9W67z
          stance: supports
          locator: CBDB:248390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248390）
          source: &a1
            id: s_UYEW9WvvLvRRmaHcD9W67z
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 248390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248390&o=json
            external_identifier: CBDB:248390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GXYth3YAbBfQ4i6QVR8NTV
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
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
        - id: cs_BhZKZHmJ84xm4WEe8MAFYn
          claim_id: c_GXYth3YAbBfQ4i6QVR8NTV
          source_id: s_UYEW9WvvLvRRmaHcD9W67z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_08XvFfhmR89HTOBk4gD9dx
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO9h7NrJxeAO_Eh8Qo1mnp
          claim_id: c_08XvFfhmR89HTOBk4gD9dx
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5GP2mniHEp9CPhLt9j6mmn
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 126711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json
            external_identifier: CBDB:126711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
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
| children | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 248390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248390&o=json)
- [中国历代人物传记资料库：王盛（CBDB 126711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json)
