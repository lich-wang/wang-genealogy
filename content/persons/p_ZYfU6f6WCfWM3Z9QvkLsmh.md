---
schema: wang-person/v1
id: p_ZYfU6f6WCfWM3Z9QvkLsmh
status: active
merged_into: null
display_name: 王元綱
cbdb_id: 151320
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G8Q5RuifHQQMdFVXbczYFZ
        subject_person_id: p_ZYfU6f6WCfWM3Z9QvkLsmh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元綱，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151320 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hsqg1zdP5a_-HFkg2H7iyK
          claim_id: c_G8Q5RuifHQQMdFVXbczYFZ
          source_id: s_RLe9mNaMwnbW3iVRKe2BmA
          stance: supports
          locator: CBDB:151320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RLe9mNaMwnbW3iVRKe2BmA
            source_type: api_record
            title: 中国历代人物传记资料库：王元綱（CBDB 151320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151320&o=json
            external_identifier: CBDB:151320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9t9uGHKBd7ZSLxP3w4fvjN
        subject_person_id: p_ZYfU6f6WCfWM3Z9QvkLsmh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_apa3rf48KK3fgjzbBbgJSy
          claim_id: c_9t9uGHKBd7ZSLxP3w4fvjN
          source_id: s_RLe9mNaMwnbW3iVRKe2BmA
          stance: supports
          locator: CBDB:151320
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_RLe9mNaMwnbW3iVRKe2BmA
            source_type: api_record
            title: 中国历代人物传记资料库：王元綱（CBDB 151320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151320&o=json
            external_identifier: CBDB:151320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1EhrSX6M2Vo3kWhElWlrZR
        subject_person_id: p_ZYfU6f6WCfWM3Z9QvkLsmh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0kxKJzVnNft3s9GxP9za9
          claim_id: c_1EhrSX6M2Vo3kWhElWlrZR
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35JFKhC7B9WWpbqPc5QvEr
            source_type: api_record
            title: 中国历代人物传记资料库：王子麟（CBDB 140337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json
            external_identifier: CBDB:140337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Ed3HaMSzFY5mCk231e1KC
        status: active
        display_name: 王子麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元綱，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151320 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元綱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6Ed3HaMSzFY5mCk231e1KC | 王子麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元綱（CBDB 151320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151320&o=json)
- [中国历代人物传记资料库：王子麟（CBDB 140337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json)
