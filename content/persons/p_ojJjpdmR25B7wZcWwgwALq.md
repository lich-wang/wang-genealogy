---
schema: wang-person/v1
id: p_ojJjpdmR25B7wZcWwgwALq
status: active
merged_into: null
display_name: 王瑤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sCP4veNCbVapnz9oyAPehm
        subject_person_id: p_ojJjpdmR25B7wZcWwgwALq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P9jkF7qmkFgay9tZt9bYwE
          claim_id: c_sCP4veNCbVapnz9oyAPehm
          source_id: s_uA89AiDWUnK1V5C8uETLSG
          stance: supports
          locator: CBDB:228827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228827）
          source: &a1
            id: s_uA89AiDWUnK1V5C8uETLSG
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 228827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228827&o=json
            external_identifier: CBDB:228827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UYKNiJBM2qf8G69Etf1XoN
        subject_person_id: p_ojJjpdmR25B7wZcWwgwALq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7HrrczK2ShK7thR9vkiPW
          claim_id: c_UYKNiJBM2qf8G69Etf1XoN
          source_id: s_uA89AiDWUnK1V5C8uETLSG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_Theti9Rj2BfE5UVYSe8Yyw
        subject_person_id: p_ojJjpdmR25B7wZcWwgwALq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBDUhIiyb7kr1b8lRWyDCA
          claim_id: c_Theti9Rj2BfE5UVYSe8Yyw
          source_id: s_uA89AiDWUnK1V5C8uETLSG
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oVB52nNYpQKMMkujZuH9Lj
        status: active
        display_name: 王之彥
        merged_into_person_id: null
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oVB52nNYpQKMMkujZuH9Lj | 王之彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 228827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228827&o=json)
