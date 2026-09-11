---
schema: wang-person/v1
id: p_8oeqEXVj5H5yLqMJqCa4fg
status: active
merged_into: null
display_name: 任氏
revision: 1
cbdb_id: 147343
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNuN9sohUKM_WTO9jQ_3WA
        subject_person_id: p_8oeqEXVj5H5yLqMJqCa4fg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KKHggrjDrGxlM1485vYfO5
          claim_id: c_FNuN9sohUKM_WTO9jQ_3WA
          source_id: s_e3fe8Nr-yJrgMJp0SxGFh0
          stance: supports
          locator: CBDB:147343
          quotation: null
          interpretation_note: CBDB 明确记录的王卿配偶
          source: &a1
            id: s_e3fe8Nr-yJrgMJp0SxGFh0
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王卿妻)（CBDB 147343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147343&o=json
            external_identifier: CBDB:147343
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
        id: c_frQLpUCCFbyEPTXE4yBCb5
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8oeqEXVj5H5yLqMJqCa4fg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7b9ZqjrF3JPs1jsks0Mjnw
          claim_id: c_frQLpUCCFbyEPTXE4yBCb5
          source_id: s_e3fe8Nr-yJrgMJp0SxGFh0
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 26：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x1FTUwitbrYDetsnBCa1jT
        status: active
        display_name: 王卿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 任氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x1FTUwitbrYDetsnBCa1jT | 王卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王卿妻)（CBDB 147343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147343&o=json)
