---
schema: wang-person/v1
id: p_kkzsSnYMmMHCoMPoCC45w5
status: active
merged_into: null
display_name: 王愷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CyAePgvm7QYGHC2SBeW3Ya
        subject_person_id: p_kkzsSnYMmMHCoMPoCC45w5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdFFy2PDyNZ6Mhgso9i4Up
          claim_id: c_CyAePgvm7QYGHC2SBeW3Ya
          source_id: s_1enZdaXiw5ugnAnpLYg8JK
          stance: supports
          locator: CBDB:333148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333148）
          source: &a1
            id: s_1enZdaXiw5ugnAnpLYg8JK
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 333148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333148&o=json
            external_identifier: CBDB:333148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFTQPENgUoVPyJkJ6iiTC7
        subject_person_id: p_kkzsSnYMmMHCoMPoCC45w5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。嘉靖四十四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 333148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFICU85DL5-TBZBmkmFKfr
          claim_id: c_cFTQPENgUoVPyJkJ6iiTC7
          source_id: s_1enZdaXiw5ugnAnpLYg8JK
          stance: supports
          locator: CBDB:333148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jffn8iRNqCYrwkdY44OUNG
        subject_person_id: p_kkzsSnYMmMHCoMPoCC45w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42V1mjqbCc9WXuvE75bXCj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vbNKqi3isfYGXi7XMJ-3B
          claim_id: c_jffn8iRNqCYrwkdY44OUNG
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U8j9tCza38qAfY1F6tms8G
            source_type: api_record
            title: 中国历代人物传记资料库：王朝陽（CBDB 205436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json
            external_identifier: CBDB:205436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_42V1mjqbCc9WXuvE75bXCj
        status: active
        display_name: 王朝陽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。嘉靖四十四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 333148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_42V1mjqbCc9WXuvE75bXCj | 王朝陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝陽（CBDB 205436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json)
- [中国历代人物传记资料库：王愷（CBDB 333148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333148&o=json)
