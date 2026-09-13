---
schema: wang-person/v1
id: p_iajFy8vjSxmZFzUeQAyxVV
status: active
merged_into: null
display_name: 王財興
cbdb_id: 239109
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KYqgJVdZKj5cgK6CMKPXd4
        subject_person_id: p_iajFy8vjSxmZFzUeQAyxVV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王財興，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239109）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PDgK_7YI_gI2oeG-rf7kr9
          claim_id: c_KYqgJVdZKj5cgK6CMKPXd4
          source_id: s_mv1TbmkA9e5TNHfVJcKzGF
          stance: supports
          locator: CBDB:239109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mv1TbmkA9e5TNHfVJcKzGF
            source_type: api_record
            title: 中国历代人物传记资料库：王財興（CBDB 239109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239109&o=json
            external_identifier: CBDB:239109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eSBFhcxQ7CmHF9NggHGjMg
        subject_person_id: p_iajFy8vjSxmZFzUeQAyxVV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王財興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z7XtLWHaaKsQe6fLLc4uzP
          claim_id: c_eSBFhcxQ7CmHF9NggHGjMg
          source_id: s_mv1TbmkA9e5TNHfVJcKzGF
          stance: supports
          locator: CBDB:239109
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_DcEPJ-ucP7m-IgRpLdFpAS
        subject_person_id: p_iajFy8vjSxmZFzUeQAyxVV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebFv6UL7zNVv8OjgAKQ5IE
          claim_id: c_DcEPJ-ucP7m-IgRpLdFpAS
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ocnBND2ZpeAEqtQToHFBV8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 208004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json
            external_identifier: CBDB:208004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EKnyL5yNzB3UQXTrkLtsAg
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  other: []
---

# 王財興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王財興，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239109） | accepted |
| name.primary | 王財興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EKnyL5yNzB3UQXTrkLtsAg | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王財興（CBDB 239109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239109&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 208004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json)
