---
schema: wang-person/v1
id: p_Rj9QfHX94BBCyPEvADMEik
status: active
merged_into: null
display_name: 高衛
revision: 1
cbdb_id: 928
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_64QXbeQX2UxHnxkGQ9QwjL
        subject_person_id: p_Rj9QfHX94BBCyPEvADMEik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高衛
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GcXb_-blH-dspkDINlsjTM
          claim_id: c_64QXbeQX2UxHnxkGQ9QwjL
          source_id: s_lYItvkCXVKGfQf70JJBRDP
          stance: supports
          locator: CBDB:928
          quotation: null
          interpretation_note: CBDB 明确记录的王靜明配偶
          source: &a1
            id: s_lYItvkCXVKGfQf70JJBRDP
            source_type: api_record
            title: 中国历代人物传记资料库：高衛（CBDB 928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=928&o=json
            external_identifier: CBDB:928
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
        id: c_0crnZfqiCDi3NXwZch7pDE
        subject_person_id: p_P6hcRX2Gd1uzZMvGBhoe1g
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rj9QfHX94BBCyPEvADMEik
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMzFGi0uS0wj4Ij197IdeR
          claim_id: c_0crnZfqiCDi3NXwZch7pDE
          source_id: s_lYItvkCXVKGfQf70JJBRDP
          stance: supports
          locator: 宋人傳記資料索引(電子版)，9568;9569：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P6hcRX2Gd1uzZMvGBhoe1g
        status: active
        display_name: 王靜明
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高衛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高衛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_P6hcRX2Gd1uzZMvGBhoe1g | 王靜明 | accepted |

## 外部来源

- [中国历代人物传记资料库：高衛（CBDB 928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=928&o=json)
