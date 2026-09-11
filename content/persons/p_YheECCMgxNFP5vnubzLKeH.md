---
schema: wang-person/v1
id: p_YheECCMgxNFP5vnubzLKeH
status: active
merged_into: null
display_name: 藍氏
revision: 1
cbdb_id: 313481
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aVq2rh-3XN2YLw_95yIxey
        subject_person_id: p_YheECCMgxNFP5vnubzLKeH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 藍氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wlcrvn6bwIWpnmHe7NET0l
          claim_id: c_aVq2rh-3XN2YLw_95yIxey
          source_id: s_pzPe74sQKGC7yS44kl-9Yn
          stance: supports
          locator: CBDB:313481
          quotation: null
          interpretation_note: CBDB 明确记录的王諍配偶
          source: &a1
            id: s_pzPe74sQKGC7yS44kl-9Yn
            source_type: api_record
            title: 中国历代人物传记资料库：藍氏(王諍妻)（CBDB 313481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313481&o=json
            external_identifier: CBDB:313481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_y4lUjwYWukLkXpf84xi80r
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YheECCMgxNFP5vnubzLKeH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rAZVwAk7wmzpaBWp-BNRYw
          claim_id: c_y4lUjwYWukLkXpf84xi80r
          source_id: s_pzPe74sQKGC7yS44kl-9Yn
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 藍氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 藍氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |

## 外部来源

- [中国历代人物传记资料库：藍氏(王諍妻)（CBDB 313481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313481&o=json)
