---
schema: wang-person/v1
id: p_MZb3xwrJh2KS7jR6a3sirM
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fEwNFoiG2cy8CwJb3dWHsq
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CR6cb1ikpigpJCFPysZdBQ
          claim_id: c_fEwNFoiG2cy8CwJb3dWHsq
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: CBDB:226918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226918）
          source: &a1
            id: s_AnmcwaF7HkbiztAFAk43Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 226918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226918&o=json
            external_identifier: CBDB:226918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zEJXMktZWCNy2XAgE363Mf
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226918）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F57pfGQftY16gaGtoBqUdE
          claim_id: c_zEJXMktZWCNy2XAgE363Mf
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: CBDB:226918
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TjCUKgGprlC1jmECIfdCkq
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jWX_LtZ9MwE3xZ2cPu7yzE
          claim_id: c_TjCUKgGprlC1jmECIfdCkq
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百一十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 226918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226918&o=json)
