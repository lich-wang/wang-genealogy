---
schema: wang-person/v1
id: p_Tvt8tfQ5JQZH1u6tEfMgdi
status: active
merged_into: null
display_name: 王紹汶
cbdb_id: 101351
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FcqtqQxHZsZ9t5b198f8rh
        subject_person_id: p_Tvt8tfQ5JQZH1u6tEfMgdi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹汶，元人物。籍贯浙東道宣慰司，曾任理問所理問。（中国历代人物传记资料库 CBDB 101351）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zFazS4JslK03FOPpXQquvn
          claim_id: c_FcqtqQxHZsZ9t5b198f8rh
          source_id: s_9L4LM3fkdBrbVDP6Ldoi88
          stance: supports
          locator: CBDB:101351
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9L4LM3fkdBrbVDP6Ldoi88
            source_type: api_record
            title: 中国历代人物传记资料库：王紹汶（CBDB 101351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101351&o=json
            external_identifier: CBDB:101351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hZeLGeWpJutmYe26dna2WW
        subject_person_id: p_Tvt8tfQ5JQZH1u6tEfMgdi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UyxZE3Zi57GXHQf7DZhKLP
          claim_id: c_hZeLGeWpJutmYe26dna2WW
          source_id: s_9L4LM3fkdBrbVDP6Ldoi88
          stance: supports
          locator: CBDB:101351
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王紹汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹汶，元人物。籍贯浙東道宣慰司，曾任理問所理問。（中国历代人物传记资料库 CBDB 101351） | accepted |
| name.primary | 王紹汶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹汶（CBDB 101351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101351&o=json)
