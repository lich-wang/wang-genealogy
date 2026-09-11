---
schema: wang-person/v1
id: p_YSCEHHVoYD68UQH8xFt3ut
status: active
merged_into: null
display_name: 王洧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V2yNgPS7NdaTxWZsJz1Ck6
        subject_person_id: p_YSCEHHVoYD68UQH8xFt3ut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8y97oYW8dDzNXnpca8idm
          claim_id: c_V2yNgPS7NdaTxWZsJz1Ck6
          source_id: s_AH6nTYs1e5yQSFghNjUWRE
          stance: supports
          locator: CBDB:39620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39620）
          source: &a1
            id: s_AH6nTYs1e5yQSFghNjUWRE
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 39620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39620&o=json
            external_identifier: CBDB:39620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qmQM1sk9DLHSM4YbptgnBL
        subject_person_id: p_YSCEHHVoYD68UQH8xFt3ut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧，宋人物。籍贯福建路。（中国历代人物传记资料库 CBDB 39620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aAwo6fzCNJCe05ZDVOI0AQ
          claim_id: c_qmQM1sk9DLHSM4YbptgnBL
          source_id: s_AH6nTYs1e5yQSFghNjUWRE
          stance: supports
          locator: CBDB:39620
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
  ancestors: []
  descendants: []
  other: []
---

# 王洧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洧 | accepted |
| bio.summary | 王洧，宋人物。籍贯福建路。（中国历代人物传记资料库 CBDB 39620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洧（CBDB 39620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39620&o=json)
