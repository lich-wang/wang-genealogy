---
schema: wang-person/v1
id: p_MSk1PtjLTLMbvfdB2BUX6c
status: active
merged_into: null
display_name: 王重陽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MResdPgpybsYYjxGFiKJU
        subject_person_id: p_MSk1PtjLTLMbvfdB2BUX6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XD6JxFQ1DgoQPbjsiXqAa8
          claim_id: c_3MResdPgpybsYYjxGFiKJU
          source_id: s_G3eRpu2v41Hp8HvVM4QyGs
          stance: supports
          locator: CBDB:156475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156475）
          source: &a1
            id: s_G3eRpu2v41Hp8HvVM4QyGs
            source_type: api_record
            title: 中国历代人物传记资料库：王重陽（CBDB 156475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156475&o=json
            external_identifier: CBDB:156475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ofJ5qJLpK8847CNJ9zfuK
        subject_person_id: p_MSk1PtjLTLMbvfdB2BUX6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重陽，唐人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 156475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ULnz76GGRdFte26vJvkRD
          claim_id: c_3ofJ5qJLpK8847CNJ9zfuK
          source_id: s_G3eRpu2v41Hp8HvVM4QyGs
          stance: supports
          locator: CBDB:156475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CmXyWf7MyldVjYndXij1YA
        subject_person_id: p_2KfZ4qZPoW4uxG2E5viFAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSk1PtjLTLMbvfdB2BUX6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FrcJSKLUr9ifaaaZ_tCIoJ
          claim_id: c_CmXyWf7MyldVjYndXij1YA
          source_id: s_G3eRpu2v41Hp8HvVM4QyGs
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 34：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2KfZ4qZPoW4uxG2E5viFAA
        status: active
        display_name: 王大劍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王重陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重陽 | accepted |
| bio.summary | 王重陽，唐人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 156475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2KfZ4qZPoW4uxG2E5viFAA | 王大劍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重陽（CBDB 156475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156475&o=json)
