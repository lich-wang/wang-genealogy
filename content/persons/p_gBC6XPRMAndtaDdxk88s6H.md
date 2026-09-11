---
schema: wang-person/v1
id: p_gBC6XPRMAndtaDdxk88s6H
status: active
merged_into: null
display_name: 王命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HmZCPe1Ed7hiTYtgteh9oK
        subject_person_id: p_gBC6XPRMAndtaDdxk88s6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pr2jSwHcoBUjNdBZ9Z7dAU
          claim_id: c_HmZCPe1Ed7hiTYtgteh9oK
          source_id: s_rs4TVrDVZ1MLvLe2YpDC1i
          stance: supports
          locator: CBDB:317119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317119）
          source: &a1
            id: s_rs4TVrDVZ1MLvLe2YpDC1i
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 317119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json
            external_identifier: CBDB:317119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_trZu5K4VwfWViPtQUHUX8F
        subject_person_id: p_gBC6XPRMAndtaDdxk88s6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZGMQ9Y9KGCEz5b9HFCVpST
          claim_id: c_trZu5K4VwfWViPtQUHUX8F
          source_id: s_rs4TVrDVZ1MLvLe2YpDC1i
          stance: supports
          locator: CBDB:317119
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

# 王命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王命 | accepted |
| bio.summary | 王命，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命（CBDB 317119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json)
