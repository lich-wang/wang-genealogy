---
schema: wang-person/v1
id: p_nEvAuS6nNAmykLigsKKciq
status: active
merged_into: null
display_name: 王嘉猷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JM3wXMxDwZEZusgGLMxX5
        subject_person_id: p_nEvAuS6nNAmykLigsKKciq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WBqh8n7tff2Wxh4DwALfDo
          claim_id: c_8JM3wXMxDwZEZusgGLMxX5
          source_id: s_YNC9PKBWD7YR3N3DbgZqDH
          stance: supports
          locator: CBDB:692166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692166）
          source: &a1
            id: s_YNC9PKBWD7YR3N3DbgZqDH
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉猷（CBDB 692166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692166&o=json
            external_identifier: CBDB:692166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WR1gXqupbK5DcVRWAPwp2F
        subject_person_id: p_nEvAuS6nNAmykLigsKKciq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉猷，清人物。籍贯黟縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 692166）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ta-4VblY805h8mIp6fXqD3
          claim_id: c_WR1gXqupbK5DcVRWAPwp2F
          source_id: s_YNC9PKBWD7YR3N3DbgZqDH
          stance: supports
          locator: CBDB:692166
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
  ancestors:
    - claim:
        id: c_1DwOKv5SzigWzgNL7rByyC
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nEvAuS6nNAmykLigsKKciq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6oambvFtrHyvOsw9x7L3C
          claim_id: c_1DwOKv5SzigWzgNL7rByyC
          source_id: s_CC2c73hX6AX4uA8SRL17Hj
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166320：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CC2c73hX6AX4uA8SRL17Hj
            source_type: api_record
            title: 中国历代人物传记资料库：王應超（CBDB 692157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692157&o=json
            external_identifier: CBDB:692157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aGpmco9tD9XrB5EjuLVL4K
        status: active
        display_name: 王應超
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉猷 | accepted |
| bio.summary | 王嘉猷，清人物。籍贯黟縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 692166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aGpmco9tD9XrB5EjuLVL4K | 王應超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉猷（CBDB 692166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692166&o=json)
- [中国历代人物传记资料库：王應超（CBDB 692157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692157&o=json)
