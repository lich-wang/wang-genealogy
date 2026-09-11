---
schema: wang-person/v1
id: p_Y6hGSBTgj27TktBQCunLJM
status: active
merged_into: null
display_name: 王守忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJiiHDHpPe2WCdDonANuop
        subject_person_id: p_Y6hGSBTgj27TktBQCunLJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yEvFKAPwAeLhCXk2oyycwf
          claim_id: c_QJiiHDHpPe2WCdDonANuop
          source_id: s_1N7PwP2h7DF3wGxNJQXpB5
          stance: supports
          locator: CBDB:689314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689314）
          source: &a1
            id: s_1N7PwP2h7DF3wGxNJQXpB5
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 689314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689314&o=json
            external_identifier: CBDB:689314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FYcSQkyZKoBKMRPYPkEmg1
        subject_person_id: p_Y6hGSBTgj27TktBQCunLJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaF9JjCeanyeKFmio3Ebv7
          claim_id: c_FYcSQkyZKoBKMRPYPkEmg1
          source_id: s_1N7PwP2h7DF3wGxNJQXpB5
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
  ancestors:
    - claim:
        id: c_ng9IcJj5DMM0PLgzZzpfMO
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y6hGSBTgj27TktBQCunLJM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79BH7aHwE-JzIt51UEbXpD
          claim_id: c_ng9IcJj5DMM0PLgzZzpfMO
          source_id: s_1N7PwP2h7DF3wGxNJQXpB5
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守忠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守忠（CBDB 689314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689314&o=json)
