---
schema: wang-person/v1
id: p_PUGm2RRd59sTN8Qhu8o8x2
status: active
merged_into: null
display_name: 傅氏
revision: 1
cbdb_id: 152946
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H81xuVF9cP3PpINUY9zOpM
        subject_person_id: p_PUGm2RRd59sTN8Qhu8o8x2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 傅氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rvgbz6Dfe5gClW3qgAeCAy
          claim_id: c_H81xuVF9cP3PpINUY9zOpM
          source_id: s_t4yjjbp5Anv9MjccklHbtI
          stance: supports
          locator: CBDB:152946
          quotation: null
          interpretation_note: CBDB 明确记录的王忌配偶
          source: &a1
            id: s_t4yjjbp5Anv9MjccklHbtI
            source_type: api_record
            title: 中国历代人物传记资料库：傅氏(王忌妻)（CBDB 152946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152946&o=json
            external_identifier: CBDB:152946
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
        id: c_wzIj2sdfAZLXRC4eQl4UhZ
        subject_person_id: p_Bopp5kWFJqDkzpcYhwiZ4z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PUGm2RRd59sTN8Qhu8o8x2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StPg1aqpTY9Mckw8p2zL3S
          claim_id: c_wzIj2sdfAZLXRC4eQl4UhZ
          source_id: s_t4yjjbp5Anv9MjccklHbtI
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 473：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bopp5kWFJqDkzpcYhwiZ4z
        status: active
        display_name: 王忌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 傅氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 傅氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Bopp5kWFJqDkzpcYhwiZ4z | 王忌 | accepted |

## 外部来源

- [中国历代人物传记资料库：傅氏(王忌妻)（CBDB 152946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152946&o=json)
