---
schema: wang-person/v1
id: p_yFccF1oudXdGWxsFrHyo42
status: active
merged_into: null
display_name: 王嘉祐
cbdb_id: 7371
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1hCTp8CDGxwPrYP48xzfj
        subject_person_id: p_yFccF1oudXdGWxsFrHyo42
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉祐，宋人物。籍贯鉅野，入仕恩蔭、蔭補，曾任館閣。（中国历代人物传记资料库 CBDB 7371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_st6ynmpPBkL9xr9al8zoTE
          claim_id: c_h1hCTp8CDGxwPrYP48xzfj
          source_id: s_7wKJhBzvMnDvVgrd6pKaRB
          stance: supports
          locator: CBDB:7371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7wKJhBzvMnDvVgrd6pKaRB
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉祐（CBDB 7371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7371&o=json
            external_identifier: CBDB:7371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFb81qjySFdo8QvAoHvAMX
        subject_person_id: p_yFccF1oudXdGWxsFrHyo42
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Vs4dTyFg5HUxEMbWMAXXA
          claim_id: c_TFb81qjySFdo8QvAoHvAMX
          source_id: s_7wKJhBzvMnDvVgrd6pKaRB
          stance: supports
          locator: CBDB:7371
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_y9xIYxfgFXmRC_GN8gpNad
        subject_person_id: p_yFccF1oudXdGWxsFrHyo42
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwAgcpRjLxjLJ7tEedLAQp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_htJwHGdIxoES4PjmrIEZeI
          claim_id: c_y9xIYxfgFXmRC_GN8gpNad
          source_id: s_7wKJhBzvMnDvVgrd6pKaRB
          stance: supports
          locator: CBDB 双向互证（孫 王汾 ⇄ 祖父 王嘉祐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7wKJhBzvMnDvVgrd6pKaRB
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉祐（CBDB 7371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7371&o=json
            external_identifier: CBDB:7371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hwAgcpRjLxjLJ7tEedLAQp
        status: active
        display_name: 王汾
        merged_into_person_id: null
  other: []
---

# 王嘉祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉祐，宋人物。籍贯鉅野，入仕恩蔭、蔭補，曾任館閣。（中国历代人物传记资料库 CBDB 7371） | accepted |
| name.primary | 王嘉祐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hwAgcpRjLxjLJ7tEedLAQp | 王汾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉祐（CBDB 7371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7371&o=json)
