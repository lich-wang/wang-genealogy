---
schema: wang-person/v1
id: p_cieoMVnBzJB9M1g8jnDdbx
status: active
merged_into: null
display_name: 王廷言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cr8uQmCoEgfgdAyE8PKQmt
        subject_person_id: p_cieoMVnBzJB9M1g8jnDdbx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_taNmgUaaDaDyb19aDJqkAu
          claim_id: c_Cr8uQmCoEgfgdAyE8PKQmt
          source_id: s_gG5ca6Aq2VX9yjN5TbYq4G
          stance: supports
          locator: CBDB:224128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224128）
          source: &a1
            id: s_gG5ca6Aq2VX9yjN5TbYq4G
            source_type: api_record
            title: 中国历代人物传记资料库：王廷言（CBDB 224128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224128&o=json
            external_identifier: CBDB:224128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQhkSug9sG3NZExtCZgTM4
        subject_person_id: p_cieoMVnBzJB9M1g8jnDdbx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷言，明人物。萬曆十一年進士，籍贯孝義，曾任主簿。（中国历代人物传记资料库 CBDB 224128）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9MbT2phlDbTh543RrE7cse
          claim_id: c_QQhkSug9sG3NZExtCZgTM4
          source_id: s_gG5ca6Aq2VX9yjN5TbYq4G
          stance: supports
          locator: CBDB:224128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2AfwycYer1u9wLk0cFCjvp
        subject_person_id: p_cieoMVnBzJB9M1g8jnDdbx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tOsQzXqRNyyOp2RW7BcHa
          claim_id: c_2AfwycYer1u9wLk0cFCjvp
          source_id: s_gG5ca6Aq2VX9yjN5TbYq4G
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tEV3J8yPB3iuWF6kPPKTcz
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷言 | accepted |
| bio.summary | 王廷言，明人物。萬曆十一年進士，籍贯孝義，曾任主簿。（中国历代人物传记资料库 CBDB 224128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tEV3J8yPB3iuWF6kPPKTcz | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷言（CBDB 224128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224128&o=json)
