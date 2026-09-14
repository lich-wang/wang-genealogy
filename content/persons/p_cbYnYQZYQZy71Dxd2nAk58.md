---
schema: wang-person/v1
id: p_cbYnYQZYQZy71Dxd2nAk58
status: active
merged_into: null
display_name: 王用予
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QsPciLzD1FJBWRHGudKkmp
        subject_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用予
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AFfF4mt8m1tYXNucQ7Qg7
          claim_id: c_QsPciLzD1FJBWRHGudKkmp
          source_id: s_cgrP2TAagzBSoJCDEAeybT
          stance: supports
          locator: CBDB:284145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284145）
          source: &a1
            id: s_cgrP2TAagzBSoJCDEAeybT
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 284145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json
            external_identifier: CBDB:284145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wVso2xf33ASRu7BPE4uVr
        subject_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用予，明人物。正德十六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 284145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pFRqOmgPtWlVE5lF5APA5F
          claim_id: c_8wVso2xf33ASRu7BPE4uVr
          source_id: s_cgrP2TAagzBSoJCDEAeybT
          stance: supports
          locator: CBDB:284145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__IausQew1mjqfOLZBJqCxw
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zimoPvQWI9Xmdi9SOyE8J
          claim_id: c__IausQew1mjqfOLZBJqCxw
          source_id: s_QTa7f9__DEeYLQbtYoswLj
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用予 与 王用賓 为同胞（CBDB 记「兄」），王用賓 之父／母即 王用予 之父／母。
          source:
            id: s_QTa7f9__DEeYLQbtYoswLj
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 284145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json
            external_identifier: CBDB:284145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NuNTQZExjKcTBss2PH1NRS
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5RHRKAEvgHxJOlDfp-rC9O
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UtbSTSDdAG0u7SX7aqHPnm
          claim_id: c_5RHRKAEvgHxJOlDfp-rC9O
          source_id: s_QTa7f9__DEeYLQbtYoswLj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QTa7f9__DEeYLQbtYoswLj
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 284145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json
            external_identifier: CBDB:284145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6BcNKRe82htPqYxnsGXoQy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
---

# 王用予

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用予 | accepted |
| bio.summary | 王用予，明人物。正德十六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 284145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuNTQZExjKcTBss2PH1NRS | 王懋 | accepted |
| other | p_6BcNKRe82htPqYxnsGXoQy | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用予（CBDB 284145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json)
