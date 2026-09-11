---
schema: wang-person/v1
id: p_JCa3R39d4XcRY2MuE9xDyZ
status: active
merged_into: null
display_name: 王建福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xbHWgAajnLX1xT1b6v2hJ
        subject_person_id: p_JCa3R39d4XcRY2MuE9xDyZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBj5LFBnUr2uYGj9y645aM
          claim_id: c_6xbHWgAajnLX1xT1b6v2hJ
          source_id: s_7cYbL1oBohQvQEKB7ZVqS2
          stance: supports
          locator: CBDB:22068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22068）
          source: &a1
            id: s_7cYbL1oBohQvQEKB7ZVqS2
            source_type: api_record
            title: 中国历代人物传记资料库：王建福（CBDB 22068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22068&o=json
            external_identifier: CBDB:22068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5EijZ8VRMQYj1dN3HU4mPc
        subject_person_id: p_JCa3R39d4XcRY2MuE9xDyZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMEuLqVN5aMuPk1Cy388x4
          claim_id: c_5EijZ8VRMQYj1dN3HU4mPc
          source_id: s_7cYbL1oBohQvQEKB7ZVqS2
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
        id: c_kXzuYefU9p_nSyUIcEkxfK
        subject_person_id: p_JCa3R39d4XcRY2MuE9xDyZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_75587XqogBQaW5G74KzAUa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJkyEIXlrGabQoFgKtLBcG
          claim_id: c_kXzuYefU9p_nSyUIcEkxfK
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，822;823：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fPj9F5vVSoDjTWHQZskLG1
            source_type: api_record
            title: 中国历代人物传记资料库：王延祚（CBDB 22069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json
            external_identifier: CBDB:22069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_75587XqogBQaW5G74KzAUa
        status: active
        display_name: 王延祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建福 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_75587XqogBQaW5G74KzAUa | 王延祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建福（CBDB 22068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22068&o=json)
- [中国历代人物传记资料库：王延祚（CBDB 22069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json)
