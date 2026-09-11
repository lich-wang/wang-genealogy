---
schema: wang-person/v1
id: p_GacPazPEChhN46VydLyqkq
status: active
merged_into: null
display_name: 王陟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ak6zACyLhvQG3A1JTy5NU9
        subject_person_id: p_GacPazPEChhN46VydLyqkq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Dunz9Rogaqh8Co9Q5Q4GY
          claim_id: c_Ak6zACyLhvQG3A1JTy5NU9
          source_id: s_RSqShnMAHJB8zS9c483sDt
          stance: supports
          locator: CBDB:229673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229673）
          source: &a1
            id: s_RSqShnMAHJB8zS9c483sDt
            source_type: api_record
            title: 中国历代人物传记资料库：王陟（CBDB 229673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229673&o=json
            external_identifier: CBDB:229673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PR8yhrsG9Rkq6guLieUD2E
        subject_person_id: p_GacPazPEChhN46VydLyqkq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟，明人物。萬曆丙戌科進士進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 229673）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XpM3TuwaSNUk4bXRUtb6NI
          claim_id: c_PR8yhrsG9Rkq6guLieUD2E
          source_id: s_RSqShnMAHJB8zS9c483sDt
          stance: supports
          locator: CBDB:229673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FLsDgXFZQXqfHbzcKsPQhR
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GacPazPEChhN46VydLyqkq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7g6uYuWXE_njRPpHA3nXQZ
          claim_id: c_FLsDgXFZQXqfHbzcKsPQhR
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PjKW2LD3C685H4gfMHYoKL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 207214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json
            external_identifier: CBDB:207214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陟 | accepted |
| bio.summary | 王陟，明人物。萬曆丙戌科進士進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 229673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謨（CBDB 207214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json)
- [中国历代人物传记资料库：王陟（CBDB 229673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229673&o=json)
