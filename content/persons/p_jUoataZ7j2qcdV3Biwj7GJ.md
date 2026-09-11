---
schema: wang-person/v1
id: p_jUoataZ7j2qcdV3Biwj7GJ
status: active
merged_into: null
display_name: 王景新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8YbNVw19UMPNEBGXiZLdoR
        subject_person_id: p_jUoataZ7j2qcdV3Biwj7GJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qSZBgffyHkRJ1UGjt3sDNs
          claim_id: c_8YbNVw19UMPNEBGXiZLdoR
          source_id: s_oeEnSgKXHH6CB1KLDjxkUZ
          stance: supports
          locator: CBDB:213492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213492）
          source: &a1
            id: s_oeEnSgKXHH6CB1KLDjxkUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王景新（CBDB 213492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213492&o=json
            external_identifier: CBDB:213492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ySvKZaC9wQYHKB9MtMHQTP
        subject_person_id: p_jUoataZ7j2qcdV3Biwj7GJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景新，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 213492）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k7eNLX_7DBxJqiIFfTRh6K
          claim_id: c_ySvKZaC9wQYHKB9MtMHQTP
          source_id: s_oeEnSgKXHH6CB1KLDjxkUZ
          stance: supports
          locator: CBDB:213492
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
  descendants:
    - claim:
        id: c_CSbyCj5V4grsS6RzdXtIX7
        subject_person_id: p_jUoataZ7j2qcdV3Biwj7GJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zd3NWOf4Ou0S6C6bd1hdOs
          claim_id: c_CSbyCj5V4grsS6RzdXtIX7
          source_id: s_oeEnSgKXHH6CB1KLDjxkUZ
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sMjY6kwGmS2PR67RexN7yL
        status: active
        display_name: 王崇之
        merged_into_person_id: null
  other: []
---

# 王景新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景新 | accepted |
| bio.summary | 王景新，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 213492） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sMjY6kwGmS2PR67RexN7yL | 王崇之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景新（CBDB 213492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213492&o=json)
