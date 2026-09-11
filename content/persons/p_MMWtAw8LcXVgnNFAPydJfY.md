---
schema: wang-person/v1
id: p_MMWtAw8LcXVgnNFAPydJfY
status: active
merged_into: null
display_name: 柳聲
revision: 1
cbdb_id: 122391
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkFG4ZOJGu4gd6EBE3FxFp
        subject_person_id: p_MMWtAw8LcXVgnNFAPydJfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳聲
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jDWc82EW4eFfoCrlC9e5Ag
          claim_id: c_vkFG4ZOJGu4gd6EBE3FxFp
          source_id: s_YQfMj0IgHPzEAUecmrti-D
          stance: supports
          locator: CBDB:122391
          quotation: null
          interpretation_note: CBDB 明确记录的王野倩配偶
          source: &a1
            id: s_YQfMj0IgHPzEAUecmrti-D
            source_type: api_record
            title: 中国历代人物传记资料库：柳聲（CBDB 122391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122391&o=json
            external_identifier: CBDB:122391
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
        id: c_zoXm6yDJOugGVU3BmcLaMu
        subject_person_id: p_boxASsybhNkFt4pmrFd5Ay
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MMWtAw8LcXVgnNFAPydJfY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5jUoBwRpZDkki8QbFMqR3
          claim_id: c_zoXm6yDJOugGVU3BmcLaMu
          source_id: s_YQfMj0IgHPzEAUecmrti-D
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4964：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_boxASsybhNkFt4pmrFd5Ay
        status: active
        display_name: 王野倩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 柳聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 柳聲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_boxASsybhNkFt4pmrFd5Ay | 王野倩 | accepted |

## 外部来源

- [中国历代人物传记资料库：柳聲（CBDB 122391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122391&o=json)
