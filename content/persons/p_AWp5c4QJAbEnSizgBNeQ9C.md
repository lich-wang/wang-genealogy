---
schema: wang-person/v1
id: p_AWp5c4QJAbEnSizgBNeQ9C
status: active
merged_into: null
display_name: 王西星
cbdb_id: 525644
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ebMUrcwn462Q48bM4BYa4u
        subject_person_id: p_AWp5c4QJAbEnSizgBNeQ9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王西星，明人物。中国历代人物传记资料库（CBDB）以人物编号 525644 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_EHSeMRHP0-uVx7O4njVRKu
          claim_id: c_ebMUrcwn462Q48bM4BYa4u
          source_id: s_WkG9Bh9W8bS8m8gcAuBbRm
          stance: supports
          locator: CBDB:525644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WkG9Bh9W8bS8m8gcAuBbRm
            source_type: api_record
            title: 中国历代人物传记资料库：王西星（CBDB 525644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525644&o=json
            external_identifier: CBDB:525644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3QjD7zHgT4jEKhQoFceErH
        subject_person_id: p_AWp5c4QJAbEnSizgBNeQ9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王西星
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D5sF7izknpZchAZQVAq58Z
          claim_id: c_3QjD7zHgT4jEKhQoFceErH
          source_id: s_WkG9Bh9W8bS8m8gcAuBbRm
          stance: supports
          locator: CBDB:525644
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_WkG9Bh9W8bS8m8gcAuBbRm
            source_type: api_record
            title: 中国历代人物传记资料库：王西星（CBDB 525644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525644&o=json
            external_identifier: CBDB:525644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jrZ8kHxditgxKxLgQZEHyx
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AWp5c4QJAbEnSizgBNeQ9C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v0sSMaEa-LSqFAX3KlhZBr
          claim_id: c_jrZ8kHxditgxKxLgQZEHyx
          source_id: s_WkG9Bh9W8bS8m8gcAuBbRm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11547：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gzcyEWpUCr5gNzCxFVcs3X
        status: active
        display_name: 王冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王西星

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王西星，明人物。中国历代人物传记资料库（CBDB）以人物编号 525644 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王西星 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gzcyEWpUCr5gNzCxFVcs3X | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王西星（CBDB 525644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525644&o=json)
